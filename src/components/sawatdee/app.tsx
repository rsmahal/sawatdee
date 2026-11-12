import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { BookOpen, Home, Repeat, UserRound, Volume2 } from "lucide-react";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { cn } from "@/lib/cn";
import { useCatalog } from "@/lib/catalog-store";
import { loadCurriculum } from "@/lib/curriculum-api";
import { loadProgress, saveProgress } from "@/lib/learner-progress";
import { learningSnapshot, useProgress } from "@/lib/progress";
import { reviewStats, todayKey } from "@/lib/srs";
import { warmVoices } from "@/lib/speech";
import { Lesson } from "./lesson";
import { Path } from "./path";
import { Profile } from "./profile";
import { Review, ReviewSession } from "./review";
import { ScriptLab } from "./script-lab";

type Tab = "learn" | "review" | "script" | "me";
type ReviewMode = "due" | "ahead";

export function SawatdeeApp() {
  const { user, isPending } = useCurrentUserState();
  const scriptStyle = useProgress((state) => state.scriptStyle);
  const theme = useProgress((state) => state.theme);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("thai-traditional", scriptStyle === "traditional");
  }, [theme, scriptStyle]);

  useEffect(() => {
    void useProgress.persist.rehydrate();
    warmVoices();
  }, []);

  if (isPending) return <GateSplash label="Loading your course" />;
  if (!user) return <RedirectToSignIn />;
  return <Course userId={user.id} />;
}

function Course({ userId }: { userId: string }) {
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);
  const ready = useRef(false);
  const lastSaved = useRef("");
  const timer = useRef<number | null>(null);
  const [tab, setTab] = useState<Tab>("learn");
  const [lessonId, setLessonId] = useState<string | null>(null);
  const [reviewMode, setReviewMode] = useState<ReviewMode | null>(null);
  const cards = useProgress((state) => state.cards);
  const due = reviewStats(cards, todayKey()).due;

  useEffect(() => {
    ready.current = false;
    setPhase("loading");
    let cancel = false;
    Promise.all([loadProgress(), loadCurriculum()])
      .then(([learning, catalog]) => {
        if (cancel) return;
        useCatalog.getState().setCatalog(catalog);
        if (learning) useProgress.getState().applyLearning(learning);
        else useProgress.getState().resetProgress();
        lastSaved.current = JSON.stringify(learningSnapshot(useProgress.getState()));
        ready.current = true;
        const seen = catalog.lessons
          .filter((lesson) => useProgress.getState().completed[lesson.id])
          .flatMap((lesson) => lesson.words);
        useProgress.getState().ingestWords(seen);
        setPhase("ready");
      })
      .catch(() => {
        if (!cancel) setPhase("error");
      });
    return () => {
      cancel = true;
      ready.current = false;
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [userId, attempt]);

  useEffect(() => {
    return useProgress.subscribe((state) => {
      if (!ready.current) return;
      const snap = learningSnapshot(state);
      const key = JSON.stringify(snap);
      if (key === lastSaved.current) return;
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        lastSaved.current = key;
        void saveProgress({ data: snap }).catch(() => {
          lastSaved.current = "";
        });
      }, 350);
    });
  }, [userId]);

  if (phase === "loading") return <GateSplash label="Loading your progress" />;
  if (phase === "error") {
    return (
      <div className="grid min-h-dvh place-items-center bg-paper px-6">
        <div className="w-full max-w-sm text-center">
          <p className="text-lg font-extrabold">Couldn't load this account.</p>
          <button
            type="button"
            onClick={() => setAttempt((value) => value + 1)}
            className="btn-3d btn-chili mt-4 min-h-12 w-full rounded-2xl font-extrabold"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-paper lg:flex lg:h-dvh lg:overflow-hidden">
      <BrandPanel />
      <div className="mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden bg-sheet lg:mx-0 lg:shrink-0 lg:border-l lg:border-line">
        {lessonId ? (
          <Lesson key={lessonId} lessonId={lessonId} onExit={() => setLessonId(null)} />
        ) : reviewMode ? (
          <ReviewSession key={reviewMode} mode={reviewMode} onExit={() => setReviewMode(null)} />
        ) : (
          <>
            <div className="min-h-0 flex-1 overflow-y-auto">
              {tab === "learn" && <Path onStart={setLessonId} onReview={() => setTab("review")} />}
              {tab === "review" && <Review onStart={setReviewMode} />}
              {tab === "script" && <ScriptLab />}
              {tab === "me" && <Profile />}
            </div>
            <nav className="safe-bottom grid shrink-0 grid-cols-4 gap-1 border-t border-line px-2 pt-2" aria-label="Sections">
              <TabButton active={tab === "learn"} label="Learn" onClick={() => setTab("learn")}>
                <Home className="h-5 w-5" />
              </TabButton>
              <TabButton active={tab === "review"} label="Review" dot={due > 0} onClick={() => setTab("review")}>
                <Repeat className="h-5 w-5" />
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

function GateSplash({ label }: { label: string }) {
  return (
    <div className="grid min-h-dvh place-items-center bg-paper px-6">
      <p className="text-sm font-extrabold text-muted">{label}</p>
    </div>
  );
}

function TabButton({
  active,
  label,
  onClick,
  dot,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  dot?: boolean;
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
      <span className="relative">
        {children}
        {dot ? <span className="absolute -top-0.5 -right-1.5 h-2 w-2 rounded-full bg-chili" /> : null}
      </span>
      {label}
    </button>
  );
}

function BrandPanel() {
  const lessons = useCatalog((state) => state.lessons);
  const vocabulary = useCatalog((state) => state.vocabulary);
  return (
    <aside className="relative hidden flex-1 flex-col justify-center overflow-hidden px-14 py-12 lg:flex">
      <div className="max-w-lg">
        <div className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-chili text-3xl font-extrabold text-on-accent">
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
          A full CEFR A1 &amp; A2 course with {vocabulary.length} words across {lessons.length} lessons, real Thai
          script, five tones, and the polite particle that matches your voice. Review brings back only the words you have
          already seen.
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
            body="All 44 consonants, 19 vowel patterns, Thai digits, and a tone drill live under Script."
          />
        </ul>
        <p className="mt-8 text-sm font-bold text-muted">Sign in. Lessons, vocabulary, and review stay with your account.</p>
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
