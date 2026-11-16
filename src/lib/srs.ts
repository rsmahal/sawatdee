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

export type ReviewGrade = "again" | "hard" | "good" | "easy";

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

/** Anki-style SM-2 intervals capped at 90 days: Again = 0 (same round), Hard = 1d then 1.2x, Good = 3d then * ease, Easy = 7d then * ease * 1.3. */
export function nextInterval(card: SrsCard, grade: ReviewGrade): number {
  if (grade === "again") return 0;

  const isLearning = card.reps <= 0 || card.interval <= 0;
  const hardDays = isLearning ? 1 : Math.min(90, Math.max(1, Math.round(card.interval * 1.2)));
  if (grade === "hard") return hardDays;

  const goodBase = isLearning
    ? 3
    : card.interval === 1
      ? Math.max(3, Math.round(card.interval * card.ease))
      : Math.max(hardDays + 1, Math.round(card.interval * card.ease));
  const goodDays = Math.min(90, goodBase);
  if (grade === "good") return goodDays;

  const easyBase =
    isLearning || card.interval <= 1
      ? 7
      : Math.max(goodDays + 1, Math.round(card.interval * card.ease * 1.3));
  return Math.min(90, easyBase);
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
  if (grade === "hard") {
    return {
      ...card,
      reps: Math.max(1, card.reps),
      interval,
      ease: clampEase(card.ease - 0.15),
      due: addDays(today, interval),
    };
  }
  if (grade === "easy") {
    return {
      ...card,
      reps: card.reps + 1,
      interval,
      ease: clampEase(card.ease + 0.15),
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

export function intervalChip(days: number) {
  if (days <= 0) return "Requeue";
  if (days === 1) return "1 day";
  return `${days} days`;
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
