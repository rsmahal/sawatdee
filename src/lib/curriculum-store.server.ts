import {
  CURRICULUM_VERSION,
  lessons,
  units,
  vocabularyCatalog,
} from "./curriculum";
import type {
  CefrLevel,
  CurriculumCatalog,
  Exercise,
  Lesson,
  PartOfSpeech,
  Unit,
  VocabularyEntry,
  Word,
} from "./curriculum-types";
import { getSql, type Sql } from "./db";

const globalSeed = globalThis as typeof globalThis & {
  __curriculumSeedVersion__?: string;
  __curriculumSeedPromise__?: Promise<void>;
};

export async function ensureCurriculumSeeded(existingSql?: Sql): Promise<void> {
  if (globalSeed.__curriculumSeedVersion__ === CURRICULUM_VERSION) {
    return;
  }
  if (!globalSeed.__curriculumSeedPromise__) {
    globalSeed.__curriculumSeedPromise__ = (async () => {
      const sql = existingSql ?? (await getSql());
      const metaRows = await sql<{ value: string }>`
        select value from curriculum_meta where key = 'version'
      `;
      const currentVersion = metaRows[0]?.value;
      if (currentVersion === CURRICULUM_VERSION) {
        const countRows = await sql<{ cnt: number }>`
          select count(*)::int as cnt from vocabulary
        `;
        if ((countRows[0]?.cnt ?? 0) >= vocabularyCatalog.length) {
          globalSeed.__curriculumSeedVersion__ = CURRICULUM_VERSION;
          return;
        }
      }

      const unitRows = units.map((u, idx) => ({
        id: u.id,
        level: u.level,
        kicker: u.kicker,
        title: u.title,
        blurb: u.blurb,
        sort_order: idx + 1,
      }));

      await sql.query(
        `insert into course_units (id, level, kicker, title, blurb, sort_order, updated_at)
         select x.id, x.level, x.kicker, x.title, x.blurb, x.sort_order, now()
         from jsonb_to_recordset($1::jsonb) as x(
           id text, level text, kicker text, title text, blurb text, sort_order integer
         )
         on conflict (id) do update set
           level = excluded.level,
           kicker = excluded.kicker,
           title = excluded.title,
           blurb = excluded.blurb,
           sort_order = excluded.sort_order,
           updated_at = now()`,
        [JSON.stringify(unitRows)],
      );

      const vocabRows = vocabularyCatalog.map((v) => ({
        id: v.id,
        thai: v.thai,
        roman: v.roman,
        en: v.en,
        cefr_level: v.level,
        part_of_speech: v.pos,
        topic: v.topic,
        sort_order: v.sortOrder,
      }));

      await sql.query(
        `insert into vocabulary (
           id, thai, roman, en, cefr_level, part_of_speech, topic, sort_order, updated_at
         )
         select
           x.id, x.thai, x.roman, x.en, x.cefr_level, x.part_of_speech, x.topic, x.sort_order, now()
         from jsonb_to_recordset($1::jsonb) as x(
           id text, thai text, roman text, en text, cefr_level text, part_of_speech text, topic text, sort_order integer
         )
         on conflict (id) do update set
           thai = excluded.thai,
           roman = excluded.roman,
           en = excluded.en,
           cefr_level = excluded.cefr_level,
           part_of_speech = excluded.part_of_speech,
           topic = excluded.topic,
           sort_order = excluded.sort_order,
           updated_at = now()`,
        [JSON.stringify(vocabRows)],
      );

      const lessonRows = lessons.map((l, idx) => ({
        id: l.id,
        unit_id: l.unit,
        title: l.title,
        subtitle: l.subtitle,
        tip: l.tip,
        is_checkpoint: Boolean(l.checkpoint),
        exercises: l.exercises,
        sort_order: idx + 1,
      }));

      await sql.query(
        `insert into course_lessons (
           id, unit_id, title, subtitle, tip, is_checkpoint, exercises, sort_order, updated_at
         )
         select
           x.id, x.unit_id, x.title, x.subtitle, x.tip, x.is_checkpoint, x.exercises, x.sort_order, now()
         from jsonb_to_recordset($1::jsonb) as x(
           id text, unit_id text, title text, subtitle text, tip text, is_checkpoint boolean, exercises jsonb, sort_order integer
         )
         on conflict (id) do update set
           unit_id = excluded.unit_id,
           title = excluded.title,
           subtitle = excluded.subtitle,
           tip = excluded.tip,
           is_checkpoint = excluded.is_checkpoint,
           exercises = excluded.exercises,
           sort_order = excluded.sort_order,
           updated_at = now()`,
        [JSON.stringify(lessonRows)],
      );

      const vocabIdByThai = new Map(vocabularyCatalog.map((v) => [v.thai, v.id]));
      const lessonVocabRows: { lesson_id: string; vocabulary_id: string; sort_order: number }[] = [];
      for (const l of lessons) {
        l.words.forEach((word, idx) => {
          const vocabulary_id = word.id ?? vocabIdByThai.get(word.thai);
          if (vocabulary_id) {
            lessonVocabRows.push({
              lesson_id: l.id,
              vocabulary_id,
              sort_order: idx + 1,
            });
          }
        });
      }

      await sql`delete from lesson_vocabulary`;
      if (lessonVocabRows.length > 0) {
        await sql.query(
          `insert into lesson_vocabulary (lesson_id, vocabulary_id, sort_order)
           select x.lesson_id, x.vocabulary_id, x.sort_order
           from jsonb_to_recordset($1::jsonb) as x(
             lesson_id text, vocabulary_id text, sort_order integer
           )
           on conflict (lesson_id, vocabulary_id) do update set
             sort_order = excluded.sort_order`,
          [JSON.stringify(lessonVocabRows)],
        );
      }

      // Remove obsolete units/lessons from older curriculum versions if any exist
      const validLessonIds = lessons.map((l) => l.id);
      const validUnitIds = units.map((u) => u.id);
      await sql.query(
        `delete from course_lessons where not (id = any($1::text[]))`,
        [validLessonIds],
      );
      await sql.query(
        `delete from course_units where not (id = any($1::text[]))`,
        [validUnitIds],
      );

      // Link any existing user_vocabulary rows to canonical vocabulary IDs
      await sql`
        update user_vocabulary uv
        set vocabulary_id = v.id
        from vocabulary v
        where uv.thai = v.thai
          and (uv.vocabulary_id is null or uv.vocabulary_id <> v.id)
      `;

      await sql`
        insert into curriculum_meta (key, value, updated_at)
        values ('version', ${CURRICULUM_VERSION}, now())
        on conflict (key) do update set
          value = excluded.value,
          updated_at = now()
      `;

      globalSeed.__curriculumSeedVersion__ = CURRICULUM_VERSION;
    })().catch((err) => {
      globalSeed.__curriculumSeedPromise__ = undefined;
      throw err;
    });
  }
  await globalSeed.__curriculumSeedPromise__;
}

export async function readCurriculumFromDb(): Promise<CurriculumCatalog> {
  const sql = await getSql();
  await ensureCurriculumSeeded(sql);

  const [dbUnits, dbLessons, dbVocab, dbLessonVocab] = await Promise.all([
    sql<{
      id: string;
      level: CefrLevel;
      kicker: string;
      title: string;
      blurb: string;
    }>`
      select id, level, kicker, title, blurb
      from course_units
      order by sort_order asc
    `,
    sql<{
      id: string;
      unit_id: string;
      title: string;
      subtitle: string;
      tip: string;
      is_checkpoint: boolean;
      exercises: unknown;
    }>`
      select id, unit_id, title, subtitle, tip, is_checkpoint, exercises
      from course_lessons
      order by sort_order asc
    `,
    sql<{
      id: string;
      thai: string;
      roman: string;
      en: string;
      cefr_level: CefrLevel;
      part_of_speech: PartOfSpeech;
      topic: string;
      sort_order: number;
    }>`
      select id, thai, roman, en, cefr_level, part_of_speech, topic, sort_order
      from vocabulary
      order by sort_order asc
    `,
    sql<{
      lesson_id: string;
      vocabulary_id: string;
      sort_order: number;
    }>`
      select lesson_id, vocabulary_id, sort_order
      from lesson_vocabulary
      order by lesson_id asc, sort_order asc
    `,
  ]);

  const unitByLesson = new Map(dbLessons.map((l) => [l.id, l.unit_id]));
  const primaryLessonByVocab = new Map<string, string>();
  const wordsByLesson = new Map<string, Word[]>();
  const vocabById = new Map<string, Word>();

  for (const row of dbVocab) {
    vocabById.set(row.id, {
      id: row.id,
      thai: row.thai,
      roman: row.roman,
      en: row.en,
      level: row.cefr_level,
      pos: row.part_of_speech,
      topic: row.topic,
    });
  }

  for (const link of dbLessonVocab) {
    if (!primaryLessonByVocab.has(link.vocabulary_id)) {
      primaryLessonByVocab.set(link.vocabulary_id, link.lesson_id);
    }
    const word = vocabById.get(link.vocabulary_id);
    if (word) {
      const list = wordsByLesson.get(link.lesson_id) ?? [];
      list.push(word);
      wordsByLesson.set(link.lesson_id, list);
    }
  }

  const parsedUnits: Unit[] = dbUnits.map((u) => ({
    id: u.id,
    level: u.level,
    kicker: u.kicker,
    title: u.title,
    blurb: u.blurb,
  }));

  const parsedLessons: Lesson[] = dbLessons.map((l) => {
    const rawEx = typeof l.exercises === "string" ? JSON.parse(l.exercises) : l.exercises;
    return {
      id: l.id,
      unit: l.unit_id,
      title: l.title,
      subtitle: l.subtitle,
      tip: l.tip,
      checkpoint: l.is_checkpoint || undefined,
      words: wordsByLesson.get(l.id) ?? [],
      exercises: Array.isArray(rawEx) ? (rawEx as Exercise[]) : [],
    };
  });

  const parsedVocab: VocabularyEntry[] = dbVocab.map((row) => {
    const lessonId = primaryLessonByVocab.get(row.id) ?? "";
    const unitId = unitByLesson.get(lessonId) ?? "";
    return {
      id: row.id,
      thai: row.thai,
      roman: row.roman,
      en: row.en,
      level: row.cefr_level,
      pos: row.part_of_speech,
      topic: row.topic,
      lessonId,
      unitId,
      sortOrder: row.sort_order,
    };
  });

  return {
    version: CURRICULUM_VERSION,
    units: parsedUnits,
    lessons: parsedLessons,
    vocabulary: parsedVocab,
  };
}
