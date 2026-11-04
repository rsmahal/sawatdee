import { useCallback, useRef, useState, type ReactNode } from "react";
import { Check, Heart, Volume2, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { lessonById } from "@/lib/curriculum";
import { useProgress, xpGain } from "@/lib/progress";
import { speakThai } from "@/lib/speech";
import { ExerciseBody, type Grade, type GradeHandle } from "./exercise";

const PRAISE = ["Nice.", "That's it.", "Exactly."];

export function Lesson({ lessonId, onExit }: { lessonId: string; onExit: () => void }) {
  const lesson = lessonById(lessonId);
  const speaker = useProgress((state) => state.speaker);
  const showRoman = useProgress((state) => state.showRoman);
  const autoplay = useProgress((state) => state.autoplay);
  const recordAnswer = useProgress((state) => state.recordAnswer);
  const finishLesson = useProgress((state) => state.finishLesson);

  const [phase, setPhase] = useState<"intro" | "play" | "done" | "down">("intro");
  const [index, setIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [combo, setCombo] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [stars, setStars] = useState(1);
  const [result, setResult] = useState<Grade | null>(null);
  const [canCheck, setCanCheck] = useState(false);
  const [confirmExit, setConfirmExit] = useState(false);
  const gradeRef = useRef<GradeHandle | null>(null);
  const onCanCheck = useCallback((ready: boolean) => setCanCheck(ready), []);

  if (!lesson) return null;

  const exercise = lesson.exercises[index];
  const total = lesson.exercises.length;

  function accept(grade: Grade) {
    if (result) return;
    if (exercise?.kind === "pairs") {
      const gain = 10;
      setSessionXp((value) => value + gain);
      recordAnswer(true, gain);
      setResult(grade);
      return;
    }
    const gain = grade.ok ? xpGain(combo) : 0;
    if (grade.ok) {
      setCombo((value) => value + 1);
      setSessionXp((value) => value + gain);
    } else {
      setCombo(0);
      setMistakes((value) => value + 1);
      setHearts((value) => Math.max(0, value - 1));
    }
    recordAnswer(grade.ok, gain);
    setResult(grade);
  }

  function onCheck() {
    const grade = gradeRef.current?.grade();
    if (!grade) return;
    accept(grade);
  }

  function onContinue() {
    if (!result || !exercise) return;
    const last = index + 1 >= total;
    if (!last && !result.ok && hearts <= 0) {
      setPhase("down");
      return;
    }
    if (last) {
      const earned = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
      finishLesson(lessonId, earned, 20);
      setSessionXp((value) => value + 20);
      setStars(earned);
      setPhase("done");
      return;
    }
    setResult(null);
    setCanCheck(false);
    setIndex((value) => value + 1);
  }

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      {phase === "intro" && (
        <>
          <header className="flex items-center gap-2 px-4 pt-4">
            <IconButton label="Leave lesson" onClick={() => setConfirmExit(true)}>
              <X className="h-5 w-5" />
            </IconButton>
            <p className="text-sm font-extrabold text-muted">{lesson.subtitle}</p>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-4 pb-4">
            <h1 className="text-3xl font-extrabold text-balance">{lesson.title}</h1>
            <p className="mt-2 text-pretty text-muted">{lesson.tip}</p>
            {lesson.words.length > 0 && (
              <ul className="mt-5 grid gap-2">
                {lesson.words.map((word) => (
                  <li
                    key={word.thai}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-3 py-2"
                  >
                    <button
                      type="button"
                      aria-label={`Play ${word.en}`}
                      onClick={() => speakThai(word.thai)}
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-soft text-chili transition-transform duration-150 active:scale-[0.96]"
                    >
                      <Volume2 className="h-5 w-5" />
                    </button>
                    <div className="min-w-0">
                      <p lang="th" className="thai-display text-2xl">
                        {word.thai}
                      </p>
                      {showRoman && <p className="text-sm font-bold text-muted">{word.roman}</p>}
                      <p className="font-extrabold">{word.en}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-center text-sm font-bold text-muted">
              Five hearts. A miss costs one. You can replay.
            </p>
          </div>
          <footer className="safe-bottom px-4 pt-2">
            <button
              type="button"
              onClick={() => setPhase("play")}
              className="btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
            >
              Start lesson
            </button>
          </footer>
        </>
      )}

      {phase === "play" && exercise && (
        <>
          <header className="flex items-center gap-3 px-3 pt-3">
            <IconButton label="Leave lesson" onClick={() => setConfirmExit(true)}>
              <X className="h-5 w-5" />
            </IconButton>
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-soft" aria-hidden>
              <div
                className="h-full rounded-full bg-chili transition-[width] duration-300 ease-out"
                style={{ width: `${((index + (result ? 1 : 0)) / total) * 100}%` }}
              />
            </div>
            <div className="flex shrink-0 items-center" aria-label={`${hearts} hearts`}>
              {Array.from({ length: 5 }, (_, heart) => (
                <Heart
                  key={heart}
                  className={cn("h-5 w-5", heart < hearts ? "text-chili" : "text-line")}
                  fill={heart < hearts ? "currentColor" : "none"}
                />
              ))}
            </div>
          </header>
          {combo >= 2 && (
            <p className="pt-2 text-center text-sm font-extrabold text-marigold tabular-nums">
              Combo ×{combo}
            </p>
          )}
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-4 pb-4">
            <ExerciseBody
              key={index}
              exercise={exercise}
              speaker={speaker}
              showRoman={showRoman}
              autoplay={autoplay}
              result={result}
              gradeRef={gradeRef}
              onAnswer={accept}
              onCanCheck={onCanCheck}
            />
          </div>
          {result ? (
            <footer
              className={cn("safe-bottom px-4 pt-4", result.ok ? "bg-teal text-sheet" : "bg-chili text-sheet")}
              aria-live="polite"
            >
              <p className="text-xl font-extrabold">
                {result.ok ? PRAISE[index % PRAISE.length] : "Not quite."}
              </p>
              {result.solution && (
                <p lang="th" className="mt-1 font-bold">
                  {result.solution}
                </p>
              )}
              {exercise.coach && <p className="mt-1 text-sm">{exercise.coach}</p>}
              <button
                type="button"
                onClick={onContinue}
                className="btn-3d btn-sheet mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
              >
                Continue
              </button>
            </footer>
          ) : exercise.kind === "pairs" ? (
            <footer className="safe-bottom px-4 pt-4 text-center text-sm font-extrabold text-muted">
              Match each pair
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
        </>
      )}

      {phase === "done" && (
        <EndScreen
          title="Lesson complete"
          body={mistakes === 0 ? "No misses." : `${mistakes} ${mistakes === 1 ? "miss" : "misses"}.`}
          sessionXp={sessionXp}
          stars={stars}
          action="Continue"
          onAction={onExit}
        />
      )}

      {phase === "down" && (
        <EndScreen
          title="Out of hearts"
          body="This lesson stays unfinished. XP you already earned is kept, and hearts refill on the path."
          sessionXp={sessionXp}
          action="Back to the path"
          onAction={onExit}
          tone="chili"
        />
      )}

      {confirmExit && (
        <div className="absolute inset-0 z-20 flex items-end bg-ink/40 p-4">
          <div className="w-full rounded-3xl bg-sheet p-5">
            <h2 className="text-xl font-extrabold">Leave this lesson?</h2>
            <p className="mt-1 text-sm text-pretty text-muted">
              XP you already earned stays. The lesson will not count as finished.
            </p>
            <button
              type="button"
              onClick={onExit}
              className="btn-3d btn-chili mt-4 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
            >
              Leave
            </button>
            <button
              type="button"
              onClick={() => setConfirmExit(false)}
              className="mt-2 min-h-12 w-full font-extrabold text-muted"
            >
              Keep going
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function EndScreen({
  title,
  body,
  sessionXp,
  stars,
  action,
  onAction,
  tone = "teal",
}: {
  title: string;
  body: string;
  sessionXp: number;
  stars?: number;
  action: string;
  onAction: () => void;
  tone?: "teal" | "chili";
}) {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div
          className={cn(
            "grid h-24 w-24 place-items-center rounded-full text-sheet",
            tone === "teal" ? "bg-teal" : "bg-chili",
          )}
        >
          {tone === "teal" ? <Check className="h-12 w-12" /> : <Heart className="h-12 w-12" fill="currentColor" />}
        </div>
        <h2 className="mt-5 text-3xl font-extrabold text-balance">{title}</h2>
        <p className="mt-2 max-w-xs text-pretty text-muted">{body}</p>
        {stars ? (
          <p className="mt-4 text-sm font-extrabold tracking-wide text-marigold uppercase">
            {stars === 3 ? "Three stars" : stars === 2 ? "Two stars" : "One star"}
          </p>
        ) : null}
        <p className="mt-2 text-2xl font-extrabold text-chili tabular-nums">+{sessionXp} XP</p>
      </div>
      <footer className="safe-bottom px-4 pt-2">
        <button
          type="button"
          onClick={onAction}
          className="btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
        >
          {action}
        </button>
      </footer>
    </>
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
