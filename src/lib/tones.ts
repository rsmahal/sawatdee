import type { ToneId } from "./script-data";

export type SyllableTone = {
  syllable: string;
  tone: ToneId;
  label: string;
};

export const TONE_LABELS: Record<ToneId, string> = {
  mid: "Mid",
  low: "Low",
  falling: "Falling",
  high: "High",
  rising: "Rising",
};

export function detectSyllableTone(syllable: string): ToneId {
  const nfd = syllable.normalize("NFD");
  if (nfd.includes("\u0300")) return "low";
  if (nfd.includes("\u0302")) return "falling";
  if (nfd.includes("\u0301")) return "high";
  if (nfd.includes("\u030c")) return "rising";
  return "mid";
}

export function parseSyllableTones(roman: string): SyllableTone[] {
  const parts = roman
    .trim()
    .split(/[\s-]+/)
    .filter(Boolean);
  return parts.map((syllable) => {
    const tone = detectSyllableTone(syllable);
    return {
      syllable,
      tone,
      label: TONE_LABELS[tone],
    };
  });
}
