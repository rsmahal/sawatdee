import { a1Lessons, a1Units, a1Vocab } from "./curriculum-a1";
import { a2Lessons, a2Units, a2Vocab } from "./curriculum-a2";
import type {
  CefrLevel,
  CurriculumCatalog,
  Lesson,
  LevelInfo,
  Speaker,
  Tok,
  Unit,
  VocabularyEntry,
  Word,
} from "./curriculum-types";

export type {
  CefrLevel,
  CurriculumCatalog,
  Exercise,
  Lesson,
  LevelInfo,
  PartOfSpeech,
  Speaker,
  Tok,
  Unit,
  VocabularyEntry,
  Word,
} from "./curriculum-types";

export const levels: readonly LevelInfo[] = [
  {
    id: "A1",
    title: "A1 · Beginner",
    blurb: "Full CEFR A1 foundation: greetings, numbers, time, food, daily routines, health, grammar, and shopping.",
  },
  {
    id: "A2",
    title: "A2 · Elementary",
    blurb: "Customize meals, navigate transit, introduce yourself, and handle conversations when stuck.",
  },
];

export const units: Unit[] = [...a1Units, ...a2Units];
export const lessons: Lesson[] = [...a1Lessons, ...a2Lessons];

const unitLevelById = new Map<string, CefrLevel>(units.map((u) => [u.id, u.level]));

export const vocabularyCatalog: VocabularyEntry[] = (() => {
  const entries: VocabularyEntry[] = [];
  const seenThai = new Set<string>();
  let order = 1;
  for (const lesson of lessons) {
    const level = unitLevelById.get(lesson.unit) ?? "A1";
    for (const word of lesson.words) {
      if (seenThai.has(word.thai)) continue;
      seenThai.add(word.thai);
      entries.push({
        id: word.id ?? `w-${order}`,
        thai: word.thai,
        roman: word.roman,
        en: word.en,
        level: word.level ?? level,
        pos: word.pos ?? "phrase",
        topic: word.topic ?? "General",
        lessonId: lesson.id,
        unitId: lesson.unit,
        sortOrder: order,
      });
      order += 1;
    }
  }
  return entries;
})();

export const CURRICULUM_VERSION = `cefr-a1-v2-u${units.length}-l${lessons.length}-w${vocabularyCatalog.length}`;

export const staticCurriculumCatalog: CurriculumCatalog = {
  version: CURRICULUM_VERSION,
  units,
  lessons,
  vocabulary: vocabularyCatalog,
};

export const courseNote =
  `Full CEFR A1 (${vocabularyCatalog.filter((v) => v.level === "A1").length} words) + A2 starter track, stored in PostgreSQL.`;

export const dailyPhrases: Word[] = [
  a1Vocab.hello,
  a1Vocab.thanks,
  a1Vocab.np,
  a1Vocab.howru,
  a1Vocab.tasty,
  a1Vocab.howMuch,
  a1Vocab.bathroom,
  a1Vocab.well,
  a1Vocab.left,
  a1Vocab.today,
  a1Vocab.whatTime,
  a2Vocab.understand,
  a2Vocab.padThai,
  a2Vocab.near,
];

export function lessonById(id: string, list: Lesson[] = lessons) {
  return list.find((lesson) => lesson.id === id) ?? null;
}

export function isUnlocked(
  id: string,
  completed: Record<string, number>,
  list: Lesson[] = lessons,
  catalogUnits: Unit[] = units,
) {
  const index = list.findIndex((lesson) => lesson.id === id);
  if (index <= 0) return true;
  if (completed[id]) return true;
  // Let learners start the first lesson of a new unit/level if they completed the previous unit
  // or directly allow the first A2 lesson if they already completed any A2 lesson previously.
  const lesson = list[index]!;
  const unit = catalogUnits.find((u) => u.id === lesson.unit);
  if (unit?.level === "A2") {
    const firstA2Index = list.findIndex(
      (l) => catalogUnits.find((u) => u.id === l.unit)?.level === "A2",
    );
    if (index === firstA2Index) {
      const hasAnyA2 = list.some(
        (l) =>
          catalogUnits.find((u) => u.id === l.unit)?.level === "A2" &&
          Boolean(completed[l.id]),
      );
      if (hasAnyA2) return true;
    }
  }
  return Boolean(completed[list[index - 1]!.id]);
}

export function nextLesson(
  completed: Record<string, number>,
  list: Lesson[] = lessons,
  catalogUnits: Unit[] = units,
) {
  return (
    list.find(
      (lesson) => !completed[lesson.id] && isUnlocked(lesson.id, completed, list, catalogUnits),
    ) ?? null
  );
}

export function resolveTok(tok: Tok, speaker: Speaker): Word {
  if (tok.kind === "w") return tok.word;
  if (tok.kind === "self") return speaker === "m" ? a1Vocab.iM : a1Vocab.iF;
  if (tok.kind === "other-self") return speaker === "m" ? a1Vocab.iF : a1Vocab.iM;
  if (speaker === "m") return a1Vocab.khrap;
  if (tok.q) return a1Vocab.khaQ;
  return a1Vocab.kha;
}

export function particleLabel(speaker: Speaker) {
  return speaker === "m" ? "ครับ · khráp" : "ค่ะ · khâ";
}
