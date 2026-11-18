import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CefrLevel, Speaker, Word } from "@/lib/curriculum";
import { milestoneKey, milestoneStars, type MilestoneMode } from "@/lib/milestone";
import {
  scheduleCard,
  todayKey,
  type ReviewGrade,
  type ScriptStyle,
  type SrsCard,
} from "@/lib/srs";

export type Theme = "light" | "dark";
export type SpeechMethod = "auto" | "google" | "browser";
export const DEFAULT_REVIEW_LIMIT = 12;

export function normalizeReviewLimit(value: unknown): number | null {
  if (value === null || value === "all") return null;
  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.min(100, Math.max(1, Math.round(value)));
  }
  return DEFAULT_REVIEW_LIMIT;
}

export type MilestoneResult = {
  bestScore: number;
  total: number;
  passed: boolean;
  stars: number;
  attempts: number;
  bestTimeSec?: number;
};

type Data = {
  xp: number;
  streak: number;
  lastDay: string | null;
  completed: Record<string, number>;
  talkCompleted: Record<string, number>;
  milestones: Record<string, MilestoneResult>;
  speaker: Speaker;
  speechMethod: SpeechMethod;
  showRoman: boolean;
  showTones: boolean;
  autoplay: boolean;
  reviewLimit: number | null;
  scriptStyle: ScriptStyle;
  theme: Theme;
  pathLevel: CefrLevel | null;
  collapsedUnits: Record<string, boolean>;
  cards: Record<string, SrsCard>;
  answered: number;
  correct: number;
};

type Actions = {
  setSpeaker: (speaker: Speaker) => void;
  setSpeechMethod: (method: SpeechMethod) => void;
  setShowRoman: (show: boolean) => void;
  setShowTones: (show: boolean) => void;
  setAutoplay: (on: boolean) => void;
  setReviewLimit: (limit: number | null) => void;
  setScriptStyle: (style: ScriptStyle) => void;
  setTheme: (theme: Theme) => void;
  setPathLevel: (level: CefrLevel | null) => void;
  toggleUnitCollapsed: (unitId: string) => void;
  setUnitsCollapsed: (unitIds: string[], collapsed: boolean) => void;
  ingestWords: (words: Word[]) => void;
  gradeReview: (thai: string, grade: ReviewGrade) => void;
  recordAnswer: (ok: boolean, gain: number) => void;
  finishLesson: (id: string, stars: number, bonus: number) => void;
  finishConversation: (id: string, stars: number, bonus: number) => void;
  finishMilestone: (
    level: CefrLevel,
    mode: MilestoneMode,
    score: number,
    total: number,
    bonus: number,
    durationSec?: number,
  ) => void;
  resetProgress: () => void;
  applyLearning: (learning: Learning) => void;
};

const initial: Data = {
  xp: 0,
  streak: 0,
  lastDay: null,
  completed: {},
  talkCompleted: {},
  milestones: {},
  speaker: "f",
  speechMethod: "auto",
  showRoman: true,
  showTones: true,
  autoplay: true,
  reviewLimit: DEFAULT_REVIEW_LIMIT,
  scriptStyle: "modern",
  theme: "light",
  pathLevel: null,
  collapsedUnits: {},
  cards: {},
  answered: 0,
  correct: 0,
};

export const useProgress = create<Data & Actions>()(
  persist(
    (set, get) => ({
      ...initial,
      setSpeaker: (speaker) => set({ speaker }),
      setSpeechMethod: (speechMethod) => set({ speechMethod }),
      setShowRoman: (showRoman) => set({ showRoman }),
      setShowTones: (showTones) => set({ showTones }),
      setAutoplay: (autoplay) => set({ autoplay }),
      setReviewLimit: (reviewLimit) => set({ reviewLimit: normalizeReviewLimit(reviewLimit) }),
      setScriptStyle: (scriptStyle) => set({ scriptStyle }),
      setTheme: (theme) => set({ theme }),
      setPathLevel: (pathLevel) => set({ pathLevel }),
      toggleUnitCollapsed: (unitId) =>
        set((state) => ({
          collapsedUnits: {
            ...state.collapsedUnits,
            [unitId]: !state.collapsedUnits[unitId],
          },
        })),
      setUnitsCollapsed: (unitIds, collapsed) =>
        set((state) => {
          const next = { ...state.collapsedUnits };
          for (const id of unitIds) {
            if (collapsed) next[id] = true;
            else delete next[id];
          }
          return { collapsedUnits: next };
        }),
      ingestWords: (words) =>
        set((state) => {
          const today = todayKey();
          const cards = { ...state.cards };
          let changed = false;
          for (const word of words) {
            if (!word.thai) continue;
            const existing = cards[word.thai];
            if (existing) {
              if (existing.roman !== word.roman || existing.en !== word.en) {
                cards[word.thai] = { ...existing, roman: word.roman, en: word.en };
                changed = true;
              }
              continue;
            }
            cards[word.thai] = {
              thai: word.thai,
              roman: word.roman,
              en: word.en,
              ease: 2.5,
              interval: 0,
              due: today,
              reps: 0,
              lapses: 0,
              seen: today,
            };
            changed = true;
          }
          return changed ? { cards } : state;
        }),
      gradeReview: (thai, grade) => {
        const card = get().cards[thai];
        if (!card) return;
        const next = scheduleCard(card, grade, todayKey());
        set((state) => ({ cards: { ...state.cards, [thai]: next } }));
      },
      recordAnswer: (ok, gain) =>
        set((state) => ({
          xp: state.xp + gain,
          answered: state.answered + 1,
          correct: state.correct + (ok ? 1 : 0),
        })),
      finishLesson: (id, stars, bonus) => {
        const state = get();
        const today = todayKey();
        const previous = new Date();
        previous.setDate(previous.getDate() - 1);
        const yesterday = `${previous.getFullYear()}-${String(previous.getMonth() + 1).padStart(2, "0")}-${String(previous.getDate()).padStart(2, "0")}`;
        let streak = state.streak;
        if (state.lastDay !== today) {
          streak = state.lastDay === yesterday ? state.streak + 1 : 1;
        } else if (streak === 0) {
          streak = 1;
        }
        set({
          xp: state.xp + bonus,
          streak,
          lastDay: today,
          completed: { ...state.completed, [id]: Math.max(state.completed[id] ?? 0, stars) },
        });
      },
      finishConversation: (id, stars, bonus) => {
        const state = get();
        const today = todayKey();
        const previous = new Date();
        previous.setDate(previous.getDate() - 1);
        const yesterday = `${previous.getFullYear()}-${String(previous.getMonth() + 1).padStart(2, "0")}-${String(previous.getDate()).padStart(2, "0")}`;
        let streak = state.streak;
        if (state.lastDay !== today) {
          streak = state.lastDay === yesterday ? state.streak + 1 : 1;
        } else if (streak === 0) {
          streak = 1;
        }
        set({
          xp: state.xp + bonus,
          streak,
          lastDay: today,
          talkCompleted: {
            ...state.talkCompleted,
            [id]: Math.max(state.talkCompleted[id] ?? 0, stars),
          },
        });
      },
      finishMilestone: (level, mode, score, total, bonus, durationSec) => {
        const state = get();
        const today = todayKey();
        const previous = new Date();
        previous.setDate(previous.getDate() - 1);
        const yesterday = `${previous.getFullYear()}-${String(previous.getMonth() + 1).padStart(2, "0")}-${String(previous.getDate()).padStart(2, "0")}`;
        let streak = state.streak;
        if (state.lastDay !== today) {
          streak = state.lastDay === yesterday ? state.streak + 1 : 1;
        } else if (streak === 0) {
          streak = 1;
        }
        const key = milestoneKey(level, mode);
        const prev = state.milestones[key];
        const earnedStars = milestoneStars(score, total);
        const passed = earnedStars > 0;
        const cleanDuration =
          typeof durationSec === "number" && Number.isFinite(durationSec) && durationSec > 0
            ? Math.round(durationSec)
            : undefined;
        const bestTimeSec =
          passed && cleanDuration !== undefined
            ? prev?.bestTimeSec !== undefined
              ? Math.min(prev.bestTimeSec, cleanDuration)
              : cleanDuration
            : prev?.bestTimeSec;
        set({
          xp: state.xp + bonus,
          streak,
          lastDay: today,
          milestones: {
            ...state.milestones,
            [key]: {
              bestScore: Math.max(prev?.bestScore ?? 0, score),
              total,
              passed: Boolean(prev?.passed || passed),
              stars: Math.max(prev?.stars ?? 0, earnedStars),
              attempts: (prev?.attempts ?? 0) + 1,
              ...(bestTimeSec !== undefined ? { bestTimeSec } : {}),
            },
          },
        });
      },
      resetProgress: () =>
        set({
          xp: 0,
          streak: 0,
          lastDay: null,
          completed: {},
          talkCompleted: {},
          milestones: {},
          cards: {},
          answered: 0,
          correct: 0,
        }),
      applyLearning: (learning) => set({ ...learning }),
    }),
    {
      name: "sawatdee-v1",
      version: 2,
      skipHydration: true,
      migrate: (persistedState) => {
        const saved = (persistedState ?? {}) as Partial<Data>;
        return {
          theme: saved.theme === "dark" ? ("dark" as const) : ("light" as const),
          scriptStyle: saved.scriptStyle === "traditional" ? ("traditional" as const) : ("modern" as const),
          speechMethod:
            saved.speechMethod === "google" || saved.speechMethod === "browser"
              ? saved.speechMethod
              : ("auto" as const),
          reviewLimit:
            "reviewLimit" in saved ? normalizeReviewLimit(saved.reviewLimit) : DEFAULT_REVIEW_LIMIT,
          pathLevel: null,
          collapsedUnits: {} as Record<string, boolean>,
        };
      },
      merge: (persisted, current) => {
        const saved = (persisted ?? {}) as Partial<Data>;
        const collapsedUnits: Record<string, boolean> = {};
        if (saved.collapsedUnits && typeof saved.collapsedUnits === "object") {
          for (const [k, v] of Object.entries(saved.collapsedUnits)) {
            if (v === true) collapsedUnits[k] = true;
          }
        }
        return {
          ...current,
          scriptStyle: saved.scriptStyle === "traditional" ? "traditional" : "modern",
          theme: saved.theme === "dark" ? "dark" : "light",
          speechMethod:
            saved.speechMethod === "google" || saved.speechMethod === "browser" ? saved.speechMethod : "auto",
          reviewLimit:
            "reviewLimit" in saved ? normalizeReviewLimit(saved.reviewLimit) : current.reviewLimit,
          pathLevel: saved.pathLevel === "A1" || saved.pathLevel === "A2" ? saved.pathLevel : null,
          collapsedUnits,
        };
      },
      partialize: (state) => ({
        theme: state.theme,
        scriptStyle: state.scriptStyle,
        speechMethod: state.speechMethod,
        reviewLimit: state.reviewLimit,
        pathLevel: state.pathLevel,
        collapsedUnits: state.collapsedUnits,
      }),
    },
  ),
);

export function xpGain(comboBefore: number) {
  return 10 + Math.min(Math.max(comboBefore, 0), 4) * 2;
}

export type Learning = {
  xp: number;
  streak: number;
  lastDay: string | null;
  completed: Record<string, number>;
  talkCompleted: Record<string, number>;
  milestones: Record<string, MilestoneResult>;
  speaker: Speaker;
  speechMethod: SpeechMethod;
  showRoman: boolean;
  showTones: boolean;
  autoplay: boolean;
  reviewLimit: number | null;
  cards: Record<string, SrsCard>;
  answered: number;
  correct: number;
};

export function learningSnapshot(state: Data): Learning {
  return {
    xp: state.xp,
    streak: state.streak,
    lastDay: state.lastDay,
    completed: state.completed,
    talkCompleted: state.talkCompleted,
    milestones: state.milestones,
    speaker: state.speaker,
    speechMethod: state.speechMethod,
    showRoman: state.showRoman,
    showTones: state.showTones,
    autoplay: state.autoplay,
    reviewLimit: state.reviewLimit,
    cards: state.cards,
    answered: state.answered,
    correct: state.correct,
  };
}

function num(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

export function parseLearning(raw: unknown): Learning | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  const completed: Record<string, number> = {};
  if (row.completed && typeof row.completed === "object") {
    for (const [id, stars] of Object.entries(row.completed)) {
      if (typeof stars === "number" && stars >= 0 && stars <= 3) completed[id] = stars;
    }
  }
  const talkCompleted: Record<string, number> = {};
  if (row.talkCompleted && typeof row.talkCompleted === "object") {
    for (const [id, stars] of Object.entries(row.talkCompleted)) {
      if (typeof stars === "number" && stars >= 0 && stars <= 3) talkCompleted[id] = stars;
    }
  }
  const milestones: Record<string, MilestoneResult> = {};
  if (row.milestones && typeof row.milestones === "object") {
    for (const [key, value] of Object.entries(row.milestones)) {
      if (!value || typeof value !== "object") continue;
      const item = value as Partial<MilestoneResult>;
      const total = Math.max(1, Math.round(num(item.total, 100)));
      const bestScore = Math.max(0, Math.min(total, Math.round(num(item.bestScore, 0))));
      const stars = Math.max(0, Math.min(3, Math.round(num(item.stars, 0))));
      const attempts = Math.max(1, Math.round(num(item.attempts, 1)));
      const rawTime = item.bestTimeSec;
      const bestTimeSec =
        typeof rawTime === "number" && Number.isFinite(rawTime) && rawTime > 0
          ? Math.round(rawTime)
          : undefined;
      milestones[key] = {
        bestScore,
        total,
        passed: Boolean(item.passed),
        stars,
        attempts,
        ...(bestTimeSec !== undefined ? { bestTimeSec } : {}),
      };
    }
  }
  const cards: Record<string, SrsCard> = {};
  if (row.cards && typeof row.cards === "object") {
    for (const [key, value] of Object.entries(row.cards).slice(0, 2000)) {
      if (!value || typeof value !== "object") continue;
      const card = value as Partial<SrsCard>;
      if (typeof card.thai !== "string" || typeof card.due !== "string") continue;
      cards[key] = {
        thai: card.thai,
        roman: typeof card.roman === "string" ? card.roman : "",
        en: typeof card.en === "string" ? card.en : "",
        ease: num(card.ease, 2.5),
        interval: num(card.interval, 0),
        due: card.due,
        reps: num(card.reps, 0),
        lapses: num(card.lapses, 0),
        seen: typeof card.seen === "string" ? card.seen : card.due,
      };
    }
  }
  return {
    xp: Math.max(0, Math.round(num(row.xp, 0))),
    streak: Math.max(0, Math.round(num(row.streak, 0))),
    lastDay: typeof row.lastDay === "string" ? row.lastDay : null,
    completed,
    talkCompleted,
    milestones,
    speaker: row.speaker === "m" ? "m" : "f",
    speechMethod:
      row.speechMethod === "google" || row.speechMethod === "browser" ? row.speechMethod : "auto",
    showRoman: row.showRoman !== false,
    showTones: row.showTones !== false,
    autoplay: row.autoplay !== false,
    reviewLimit: normalizeReviewLimit(row.reviewLimit),
    cards,
    answered: Math.max(0, Math.round(num(row.answered, 0))),
    correct: Math.max(0, Math.round(num(row.correct, 0))),
  };
}
