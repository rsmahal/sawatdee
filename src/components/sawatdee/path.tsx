import { useState } from "react";
import {
  Award,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsDownUp,
  ChevronsUpDown,
  Clock,
  Flame,
  Headphones,
  Lock,
  Shuffle,
  Star,
  Volume2,
} from "lucide-react";
import { useCatalog } from "@/lib/catalog-store";
import { cn } from "@/lib/cn";
import { dailyPhrases, courseNote, isUnlocked, levels, nextLesson, type CefrLevel, type Speaker } from "@/lib/curriculum";
import { formatExamTime, MILESTONE_MODES, milestoneKey, type MilestoneMode } from "@/lib/milestone";
import { useProgress } from "@/lib/progress";
import { reviewStats, todayKey } from "@/lib/srs";
import { speakThai } from "@/lib/speech";
import { unitGuideById } from "@/lib/unit-guides";

export function Path({
  onStart,
  onReview,
  onGuide,
  onMilestone,
}: {
  onStart: (id: string) => void;
  onReview: () => void;
  onGuide: (unitId: string) => void;
  onMilestone: (level: CefrLevel, mode: MilestoneMode) => void;
}) {
  const units = useCatalog((state) => state.units);
  const lessons = useCatalog((state) => state.lessons);
  const vocabulary = useCatalog((state) => state.vocabulary);
  const xp = useProgress((state) => state.xp);
  const streak = useProgress((state) => state.streak);
  const completed = useProgress((state) => state.completed);
  const milestones = useProgress((state) => state.milestones);
  const cards = useProgress((state) => state.cards);
  const speaker = useProgress((state) => state.speaker);
  const setSpeaker = useProgress((state) => state.setSpeaker);
  const showRoman = useProgress((state) => state.showRoman);
  const pathLevel = useProgress((state) => state.pathLevel);
  const setPathLevel = useProgress((state) => state.setPathLevel);
  const collapsedUnits = useProgress((state) => state.collapsedUnits);
  const toggleUnitCollapsed = useProgress((state) => state.toggleUnitCollapsed);
  const setUnitsCollapsed = useProgress((state) => state.setUnitsCollapsed);
  const [note, setNote] = useState<string | null>(null);
  const next = nextLesson(completed, lessons, units);
  const nextUnitLevel = next ? units.find((u) => u.id === next.unit)?.level ?? "A1" : "A1";
  const selectedLevelId: CefrLevel = pathLevel ?? nextUnitLevel;
  const activeLevel = levels.find((l) => l.id === selectedLevelId) ?? levels[0]!;
  const doneCount = lessons.filter((lesson) => completed[lesson.id]).length;
  const due = reviewStats(cards, todayKey()).due;
  const phrase = dailyPhrases[Math.floor(Date.now() / 86_400_000) % dailyPhrases.length] ?? dailyPhrases[0]!;

  const levelUnits = units.filter((unit) => unit.level === activeLevel.id);
  const levelUnitIds = new Set(levelUnits.map((u) => u.id));
  const levelWords = vocabulary.filter((word) => word.level === activeLevel.id).length;
  const activeLevelIdx = levels.findIndex((l) => l.id === activeLevel.id);
  const cumulativeLevelWords = vocabulary.filter((word) => {
    const idx = levels.findIndex((l) => l.id === word.level);
    return idx >= 0 && idx <= activeLevelIdx;
  }).length;
  const levelLessons = lessons.filter((l) => levelUnitIds.has(l.unit));
  const levelDone = levelLessons.filter((l) => completed[l.id]).length;
  const allUnitsDone = levelLessons.length > 0 && levelDone >= levelLessons.length;
  const passedModes = MILESTONE_MODES.filter(
    (m) => milestones[milestoneKey(activeLevel.id, m.mode)]?.passed,
  ).length;

  const allCollapsed = levelUnits.length > 0 && levelUnits.every((u) => Boolean(collapsedUnits[u.id]));
  const expandableCompletedUnitIds = levelUnits
    .filter((u) => {
      const uLessons = lessons.filter((l) => l.unit === u.id);
      return uLessons.length > 0 && uLessons.every((l) => Boolean(completed[l.id])) && !collapsedUnits[u.id];
    })
    .map((u) => u.id);

  return (
    <div className="mx-auto w-full max-w-5xl px-5 pt-6 pb-10 lg:px-8 lg:py-8">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-extrabold text-chili">Sawatdee</p>
          <h1 className="text-3xl font-extrabold text-balance">Learn Thai</h1>
          <p className="mt-1 max-w-xl text-sm text-pretty text-muted">{courseNote}</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-soft px-3 py-2 font-extrabold tabular-nums">
          <Flame className="h-5 w-5 text-marigold" fill="currentColor" />
          {streak}
        </div>
      </header>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-extrabold text-muted tabular-nums">
          {xp} XP · {doneCount}/{lessons.length} lessons · {Object.keys(cards).length}/{vocabulary.length} words
        </p>
        <SpeakerSwitch speaker={speaker} onChange={setSpeaker} />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2 lg:items-stretch">
        <button
          type="button"
          onClick={() => speakThai(phrase.thai)}
          className="flex w-full items-center gap-3 rounded-2xl border border-line bg-sheet px-4 py-3 text-left transition-colors hover:bg-soft lg:border-line"
        >
          <Volume2 className="h-5 w-5 shrink-0 text-chili" />
          <span className="min-w-0">
            <span className="block text-xs font-extrabold tracking-wide text-muted uppercase">Today</span>
            <span lang="th" className="thai-display text-lg">
              {phrase.thai}
            </span>
            <span className="block text-sm font-bold text-muted">
              {showRoman ? `${phrase.roman} · ` : ""}
              {phrase.en}
            </span>
          </span>
        </button>

        <div className="grid gap-3">
          {next ? (
            <button
              type="button"
              onClick={() => onStart(next.id)}
              className="btn-3d btn-chili flex min-h-16 w-full items-center justify-between rounded-2xl px-5 text-left"
            >
              <span>
                <span className="block text-xs font-extrabold tracking-wide uppercase opacity-80">
                  Continue · {nextUnitLevel}
                </span>
                <span className="text-lg font-extrabold">{next.title}</span>
              </span>
              <ChevronRight className="h-6 w-6" />
            </button>
          ) : (
            <div className="rounded-2xl bg-teal px-5 py-4 text-on-accent">
              <p className="text-lg font-extrabold">Path complete.</p>
              <p className="text-sm">Replay any lesson. Stars stay at your best.</p>
            </div>
          )}
          {due > 0 && (
            <button
              type="button"
              onClick={onReview}
              className="flex min-h-14 w-full items-center justify-between rounded-2xl bg-soft px-4 text-left"
            >
              <span>
                <span className="block text-xs font-extrabold tracking-wide text-chili uppercase">Review</span>
                <span className="font-extrabold">
                  {due} {due === 1 ? "word" : "words"} due
                </span>
              </span>
              <ChevronRight className="h-5 w-5 text-chili" />
            </button>
          )}
        </div>
      </div>
      {note && <p className="mt-3 text-sm font-bold text-chili">{note}</p>}

      {/* CEFR Track / Path Selector */}
      <div className="mt-7 grid grid-cols-2 gap-3" role="tablist" aria-label="Course paths">
        {levels.map((level, levelIdx) => {
          const isSelected = level.id === activeLevel.id;
          const lvlUnits = units.filter((u) => u.level === level.id);
          const lvlUnitSet = new Set(lvlUnits.map((u) => u.id));
          const lvlLessons = lessons.filter((l) => lvlUnitSet.has(l.unit));
          const lvlDone = lvlLessons.filter((l) => completed[l.id]).length;
          const lvlWords = vocabulary.filter((w) => w.level === level.id).length;
          const lvlCumulativeWords = vocabulary.filter((w) => {
            const idx = levels.findIndex((item) => item.id === w.level);
            return idx >= 0 && idx <= levelIdx;
          }).length;
          const wordSummary =
            levelIdx > 0 ? `${lvlWords} new · ${lvlCumulativeWords} total` : `${lvlWords} words`;
          const pct = lvlLessons.length > 0 ? Math.round((100 * lvlDone) / lvlLessons.length) : 0;
          const isCurrent = Boolean(next && nextUnitLevel === level.id);
          const isComplete = lvlLessons.length > 0 && lvlDone >= lvlLessons.length;

          return (
            <button
              key={level.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => {
                setPathLevel(level.id);
                setNote(null);
              }}
              className={cn(
                "flex flex-col justify-between rounded-2xl border-2 p-3.5 text-left transition-colors sm:p-4",
                isSelected ? "border-chili bg-soft" : "border-line bg-sheet hover:border-chili/50",
              )}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span
                    className={cn(
                      "text-xs font-extrabold tracking-wide uppercase",
                      isSelected ? "text-chili" : "text-muted",
                    )}
                  >
                    CEFR {level.id}
                  </span>
                  {isComplete ? (
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-teal px-2 py-0.5 text-[10px] font-extrabold text-on-accent">
                      <Check className="h-3 w-3" />
                      Done
                    </span>
                  ) : isCurrent ? (
                    <span className="rounded-full bg-chili/15 px-2 py-0.5 text-[10px] font-extrabold text-chili">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-base font-extrabold sm:text-lg">{level.title}</p>
                <p className="mt-0.5 text-xs font-bold text-muted tabular-nums">
                  {lvlDone}/{lvlLessons.length} lessons · {wordSummary}
                </p>
              </div>
              <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-paper" aria-hidden>
                <div
                  className={cn(
                    "h-full rounded-full transition-[width] duration-300",
                    isComplete ? "bg-teal" : "bg-chili",
                  )}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Level Path */}
      <section className="mt-6 grid gap-6" role="tabpanel" aria-label={activeLevel.title}>
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-extrabold tracking-wide text-chili uppercase">
              CEFR {activeLevel.id} · {levelUnits.length} units ·{" "}
              {activeLevelIdx > 0
                ? `${levelWords} new (${cumulativeLevelWords} cumulative words)`
                : `${levelWords} words`}
            </p>
            <h2 className="text-2xl font-extrabold">{activeLevel.title}</h2>
            <p className="text-sm text-pretty text-muted">{activeLevel.blurb}</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {expandableCompletedUnitIds.length > 0 && (
              <button
                type="button"
                onClick={() => setUnitsCollapsed(expandableCompletedUnitIds, true)}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line bg-sheet px-3 text-xs font-extrabold text-muted transition-colors hover:border-chili hover:text-ink"
              >
                <Check className="h-3.5 w-3.5 text-teal" />
                Hide completed
              </button>
            )}
            <button
              type="button"
              onClick={() =>
                setUnitsCollapsed(
                  levelUnits.map((u) => u.id),
                  !allCollapsed,
                )
              }
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line bg-sheet px-3 text-xs font-extrabold text-muted transition-colors hover:border-chili hover:text-ink"
            >
              {allCollapsed ? (
                <>
                  <ChevronsUpDown className="h-3.5 w-3.5 text-chili" />
                  Expand all
                </>
              ) : (
                <>
                  <ChevronsDownUp className="h-3.5 w-3.5 text-chili" />
                  Collapse all
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById(`milestone-${activeLevel.id}`)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line bg-sheet px-3 text-xs font-extrabold text-ink transition-colors hover:border-chili hover:text-chili"
            >
              <Award className="h-3.5 w-3.5 text-marigold" />
              {activeLevel.id} Milestone
            </button>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2 md:items-start">
          {levelUnits.map((unit) => {
            const unitLessons = lessons.filter((lesson) => lesson.unit === unit.id);
            const unitDone = unitLessons.filter((lesson) => completed[lesson.id]).length;
            const unitComplete = unitLessons.length > 0 && unitDone >= unitLessons.length;
            const hasGuide = Boolean(unitGuideById(unit.id));
            const isCollapsed = Boolean(collapsedUnits[unit.id]);

            return (
              <div
                key={unit.id}
                className="flex flex-col rounded-3xl border border-line bg-sheet p-4 lg:p-5"
              >
                <div className="rounded-2xl bg-soft px-4 py-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <button
                      type="button"
                      aria-expanded={!isCollapsed}
                      aria-controls={`unit-lessons-${unit.id}`}
                      onClick={() => toggleUnitCollapsed(unit.id)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <div className="flex flex-wrap items-center gap-1.5">
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-chili transition-transform duration-150",
                            isCollapsed && "-rotate-90",
                          )}
                        />
                        <p className="text-xs font-extrabold tracking-wide text-chili uppercase">
                          {unit.kicker}
                        </p>
                        {unitComplete && (
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-teal px-2 py-0.5 text-[10px] font-extrabold text-on-accent">
                            <Check className="h-3 w-3" />
                            Done
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-baseline justify-between gap-3">
                        <h3 className="text-xl font-extrabold">{unit.title}</h3>
                        <p className="shrink-0 text-sm font-extrabold text-muted tabular-nums">
                          {unitDone}/{unitLessons.length}
                        </p>
                      </div>
                      {!isCollapsed && <p className="mt-0.5 text-sm text-muted">{unit.blurb}</p>}
                    </button>
                    {hasGuide && (
                      <button
                        type="button"
                        aria-label={`Sentence guide for ${unit.title}`}
                        onClick={() => onGuide(unit.id)}
                        className="inline-flex min-h-8 shrink-0 items-center gap-1 rounded-full border border-line bg-sheet px-2.5 text-xs font-extrabold text-ink transition-colors hover:border-chili hover:text-chili"
                      >
                        <BookOpen className="h-3.5 w-3.5 text-chili" />
                        Guide
                      </button>
                    )}
                  </div>
                </div>

                {!isCollapsed && (
                  <ol id={`unit-lessons-${unit.id}`} className="mt-4 grid grid-cols-2 gap-4 py-2 sm:grid-cols-3">
                    {unitLessons.map((lesson) => {
                      const open = isUnlocked(lesson.id, completed, lessons, units);
                      const done = Boolean(completed[lesson.id]);
                      const stars = completed[lesson.id] ?? 0;
                      const number = lessons.findIndex((item) => item.id === lesson.id) + 1;
                      return (
                        <li key={lesson.id} className="flex justify-center">
                          <div className="flex w-28 flex-col items-center gap-1.5">
                            <button
                              type="button"
                              aria-label={open ? `Start ${lesson.title}` : `${lesson.title} locked`}
                              onClick={() => {
                                if (!open) {
                                  const prev = lessons[number - 2];
                                  setNote(prev ? `Finish ${prev.title} first.` : "Locked.");
                                  return;
                                }
                                setNote(null);
                                onStart(lesson.id);
                              }}
                              className={cn(
                                "path-node grid h-16 w-16 place-items-center rounded-full lg:h-18 lg:w-18",
                                done && "path-node-done",
                                !done && open && lesson.checkpoint && "path-node-check",
                                !done && open && !lesson.checkpoint && "path-node-go",
                                !open && "path-node-lock",
                              )}
                            >
                              {done ? (
                                <Check className="h-7 w-7" />
                              ) : !open ? (
                                <Lock className="h-5 w-5" />
                              ) : lesson.checkpoint ? (
                                <Award className="h-7 w-7" />
                              ) : (
                                <span className="text-xl font-extrabold tabular-nums">{number}</span>
                              )}
                            </button>
                            <span className="text-center text-sm leading-tight font-extrabold">
                              {lesson.title}
                            </span>
                            {done && stars > 0 && (
                              <span className="flex text-marigold" aria-label={`${stars} stars`}>
                                {Array.from({ length: stars }, (_, star) => (
                                  <Star key={star} className="h-3.5 w-3.5" fill="currentColor" />
                                ))}
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                )}
              </div>
            );
          })}
        </div>

        <div
          id={`milestone-${activeLevel.id}`}
          aria-label={`${activeLevel.id} Milestone Exam`}
          className="rounded-3xl border border-line bg-sheet p-5 lg:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-extrabold tracking-wide text-chili uppercase">
                CEFR {activeLevel.id} · Final Exam Section
              </p>
              <div className="mt-0.5 flex flex-wrap items-center gap-2">
                <Award className="h-6 w-6 shrink-0 text-marigold" />
                <h3 className="text-2xl font-extrabold">{activeLevel.id} Milestone</h3>
              </div>
              <p className="mt-1 max-w-2xl text-sm text-pretty text-muted">
                Test yourself on 100 random {activeLevel.id} words across three exam formats: Reading only, Listening only, and Mixed.
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-extrabold tabular-nums",
                  allUnitsDone ? "bg-teal text-on-accent" : "bg-soft text-muted",
                )}
              >
                {allUnitsDone
                  ? `${activeLevel.id} lessons complete`
                  : `${levelDone}/${levelLessons.length} ${activeLevel.id} lessons`}
              </span>
              <span className="text-xs font-extrabold text-muted tabular-nums">
                {passedModes}/3 exams passed
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {MILESTONE_MODES.map((item) => {
              const record = milestones[milestoneKey(activeLevel.id, item.mode)];
              const pct = record ? Math.round((100 * record.bestScore) / record.total) : null;
              const ModeIcon =
                item.mode === "reading"
                  ? BookOpen
                  : item.mode === "listening"
                    ? Headphones
                    : Shuffle;
              return (
                <button
                  key={item.mode}
                  type="button"
                  onClick={() => onMilestone(activeLevel.id, item.mode)}
                  className={cn(
                    "flex flex-col justify-between gap-3 rounded-2xl border-2 p-4 text-left transition-colors hover:border-chili",
                    record?.passed
                      ? "border-teal/50 bg-teal/5"
                      : "border-line bg-soft/60",
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-sheet text-chili">
                        <ModeIcon className="h-5 w-5" />
                      </span>
                      {record?.passed ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-teal px-2.5 py-0.5 text-xs font-extrabold text-on-accent">
                          <Check className="h-3.5 w-3.5" />
                          Passed
                        </span>
                      ) : (
                        <span className="text-xs font-extrabold text-muted tabular-nums">
                          100 words
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-lg font-extrabold">{item.title}</p>
                    <p className="text-sm text-muted">{item.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 border-t border-line pt-3">
                    {record ? (
                      <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-extrabold text-ink tabular-nums">
                        <span>Best {pct}%</span>
                        {record.bestTimeSec !== undefined && (
                          <span className="inline-flex items-center gap-1 text-muted">
                            <Clock className="h-3.5 w-3.5" />
                            {formatExamTime(record.bestTimeSec)}
                          </span>
                        )}
                        {record.stars > 0 && (
                          <span className="flex text-marigold" aria-label={`${record.stars} stars`}>
                            {Array.from({ length: record.stars }, (_, star) => (
                              <Star key={star} className="h-3.5 w-3.5" fill="currentColor" />
                            ))}
                          </span>
                        )}
                      </span>
                    ) : (
                      <span className="text-xs font-extrabold text-chili">Start exam</span>
                    )}
                    <ChevronRight className="h-4 w-4 shrink-0 text-chili" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function SpeakerSwitch({ speaker, onChange }: { speaker: Speaker; onChange: (speaker: Speaker) => void }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-extrabold tracking-wide text-muted uppercase">I say</span>
      <div className="flex rounded-full bg-soft p-1">
        {(
          [
            ["f", "ค่ะ", "Speak as a woman, ending with ค่ะ"],
            ["m", "ครับ", "Speak as a man, ending with ครับ"],
          ] as const
        ).map(([id, label, name]) => (
          <button
            key={id}
            type="button"
            aria-pressed={speaker === id}
            aria-label={name}
            onClick={() => onChange(id)}
            className={cn(
              "min-h-11 rounded-full px-3 text-sm font-extrabold",
              speaker === id ? "bg-ink text-sheet" : "text-muted",
            )}
          >
            <span lang="th">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
