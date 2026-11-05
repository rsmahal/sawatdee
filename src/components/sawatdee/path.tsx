import { useState } from "react";
import { Award, Check, ChevronRight, Flame, Lock, Star, Volume2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { dailyPhrases, courseNote, isUnlocked, lessons, levels, nextLesson, units, type Speaker } from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";
import { reviewStats, todayKey } from "@/lib/srs";
import { speakThai } from "@/lib/speech";

export function Path({ onStart, onReview }: { onStart: (id: string) => void; onReview: () => void }) {
  const xp = useProgress((state) => state.xp);
  const streak = useProgress((state) => state.streak);
  const completed = useProgress((state) => state.completed);
  const cards = useProgress((state) => state.cards);
  const speaker = useProgress((state) => state.speaker);
  const setSpeaker = useProgress((state) => state.setSpeaker);
  const showRoman = useProgress((state) => state.showRoman);
  const [note, setNote] = useState<string | null>(null);
  const next = nextLesson(completed);
  const doneCount = lessons.filter((lesson) => completed[lesson.id]).length;
  const due = reviewStats(cards, todayKey()).due;
  const phrase = dailyPhrases[Math.floor(Date.now() / 86_400_000) % dailyPhrases.length] ?? dailyPhrases[0]!;

  return (
    <div className="px-5 pt-6 pb-8">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-extrabold text-chili">Sawatdee</p>
          <h1 className="text-3xl font-extrabold text-balance">Learn Thai</h1>
          <p className="mt-1 max-w-xs text-sm text-pretty text-muted">{courseNote}</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-soft px-3 py-2 font-extrabold tabular-nums">
          <Flame className="h-5 w-5 text-marigold" fill="currentColor" />
          {streak}
        </div>
      </header>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-extrabold text-muted tabular-nums">
          {xp} XP · {doneCount}/{lessons.length}
        </p>
        <SpeakerSwitch speaker={speaker} onChange={setSpeaker} />
      </div>

      <button
        type="button"
        onClick={() => speakThai(phrase.thai)}
        className="mt-4 flex w-full items-center gap-3 rounded-2xl bg-soft px-4 py-3 text-left"
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

      {next ? (
        <button
          type="button"
          onClick={() => onStart(next.id)}
          className="btn-3d btn-chili mt-4 flex min-h-16 w-full items-center justify-between rounded-2xl px-5 text-left"
        >
          <span>
            <span className="block text-xs font-extrabold tracking-wide uppercase opacity-80">Continue</span>
            <span className="text-lg font-extrabold">{next.title}</span>
          </span>
          <ChevronRight className="h-6 w-6" />
        </button>
      ) : (
        <div className="mt-4 rounded-2xl bg-teal px-5 py-4 text-on-accent">
          <p className="text-lg font-extrabold">Path complete.</p>
          <p className="text-sm">Replay any lesson. Stars stay at your best.</p>
        </div>
      )}
      {due > 0 && (
        <button
          type="button"
          onClick={onReview}
          className="mt-3 flex min-h-14 w-full items-center justify-between rounded-2xl bg-soft px-4 text-left"
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
      {note && <p className="mt-3 text-sm font-bold text-chili">{note}</p>}

      <div className="mt-6 grid gap-8">
        {levels.map((level) => (
          <section key={level.id} className="grid gap-6">
            <header>
              <p className="text-xs font-extrabold tracking-wide text-chili uppercase">CEFR</p>
              <h2 className="text-2xl font-extrabold">{level.title}</h2>
              <p className="text-sm text-pretty text-muted">{level.blurb}</p>
            </header>
            {units
              .filter((unit) => unit.level === level.id)
              .map((unit) => {
                const unitLessons = lessons.filter((lesson) => lesson.unit === unit.id);
                const unitDone = unitLessons.filter((lesson) => completed[lesson.id]).length;
                return (
                  <div key={unit.id}>
                    <div className="rounded-3xl bg-soft px-5 py-4">
                      <p className="text-xs font-extrabold tracking-wide text-chili uppercase">{unit.kicker}</p>
                      <div className="flex items-end justify-between gap-3">
                        <h3 className="text-xl font-extrabold">{unit.title}</h3>
                        <p className="text-sm font-extrabold text-muted tabular-nums">
                          {unitDone}/{unitLessons.length}
                        </p>
                      </div>
                      <p className="text-sm text-muted">{unit.blurb}</p>
                    </div>
                    <ol className="relative mt-4 grid gap-4 py-2">
                      <div className="absolute top-4 bottom-4 left-1/2 w-1 -translate-x-1/2 bg-line" aria-hidden />
                      {unitLessons.map((lesson, index) => {
                        const open = isUnlocked(lesson.id, completed);
                        const done = Boolean(completed[lesson.id]);
                        const stars = completed[lesson.id] ?? 0;
                        const number = lessons.findIndex((item) => item.id === lesson.id) + 1;
                        const side = index % 2 === 0 ? "justify-start pl-6" : "justify-end pr-6";
                        return (
                          <li key={lesson.id} className={cn("relative flex", side)}>
                            <div className="flex w-28 flex-col items-center gap-1">
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
                                  "path-node grid h-20 w-20 place-items-center rounded-full",
                                  done && "path-node-done",
                                  !done && open && lesson.checkpoint && "path-node-check",
                                  !done && open && !lesson.checkpoint && "path-node-go",
                                  !open && "path-node-lock",
                                )}
                              >
                                {done ? (
                                  <Check className="h-8 w-8" />
                                ) : !open ? (
                                  <Lock className="h-6 w-6" />
                                ) : lesson.checkpoint ? (
                                  <Award className="h-8 w-8" />
                                ) : (
                                  <span className="text-2xl font-extrabold tabular-nums">{number}</span>
                                )}
                              </button>
                              <span className="text-center text-sm leading-tight font-extrabold">{lesson.title}</span>
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
                  </div>
                );
              })}
          </section>
        ))}
      </div>
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
