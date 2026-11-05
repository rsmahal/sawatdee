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
        Modern drops the little loops. Traditional keeps them. The spelling does not change.
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

      <h2 className="mt-8 text-lg font-extrabold">Letters you'll meet first</h2>
      <p className="mt-1 text-sm text-pretty text-muted">
        Not the full alphabet. Color is the class, and class decides the tone of a new word. Mid is ink, high is
        chili, low is teal. Tap a letter to hear its name.
      </p>
      <div className="mt-3 flex gap-3 text-xs font-extrabold tracking-wide uppercase">
        <span className="text-ink">Mid</span>
        <span className="text-chili">High</span>
        <span className="text-teal">Low</span>
      </div>
      <ul className="mt-3 grid grid-cols-4 gap-2">
        {consonants.map((letter) => (
          <li key={letter.ch}>
            <button
              type="button"
              onClick={() => speakThai(letter.name)}
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
                    locked && right && "border-teal bg-teal text-sheet",
                    locked && chosen && !right && "border-chili bg-chili text-sheet",
                    locked && !right && !chosen && "border-line opacity-50",
                    !locked && "border-line bg-sheet",
                  )}
                >
                  {tone.label}
                  <span className={cn("ml-2 text-sm font-bold", locked && (right || chosen) ? "text-sheet/80" : "text-muted")}>
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
