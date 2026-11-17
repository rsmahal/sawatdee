import { useCallback, useMemo, useRef, useState } from "react";
import { Award, BookOpen, Check, Headphones, RotateCcw, Shuffle, Star, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useCatalog } from "@/lib/catalog-store";
import type { CefrLevel } from "@/lib/curriculum";
import {
  buildMilestoneExercises,
  MILESTONE_MODES,
  MILESTONE_PASS_PERCENT,
  milestoneKey,
  milestoneStars,
  type MilestoneMode,
} from "@/lib/milestone";
import { useProgress } from "@/lib/progress";
import { ExerciseBody, type Grade, type GradeHandle } from "./exercise";
import { ToneStrip } from "./tone-strip";

const PRAISE = ["Correct.", "Spot on.", "Got it."];

export function MilestoneSession({
  level,
  mode,
  onExit,
}: {
  level: CefrLevel;
  mode: MilestoneMode;
  onExit: () => void;
}) {
  const vocabulary = useCatalog((state) => state.vocabulary);
  const speaker = useProgress((state) => state.speaker);
  const showRoman = useProgress((state) => state.showRoman);
  const showTones = useProgress((state) => state.showTones);
  const autoplay = useProgress((state) => state.autoplay);
  const milestones = useProgress((state) => state.milestones);
  const recordAnswer = useProgress((state) => state.recordAnswer);
  const finishMilestone = useProgress((state) => state.finishMilestone);

  const [runId, setRunId] = useState(0);
  const [phase, setPhase] = useState<"intro" | "play" | "done">("intro");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [result, setResult] = useState<Grade | null>(null);
  const [canCheck, setCanCheck] = useState(false);
  const [confirmExit, setConfirmExit] = useState(false);
  const gradeRef = useRef<GradeHandle | null>(null);
  const onCanCheck = useCallback((ready: boolean) => setCanCheck(ready), []);

  const exercises = useMemo(
    () => buildMilestoneExercises(level, mode, vocabulary),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [level, mode, vocabulary, runId],
  );

  const total = exercises.length;
  const exercise = exercises[index];
  const modeInfo = MILESTONE_MODES.find((item) => item.mode === mode) ?? MILESTONE_MODES[0]!;
  const prevRecord = milestones[milestoneKey(level, mode)];
  const levelPoolSize = vocabulary.filter((w) => w.level === level).length;

  function startNewRun() {
    setIndex(0);
    setScore(0);
    setAnswered(0);
    setSessionXp(0);
    setResult(null);
    setCanCheck(false);
    setRunId((id) => id + 1);
    setPhase("play");
  }

  function onCheck() {
    if (result) return;
    const grade = gradeRef.current?.grade();
    if (!grade) return;
    const gain = grade.ok ? 8 : 0;
    if (grade.ok) {
      setScore((value) => value + 1);
      setSessionXp((value) => value + gain);
    }
    setAnswered((value) => value + 1);
    recordAnswer(grade.ok, gain);
    setResult(grade);
  }

  function onContinue() {
    if (!result || !exercise) return;
    const last = index + 1 >= total;
    if (last) {
      const bonus = score * 100 >= MILESTONE_PASS_PERCENT * total ? 50 : 15;
      finishMilestone(level, mode, score, total, bonus);
      setSessionXp((value) => value + bonus);
      setPhase("done");
      return;
    }
    setResult(null);
    setCanCheck(false);
    setIndex((value) => value + 1);
  }

  const ModeIcon = mode === "reading" ? BookOpen : mode === "listening" ? Headphones : Shuffle;
  const finalPct = total > 0 ? Math.round((100 * score) / total) : 0;
  const earnedStars = milestoneStars(score, total);
  const passed = earnedStars > 0;

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      {phase === "intro" && (
        <>
          <header className="flex items-center gap-2 px-4 pt-4">
            <button
              type="button"
              aria-label="Leave milestone exam"
              onClick={onExit}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-sm font-extrabold text-muted">
              CEFR {level} Milestone Exam
            </p>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-4 pb-6 lg:px-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-marigold text-ink">
              <ModeIcon className="h-7 w-7" />
            </div>
            <h1 className="mt-4 text-3xl font-extrabold text-balance">
              {level} Milestone · {modeInfo.title}
            </h1>
            <p className="mt-2 text-pretty text-muted">{modeInfo.description}</p>

            <dl className="mt-6 grid grid-cols-2 gap-2">
              <div className="rounded-2xl bg-soft px-4 py-3">
                <dt className="text-xs font-extrabold tracking-wide text-muted uppercase">Questions</dt>
                <dd className="text-2xl font-extrabold tabular-nums">{total} words</dd>
              </div>
              <div className="rounded-2xl bg-soft px-4 py-3">
                <dt className="text-xs font-extrabold tracking-wide text-muted uppercase">Word pool</dt>
                <dd className="text-2xl font-extrabold tabular-nums">{levelPoolSize} {level}</dd>
              </div>
              <div className="rounded-2xl bg-soft px-4 py-3">
                <dt className="text-xs font-extrabold tracking-wide text-muted uppercase">Pass target</dt>
                <dd className="text-xl font-extrabold tabular-nums">{MILESTONE_PASS_PERCENT}%+</dd>
              </div>
              <div className="rounded-2xl bg-soft px-4 py-3">
                <dt className="text-xs font-extrabold tracking-wide text-muted uppercase">Best score</dt>
                <dd className="text-xl font-extrabold tabular-nums">
                  {prevRecord
                    ? `${Math.round((100 * prevRecord.bestScore) / prevRecord.total)}%`
                    : "Not taken"}
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-sm text-pretty text-muted">
              Each run draws {total} fresh random {level} words. No 5-heart limit — finish every question to get your score.
            </p>
          </div>

          <footer className="safe-bottom px-4 pt-2 lg:px-8 lg:pb-6">
            <button
              type="button"
              onClick={() => setPhase("play")}
              className="btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
            >
              Start {total}-word exam
            </button>
          </footer>
        </>
      )}

      {phase === "play" && exercise && (
        <>
          <header className="flex items-center gap-3 px-3 pt-3 lg:px-6 lg:pt-5">
            <button
              type="button"
              aria-label="Leave milestone exam"
              onClick={() => setConfirmExit(true)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-soft" aria-hidden>
              <div
                className="h-full rounded-full bg-marigold transition-[width] duration-300 ease-out"
                style={{ width: `${((index + (result ? 1 : 0)) / total) * 100}%` }}
              />
            </div>
            <p className="shrink-0 text-sm font-extrabold text-muted tabular-nums">
              {index + 1}/{total}
            </p>
          </header>

          <div className="flex items-center justify-between px-5 pt-2 text-xs font-extrabold tracking-wide text-muted uppercase lg:px-8">
            <span>{level} · {modeInfo.title}</span>
            <span className="tabular-nums">Score {score}/{answered}</span>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-3 pb-4 lg:px-8 lg:pt-5">
            <ExerciseBody
              key={`${runId}-${index}`}
              exercise={exercise}
              speaker={speaker}
              showRoman={showRoman}
              autoplay={autoplay}
              result={result}
              gradeRef={gradeRef}
              onAnswer={() => undefined}
              onCanCheck={onCanCheck}
              examMode={mode}
            />
          </div>

          {result ? (
            <footer
              className={cn(
                "safe-bottom px-4 pt-4 lg:px-8 lg:pb-6",
                result.ok ? "bg-teal text-on-accent" : "bg-chili text-on-accent",
              )}
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
              {showTones && exercise.kind === "choice" && (
                <ToneStrip roman={exercise.word.roman} variant="inverse" className="mt-1.5" />
              )}
              <button
                type="button"
                onClick={onContinue}
                className="btn-3d btn-sheet mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
              >
                {index + 1 >= total ? "Finish exam" : "Continue"}
              </button>
            </footer>
          ) : (
            <footer className="safe-bottom px-4 pt-2 lg:px-8 lg:pb-6">
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
        <>
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div
              className={cn(
                "grid h-24 w-24 place-items-center rounded-full",
                passed ? "bg-teal text-on-accent" : "bg-marigold text-ink",
              )}
            >
              {passed ? <Check className="h-12 w-12" /> : <Award className="h-12 w-12" />}
            </div>
            <p className="mt-5 text-xs font-extrabold tracking-wide text-chili uppercase">
              {level} Milestone · {modeInfo.title}
            </p>
            <h2 className="mt-1 text-3xl font-extrabold text-balance">
              {passed ? "Exam passed" : "Keep practicing"}
            </h2>
            <p className="mt-2 text-4xl font-extrabold tabular-nums">
              {score}/{total} · {finalPct}%
            </p>
            <p className="mt-2 max-w-xs text-sm text-pretty text-muted">
              {passed
                ? `You cleared the ${MILESTONE_PASS_PERCENT}% CEFR ${level} benchmark.`
                : `Reach ${MILESTONE_PASS_PERCENT}% to pass this ${level} milestone test.`}
            </p>
            {earnedStars > 0 && (
              <div className="mt-4 flex items-center gap-1 text-marigold" aria-label={`${earnedStars} stars`}>
                {Array.from({ length: earnedStars }, (_, star) => (
                  <Star key={star} className="h-5 w-5" fill="currentColor" />
                ))}
              </div>
            )}
            <p className="mt-3 text-xl font-extrabold text-chili tabular-nums">+{sessionXp} XP</p>
          </div>
          <footer className="safe-bottom grid gap-2 px-4 pt-2 lg:px-8 lg:pb-6">
            <button
              type="button"
              onClick={onExit}
              className="btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
            >
              Back to path
            </button>
            <button
              type="button"
              onClick={startNewRun}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-line font-extrabold"
            >
              <RotateCcw className="h-4 w-4" />
              Retake with {total} new words
            </button>
          </footer>
        </>
      )}

      {confirmExit && (
        <div className="absolute inset-0 z-20 flex items-end justify-center bg-ink/40 p-4 sm:items-center">
          <div className="w-full max-w-sm rounded-3xl bg-sheet p-5">
            <h2 className="text-xl font-extrabold">Leave this exam?</h2>
            <p className="mt-1 text-sm text-pretty text-muted">
              XP you earned stays, but this 100-word attempt will end here.
            </p>
            <button
              type="button"
              onClick={onExit}
              className="btn-3d btn-chili mt-4 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
            >
              Leave exam
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
