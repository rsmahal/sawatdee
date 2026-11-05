export type ScriptStyle = "modern" | "traditional";

export type SrsCard = {
  thai: string;
  roman: string;
  en: string;
  ease: number;
  interval: number;
  due: string;
  reps: number;
  lapses: number;
  seen: string;
};

export type ReviewGrade = "good" | "again" | "shaky";

export function dayKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function addDays(day: string, days: number) {
  const [y, m, d] = day.split("-").map(Number);
  const date = new Date(y ?? 0, (m ?? 1) - 1, d ?? 1);
  date.setDate(date.getDate() + days);
  return dayKey(date);
}

export function todayKey() {
  return dayKey(new Date());
}

/** 1 day, then 3, then interval × ease, capped at 90. A miss clears the ladder. */
export function nextInterval(card: SrsCard, grade: ReviewGrade) {
  if (grade === "again") return 0;
  if (grade === "shaky") return 1;
  const reps = card.reps + 1;
  if (reps <= 1) return 1;
  if (reps === 2) return 3;
  return Math.min(90, Math.max(1, Math.round(Math.max(card.interval, 1) * card.ease)));
}

function clampEase(ease: number) {
  return Math.round(Math.min(2.8, Math.max(1.3, ease)) * 100) / 100;
}

export function scheduleCard(card: SrsCard, grade: ReviewGrade, today: string): SrsCard {
  const interval = nextInterval(card, grade);
  if (grade === "again") {
    return {
      ...card,
      reps: 0,
      interval: 0,
      ease: clampEase(card.ease - 0.2),
      lapses: card.lapses + 1,
      due: today,
    };
  }
  if (grade === "shaky") {
    return {
      ...card,
      reps: 1,
      interval,
      ease: clampEase(card.ease - 0.05),
      due: addDays(today, interval),
    };
  }
  return {
    ...card,
    reps: card.reps + 1,
    interval,
    due: addDays(today, interval),
  };
}

export function daysUntil(due: string, today: string) {
  const [y, m, d] = due.split("-").map(Number);
  const [Y, M, D] = today.split("-").map(Number);
  const a = Date.UTC(y ?? 0, (m ?? 1) - 1, d ?? 1);
  const b = Date.UTC(Y ?? 0, (M ?? 1) - 1, D ?? 1);
  return Math.round((a - b) / 86_400_000);
}

export function duePhrase(due: string, today: string) {
  const days = daysUntil(due, today);
  if (days <= 0) return "Due";
  if (days === 1) return "Tomorrow";
  return `In ${days} days`;
}

export function gapLabel(days: number) {
  if (days <= 0) return "This one stays due.";
  if (days === 1) return "Back tomorrow.";
  return `Back in ${days} days.`;
}

export function reviewStats(cards: Record<string, SrsCard>, today: string) {
  const list = Object.values(cards);
  const due = list.filter((card) => card.due <= today);
  const later = list.filter((card) => card.due > today).sort((a, b) => a.due.localeCompare(b.due));
  return {
    total: list.length,
    due: due.length,
    mastered: list.filter((card) => card.interval >= 21).length,
    nextDue: later[0]?.due ?? null,
  };
}
