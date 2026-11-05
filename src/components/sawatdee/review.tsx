import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Exercise, Word } from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";
import { gapLabel, nextInterval, reviewStats, todayKey, duePhrase, type ReviewGrade, type SrsCard } from "@/lib/srs";
import { shuffle } from "@/lib/shuffle";
import { ExerciseBody, type Grade, type GradeHandle } from "./exercise";

const COACH: Record<string, string> = {
  สีขาว: "ขาว rises. ข้าว, rice, falls.",
  ข้าว: "ข้าว falls. ขาว, white, rises.",
  ใกล้: "ใกล้ falls and means near. ไกล is mid and means far.",
  ไกล: "ไกล is mid and means far. ใกล้ falls and means near.",
  ไม่: "ไม่ falls, and it means no. ไหม rises, and it asks.",
  ยี่สิบ: "Twenty is ยี่สิบ. สองสิบ is not the word people use.",
};

type Item = { thai: string; attempt: number };

function toWord(card: SrsCard): Word {
  return { thai: card.thai, roman: card.roman, en: card.en };
}

function makeExercise(card: SrsCard, pool: SrsCard[], index: number): Exercise {
  const traps = shuffle(pool.filter((item) => item.thai !== card.thai))
    .slice(0, 3)
    .map(toWord);
  const dir = (["th-en", "en-th", "listen"] as const)[index % 3] ?? "th-en";
  return { kind: "choice", dir, word: toWord(card), traps, coach: COACH[card.thai] };
}

function buildQueue(cards: Record<string, SrsCard>, mode: "due" | "ahead"): Item[] {
  const today = todayKey();
  const list = Object.values(cards);
  const chosen =
    mode === "due"
      ? shuffle(list.filter((card) => card.due <= today)).slice(0, 12)
      : list
          .filter((card) => card.due > today)
          .sort((a, b) => a.due.localeCompare(b.due))
          .slice(0, 8);
  return chosen.map((card) => ({ thai: card.thai, attempt: 0 }));
}

export function Review({ onStart }: { onStart: (mode: "due" | "ahead") => void }) {
  const cards = useProgress((state) => state.cards);
  const showRoman = useProgress((state) => state.showRoman);
  const today = todayKey();
  const stats = reviewStats(cards, today);
  const dueList = Object.values(cards)
    .filter((card) => card.due <= today)
    .sort((a, b) => a.thai.localeCompare(b.thai, "th"));
  const later = Object.values(cards)
    .filter((card) => card.due > today)
    .sort((a, b) => a.due.localeCompare(b.due) || a.thai.localeCompare(b.thai, "th"));
  const session = Math.min(stats.due, 12);

  return (
    <div className="px-5 pt-6 pb-10">
      <p className="text-sm font-extrabold text-chili">Review</p>
      <h1 className="text-3xl font-extrabold text-balance">Words you've seen</h1>
      <p className="mt-2 text-pretty text-muted">
        Opening a lesson adds its words here. A miss stays due and comes back later in the round. A correct
        answer waits 1 day, then 3, then longer, up to 90 days.
      </p>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <Stat label="Deck" value={String(stats.total)} />
        <Stat label="Due" value={String(stats.due)} />
        <Stat label="Mastered" value={String(stats.mastered)} />
      </div>
      <p className="mt-3 text-sm text-pretty text-muted">
        Mastered means three weeks between reviews.
        {stats.total === 0
          ? " Open a lesson and its word list lands here, ready to review."
          : stats.due === 0
            ? stats.nextDue
              ? ` Next review ${stats.nextDue}.`
              : " Nothing is waiting."
            : ""}
      </p>

      {dueList.length > 0 && (
        <DeckList title="Due" cards={dueList.slice(0, 8)} extra={Math.max(0, dueList.length - 8)} today={today} showRoman={showRoman} />
      )}
      {later.length > 0 && (
        <DeckList title="Coming up" cards={later.slice(0, 5)} extra={Math.max(0, later.length - 5)} today={today} showRoman={showRoman} />
      )}

      <button
        type="button"
        disabled={session === 0}
        onClick={() => onStart("due")}
        className="btn-3d btn-chili mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl font-extrabold"
      >
        <RotateCcw className="h-5 w-5" />
        {session === 0 ? "Nothing due" : session === stats.due ? `Review ${stats.due}` : `Review ${session} of ${stats.due}`}
      </button>
      {stats.total >= 2 && stats.due < stats.total && (
        <button
          type="button"
          onClick={() => onStart("ahead")}
          className="mt-2 min-h-12 w-full rounded-2xl border-2 border-line font-extrabold"
        >
          Practice ahead
        </button>
      )}
    </div>
  );
}

export function ReviewSession({ mode, onExit }: { mode: "due" | "ahead"; onExit: () => void }) {
  const cards = useProgress((state) => state.cards);
  const showRoman = useProgress((state) => state.showRoman);
  const autoplay = useProgress((state) => state.autoplay);
  const speaker = useProgress((state) => state.speaker);
  const gradeReview = useProgress((state) => state.gradeReview);
  const [queue, setQueue] = useState<Item[]>(() => buildQueue(cards, mode));
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<Grade | null>(null);
  const [canCheck, setCanCheck] = useState(false);
  const [remembered, setRemembered] = useState(0);
  const [missed, setMissed] = useState(0);
  const [phase, setPhase] = useState<"play" | "done">(queue.length === 0 ? "done" : "play");
  const gradeRef = useRef<GradeHandle | null>(null);
  const onCanCheck = useCallback((ready: boolean) => setCanCheck(ready), []);

  const item = queue[index];
  const cardsRef = useRef(cards);
  cardsRef.current = cards;
  const exercise = useMemo(() => {
    if (!item) return null;
    const live = cardsRef.current;
    const current = live[item.thai];
    if (!current) return null;
    return makeExercise(current, Object.values(live), index + item.attempt);
  }, [item, index]);

  const card = item ? cards[item.thai] : undefined;

  function onCheck() {
    const grade = gradeRef.current?.grade();
    if (!grade || result) return;
    if (item && item.attempt === 0) {
      if (grade.ok) setRemembered((value) => value + 1);
      else setMissed((value) => value + 1);
    }
    setResult(grade);
  }

  function onContinue() {
    if (!result || !item || !card) return;
    let nextQueue = queue;
    let grade: ReviewGrade | null = null;
    if (result.ok) grade = item.attempt === 0 ? "good" : "shaky";
    else if (item.attempt === 0) {
      grade = "again";
      nextQueue = queue.slice();
      const insertAt = Math.min(index + 3, nextQueue.length);
      nextQueue.splice(insertAt, 0, { thai: item.thai, attempt: 1 });
      setQueue(nextQueue);
    }
    if (grade) gradeReview(item.thai, grade);
    if (index + 1 >= nextQueue.length) {
      setPhase("done");
      return;
    }
    setResult(null);
    setCanCheck(false);
    setIndex((value) => value + 1);
  }

  const gap =
    result && card && item
      ? result.ok
        ? gapLabel(nextInterval(card, item.attempt === 0 ? "good" : "shaky"))
        : item.attempt === 0
          ? "Again later this round, and still due after."
          : "Still due."
      : "";

  if (phase === "done" || !item || !exercise) {
    return (
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-teal text-sheet">
            <Check className="h-12 w-12" />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold">Review done</h2>
          <p className="mt-2 max-w-xs text-pretty text-muted">
            {queue.length === 0
              ? "Nothing was waiting."
              : `${remembered} remembered first try. ${missed} ${missed === 1 ? "comes" : "come"} back sooner.`}
          </p>
        </div>
        <footer className="safe-bottom px-4 pt-2">
          <button
            type="button"
            onClick={onExit}
            className="btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
          >
            Back
          </button>
        </footer>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <header className="flex items-center gap-3 px-3 pt-3">
        <IconButton label="Leave review" onClick={onExit}>
          <X className="h-5 w-5" />
        </IconButton>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-soft" aria-hidden>
          <div
            className="h-full rounded-full bg-teal transition-[width] duration-300 ease-out"
            style={{ width: `${((index + (result ? 1 : 0)) / queue.length) * 100}%` }}
          />
        </div>
        <p className="shrink-0 text-sm font-extrabold text-muted tabular-nums">
          {index + 1}/{queue.length}
        </p>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-4 pb-4">
        <ExerciseBody
          key={`${item.thai}-${index}`}
          exercise={exercise}
          speaker={speaker}
          showRoman={showRoman}
          autoplay={autoplay}
          result={result}
          gradeRef={gradeRef}
          onAnswer={() => undefined}
          onCanCheck={onCanCheck}
        />
      </div>
      {result ? (
        <footer
          className={cn("safe-bottom px-4 pt-4", result.ok ? "bg-teal text-sheet" : "bg-chili text-sheet")}
          aria-live="polite"
        >
          <p className="text-xl font-extrabold">{result.ok ? "Kept." : "Not quite."}</p>
          {result.solution && (
            <p lang="th" className="mt-1 font-bold">
              {result.solution}
            </p>
          )}
          <p className="mt-1 text-sm">{gap}</p>
          <button
            type="button"
            onClick={onContinue}
            className="btn-3d btn-sheet mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
          >
            Continue
          </button>
        </footer>
      ) : (
        <footer className="safe-bottom px-4 pt-2">
          <button
            type="button"
            disabled={!canCheck}
            onClick={onCheck}
            className="btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
          >
            Check
          </button>
        </footer>
      )}
    </div>
  );
}

function DeckList({
  title,
  cards,
  extra,
  today,
  showRoman,
}: {
  title: string;
  cards: SrsCard[];
  extra: number;
  today: string;
  showRoman: boolean;
}) {
  return (
    <section className="mt-5">
      <h2 className="text-sm font-extrabold tracking-wide text-muted uppercase">{title}</h2>
      <ul className="mt-2 grid gap-2">
        {cards.map((card) => (
          <li key={card.thai} className="flex items-center justify-between gap-3 rounded-2xl bg-soft px-4 py-3">
            <span className="min-w-0">
              <span lang="th" className="thai-display block text-xl">
                {card.thai}
              </span>
              <span className="block text-sm font-bold text-muted">
                {showRoman ? `${card.roman} · ` : ""}
                {card.en}
              </span>
            </span>
            <span className="shrink-0 text-xs font-extrabold text-chili">{duePhrase(card.due, today)}</span>
          </li>
        ))}
      </ul>
      {extra > 0 && <p className="mt-2 text-sm font-bold text-muted">+{extra} more</p>}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-soft px-3 py-3">
      <p className="text-xs font-extrabold tracking-wide text-muted uppercase">{label}</p>
      <p className="text-2xl font-extrabold tabular-nums">{value}</p>
    </div>
  );
}

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted"
    >
      {children}
    </button>
  );
}
