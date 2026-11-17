import type { CefrLevel, Exercise, VocabularyEntry, Word } from "./curriculum-types";
import { shuffle } from "./shuffle";

export type MilestoneMode = "reading" | "listening" | "mixed";

export const MILESTONE_WORD_COUNT = 100;
export const MILESTONE_PASS_PERCENT = 75;

export type MilestoneModeInfo = {
  mode: MilestoneMode;
  title: string;
  subtitle: string;
  description: string;
};

export const MILESTONE_MODES: MilestoneModeInfo[] = [
  {
    mode: "reading",
    title: "Reading only",
    subtitle: "Thai script & meaning",
    description: "100 random words testing written Thai recognition and recall with no audio prompts.",
  },
  {
    mode: "listening",
    title: "Listening only",
    subtitle: "Spoken recognition",
    description: "100 random words testing ear comprehension first with no pre-check script hints.",
  },
  {
    mode: "mixed",
    title: "Mixed",
    subtitle: "Reading + Listening",
    description: "100 random words combining Thai reading, English-to-Thai recall, and listening.",
  },
];

export function milestoneKey(level: CefrLevel, mode: MilestoneMode): string {
  return `${level}:${mode}`;
}

export function milestoneStars(score: number, total: number): number {
  if (total <= 0) return 0;
  const pct = Math.round((100 * score) / total);
  if (pct >= 95) return 3;
  if (pct >= 85) return 2;
  if (pct >= MILESTONE_PASS_PERCENT) return 1;
  return 0;
}

function toWord(entry: VocabularyEntry): Word {
  return {
    id: entry.id,
    thai: entry.thai,
    roman: entry.roman,
    en: entry.en,
    level: entry.level,
    pos: entry.pos,
    topic: entry.topic,
  };
}

function pickTraps(target: VocabularyEntry, pool: VocabularyEntry[]): Word[] {
  const candidates = shuffle(pool);
  const traps: Word[] = [];
  const usedThai = new Set<string>([target.thai]);
  const usedEn = new Set<string>([target.en.toLowerCase()]);

  for (const item of candidates) {
    if (usedThai.has(item.thai) || usedEn.has(item.en.toLowerCase())) continue;
    usedThai.add(item.thai);
    usedEn.add(item.en.toLowerCase());
    traps.push(toWord(item));
    if (traps.length === 3) break;
  }

  return traps;
}

export function buildMilestoneExercises(
  level: CefrLevel,
  mode: MilestoneMode,
  vocabulary: VocabularyEntry[],
): Exercise[] {
  const levelPool = vocabulary.filter((word) => word.level === level);
  const sourcePool = levelPool.length > 0 ? levelPool : vocabulary;
  const trapPool = sourcePool.length >= 4 ? sourcePool : vocabulary;
  const selected = shuffle(sourcePool).slice(0, Math.min(MILESTONE_WORD_COUNT, sourcePool.length));

  const mixedDirs = shuffle(
    selected.map((_, idx) => {
      const mod = idx % 3;
      if (mod === 0) return "th-en" as const;
      if (mod === 1) return "listen" as const;
      return "en-th" as const;
    }),
  );

  return selected.map((entry, idx) => {
    const dir =
      mode === "reading"
        ? idx % 2 === 0
          ? ("th-en" as const)
          : ("en-th" as const)
        : mode === "listening"
          ? ("listen" as const)
          : mixedDirs[idx]!;

    return {
      kind: "choice",
      dir,
      word: toWord(entry),
      traps: pickTraps(entry, trapPool),
    };
  });
}
