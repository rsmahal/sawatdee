import { useEffect, useMemo, useState, type RefObject } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { resolveTok, type Exercise, type Speaker, type Word } from "@/lib/curriculum";
import { shuffle } from "@/lib/shuffle";
import { speakThai, stopSpeech } from "@/lib/speech";

export type Grade = { ok: boolean; solution: string };
export type GradeHandle = { grade: () => Grade | null };

function gloss(word: Word, showRoman: boolean) {
  return showRoman ? `${word.thai} · ${word.roman} — ${word.en}` : `${word.thai} — ${word.en}`;
}

export function ExerciseBody({
  exercise,
  speaker,
  showRoman,
  autoplay,
  result,
  gradeRef,
  onAnswer,
  onCanCheck,
}: {
  exercise: Exercise;
  speaker: Speaker;
  showRoman: boolean;
  autoplay: boolean;
  result: Grade | null;
  gradeRef: RefObject<GradeHandle | null>;
  onAnswer: (grade: Grade) => void;
  onCanCheck: (ready: boolean) => void;
}) {
  if (exercise.kind === "choice") {
    return (
      <Choice
        exercise={exercise}
        showRoman={showRoman}
        autoplay={autoplay}
        result={result}
        gradeRef={gradeRef}
        onCanCheck={onCanCheck}
      />
    );
  }
  if (exercise.kind === "tiles") {
    return (
      <Tiles
        exercise={exercise}
        speaker={speaker}
        showRoman={showRoman}
        autoplay={autoplay}
        result={result}
        gradeRef={gradeRef}
        onCanCheck={onCanCheck}
      />
    );
  }
  return (
    <Pairs
      exercise={exercise}
      showRoman={showRoman}
      result={result}
      gradeRef={gradeRef}
      onAnswer={onAnswer}
      onCanCheck={onCanCheck}
    />
  );
}

function Choice({
  exercise,
  showRoman,
  autoplay,
  result,
  gradeRef,
  onCanCheck,
}: {
  exercise: Extract<Exercise, { kind: "choice" }>;
  showRoman: boolean;
  autoplay: boolean;
  result: Grade | null;
  gradeRef: RefObject<GradeHandle | null>;
  onCanCheck: (ready: boolean) => void;
}) {
  const options = useMemo(() => shuffle([exercise.word, ...exercise.traps]), [exercise]);
  const [picked, setPicked] = useState<string | null>(null);
  const [peek, setPeek] = useState(false);

  useEffect(() => {
    if (autoplay && (exercise.dir === "th-en" || exercise.dir === "listen")) {
      speakThai(exercise.word.thai);
    }
    return () => stopSpeech();
  }, [autoplay, exercise]);

  useEffect(() => {
    if (result && autoplay && exercise.dir === "en-th") {
      speakThai(exercise.word.thai);
    }
  }, [result, autoplay, exercise]);

  useEffect(() => {
    onCanCheck(picked !== null);
  }, [picked, onCanCheck]);

  gradeRef.current = {
    grade: () =>
      picked
        ? { ok: picked === exercise.word.thai, solution: gloss(exercise.word, showRoman) }
        : null,
  };

  const revealed = exercise.dir !== "listen" || peek || Boolean(result);

  return (
    <div className="flex flex-col gap-4">
      <div className="px-1 text-center">
        <p className="text-xs font-extrabold tracking-wide text-muted uppercase">
          {exercise.dir === "listen"
            ? "What did you hear?"
            : exercise.dir === "th-en"
              ? "What does this mean?"
              : "How do you say this?"}
        </p>
        {exercise.dir === "en-th" ? (
          <h2 className="mt-2 text-3xl font-extrabold text-balance">{exercise.word.en}</h2>
        ) : revealed ? (
          <>
            <h2 lang="th" className="thai-display mt-2 text-4xl text-balance">
              {exercise.word.thai}
            </h2>
            {showRoman && exercise.dir !== "listen" && (
              <p className="mt-1 text-sm font-bold text-muted">{exercise.word.roman}</p>
            )}
          </>
        ) : (
          <p className="mt-3 text-lg font-extrabold">Listen first</p>
        )}
        <div className="mt-3 flex items-center justify-center gap-2">
          {(exercise.dir !== "en-th" || Boolean(result)) && (
            <button
              type="button"
              aria-label="Play Thai"
              onClick={() => speakThai(exercise.word.thai)}
              className="grid h-12 w-12 place-items-center rounded-full bg-soft text-chili transition-transform duration-150 active:scale-[0.96]"
            >
              <Volume2 className="h-5 w-5" />
            </button>
          )}
          {exercise.dir === "listen" && !revealed && (
            <button
              type="button"
              onClick={() => setPeek(true)}
              className="min-h-12 rounded-full px-4 text-sm font-extrabold text-teal"
            >
              Show the word
            </button>
          )}
        </div>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((option) => {
          const primary = exercise.dir === "en-th" ? option.thai : option.en;
          const sub = exercise.dir === "en-th" && showRoman ? option.roman : undefined;
          const isPicked = picked === option.thai;
          const isAnswer = option.thai === exercise.word.thai;
          const locked = Boolean(result);
          const filled = locked && (isAnswer || (isPicked && !isAnswer));
          return (
            <button
              key={option.thai}
              type="button"
              disabled={locked}
              aria-pressed={isPicked}
              onClick={() => setPicked(option.thai)}
              className={cn(
                "min-h-14 rounded-2xl border-2 px-4 py-3 text-left transition-transform duration-150 active:not-disabled:scale-[0.96]",
                locked && isAnswer && "border-teal bg-teal text-on-accent",
                locked && isPicked && !isAnswer && "border-chili bg-chili text-on-accent",
                locked && !isAnswer && !isPicked && "border-line opacity-50",
                !locked && isPicked && "border-chili bg-soft",
                !locked && !isPicked && "border-line bg-sheet",
              )}
            >
              <span
                lang={exercise.dir === "en-th" ? "th" : undefined}
                className={cn(
                  "block text-lg font-extrabold",
                  exercise.dir === "en-th" && "thai-display text-2xl",
                )}
              >
                {primary}
              </span>
              {sub && (
                <span className={cn("block text-sm font-bold", filled ? "text-on-accent/80" : "text-muted")}>
                  {sub}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Tiles({
  exercise,
  speaker,
  showRoman,
  autoplay,
  result,
  gradeRef,
  onCanCheck,
}: {
  exercise: Extract<Exercise, { kind: "tiles" }>;
  speaker: Speaker;
  showRoman: boolean;
  autoplay: boolean;
  result: Grade | null;
  gradeRef: RefObject<GradeHandle | null>;
  onCanCheck: (ready: boolean) => void;
}) {
  const model = useMemo(() => {
    const answer = exercise.answer.map((tok, index) => ({
      key: `a-${index}`,
      word: resolveTok(tok, speaker),
    }));
    const extra = exercise.extra.map((tok, index) => ({
      key: `e-${index}`,
      word: resolveTok(tok, speaker),
    }));
    return { answer, bank: shuffle([...answer, ...extra]) };
  }, [exercise, speaker]);
  const [pickedKeys, setPickedKeys] = useState<string[]>([]);

  useEffect(() => {
    onCanCheck(pickedKeys.length === model.answer.length && model.answer.length > 0);
  }, [pickedKeys, model.answer.length, onCanCheck]);

  const phrase = model.answer.map((chip) => chip.word.thai).join(" ");
  const spokenTarget = model.answer.map((chip) => chip.word.thai).join("");
  const roman = model.answer.map((chip) => chip.word.roman).join(" ");

  useEffect(() => {
    if (result && autoplay && spokenTarget) {
      speakThai(spokenTarget);
    }
  }, [result, autoplay, spokenTarget]);

  useEffect(() => () => stopSpeech(), []);

  gradeRef.current = {
    grade: () => {
      if (pickedKeys.length !== model.answer.length) return null;
      const built = pickedKeys.map((key) => model.bank.find((chip) => chip.key === key)?.word.thai ?? "");
      const target = model.answer.map((chip) => chip.word.thai);
      return {
        ok: built.join("") === target.join(""),
        solution: showRoman ? `${phrase} · ${roman}` : phrase,
      };
    },
  };

  function toggle(key: string) {
    if (result) return;
    const isRemoving = pickedKeys.includes(key);
    if (!isRemoving && autoplay) {
      const chip = model.bank.find((item) => item.key === key);
      if (chip) speakThai(chip.word.thai);
    }
    setPickedKeys((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );
  }

  const picked = pickedKeys.map((key) => model.bank.find((chip) => chip.key === key)!);
  const bank = model.bank.filter((chip) => !pickedKeys.includes(chip.key));
  const spokenBuilt = picked.map((chip) => chip.word.thai).join("");

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <p className="text-xs font-extrabold tracking-wide text-muted uppercase">Build this in Thai</p>
        <h2 className="mt-2 text-3xl font-extrabold text-balance">{exercise.prompt}</h2>
        {(Boolean(result) || picked.length > 0) && (
          <div className="mt-3 flex justify-center">
            <button
              type="button"
              aria-label={result ? "Hear Thai answer" : "Hear built Thai phrase"}
              onClick={() => speakThai(result ? spokenTarget : spokenBuilt)}
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-soft px-4 text-sm font-extrabold text-chili transition-transform duration-150 active:scale-[0.96]"
            >
              <Volume2 className="h-4 w-4" />
              {result ? "Hear phrase" : "Hear what you built"}
            </button>
          </div>
        )}
      </div>
      <div className="flex min-h-20 flex-wrap content-start gap-2 rounded-2xl border-2 border-dashed border-line bg-paper p-3">
        {picked.length === 0 && <p className="text-sm font-bold text-muted">Tap the words below</p>}
        {picked.map((chip) => (
          <Tile key={chip.key} word={chip.word} showRoman={showRoman} disabled={Boolean(result)} onClick={() => toggle(chip.key)} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {bank.map((chip) => (
          <Tile key={chip.key} word={chip.word} showRoman={showRoman} disabled={Boolean(result)} onClick={() => toggle(chip.key)} />
        ))}
      </div>
    </div>
  );
}

function Tile({
  word,
  showRoman,
  disabled,
  onClick,
}: {
  word: Word;
  showRoman: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="min-h-12 rounded-2xl border-2 border-line bg-sheet px-3 py-1 text-center transition-transform duration-150 active:not-disabled:scale-[0.96]"
    >
      <span lang="th" className="thai-display block text-lg">
        {word.thai}
      </span>
      {showRoman && <span className="block text-xs font-bold text-muted">{word.roman}</span>}
    </button>
  );
}

function Pairs({
  exercise,
  showRoman,
  result,
  gradeRef,
  onAnswer,
  onCanCheck,
}: {
  exercise: Extract<Exercise, { kind: "pairs" }>;
  showRoman: boolean;
  result: Grade | null;
  gradeRef: RefObject<GradeHandle | null>;
  onAnswer: (grade: Grade) => void;
  onCanCheck: (ready: boolean) => void;
}) {
  const right = useMemo(() => shuffle(exercise.pairs), [exercise]);
  const [leftPick, setLeftPick] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [bad, setBad] = useState(false);

  gradeRef.current = { grade: () => null };

  useEffect(() => {
    onCanCheck(false);
  }, [onCanCheck]);

  useEffect(() => () => stopSpeech(), []);

  useEffect(() => {
    if (!bad) return;
    const timer = window.setTimeout(() => {
      setBad(false);
      setLeftPick(null);
    }, 420);
    return () => window.clearTimeout(timer);
  }, [bad]);

  function pickLeft(pair: Word) {
    speakThai(pair.thai);
    if (result || matched.includes(pair.en)) return;
    setLeftPick(pair.en);
  }

  function pickRight(en: string) {
    if (!leftPick || result || matched.includes(en)) return;
    if (leftPick === en) {
      const next = [...matched, en];
      setMatched(next);
      setLeftPick(null);
      if (next.length === exercise.pairs.length) onAnswer({ ok: true, solution: "" });
      return;
    }
    setBad(true);
  }

  return (
    <div className={cn("flex flex-col gap-4", bad && "nudge")}>
      <div className="text-center">
        <p className="text-xs font-extrabold tracking-wide text-muted uppercase">Match the pairs</p>
        <h2 className="mt-2 text-2xl font-extrabold text-balance">Thai on the left, English on the right</h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid content-start gap-2">
          {exercise.pairs.map((pair) => {
            const done = matched.includes(pair.en);
            const active = leftPick === pair.en;
            return (
              <button
                key={pair.thai}
                type="button"
                aria-label={`Play and select ${pair.thai}`}
                onClick={() => pickLeft(pair)}
                className={cn(
                  "flex min-h-14 items-start justify-between gap-2 rounded-2xl border-2 px-3 py-2 text-left break-words transition-transform duration-150 active:scale-[0.97]",
                  done && "border-teal bg-teal text-on-accent",
                  !done && active && "border-chili bg-soft",
                  !done && !active && "border-line bg-sheet",
                )}
              >
                <span className="min-w-0">
                  <span lang="th" className="thai-display block text-lg">
                    {pair.thai}
                  </span>
                  {showRoman && !done && <span className="block text-xs font-bold text-muted">{pair.roman}</span>}
                </span>
                <Volume2 className={cn("mt-1 h-4 w-4 shrink-0", done ? "text-on-accent/85" : "text-chili")} aria-hidden />
              </button>
            );
          })}
        </div>
        <div className="grid content-start gap-2">
          {right.map((pair) => {
            const done = matched.includes(pair.en);
            return (
              <button
                key={pair.en}
                type="button"
                disabled={done || Boolean(result)}
                onClick={() => pickRight(pair.en)}
                className={cn(
                  "min-h-14 rounded-2xl border-2 px-3 py-2 text-left text-base font-extrabold break-words",
                  done ? "border-teal bg-teal text-on-accent" : "border-line bg-sheet",
                )}
              >
                {pair.en}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
