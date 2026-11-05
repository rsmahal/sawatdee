import { useState } from "react";
import { lessons, particleLabel, courseNote, type Speaker } from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";
import { reviewStats, todayKey } from "@/lib/srs";
import { cn } from "@/lib/cn";

export function Profile() {
  const xp = useProgress((state) => state.xp);
  const streak = useProgress((state) => state.streak);
  const completed = useProgress((state) => state.completed);
  const answered = useProgress((state) => state.answered);
  const correct = useProgress((state) => state.correct);
  const speaker = useProgress((state) => state.speaker);
  const showRoman = useProgress((state) => state.showRoman);
  const autoplay = useProgress((state) => state.autoplay);
  const cards = useProgress((state) => state.cards);
  const setSpeaker = useProgress((state) => state.setSpeaker);
  const setShowRoman = useProgress((state) => state.setShowRoman);
  const setAutoplay = useProgress((state) => state.setAutoplay);
  const resetProgress = useProgress((state) => state.resetProgress);
  const [armReset, setArmReset] = useState(false);

  const done = lessons.filter((lesson) => completed[lesson.id]).length;
  const accuracy = answered === 0 ? null : Math.round((100 * correct) / answered);
  const deck = reviewStats(cards, todayKey());

  return (
    <div className="px-5 pt-6 pb-10">
      <p className="text-sm font-extrabold text-chili">You</p>
      <h1 className="text-3xl font-extrabold">Profile</h1>
      <p className="mt-2 text-pretty text-muted">
        Progress stays on this device. Polite particles follow the speaker, not the person you're talking to.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <Stat label="XP" value={String(xp)} />
        <Stat label="Streak" value={String(streak)} />
        <Stat label="Lessons" value={`${done}/${lessons.length}`} />
        <Stat label="Words" value={String(deck.total)} />
      </div>
      <p className="mt-3 text-sm font-bold text-muted">
        {accuracy === null
          ? "Accuracy shows up after you check an answer."
          : `${accuracy}% accuracy across ${answered} answers.`}
      </p>

      <h2 className="mt-8 text-lg font-extrabold">Script style</h2>
      <p className="mt-1 text-sm text-pretty text-muted">
        Same letters. Modern is the loopless face used on signs and phones. Traditional keeps the looped heads
        you see in books.
      </p>
      <div className="mt-3">
        <ScriptStylePicker />
      </div>

      <h2 className="mt-8 text-lg font-extrabold">How words get in</h2>
      <p className="mt-1 text-sm text-pretty text-muted">
        {courseNote} Greetings, food, money, and directions come first, then time, describing things, and what to
        say when you get stuck. A word has to be something you would say out loud. No royal vocabulary, no slang.
        Later lessons reuse earlier words, and Review only schedules words from lessons you have opened.
      </p>

      <h2 className="mt-8 text-lg font-extrabold">How you speak</h2>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <SpeakerCard
          active={speaker === "f"}
          thai="ค่ะ"
          roman="khâ"
          label="Woman"
          onClick={() => setSpeaker("f")}
        />
        <SpeakerCard
          active={speaker === "m"}
          thai="ครับ"
          roman="khráp"
          label="Man"
          onClick={() => setSpeaker("m")}
        />
      </div>
      <p className="mt-3 text-sm text-pretty text-muted">
        Now set to {particleLabel(speaker)}. Questions from a woman use คะ (khá) instead of ค่ะ. Men keep ครับ.
        Tiles for “I” use {speaker === "m" ? "ผม (phǒm)" : "ฉัน (chǎn)"}.
      </p>

      <div className="mt-6 grid gap-2">
        <Toggle
          on={showRoman}
          label="Romanization"
          hint="Show the pronunciation under the Thai script."
          onToggle={() => setShowRoman(!showRoman)}
        />
        <Toggle
          on={autoplay}
          label="Play audio automatically"
          hint="Speak the prompt when a new exercise opens. The speaker button always works."
          onToggle={() => setAutoplay(!autoplay)}
        />
      </div>

      <button
        type="button"
        onClick={() => {
          if (!armReset) {
            setArmReset(true);
            return;
          }
          resetProgress();
          setArmReset(false);
        }}
        className="mt-8 min-h-12 w-full rounded-2xl border-2 border-line font-extrabold text-chili"
      >
        {armReset ? "Tap again to reset progress" : "Reset progress"}
      </button>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-soft px-4 py-3">
      <p className="text-xs font-extrabold tracking-wide text-muted uppercase">{label}</p>
      <p className="text-2xl font-extrabold tabular-nums">{value}</p>
    </div>
  );
}

export function ScriptStylePicker() {
  const style = useProgress((state) => state.scriptStyle);
  const setScriptStyle = useProgress((state) => state.setScriptStyle);
  return (
    <div className="grid grid-cols-2 gap-2">
      <StyleCard
        active={style === "modern"}
        sampleClass="thai-modern-sample"
        title="Modern"
        hint="Loopless"
        onClick={() => setScriptStyle("modern")}
      />
      <StyleCard
        active={style === "traditional"}
        sampleClass="thai-traditional-sample"
        title="Traditional"
        hint="Looped heads"
        onClick={() => setScriptStyle("traditional")}
      />
    </div>
  );
}

function StyleCard({
  active,
  sampleClass,
  title,
  hint,
  onClick,
}: {
  active: boolean;
  sampleClass: string;
  title: string;
  hint: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "min-h-24 rounded-2xl border-2 px-3 py-3 text-left",
        active ? "border-ink bg-ink text-sheet" : "border-line bg-sheet",
      )}
    >
      <span lang="th" className={cn("thai-display block text-3xl", sampleClass)}>
        สวัสดี
      </span>
      <span className="mt-1 block font-extrabold">{title}</span>
      <span className={cn("block text-sm font-bold", active ? "text-sheet/80" : "text-muted")}>{hint}</span>
    </button>
  );
}

function SpeakerCard({
  active,
  thai,
  roman,
  label,
  onClick,
}: {
  active: boolean;
  thai: string;
  roman: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "min-h-20 rounded-2xl border-2 px-3 py-3 text-left",
        active ? "border-ink bg-ink text-sheet" : "border-line bg-sheet",
      )}
    >
      <span lang="th" className="thai-display block text-2xl">
        {thai}
      </span>
      <span className={cn("block text-sm font-bold", active ? "text-sheet/80" : "text-muted")}>
        {roman} · {label}
      </span>
    </button>
  );
}

function Toggle({
  on,
  label,
  hint,
  onToggle,
}: {
  on: boolean;
  label: string;
  hint: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onToggle}
      className="flex min-h-16 w-full items-center justify-between gap-3 rounded-2xl bg-soft px-4 py-3 text-left"
    >
      <span>
        <span className="block font-extrabold">{label}</span>
        <span className="block text-sm text-muted">{hint}</span>
      </span>
      <span className={cn("h-7 w-12 shrink-0 rounded-full p-1", on ? "bg-teal" : "bg-line")}>
        <span className={cn("block h-5 w-5 rounded-full bg-sheet transition-transform duration-150", on && "translate-x-5")} />
      </span>
    </button>
  );
}
