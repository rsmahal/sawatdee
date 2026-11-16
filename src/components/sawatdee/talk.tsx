import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Lock,
  MessageCircle,
  Play,
  RotateCcw,
  Square,
  Star,
  Volume2,
  X,
} from "lucide-react";
import { useCatalog } from "@/lib/catalog-store";
import { cn } from "@/lib/cn";
import {
  conversations,
  conversationById,
  conversationUnlockStatus,
  resolveTokensRoman,
  resolveTokensText,
} from "@/lib/conversations";
import { levels, resolveTok, type CefrLevel, type Conversation, type Speaker, type Tok, type Word } from "@/lib/curriculum";
import { useProgress, xpGain } from "@/lib/progress";
import { shuffle } from "@/lib/shuffle";
import { speakThai, stopSpeech } from "@/lib/speech";

type FilterMode = "all" | "unlocked" | CefrLevel;

export function Talk({
  onStart,
  onGoLearn,
}: {
  onStart: (id: string) => void;
  onGoLearn: () => void;
}) {
  const units = useCatalog((state) => state.units);
  const lessons = useCatalog((state) => state.lessons);
  const completed = useProgress((state) => state.completed);
  const talkCompleted = useProgress((state) => state.talkCompleted);
  const [filter, setFilter] = useState<FilterMode>("all");

  const entries = useMemo(() => {
    return conversations.map((conv) => ({
      conv,
      unit: units.find((u) => u.id === conv.unitId),
      status: conversationUnlockStatus(conv, completed, lessons),
      stars: talkCompleted[conv.id] ?? 0,
    }));
  }, [units, lessons, completed, talkCompleted]);

  const unlockedCount = entries.filter((item) => item.status.unlocked).length;
  const doneCount = entries.filter((item) => item.stars > 0).length;

  const filtered = entries.filter((item) => {
    if (filter === "unlocked") return item.status.unlocked;
    if (filter === "A1" || filter === "A2") return item.conv.level === filter;
    return true;
  });

  const filterButtons: { id: FilterMode; label: string }[] = [
    { id: "all", label: `All (${entries.length})` },
    { id: "unlocked", label: `Unlocked (${unlockedCount})` },
    { id: "A1", label: "A1" },
    { id: "A2", label: "A2" },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-5 pt-6 pb-10 lg:px-8 lg:py-8">
      <header>
        <p className="text-sm font-extrabold text-chili">Talk</p>
        <h1 className="text-3xl font-extrabold text-balance">Real-life conversations</h1>
        <p className="mt-2 max-w-2xl text-pretty text-muted">
          Practice A1 and A2 dialogues built around every unit. Conversations stay locked until you finish
          the lessons that teach their vocabulary.
        </p>
      </header>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-extrabold text-muted tabular-nums">
          {unlockedCount}/{entries.length} unlocked · {doneCount}/{entries.length} completed
        </p>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter conversations">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              aria-pressed={filter === btn.id}
              onClick={() => setFilter(btn.id)}
              className={cn(
                "min-h-9 rounded-full px-3.5 text-xs font-extrabold transition-colors",
                filter === btn.id ? "bg-ink text-sheet" : "bg-soft text-muted hover:text-ink",
              )}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-line bg-sheet p-6 text-center">
          <p className="text-lg font-extrabold">No unlocked conversations yet</p>
          <p className="mt-1 text-sm text-pretty text-muted">
            Finish Unit 1 lessons (Hello, Thanks, Yes & no) on the Learn path to unlock your first conversation.
          </p>
          <button
            type="button"
            onClick={onGoLearn}
            className="btn-3d btn-chili mt-4 inline-flex min-h-12 items-center gap-2 rounded-2xl px-5 font-extrabold"
          >
            Go to Learn
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-10">
          {levels.map((level) => {
            const levelItems = filtered.filter((item) => item.conv.level === level.id);
            if (levelItems.length === 0) return null;
            return (
              <section key={level.id} className="grid gap-4">
                <header>
                  <p className="text-xs font-extrabold tracking-wide text-chili uppercase">
                    CEFR {level.id}
                  </p>
                  <h2 className="text-2xl font-extrabold">{level.title}</h2>
                </header>
                <div className="grid gap-4 md:grid-cols-2">
                  {levelItems.map(({ conv, unit, status, stars }) => (
                    <ConversationCard
                      key={conv.id}
                      conv={conv}
                      unitLabel={unit ? `${unit.kicker} · ${unit.title}` : conv.unitId}
                      unlocked={status.unlocked}
                      missingTitles={status.missingLessons.map((l) => l.title)}
                      learnedWordsCount={status.learnedWordsCount}
                      totalWordsCount={status.totalWordsCount}
                      stars={stars}
                      onStart={() => onStart(conv.id)}
                      onGoLearn={onGoLearn}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ConversationCard({
  conv,
  unitLabel,
  unlocked,
  missingTitles,
  learnedWordsCount,
  totalWordsCount,
  stars,
  onStart,
  onGoLearn,
}: {
  conv: Conversation;
  unitLabel: string;
  unlocked: boolean;
  missingTitles: string[];
  learnedWordsCount: number;
  totalWordsCount: number;
  stars: number;
  onStart: () => void;
  onGoLearn: () => void;
}) {
  const done = stars > 0;
  return (
    <article
      className={cn(
        "flex flex-col justify-between rounded-3xl border p-5 transition-colors",
        unlocked ? "border-line bg-sheet" : "border-line/70 bg-soft/60",
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs font-extrabold tracking-wide text-muted uppercase">{unitLabel}</p>
          {done ? (
            <div className="flex items-center gap-0.5" aria-label={`${stars} of 3 stars`}>
              {[1, 2, 3].map((n) => (
                <Star
                  key={n}
                  className={cn("h-4 w-4", n <= stars ? "text-marigold" : "text-line")}
                  fill={n <= stars ? "currentColor" : "none"}
                />
              ))}
            </div>
          ) : unlocked ? (
            <span className="rounded-full bg-soft px-2.5 py-0.5 text-[11px] font-extrabold text-teal uppercase">
              Ready
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-sheet px-2.5 py-0.5 text-[11px] font-extrabold text-muted">
              <Lock className="h-3 w-3" />
              Locked
            </span>
          )}
        </div>

        <h3 className="mt-2 text-lg font-extrabold text-balance">{conv.title}</h3>
        <p className="mt-1 text-sm text-pretty text-muted">{conv.setting}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold text-muted">
          <span className="inline-flex items-center gap-1 rounded-full bg-paper px-2.5 py-1">
            <MessageCircle className="h-3.5 w-3.5 text-chili" />
            With {conv.npcName} ({conv.npcRole})
          </span>
          <span className="tabular-nums">
            {learnedWordsCount}/{totalWordsCount} vocab learned
          </span>
        </div>

        {!unlocked && missingTitles.length > 0 && (
          <p className="mt-3 rounded-2xl bg-sheet px-3 py-2 text-xs font-bold text-pretty text-muted">
            Complete{" "}
            <span className="text-ink">
              {missingTitles.slice(0, 3).join(", ")}
              {missingTitles.length > 3 ? ` +${missingTitles.length - 3} more` : ""}
            </span>{" "}
            to unlock.
          </p>
        )}
      </div>

      <div className="mt-4">
        {unlocked ? (
          <button
            type="button"
            onClick={onStart}
            className={cn(
              "btn-3d flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl font-extrabold",
              done ? "btn-teal" : "btn-chili",
            )}
          >
            {done ? <RotateCcw className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {done ? "Practice again" : "Start conversation"}
          </button>
        ) : (
          <button
            type="button"
            onClick={onGoLearn}
            className="flex min-h-11 w-full items-center justify-center gap-1.5 rounded-2xl border-2 border-line bg-sheet text-sm font-extrabold text-muted transition-colors hover:text-ink"
          >
            Go to Learn
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </article>
  );
}

type RevealedMessage = {
  id: string;
  role: "npc" | "user";
  name: string;
  voice: Speaker;
  thai: string;
  roman: string;
  en: string;
  note?: string;
};

export function TalkSession({
  conversationId,
  onExit,
}: {
  conversationId: string;
  onExit: () => void;
}) {
  const conv = conversationById(conversationId);
  const userSpeaker = useProgress((state) => state.speaker);
  const showRoman = useProgress((state) => state.showRoman);
  const autoplay = useProgress((state) => state.autoplay);
  const recordAnswer = useProgress((state) => state.recordAnswer);
  const finishConversation = useProgress((state) => state.finishConversation);
  const ingestWords = useProgress((state) => state.ingestWords);

  const [stepIndex, setStepIndex] = useState(0);
  const [history, setHistory] = useState<RevealedMessage[]>([]);
  const [combo, setCombo] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [phase, setPhase] = useState<"play" | "done">("play");
  const [stars, setStars] = useState(3);
  const [confirmExit, setConfirmExit] = useState(false);

  // Interactive reply state for current turn
  const [blankPicks, setBlankPicks] = useState<Record<number, string>>({});
  const [activeBlankIdx, setActiveBlankIdx] = useState<number | null>(null);
  const [pickedTileKeys, setPickedTileKeys] = useState<string[]>([]);
  const [gradeResult, setGradeResult] = useState<{
    ok: boolean;
    thai: string;
    roman: string;
    en: string;
    coach?: string;
  } | null>(null);

  // Sequential full-dialogue playback state
  const [playingAllIdx, setPlayingAllIdx] = useState<number | null>(null);
  const playingAllRef = useRef(false);
  const scrollBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      playingAllRef.current = false;
      stopSpeech();
    };
  }, []);

  const currentTurn = conv?.turns[stepIndex];
  const totalTurns = conv?.turns.length ?? 0;

  // Auto-reveal & autoplay when stepping onto a `line` turn
  useEffect(() => {
    if (!conv || phase !== "play" || !currentTurn || currentTurn.kind !== "line") return;
    const msgSpeaker = currentTurn.line.speaker === "npc" ? conv.npcSpeaker : userSpeaker;
    const msgId = `turn-${stepIndex}`;
    const thai = resolveTokensText(currentTurn.line.tokens, msgSpeaker);
    const roman = resolveTokensRoman(currentTurn.line.tokens, msgSpeaker, currentTurn.line.roman);
    const msg: RevealedMessage = {
      id: msgId,
      role: currentTurn.line.speaker,
      name: currentTurn.line.speaker === "npc" ? conv.npcName : "You",
      voice: msgSpeaker,
      thai,
      roman,
      en: currentTurn.line.en,
      note: currentTurn.note,
    };

    setHistory((prev) => (prev.some((item) => item.id === msgId) ? prev : [...prev, msg]));
    if (autoplay) {
      speakThai(thai, msgSpeaker);
    }
  }, [phase, stepIndex, currentTurn, conv, userSpeaker, autoplay]);

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [history.length, gradeResult]);

  // Shuffled word bank and slots for `reply-blank` turns
  const blankModel = useMemo(() => {
    if (!currentTurn || currentTurn.kind !== "reply-blank") return null;
    const parts = currentTurn.parts.map((part, idx) => ({
      idx,
      kind: part.kind,
      word: resolveTok(part.token, userSpeaker),
    }));
    const blankIndices = parts.filter((part) => part.kind === "blank").map((part) => part.idx);
    const answers = parts
      .filter((part) => part.kind === "blank")
      .map((part, i) => ({
        key: `b-${i}`,
        word: part.word,
      }));
    const extras = currentTurn.extra.map((tok: Tok, i: number) => ({
      key: `x-${i}`,
      word: resolveTok(tok, userSpeaker),
    }));
    return {
      parts,
      blankIndices,
      bank: shuffle([...answers, ...extras]),
    };
  }, [currentTurn, userSpeaker]);

  const focusedBlankIdx = useMemo(() => {
    if (!blankModel) return null;
    if (activeBlankIdx !== null && blankModel.blankIndices.includes(activeBlankIdx)) {
      return activeBlankIdx;
    }
    return blankModel.blankIndices.find((idx) => !blankPicks[idx]) ?? blankModel.blankIndices[0] ?? null;
  }, [blankModel, activeBlankIdx, blankPicks]);

  // Shuffled tile bank for `reply-tiles` turns
  const tileModel = useMemo(() => {
    if (!currentTurn || currentTurn.kind !== "reply-tiles") return null;
    const answer = currentTurn.answer.map((tok: Tok, idx: number) => ({
      key: `a-${idx}`,
      word: resolveTok(tok, userSpeaker),
    }));
    const extra = currentTurn.extra.map((tok: Tok, idx: number) => ({
      key: `e-${idx}`,
      word: resolveTok(tok, userSpeaker),
    }));
    return {
      answer,
      bank: shuffle([...answer, ...extra]),
    };
  }, [currentTurn, userSpeaker]);

  if (!conv) return null;

  function stopPlayingAll() {
    playingAllRef.current = false;
    setPlayingAllIdx(null);
    stopSpeech();
  }

  function startPlayAll(messages: RevealedMessage[]) {
    if (messages.length === 0) return;
    playingAllRef.current = true;
    const playAt = (idx: number) => {
      if (!playingAllRef.current || idx >= messages.length) {
        playingAllRef.current = false;
        setPlayingAllIdx(null);
        return;
      }
      const item = messages[idx]!;
      setPlayingAllIdx(idx);
      speakThai(item.thai, item.voice, undefined, () => {
        if (!playingAllRef.current) return;
        window.setTimeout(() => playAt(idx + 1), 280);
      });
    };
    playAt(0);
  }

  function advanceTurn(appendedMsg?: RevealedMessage) {
    stopPlayingAll();
    const nextHistory =
      appendedMsg && !history.some((m) => m.id === appendedMsg.id)
        ? [...history, appendedMsg]
        : history;
    if (appendedMsg) setHistory(nextHistory);

    setBlankPicks({});
    setActiveBlankIdx(null);
    setPickedTileKeys([]);
    setGradeResult(null);

    if (stepIndex + 1 >= totalTurns) {
      const earned = mistakes === 0 ? 3 : mistakes <= 1 ? 2 : 1;
      setStars(earned);
      setSessionXp((x) => x + 25);
      finishConversation(conv!.id, earned, 25);
      ingestWords(conv!.words);
      setPhase("done");
      return;
    }
    setStepIndex((i) => i + 1);
  }

  function handlePickBlankOption(chip: { key: string; word: Word }) {
    if (!blankModel || gradeResult) return;
    const usedKeys = new Set(Object.values(blankPicks));
    if (usedKeys.has(chip.key)) return;
    const targetIdx =
      focusedBlankIdx !== null && !blankPicks[focusedBlankIdx]
        ? focusedBlankIdx
        : (blankModel.blankIndices.find((idx) => !blankPicks[idx]) ?? focusedBlankIdx);
    if (targetIdx === null) return;
    if (autoplay) speakThai(chip.word.thai, userSpeaker);
    const nextPicks = { ...blankPicks, [targetIdx]: chip.key };
    setBlankPicks(nextPicks);
    const nextEmpty = blankModel.blankIndices.find((idx) => !nextPicks[idx]);
    setActiveBlankIdx(nextEmpty ?? null);
  }

  function handleClickBlankSlot(partIdx: number) {
    if (gradeResult) return;
    if (blankPicks[partIdx]) {
      setBlankPicks((prev) => {
        const next = { ...prev };
        delete next[partIdx];
        return next;
      });
    }
    setActiveBlankIdx(partIdx);
  }

  function handleCheckBlank() {
    if (!currentTurn || currentTurn.kind !== "reply-blank" || !blankModel || gradeResult) return;
    if (!blankModel.blankIndices.every((idx) => Boolean(blankPicks[idx]))) return;
    const ok = blankModel.parts.every((part) => {
      if (part.kind !== "blank") return true;
      const chosenKey = blankPicks[part.idx];
      const chosenChip = blankModel.bank.find((item) => item.key === chosenKey);
      return chosenChip?.word.thai === part.word.thai;
    });
    const tokens = currentTurn.parts.map((part) => part.token);
    const thai = resolveTokensText(tokens, userSpeaker);
    const roman = resolveTokensRoman(tokens, userSpeaker, currentTurn.roman);
    const gain = ok ? xpGain(combo) : 0;
    if (ok) {
      setCombo((c) => c + 1);
      setSessionXp((x) => x + gain);
    } else {
      setCombo(0);
      setMistakes((m) => m + 1);
    }
    recordAnswer(ok, gain);
    setGradeResult({ ok, thai, roman, en: currentTurn.en, coach: currentTurn.coach });
    speakThai(thai, userSpeaker);
  }

  function handleCheckTiles() {
    if (!currentTurn || currentTurn.kind !== "reply-tiles" || !tileModel || gradeResult) return;
    const pickedWords = pickedTileKeys
      .map((key) => tileModel.bank.find((item) => item.key === key))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
    if (pickedWords.length !== tileModel.answer.length) return;

    const userThai = pickedWords.map((item) => item.word.thai).join("");
    const correctThai = tileModel.answer.map((item) => item.word.thai).join("");
    const roman = resolveTokensRoman(currentTurn.answer, userSpeaker, currentTurn.roman);
    const ok = userThai === correctThai;
    const gain = ok ? xpGain(combo) : 0;
    if (ok) {
      setCombo((c) => c + 1);
      setSessionXp((x) => x + gain);
    } else {
      setCombo(0);
      setMistakes((m) => m + 1);
    }
    recordAnswer(ok, gain);
    setGradeResult({ ok, thai: correctThai, roman, en: currentTurn.en, coach: currentTurn.coach });
    speakThai(correctThai, userSpeaker);
  }

  function handleContinueAfterGrade() {
    if (!gradeResult) return;
    advanceTurn({
      id: `turn-${stepIndex}`,
      role: "user",
      name: "You",
      voice: userSpeaker,
      thai: gradeResult.thai,
      roman: gradeResult.roman,
      en: gradeResult.en,
    });
  }

  const progressRatio =
    phase === "done"
      ? 100
      : ((stepIndex + (currentTurn?.kind === "line" || gradeResult ? 1 : 0)) / totalTurns) * 100;

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      {phase === "play" && (
        <>
          <header className="flex items-center gap-3 border-b border-line px-3 py-3 lg:px-6 lg:py-4">
            <button
              type="button"
              aria-label="Leave conversation"
              onClick={() => setConfirmExit(true)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2 text-xs font-extrabold text-muted">
                <span className="truncate">{conv.title}</span>
                <span className="shrink-0 tabular-nums">
                  {Math.min(stepIndex + 1, totalTurns)}/{totalTurns}
                </span>
              </div>
              <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-soft" aria-hidden>
                <div
                  className="h-full rounded-full bg-chili transition-[width] duration-300 ease-out"
                  style={{ width: `${progressRatio}%` }}
                />
              </div>
            </div>
            {history.length > 0 && (
              <button
                type="button"
                onClick={() => (playingAllIdx !== null ? stopPlayingAll() : startPlayAll(history))}
                className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full bg-soft px-3 text-xs font-extrabold text-chili"
              >
                {playingAllIdx !== null ? <Square className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {playingAllIdx !== null ? "Stop" : "Play all"}
              </button>
            )}
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 lg:px-8">
            <p className="mb-4 rounded-2xl bg-soft px-3.5 py-2.5 text-xs font-bold text-pretty text-muted">
              {conv.setting}
            </p>
            <div className="flex flex-col gap-3">
              {history.map((msg, idx) => {
                const isUser = msg.role === "user";
                const isActive = playingAllIdx === idx;
                return (
                  <div
                    key={msg.id}
                    className={cn("flex flex-col", isUser ? "items-end" : "items-start")}
                  >
                    <span className="mb-1 px-1 text-[11px] font-extrabold tracking-wide text-muted uppercase">
                      {msg.name}
                    </span>
                    <div
                      className={cn(
                        "flex max-w-[90%] items-start gap-2.5 rounded-3xl border px-4 py-3 transition-shadow",
                        isUser ? "border-chili/30 bg-soft" : "border-line bg-paper",
                        isActive && "ring-2 ring-chili",
                      )}
                    >
                      <button
                        type="button"
                        aria-label={`Play ${msg.name}'s line`}
                        onClick={() => {
                          stopPlayingAll();
                          speakThai(msg.thai, msg.voice);
                        }}
                        className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sheet text-chili transition-transform active:scale-[0.95]"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                      <div className="min-w-0">
                        <p lang="th" className="thai-display text-xl text-pretty">
                          {msg.thai}
                        </p>
                        {showRoman && (
                          <p className="mt-0.5 text-xs font-bold text-muted">{msg.roman}</p>
                        )}
                        <p className="mt-1 text-sm font-extrabold">{msg.en}</p>
                        {msg.note && (
                          <p className="mt-1.5 text-xs font-semibold text-pretty text-teal">
                            {msg.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div ref={scrollBottomRef} className="h-4" />
          </div>

          {/* Interactive Turn Dock */}
          {currentTurn?.kind === "line" && (
            <footer className="safe-bottom border-t border-line bg-sheet px-4 pt-3 lg:px-8 lg:pb-6">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const last = history[history.length - 1];
                    if (last) {
                      stopPlayingAll();
                      speakThai(last.thai, last.voice);
                    }
                  }}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-line px-4 font-extrabold"
                >
                  <Volume2 className="h-4 w-4 text-chili" />
                  Replay
                </button>
                <button
                  type="button"
                  onClick={() => advanceTurn()}
                  className="btn-3d btn-chili flex min-h-12 flex-1 items-center justify-center rounded-2xl font-extrabold"
                >
                  {stepIndex + 1 >= totalTurns ? "Finish conversation" : "Continue"}
                </button>
              </div>
            </footer>
          )}

          {currentTurn?.kind === "reply-blank" && blankModel && !gradeResult && (
            <footer className="safe-bottom border-t border-line bg-sheet px-4 pt-3 lg:px-8 lg:pb-6">
              <p className="text-xs font-extrabold tracking-wide text-chili uppercase">Fill in the blanks</p>
              <p className="mt-0.5 text-sm font-extrabold">{currentTurn.prompt}</p>
              <p className="mt-0.5 text-xs font-bold text-muted">&ldquo;{currentTurn.en}&rdquo;</p>

              {/* Sentence with inline fixed words & at least 2 interactive blanks */}
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 rounded-2xl border-2 border-dashed border-line bg-paper p-2.5">
                {blankModel.parts.map((part) => {
                  if (part.kind === "fixed") {
                    return (
                      <span
                        key={part.idx}
                        className="rounded-xl border border-line/60 bg-sheet px-2.5 py-1 text-left"
                      >
                        <span lang="th" className="thai-display block text-base">
                          {part.word.thai}
                        </span>
                        {showRoman && (
                          <span className="block text-[11px] font-bold text-muted">{part.word.roman}</span>
                        )}
                      </span>
                    );
                  }
                  const pickedKey = blankPicks[part.idx];
                  const pickedChip = pickedKey
                    ? blankModel.bank.find((item) => item.key === pickedKey)
                    : null;
                  const blankNum = blankModel.blankIndices.indexOf(part.idx) + 1;
                  const isFocused = focusedBlankIdx === part.idx;
                  return (
                    <button
                      key={part.idx}
                      type="button"
                      aria-label={
                        pickedChip
                          ? `Blank ${blankNum}: ${pickedChip.word.thai}, tap to clear`
                          : `Blank ${blankNum}, empty`
                      }
                      onClick={() => handleClickBlankSlot(part.idx)}
                      className={cn(
                        "min-h-11 min-w-16 rounded-xl border-2 px-3 py-1 text-center transition-colors",
                        pickedChip
                          ? "border-chili bg-soft"
                          : isFocused
                            ? "border-chili bg-sheet ring-2 ring-chili/25"
                            : "border-line border-dashed bg-sheet",
                      )}
                    >
                      {pickedChip ? (
                        <>
                          <span lang="th" className="thai-display block text-base">
                            {pickedChip.word.thai}
                          </span>
                          {showRoman && (
                            <span className="block text-[11px] font-bold text-muted">
                              {pickedChip.word.roman}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-xs font-extrabold tracking-widest text-muted">
                          ____
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Thai-only Answer Options (no English translation) */}
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {blankModel.bank.map((chip) => {
                  const used = Object.values(blankPicks).includes(chip.key);
                  return (
                    <button
                      key={chip.key}
                      type="button"
                      disabled={used}
                      onClick={() => handlePickBlankOption(chip)}
                      className={cn(
                        "rounded-xl border-2 px-3 py-1.5 text-left transition-opacity",
                        used ? "border-line opacity-30" : "border-line bg-sheet hover:bg-soft",
                      )}
                    >
                      <span lang="th" className="thai-display block text-base">
                        {chip.word.thai}
                      </span>
                      {showRoman && (
                        <span className="block text-[11px] font-bold text-muted">{chip.word.roman}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                disabled={!blankModel.blankIndices.every((idx) => Boolean(blankPicks[idx]))}
                onClick={handleCheckBlank}
                className="btn-3d btn-chili mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
              >
                Check reply
              </button>
            </footer>
          )}

          {currentTurn?.kind === "reply-tiles" && tileModel && !gradeResult && (
            <footer className="safe-bottom border-t border-line bg-sheet px-4 pt-3 lg:px-8 lg:pb-6">
              <p className="text-xs font-extrabold tracking-wide text-chili uppercase">Build your reply</p>
              <p className="mt-0.5 text-sm font-extrabold">{currentTurn.prompt}</p>

              {/* Tray */}
              <div className="mt-2.5 flex min-h-13 flex-wrap gap-1.5 rounded-2xl border-2 border-dashed border-line bg-paper p-2">
                {pickedTileKeys.length === 0 ? (
                  <span className="self-center px-2 text-xs font-bold text-muted">
                    Tap Thai words below in order
                  </span>
                ) : (
                  pickedTileKeys.map((key) => {
                    const chip = tileModel.bank.find((item) => item.key === key);
                    if (!chip) return null;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPickedTileKeys((prev) => prev.filter((k) => k !== key))}
                        className="rounded-xl border border-chili bg-soft px-3 py-1.5 text-left"
                      >
                        <span lang="th" className="thai-display block text-base">
                          {chip.word.thai}
                        </span>
                        {showRoman && (
                          <span className="block text-[11px] font-bold text-muted">{chip.word.roman}</span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Word Bank */}
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {tileModel.bank.map((chip) => {
                  const used = pickedTileKeys.includes(chip.key);
                  return (
                    <button
                      key={chip.key}
                      type="button"
                      disabled={used}
                      onClick={() => setPickedTileKeys((prev) => [...prev, chip.key])}
                      className={cn(
                        "rounded-xl border-2 px-3 py-1.5 text-left transition-opacity",
                        used ? "border-line opacity-30" : "border-line bg-sheet hover:bg-soft",
                      )}
                    >
                      <span lang="th" className="thai-display block text-base">
                        {chip.word.thai}
                      </span>
                      {showRoman && (
                        <span className="block text-[11px] font-bold text-muted">{chip.word.roman}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                disabled={pickedTileKeys.length !== tileModel.answer.length}
                onClick={handleCheckTiles}
                className="btn-3d btn-chili mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
              >
                Check reply
              </button>
            </footer>
          )}

          {gradeResult && (
            <footer
              className={cn(
                "safe-bottom px-4 pt-4 lg:px-8 lg:pb-6",
                gradeResult.ok ? "bg-teal text-on-accent" : "bg-chili text-on-accent",
              )}
              aria-live="polite"
            >
              <p className="text-lg font-extrabold">{gradeResult.ok ? "Natural reply!" : "Try this reply:"}</p>
              <p lang="th" className="thai-display mt-1 text-xl">
                {gradeResult.thai}
              </p>
              {showRoman && <p className="text-xs font-bold opacity-90">{gradeResult.roman}</p>}
              <p className="mt-0.5 text-sm font-bold">{gradeResult.en}</p>
              {gradeResult.coach && <p className="mt-1 text-xs opacity-90">{gradeResult.coach}</p>}
              <button
                type="button"
                onClick={handleContinueAfterGrade}
                className="btn-3d btn-sheet mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
              >
                {stepIndex + 1 >= totalTurns ? "Finish conversation" : "Continue"}
              </button>
            </footer>
          )}
        </>
      )}

      {phase === "done" && (
        <>
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-teal text-on-accent">
              <Check className="h-12 w-12" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-balance">Conversation complete</h2>
            <p className="mt-2 max-w-xs text-pretty text-muted">
              {mistakes === 0
                ? "Smooth conversation — zero misses."
                : `${mistakes} ${mistakes === 1 ? "miss" : "misses"}.`}
            </p>
            <p className="mt-4 text-sm font-extrabold tracking-wide text-marigold uppercase">
              {stars === 3 ? "Three stars" : stars === 2 ? "Two stars" : "One star"}
            </p>
            <p className="mt-2 text-2xl font-extrabold text-chili tabular-nums">+{sessionXp} XP</p>

            <button
              type="button"
              onClick={() => (playingAllIdx !== null ? stopPlayingAll() : startPlayAll(history))}
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-2xl border-2 border-line bg-sheet px-5 font-extrabold"
            >
              {playingAllIdx !== null ? <Square className="h-4 w-4 text-chili" /> : <Volume2 className="h-4 w-4 text-chili" />}
              {playingAllIdx !== null ? "Stop audio" : "Listen to full dialogue"}
            </button>
          </div>
          <footer className="safe-bottom px-4 pt-2 lg:px-8 lg:pb-6">
            <button
              type="button"
              onClick={() => {
                stopPlayingAll();
                onExit();
              }}
              className="btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
            >
              Back to Talk
            </button>
          </footer>
        </>
      )}

      {confirmExit && (
        <div className="absolute inset-0 z-20 flex items-end justify-center bg-ink/40 p-4 sm:items-center">
          <div className="w-full max-w-sm rounded-3xl bg-sheet p-5">
            <h2 className="text-xl font-extrabold">Leave this conversation?</h2>
            <p className="mt-1 text-sm text-pretty text-muted">
              XP from replies you already checked is kept, but this conversation won&apos;t mark as finished yet.
            </p>
            <button
              type="button"
              onClick={() => {
                stopPlayingAll();
                onExit();
              }}
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
