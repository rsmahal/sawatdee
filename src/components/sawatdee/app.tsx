import { useEffect, useState, type ReactNode } from "react";
import { BookOpen, Home, UserRound, Volume2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { useProgress } from "@/lib/progress";
import { warmVoices } from "@/lib/speech";
import { Lesson } from "./lesson";
import { Path } from "./path";
import { Profile } from "./profile";
import { ScriptLab } from "./script-lab";

type Tab = "learn" | "script" | "me";

export function SawatdeeApp() {
  const [tab, setTab] = useState<Tab>("learn");
  const [lessonId, setLessonId] = useState<string | null>(null);

  useEffect(() => {
    void useProgress.persist.rehydrate();
    warmVoices();
  }, []);

  return (
    <div className="min-h-dvh bg-paper lg:flex lg:h-dvh lg:overflow-hidden">
      <BrandPanel />
      <div className="mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden bg-sheet lg:mx-0 lg:shrink-0 lg:border-l lg:border-line">
        {lessonId ? (
          <Lesson key={lessonId} lessonId={lessonId} onExit={() => setLessonId(null)} />
        ) : (
          <>
            <div className="min-h-0 flex-1 overflow-y-auto">
              {tab === "learn" && <Path onStart={setLessonId} />}
              {tab === "script" && <ScriptLab />}
              {tab === "me" && <Profile />}
            </div>
            <nav className="safe-bottom grid shrink-0 grid-cols-3 gap-1 border-t border-line px-2 pt-2" aria-label="Sections">
              <TabButton active={tab === "learn"} label="Learn" onClick={() => setTab("learn")}>
                <Home className="h-5 w-5" />
              </TabButton>
              <TabButton active={tab === "script"} label="Script" onClick={() => setTab("script")}>
                <BookOpen className="h-5 w-5" />
              </TabButton>
              <TabButton active={tab === "me"} label="You" onClick={() => setTab("me")}>
                <UserRound className="h-5 w-5" />
              </TabButton>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

function TabButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={cn(
        "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-xs font-extrabold",
        active ? "bg-soft text-chili" : "text-muted",
      )}
    >
      {children}
      {label}
    </button>
  );
}

function BrandPanel() {
  return (
    <aside className="relative hidden flex-1 flex-col justify-center overflow-hidden px-14 py-12 lg:flex">
      <div className="max-w-lg">
        <div className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-chili text-3xl font-extrabold text-sheet">
            <span lang="th" className="thai-display">
              ส
            </span>
          </span>
          <div>
            <p className="text-sm font-extrabold tracking-wide text-chili uppercase">Sawatdee</p>
            <p lang="th" className="thai-display text-2xl">
              สวัสดี
            </p>
          </div>
        </div>
        <h2 className="mt-8 text-5xl font-extrabold text-balance">Speak Thai from the first lesson.</h2>
        <p className="mt-4 max-w-md text-lg text-pretty text-muted">
          A pocket course with real script, the five tones, and the polite particle that matches your voice.
          Ten lessons, from hello to the night market.
        </p>
        <ul className="mt-8 grid gap-4">
          <BrandPoint
            icon={<Volume2 className="h-5 w-5" />}
            title="Listen, then answer"
            body="Every new word can be spoken aloud. Tap the speaker if you want it again."
          />
          <BrandPoint
            icon={<Home className="h-5 w-5" />}
            title="Build the phrase"
            body="Tap Thai tiles into order, including ครับ or ค่ะ, depending on how you speak."
          />
          <BrandPoint
            icon={<BookOpen className="h-5 w-5" />}
            title="Read the script"
            body="A starter alphabet, vowel shapes, Thai digits, and a tone drill live under Script."
          />
        </ul>
        <p className="mt-8 text-sm font-bold text-muted">Progress stays on this device.</p>
      </div>
      <p aria-hidden className="pointer-events-none absolute -right-2 -bottom-10 text-9xl font-extrabold text-line select-none">
        <span lang="th" className="thai-display">
          ส
        </span>
      </p>
    </aside>
  );
}

function BrandPoint({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-soft text-chili">{icon}</span>
      <span>
        <span className="block font-extrabold">{title}</span>
        <span className="block text-sm text-pretty text-muted">{body}</span>
      </span>
    </li>
  );
}
