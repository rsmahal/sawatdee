import { ArrowLeft, BookOpen, ChevronRight, Lightbulb, Volume2 } from "lucide-react";
import { useCatalog } from "@/lib/catalog-store";
import { cn } from "@/lib/cn";
import { useProgress } from "@/lib/progress";
import { speakThai } from "@/lib/speech";
import { resolveGuideRoman, resolveGuideText, unitGuideById } from "@/lib/unit-guides";

export function UnitGuide({
  unitId,
  backLabel = "Back",
  onBack,
  nextLessonTitle,
  onStartNextLesson,
}: {
  unitId: string;
  backLabel?: string;
  onBack: () => void;
  nextLessonTitle?: string;
  onStartNextLesson?: () => void;
}) {
  const units = useCatalog((state) => state.units);
  const unit = units.find((item) => item.id === unitId);
  const guide = unitGuideById(unitId);
  const speaker = useProgress((state) => state.speaker);
  const showRoman = useProgress((state) => state.showRoman);

  if (!guide) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="text-lg font-extrabold">No sentence guide for this unit yet.</p>
        <button
          type="button"
          onClick={onBack}
          className="btn-3d btn-chili mt-4 inline-flex min-h-12 items-center gap-2 rounded-2xl px-5 font-extrabold"
        >
          {backLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-0 flex-1 flex-col bg-sheet">
      <header className="flex items-center gap-3 border-b border-line px-3 py-3 lg:px-6 lg:py-4">
        <button
          type="button"
          aria-label={backLabel}
          onClick={onBack}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-soft hover:text-ink"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-extrabold tracking-wide text-chili uppercase">
            {unit ? `${unit.kicker} · Sentence guide` : "Sentence guide"}
          </p>
          <h1 className="truncate text-lg font-extrabold">{unit ? unit.title : guide.headline}</h1>
        </div>
        <BookOpen className="h-5 w-5 shrink-0 text-chili" aria-hidden />
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 lg:px-8">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-5">
          <div>
            <h2 className="text-2xl font-extrabold text-balance">{guide.headline}</h2>
            <p className="mt-1.5 text-sm text-pretty text-muted">{guide.summary}</p>
          </div>

          {guide.patterns.map((pattern) => (
            <section
              key={pattern.title}
              className="rounded-3xl border border-line bg-paper p-4 sm:p-5"
            >
              <h3 className="text-base font-extrabold">{pattern.title}</h3>

              {/* Formula Blueprint */}
              <div
                className="mt-3 flex flex-wrap items-center gap-1.5"
                aria-label={`Sentence formula: ${pattern.formula.join(" plus ")}`}
              >
                {pattern.formula.map((step, idx) => (
                  <div key={`${step}-${idx}`} className="flex items-center gap-1.5">
                    {idx > 0 && (
                      <span className="text-xs font-extrabold text-muted" aria-hidden>
                        +
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-sheet px-2.5 py-1 text-xs font-extrabold">
                      <span className="text-chili tabular-nums">{idx + 1}.</span>
                      <span>{step}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Setup Explanation */}
              <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{pattern.setup}</p>

              {/* Word-by-word Playable Examples */}
              <div className="mt-4 grid gap-3">
                {pattern.examples.map((ex, idx) => {
                  const fullThai = resolveGuideText(ex.thai, speaker);
                  const fullRoman = resolveGuideRoman(ex.roman, speaker);
                  return (
                    <div
                      key={`${ex.thai}-${idx}`}
                      className="rounded-2xl border border-line bg-sheet p-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          aria-label={`Play example: ${ex.en}`}
                          onClick={() => speakThai(fullThai, speaker)}
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-soft text-chili transition-transform active:scale-[0.95]"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                        <div className="min-w-0 flex-1">
                          <p lang="th" className="thai-display text-xl text-pretty">
                            {fullThai}
                          </p>
                          {showRoman && (
                            <p className="mt-0.5 text-xs font-bold text-muted">{fullRoman}</p>
                          )}
                          <p className="mt-0.5 text-sm font-extrabold">{ex.en}</p>
                        </div>
                      </div>

                      {/* Slot-by-slot breakdown */}
                      <div className="mt-3 flex flex-wrap gap-1.5 border-t border-line/60 pt-3">
                        {ex.slots.map((slot, sIdx) => {
                          const slotThai = resolveGuideText(slot.thai, speaker);
                          const slotRoman = resolveGuideRoman(slot.roman, speaker);
                          return (
                            <div
                              key={`${slot.role}-${sIdx}`}
                              className={cn(
                                "rounded-xl border px-2.5 py-1.5 text-left",
                                slot.accent
                                  ? "border-chili/35 bg-soft"
                                  : "border-line bg-paper",
                              )}
                            >
                              <span
                                className={cn(
                                  "block text-[10px] font-extrabold tracking-wide uppercase",
                                  slot.accent ? "text-chili" : "text-muted",
                                )}
                              >
                                {slot.role}
                              </span>
                              <span lang="th" className="thai-display block text-base">
                                {slotThai}
                              </span>
                              {showRoman && (
                                <span className="block text-[11px] font-bold text-muted">
                                  {slotRoman}
                                </span>
                              )}
                              {slot.en && (
                                <span className="block text-[11px] font-bold text-muted">
                                  {slot.en}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {pattern.watchOut && (
                <div className="mt-3 flex items-start gap-2 rounded-2xl bg-soft px-3.5 py-2.5 text-xs font-bold text-pretty text-ink">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-marigold" aria-hidden />
                  <span>{pattern.watchOut}</span>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <footer className="safe-bottom border-t border-line bg-sheet px-4 pt-3 lg:px-8 lg:pb-6">
        <div className="mx-auto flex w-full max-w-2xl gap-2">
          <button
            type="button"
            onClick={onBack}
            className={cn(
              "min-h-12 rounded-2xl font-extrabold",
              onStartNextLesson
                ? "border-2 border-line bg-sheet px-4 text-muted hover:text-ink"
                : "btn-3d btn-chili flex w-full items-center justify-center",
            )}
          >
            {backLabel}
          </button>
          {onStartNextLesson && nextLessonTitle && (
            <button
              type="button"
              onClick={onStartNextLesson}
              className="btn-3d btn-chili flex min-h-12 flex-1 items-center justify-center gap-1.5 rounded-2xl px-4 font-extrabold"
            >
              <span className="truncate">Start {nextLessonTitle}</span>
              <ChevronRight className="h-4 w-4 shrink-0" />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
