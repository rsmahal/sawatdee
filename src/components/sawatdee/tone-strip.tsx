import { cn } from "@/lib/cn";
import type { ToneId } from "@/lib/script-data";
import { parseSyllableTones } from "@/lib/tones";

const SURFACE_TONE_CLASSES: Record<ToneId, string> = {
  mid: "border-line bg-sheet text-muted",
  low: "border-teal/30 bg-teal/12 text-teal",
  falling: "border-chili/30 bg-chili/12 text-chili",
  high: "border-marigold/45 bg-marigold/18 text-marigold-deep dark:text-marigold",
  rising: "border-ink/25 bg-ink/10 text-ink",
};

export function ToneStrip({
  roman,
  variant = "surface",
  className,
}: {
  roman: string;
  variant?: "surface" | "inverse";
  className?: string;
}) {
  const syllables = parseSyllableTones(roman);
  if (syllables.length === 0) return null;

  return (
    <div
      className={cn("flex flex-wrap items-center gap-1", className)}
      aria-label={`Tones: ${syllables.map((s) => s.label).join(", ")}`}
    >
      {syllables.map((item, idx) => (
        <span
          key={`${item.syllable}-${idx}`}
          className={cn(
            "inline-flex items-center rounded-md border px-1.5 py-0.5 text-[11px] leading-none font-extrabold",
            variant === "inverse"
              ? "border-on-accent/30 bg-sheet/18 text-on-accent"
              : SURFACE_TONE_CLASSES[item.tone],
          )}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
