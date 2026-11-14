import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { BookOpen, Home, Repeat, UserRound } from "lucide-react";
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
  const xp = useProgress((state) => state.xp);
  const streak = useProgress((state) => state.streak);
  const vocabulary = useCatalog((state) => state.vocabulary);
  const due = reviewStats(cards, todayKey()).due;
  const seenWords = Object.keys(cards).length;
  const inSession = Boolean(lessonId || reviewMode);

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
      {!inSession && (
        <DesktopSidebar
          tab={tab}
          due={due}
          xp={xp}
          streak={streak}
          seenWords={seenWords}
          totalWords={vocabulary.length}
          onTab={setTab}
        />
      )}
      <main
        className={cn(
          "mx-auto flex h-dvh w-full flex-col overflow-hidden",
          inSession
            ? "max-w-md bg-sheet lg:my-6 lg:h-[calc(100dvh-3rem)] lg:max-w-2xl lg:rounded-3xl lg:border lg:border-line"
            : "max-w-md bg-sheet lg:h-full lg:max-w-none lg:flex-1 lg:bg-paper",
        )}
      >
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
            <nav
              className="safe-bottom grid shrink-0 grid-cols-4 gap-1 border-t border-line bg-sheet px-2 pt-2 lg:hidden"
              aria-label="Sections"
            >
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
      </main>
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

function DesktopSidebar({
  tab,
  due,
  xp,
  streak,
  seenWords,
  totalWords,
  onTab,
}: {
  tab: Tab;
  due: number;
  xp: number;
  streak: number;
  seenWords: number;
  totalWords: number;
  onTab: (tab: Tab) => void;
}) {
  const navItems: { id: Tab; label: string; icon: ReactNode; badge?: number }[] = [
    { id: "learn", label: "Learn", icon: <Home className="h-5 w-5 shrink-0" /> },
    { id: "review", label: "Review", icon: <Repeat className="h-5 w-5 shrink-0" />, badge: due },
    { id: "script", label: "Script", icon: <BookOpen className="h-5 w-5 shrink-0" /> },
    { id: "me", label: "Profile", icon: <UserRound className="h-5 w-5 shrink-0" /> },
  ];

  return (
    <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:justify-between lg:border-r lg:border-line lg:bg-sheet lg:px-4 lg:py-6">
      <div>
        <div className="flex items-center gap-3 px-2">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-chili text-2xl font-extrabold text-on-accent">
            <span lang="th" className="thai-display">
              ส
            </span>
          </span>
          <div className="min-w-0">
            <p className="text-sm font-extrabold tracking-wide text-chili uppercase">Sawatdee</p>
            <p lang="th" className="thai-display text-lg leading-tight">
              สวัสดี
            </p>
          </div>
        </div>

        <nav className="mt-8 grid gap-1.5" aria-label="Course sections">
          {navItems.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-current={active ? "page" : undefined}
                onClick={() => onTab(item.id)}
                className={cn(
                  "flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl px-4 text-left text-sm font-extrabold whitespace-nowrap transition-colors duration-150",
                  active ? "bg-soft text-chili" : "text-muted hover:bg-soft/60 hover:text-ink",
                )}
              >
                <span className="flex items-center gap-3">
                  {item.icon}
                  {item.label}
                </span>
                {item.badge && item.badge > 0 ? (
                  <span className="text-xs font-extrabold text-chili tabular-nums">{item.badge} due</span>
                ) : null}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="rounded-2xl bg-soft p-4">
        <p className="text-xs font-extrabold tracking-wide text-muted uppercase">Your pace</p>
        <dl className="mt-3 grid grid-cols-2 gap-3 text-sm tabular-nums">
          <div>
            <dt className="text-xs font-bold text-muted">XP</dt>
            <dd className="text-lg font-extrabold">{xp}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold text-muted">Streak</dt>
            <dd className="text-lg font-extrabold">{streak}d</dd>
          </div>
          <div className="col-span-2 border-t border-line pt-2">
            <dt className="text-xs font-bold text-muted">Vocabulary seen</dt>
            <dd className="text-base font-extrabold">
              {seenWords} / {totalWords}
            </dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
