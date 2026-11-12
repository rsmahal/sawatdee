import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  consonants,
  thaiDigits,
  toneDrills,
  toneExamples,
  tones,
  vowels,
  type ToneId,
} from "@/lib/script-data";
import { shuffle } from "@/lib/shuffle";
import { speakThai } from "@/lib/speech";
import { ScriptStylePicker } from "./profile";

const classColor = {
  mid: "text-ink",
  high: "text-chili",
  low: "text-teal",
} as const;

export function ScriptLab() {
  const [showAllConsonants, setShowAllConsonants] = useState(false);
  const shownConsonants = showAllConsonants ? consonants : consonants.filter((item) => item.core);

  return (
    <div className="px-5 pt-6 pb-10">
      <p className="text-sm font-extrabold text-chili">Script</p>
      <h1 className="text-3xl font-extrabold text-balance">Read the tones</h1>
      <p className="mt-2 text-pretty text-muted">
        Marks on the romanization: unmarked mid, à low, á high, â falling, ǎ rising. Long vowels are doubled.
        bp and dt are unaspirated.
      </p>

      <h2 className="mt-6 text-lg font-extrabold">How the letters look</h2>
      <p className="mt-1 text-sm text-pretty text-muted">
        This is the same setting as on You. It changes every Thai word in the course, not only this page. Modern
        drops the little loops. Traditional keeps them. The spelling does not change.
      </p>
      <div className="mt-3">
        <ScriptStylePicker />
      </div>

      <ToneDrill />

      <h2 className="mt-8 text-lg font-extrabold">Five tones</h2>
      <ul className="mt-3 grid gap-2">
        {toneExamples.map((example) => {
          const tone = tones.find((item) => item.id === example.tone);
          return (
            <li key={example.thai}>
              <button
                type="button"
                onClick={() => speakThai(example.thai)}
                className="flex w-full items-center gap-3 rounded-2xl bg-soft px-4 py-3 text-left"
              >
                <Volume2 className="h-5 w-5 shrink-0 text-chili" />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-extrabold tracking-wide text-muted uppercase">
                    {tone?.label} · {tone?.hint}
                  </span>
                  <span lang="th" className="thai-display text-2xl">
                    {example.thai}
                  </span>
                  <span className="block text-sm font-bold text-muted">
                    {example.roman} · {example.en}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-sm text-pretty text-muted">
        ไม่ (mâi, falling) means no. ไหม (mǎi, rising) turns a statement into a question. Same shape on the page,
        different pitch.
      </p>

      <div className="mt-8 flex items-center justify-between gap-2">
        <h2 className="text-lg font-extrabold">
          Thai consonants ({shownConsonants.length}/{consonants.length})
        </h2>
        <div className="flex rounded-full bg-soft p-1 text-xs font-extrabold">
          <button
            type="button"
            aria-pressed={!showAllConsonants}
            onClick={() => setShowAllConsonants(false)}
            className={cn(
              "min-h-9 rounded-full px-3",
              !showAllConsonants ? "bg-ink text-sheet" : "text-muted",
            )}
          >
            Core 21
          </button>
          <button
            type="button"
            aria-pressed={showAllConsonants}
            onClick={() => setShowAllConsonants(true)}
            className={cn(
              "min-h-9 rounded-full px-3",
              showAllConsonants ? "bg-ink text-sheet" : "text-muted",
            )}
          >
            All 44
          </button>
        </div>
      </div>
      <p className="mt-1 text-sm text-pretty text-muted">
        Color is the consonant class (mid = ink, high = chili, low = teal), which decides the tone of a syllable.
        Tap any letter to hear its name.
      </p>
      <div className="mt-3 flex gap-3 text-xs font-extrabold tracking-wide uppercase">
        <span className="text-ink">Mid (9)</span>
        <span className="text-chili">High (11)</span>
        <span className="text-teal">Low (24)</span>
      </div>
      <ul className="mt-3 grid grid-cols-4 gap-2">
        {shownConsonants.map((letter) => (
          <li key={letter.ch}>
            <button
              type="button"
              onClick={() => speakThai(letter.name)}
              title={`${letter.name} (${letter.gloss})`}
              className="flex min-h-20 w-full flex-col items-center justify-center rounded-2xl bg-soft px-1 py-2"
            >
              <span lang="th" className={cn("thai-display text-3xl", classColor[letter.cls])}>
                {letter.ch}
              </span>
              <span className="text-xs font-extrabold text-muted">{letter.sound}</span>
            </button>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-lg font-extrabold">Vowel shapes</h2>
      <ul className="mt-3 grid gap-2">
        {vowels.map((vowel) => (
          <li key={vowel.mark}>
            <button
              type="button"
              onClick={() => speakThai(vowel.thai)}
              className="flex w-full items-center gap-3 rounded-2xl border border-line px-4 py-3 text-left"
            >
              <span lang="th" className="thai-display w-10 text-center text-2xl text-chili">
                {vowel.mark}
              </span>
              <span>
                <span className="block text-xs font-extrabold tracking-wide text-muted uppercase">{vowel.sound}</span>
                <span lang="th" className="thai-display text-lg">
                  {vowel.thai}
                </span>
                <span className="block text-sm font-bold text-muted">
                  {vowel.roman} · {vowel.en}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-lg font-extrabold">Thai digits</h2>
      <p className="mt-1 text-sm text-muted">Prices and dates sometimes use these instead of 0–9.</p>
      <ul className="mt-3 grid grid-cols-5 gap-2">
        {thaiDigits.map(([thai, arabic]) => (
          <li key={thai} className="rounded-2xl bg-soft py-2 text-center">
            <span lang="th" className="thai-display block text-2xl">
              {thai}
            </span>
            <span className="text-xs font-extrabold text-muted tabular-nums">{arabic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToneDrill() {
  const [round, setRound] = useState<(typeof toneDrills)[number][] | null>(null);
  const [index, setIndex] = useState(0);
  const [pick, setPick] = useState<ToneId | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setRound(shuffle(toneDrills).slice(0, 6));
  }, []);

  function restart() {
    setRound(shuffle(toneDrills).slice(0, 6));
    setIndex(0);
    setPick(null);
    setScore(0);
    setDone(false);
  }

  const card = round?.[index];

  return (
    <section className="mt-5 rounded-3xl border border-line p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-extrabold">Tone drill</h2>
        {round && !done && (
          <p className="text-sm font-extrabold text-muted tabular-nums">
            {index + 1}/{round.length}
          </p>
        )}
      </div>
      {!round || !card ? (
        <p className="mt-3 text-sm font-bold text-muted">Getting six words ready.</p>
      ) : done ? (
        <div className="mt-3">
          <p className="text-2xl font-extrabold tabular-nums">
            {score} of {round.length}
          </p>
          <p className="text-sm text-muted">Pitch is the word. Run it again whenever it gets slippery.</p>
          <button
            type="button"
            onClick={restart}
            className="btn-3d btn-teal mt-4 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
          >
            Drill again
          </button>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={() => speakThai(card.thai)}
            className="mt-3 flex w-full flex-col items-center rounded-2xl bg-soft px-4 py-4"
          >
            <Volume2 className="h-5 w-5 text-chili" />
            <span lang="th" className="thai-display mt-1 text-4xl">
              {card.thai}
            </span>
            <span className="text-sm font-bold text-muted">
              {card.roman} · {card.en}
            </span>
          </button>
          <div className="mt-3 grid gap-2">
            {tones.map((tone) => {
              const chosen = pick === tone.id;
              const right = tone.id === card.tone;
              const locked = pick !== null;
              return (
                <button
                  key={tone.id}
                  type="button"
                  disabled={locked}
                  onClick={() => {
                    setPick(tone.id);
                    if (tone.id === card.tone) setScore((value) => value + 1);
                  }}
                  className={cn(
                    "min-h-12 rounded-2xl border-2 px-4 text-left font-extrabold",
                    locked && right && "border-teal bg-teal text-on-accent",
                    locked && chosen && !right && "border-chili bg-chili text-on-accent",
                    locked && !right && !chosen && "border-line opacity-50",
                    !locked && "border-line bg-sheet",
                  )}
                >
                  {tone.label}
                  <span className={cn("ml-2 text-sm font-bold", locked && (right || chosen) ? "text-on-accent/80" : "text-muted")}>
                    {tone.hint}
                  </span>
                </button>
              );
            })}
          </div>
          {pick && (
            <button
              type="button"
              onClick={() => {
                if (index + 1 >= round.length) {
                  setDone(true);
                  return;
                }
                setPick(null);
                setIndex((value) => value + 1);
              }}
              className="btn-3d btn-chili mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold"
            >
              {index + 1 >= round.length ? "See score" : "Next"}
            </button>
          )}
        </>
      )}
    </section>
  );
}
