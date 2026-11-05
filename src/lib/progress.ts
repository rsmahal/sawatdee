import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Speaker, Word } from "@/lib/curriculum";
import {
  scheduleCard,
  todayKey,
  type ReviewGrade,
  type ScriptStyle,
  type SrsCard,
} from "@/lib/srs";

export type Theme = "light" | "dark";

type Data = {
  xp: number;
  streak: number;
  lastDay: string | null;
  completed: Record<string, number>;
  speaker: Speaker;
  showRoman: boolean;
  autoplay: boolean;
  scriptStyle: ScriptStyle;
  theme: Theme;
  cards: Record<string, SrsCard>;
  answered: number;
  correct: number;
};

type Actions = {
  setSpeaker: (speaker: Speaker) => void;
  setShowRoman: (show: boolean) => void;
  setAutoplay: (on: boolean) => void;
  setScriptStyle: (style: ScriptStyle) => void;
  setTheme: (theme: Theme) => void;
  ingestWords: (words: Word[]) => void;
  gradeReview: (thai: string, grade: ReviewGrade) => void;
  recordAnswer: (ok: boolean, gain: number) => void;
  finishLesson: (id: string, stars: number, bonus: number) => void;
  resetProgress: () => void;
};

const initial: Data = {
  xp: 0,
  streak: 0,
  lastDay: null,
  completed: {},
  speaker: "f",
  showRoman: true,
  autoplay: true,
  scriptStyle: "modern",
  theme: "light",
  cards: {},
  answered: 0,
  correct: 0,
};

export const useProgress = create<Data & Actions>()(
  persist(
    (set, get) => ({
      ...initial,
      setSpeaker: (speaker) => set({ speaker }),
      setShowRoman: (showRoman) => set({ showRoman }),
      setAutoplay: (autoplay) => set({ autoplay }),
      setScriptStyle: (scriptStyle) => set({ scriptStyle }),
      setTheme: (theme) => set({ theme }),
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
      resetProgress: () =>
        set({
          xp: 0,
          streak: 0,
          lastDay: null,
          completed: {},
          cards: {},
          answered: 0,
          correct: 0,
        }),
    }),
    {
      name: "sawatdee-v1",
      skipHydration: true,
      merge: (persisted, current) => {
        const saved = (persisted ?? {}) as Partial<Data>;
        return {
          ...current,
          ...saved,
          cards: saved.cards ?? {},
          scriptStyle: saved.scriptStyle === "traditional" ? "traditional" : "modern",
          theme: saved.theme === "dark" ? "dark" : "light",
          completed: saved.completed ?? {},
        };
      },
    },
  ),
);

export function xpGain(comboBefore: number) {
  return 10 + Math.min(Math.max(comboBefore, 0), 4) * 2;
}
