import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Speaker } from "@/lib/curriculum";

type Data = {
  xp: number;
  streak: number;
  lastDay: string | null;
  completed: Record<string, number>;
  speaker: Speaker;
  showRoman: boolean;
  autoplay: boolean;
  answered: number;
  correct: number;
};

type Actions = {
  setSpeaker: (speaker: Speaker) => void;
  setShowRoman: (show: boolean) => void;
  setAutoplay: (on: boolean) => void;
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
  answered: 0,
  correct: 0,
};

function dayKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export const useProgress = create<Data & Actions>()(
  persist(
    (set, get) => ({
      ...initial,
      setSpeaker: (speaker) => set({ speaker }),
      setShowRoman: (showRoman) => set({ showRoman }),
      setAutoplay: (autoplay) => set({ autoplay }),
      recordAnswer: (ok, gain) =>
        set((state) => ({
          xp: state.xp + gain,
          answered: state.answered + 1,
          correct: state.correct + (ok ? 1 : 0),
        })),
      finishLesson: (id, stars, bonus) => {
        const state = get();
        const today = dayKey(new Date());
        const previous = new Date();
        previous.setDate(previous.getDate() - 1);
        const yesterday = dayKey(previous);
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
          answered: 0,
          correct: 0,
        }),
    }),
    { name: "sawatdee-v1", skipHydration: true },
  ),
);

export function xpGain(comboBefore: number) {
  return 10 + Math.min(Math.max(comboBefore, 0), 4) * 2;
}
