import { o as __toESM } from "../_runtime.mjs";
import { i as signOut } from "./client-BF-G9gzu.mjs";
import { i as hasGateSessionMarker } from "./server-BK1JVJCR.mjs";
import { n as useCurrentUserState, t as useCurrentUser } from "./use-current-user-BNWkNZYJ.mjs";
import { a as lessonById, c as nextLesson, d as staticCurriculumCatalog, i as isUnlocked, l as particleLabel, n as courseNote, r as dailyPhrases, s as levels, u as resolveTok } from "./curriculum-BpJOvEwT.mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { a as nextInterval, c as todayKey, i as learningSnapshot, l as useProgress, n as duePhrase, o as parseLearning, r as gapLabel, s as reviewStats, t as authMiddleware, u as xpGain } from "./progress-CfMeIEsu.mjs";
import { Ut as require_react, v as Link, x as require_jsx_runtime, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create } from "../_libs/zustand.mjs";
import { a as Star, c as Repeat, d as Heart, f as Flame, g as Award, h as BookOpen, l as Lock, m as Check, n as Volume2, o as Search, p as ChevronRight, r as UserRound, s as RotateCcw, t as X, u as House } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-DR-IWflR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Auth state components — plain wrappers around `useCurrentUserState()`.
*
* With auth on, visitors are signed out until they authenticate — in the sandbox
* live preview too, which does real sign-in. The shared dev user appears only
* when auth is disabled (`VITE_AUTH_ENABLED=false`, the shipped default).
* While the session is still resolving, gates that care about signed-out state
* render nothing so there's no signed-out flash on hard reload.
*/
/** Where `RedirectToSignIn` sends signed-out visitors. Create this route. */
var SIGN_IN_PATH = "/login";
/**
* Client-side redirect to the sign-in route (TanStack `<Navigate>` — NOT a full
* `window.location` reload). A hard navigation re-bootstraps the SPA and re-runs
* session loading, which feels like a second "Loading…" on /login.
*
* Guard routes by waiting out `isPending` first (see `use-current-user`), then
* render this.
*/
function RedirectToSignIn({ to = SIGN_IN_PATH }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to });
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var useCatalog = create((set) => ({
	...staticCurriculumCatalog,
	fromDatabase: false,
	setCatalog: (catalog) => set({
		version: catalog.version,
		units: catalog.units,
		lessons: catalog.lessons,
		vocabulary: catalog.vocabulary,
		fromDatabase: true
	})
}));
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loadCurriculum = createServerFn({ method: "GET" }).handler(createSsrRpc("880f58976003d284c9c5ea0bbf786ffa13b2036ada12da19e05c1a0c50dcd649"));
var loadProgress = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("051aa46e3ecf11264c3d7e62a6ea80618cdeb21a96aa3fb3ae85f924992207ce"));
var saveProgress = createServerFn({ method: "POST" }).validator((input) => {
	const learning = parseLearning(input);
	if (!learning) throw new Error("Invalid progress");
	return learning;
}).middleware([authMiddleware]).handler(createSsrRpc("89a9b707bb1464d1fa4a04be9382ae4c7fb2a8b57950e23a3285a2f8f31d52a8"));
function canSpeak() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
function warmVoices() {
	if (!canSpeak()) return;
	window.speechSynthesis.getVoices();
	window.speechSynthesis.addEventListener("voiceschanged", () => {
		window.speechSynthesis.getVoices();
	});
}
function speakThai(text) {
	if (!canSpeak() || !text) return;
	const synth = window.speechSynthesis;
	const utter = new SpeechSynthesisUtterance(text);
	utter.lang = "th-TH";
	utter.rate = .82;
	const voice = synth.getVoices().find((item) => item.lang.toLowerCase().startsWith("th"));
	if (voice) utter.voice = voice;
	synth.cancel();
	synth.speak(utter);
}
function stopSpeech() {
	if (!canSpeak()) return;
	window.speechSynthesis.cancel();
}
function shuffle(items) {
	const next = items.slice();
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const tmp = next[i];
		next[i] = next[j];
		next[j] = tmp;
	}
	return next;
}
function gloss(word, showRoman) {
	return showRoman ? `${word.thai} · ${word.roman} — ${word.en}` : `${word.thai} — ${word.en}`;
}
function ExerciseBody({ exercise, speaker, showRoman, autoplay, result, gradeRef, onAnswer, onCanCheck }) {
	if (exercise.kind === "choice") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
		exercise,
		showRoman,
		autoplay,
		result,
		gradeRef,
		onCanCheck
	});
	if (exercise.kind === "tiles") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tiles, {
		exercise,
		speaker,
		showRoman,
		result,
		gradeRef,
		onCanCheck
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pairs, {
		exercise,
		showRoman,
		result,
		gradeRef,
		onAnswer,
		onCanCheck
	});
}
function Choice({ exercise, showRoman, autoplay, result, gradeRef, onCanCheck }) {
	const options = (0, import_react.useMemo)(() => shuffle([exercise.word, ...exercise.traps]), [exercise]);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [peek, setPeek] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (autoplay && (exercise.dir === "th-en" || exercise.dir === "listen")) speakThai(exercise.word.thai);
		return () => stopSpeech();
	}, [autoplay, exercise]);
	(0, import_react.useEffect)(() => {
		onCanCheck(picked !== null);
	}, [picked, onCanCheck]);
	gradeRef.current = { grade: () => picked ? {
		ok: picked === exercise.word.thai,
		solution: gloss(exercise.word, showRoman)
	} : null };
	const revealed = exercise.dir !== "listen" || peek || Boolean(result);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-1 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-extrabold tracking-wide text-muted uppercase",
					children: exercise.dir === "listen" ? "What did you hear?" : exercise.dir === "th-en" ? "What does this mean?" : "How do you say this?"
				}),
				exercise.dir === "en-th" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-extrabold text-balance",
					children: exercise.word.en
				}) : revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					lang: "th",
					className: "thai-display mt-2 text-4xl text-balance",
					children: exercise.word.thai
				}), showRoman && exercise.dir !== "listen" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-bold text-muted",
					children: exercise.word.roman
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg font-extrabold",
					children: "Listen first"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-center gap-2",
					children: [exercise.dir !== "en-th" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Play Thai",
						onClick: () => speakThai(exercise.word.thai),
						className: "grid h-12 w-12 place-items-center rounded-full bg-soft text-chili transition-transform duration-150 active:scale-[0.96]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" })
					}), exercise.dir === "listen" && !revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPeek(true),
						className: "min-h-12 rounded-full px-4 text-sm font-extrabold text-teal",
						children: "Show the word"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2",
			children: options.map((option) => {
				const primary = exercise.dir === "en-th" ? option.thai : option.en;
				const sub = exercise.dir === "en-th" && showRoman ? option.roman : void 0;
				const isPicked = picked === option.thai;
				const isAnswer = option.thai === exercise.word.thai;
				const locked = Boolean(result);
				const filled = locked && (isAnswer || isPicked && !isAnswer);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: locked,
					"aria-pressed": isPicked,
					onClick: () => setPicked(option.thai),
					className: cn("min-h-14 rounded-2xl border-2 px-4 py-3 text-left transition-transform duration-150 active:not-disabled:scale-[0.96]", locked && isAnswer && "border-teal bg-teal text-on-accent", locked && isPicked && !isAnswer && "border-chili bg-chili text-on-accent", locked && !isAnswer && !isPicked && "border-line opacity-50", !locked && isPicked && "border-chili bg-soft", !locked && !isPicked && "border-line bg-sheet"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: exercise.dir === "en-th" ? "th" : void 0,
						className: cn("block text-lg font-extrabold", exercise.dir === "en-th" && "thai-display text-2xl"),
						children: primary
					}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("block text-sm font-bold", filled ? "text-on-accent/80" : "text-muted"),
						children: sub
					})]
				}, option.thai);
			})
		})]
	});
}
function Tiles({ exercise, speaker, showRoman, result, gradeRef, onCanCheck }) {
	const model = (0, import_react.useMemo)(() => {
		const answer = exercise.answer.map((tok, index) => ({
			key: `a-${index}`,
			word: resolveTok(tok, speaker)
		}));
		const extra = exercise.extra.map((tok, index) => ({
			key: `e-${index}`,
			word: resolveTok(tok, speaker)
		}));
		return {
			answer,
			bank: shuffle([...answer, ...extra])
		};
	}, [exercise, speaker]);
	const [pickedKeys, setPickedKeys] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		onCanCheck(pickedKeys.length === model.answer.length && model.answer.length > 0);
	}, [
		pickedKeys,
		model.answer.length,
		onCanCheck
	]);
	const phrase = model.answer.map((chip) => chip.word.thai).join(" ");
	const roman = model.answer.map((chip) => chip.word.roman).join(" ");
	gradeRef.current = { grade: () => {
		if (pickedKeys.length !== model.answer.length) return null;
		const built = pickedKeys.map((key) => model.bank.find((chip) => chip.key === key)?.word.thai ?? "");
		const target = model.answer.map((chip) => chip.word.thai);
		return {
			ok: built.join("") === target.join(""),
			solution: showRoman ? `${phrase} · ${roman}` : phrase
		};
	} };
	function toggle(key) {
		if (result) return;
		setPickedKeys((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	}
	const picked = pickedKeys.map((key) => model.bank.find((chip) => chip.key === key));
	const bank = model.bank.filter((chip) => !pickedKeys.includes(chip.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-extrabold tracking-wide text-muted uppercase",
					children: "Build this in Thai"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-extrabold text-balance",
					children: exercise.prompt
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-20 flex-wrap content-start gap-2 rounded-2xl border-2 border-dashed border-line bg-paper p-3",
				children: [picked.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-muted",
					children: "Tap the words below"
				}), picked.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					word: chip.word,
					showRoman,
					disabled: Boolean(result),
					onClick: () => toggle(chip.key)
				}, chip.key))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: bank.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					word: chip.word,
					showRoman,
					disabled: Boolean(result),
					onClick: () => toggle(chip.key)
				}, chip.key))
			})
		]
	});
}
function Tile({ word, showRoman, disabled, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled,
		onClick,
		className: "min-h-12 rounded-2xl border-2 border-line bg-sheet px-3 py-1 text-center transition-transform duration-150 active:not-disabled:scale-[0.96]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			lang: "th",
			className: "thai-display block text-lg",
			children: word.thai
		}), showRoman && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs font-bold text-muted",
			children: word.roman
		})]
	});
}
function Pairs({ exercise, showRoman, result, gradeRef, onAnswer, onCanCheck }) {
	const right = (0, import_react.useMemo)(() => shuffle(exercise.pairs), [exercise]);
	const [leftPick, setLeftPick] = (0, import_react.useState)(null);
	const [matched, setMatched] = (0, import_react.useState)([]);
	const [bad, setBad] = (0, import_react.useState)(false);
	gradeRef.current = { grade: () => null };
	(0, import_react.useEffect)(() => {
		onCanCheck(false);
	}, [onCanCheck]);
	(0, import_react.useEffect)(() => {
		if (!bad) return;
		const timer = window.setTimeout(() => {
			setBad(false);
			setLeftPick(null);
		}, 420);
		return () => window.clearTimeout(timer);
	}, [bad]);
	function pickRight(en) {
		if (!leftPick || result || matched.includes(en)) return;
		if (leftPick === en) {
			const next = [...matched, en];
			setMatched(next);
			setLeftPick(null);
			if (next.length === exercise.pairs.length) onAnswer({
				ok: true,
				solution: ""
			});
			return;
		}
		setBad(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-4", bad && "nudge"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-extrabold tracking-wide text-muted uppercase",
				children: "Match the pairs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-2xl font-extrabold text-balance",
				children: "Thai on the left, English on the right"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid content-start gap-2",
				children: exercise.pairs.map((pair) => {
					const done = matched.includes(pair.en);
					const active = leftPick === pair.en;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: done || Boolean(result),
						onClick: () => setLeftPick(pair.en),
						className: cn("min-h-14 rounded-2xl border-2 px-3 py-2 text-left break-words", done && "border-teal bg-teal text-on-accent", !done && active && "border-chili bg-soft", !done && !active && "border-line bg-sheet"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "th",
							className: "thai-display block text-lg",
							children: pair.thai
						}), showRoman && !done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-bold text-muted",
							children: pair.roman
						})]
					}, pair.thai);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid content-start gap-2",
				children: right.map((pair) => {
					const done = matched.includes(pair.en);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: done || Boolean(result),
						onClick: () => pickRight(pair.en),
						className: cn("min-h-14 rounded-2xl border-2 px-3 py-2 text-left text-base font-extrabold break-words", done ? "border-teal bg-teal text-on-accent" : "border-line bg-sheet"),
						children: pair.en
					}, pair.en);
				})
			})]
		})]
	});
}
var PRAISE = [
	"Nice.",
	"That's it.",
	"Exactly."
];
function Lesson({ lessonId, onExit }) {
	const catalogLessons = useCatalog((state) => state.lessons);
	const lesson = lessonById(lessonId, catalogLessons);
	const speaker = useProgress((state) => state.speaker);
	const showRoman = useProgress((state) => state.showRoman);
	const autoplay = useProgress((state) => state.autoplay);
	const recordAnswer = useProgress((state) => state.recordAnswer);
	const finishLesson = useProgress((state) => state.finishLesson);
	const ingestWords = useProgress((state) => state.ingestWords);
	(0, import_react.useEffect)(() => {
		if (lesson) ingestWords(lesson.words);
	}, [lesson, ingestWords]);
	const [phase, setPhase] = (0, import_react.useState)("intro");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [hearts, setHearts] = (0, import_react.useState)(5);
	const [combo, setCombo] = (0, import_react.useState)(0);
	const [mistakes, setMistakes] = (0, import_react.useState)(0);
	const [sessionXp, setSessionXp] = (0, import_react.useState)(0);
	const [stars, setStars] = (0, import_react.useState)(1);
	const [result, setResult] = (0, import_react.useState)(null);
	const [canCheck, setCanCheck] = (0, import_react.useState)(false);
	const [confirmExit, setConfirmExit] = (0, import_react.useState)(false);
	const gradeRef = (0, import_react.useRef)(null);
	const onCanCheck = (0, import_react.useCallback)((ready) => setCanCheck(ready), []);
	if (!lesson) return null;
	const exercise = lesson.exercises[index];
	const total = lesson.exercises.length;
	function accept(grade) {
		if (result) return;
		if (exercise?.kind === "pairs") {
			const gain = 10;
			setSessionXp((value) => value + gain);
			recordAnswer(true, gain);
			setResult(grade);
			return;
		}
		const gain = grade.ok ? xpGain(combo) : 0;
		if (grade.ok) {
			setCombo((value) => value + 1);
			setSessionXp((value) => value + gain);
		} else {
			setCombo(0);
			setMistakes((value) => value + 1);
			setHearts((value) => Math.max(0, value - 1));
		}
		recordAnswer(grade.ok, gain);
		setResult(grade);
	}
	function onCheck() {
		const grade = gradeRef.current?.grade();
		if (!grade) return;
		accept(grade);
	}
	function onContinue() {
		if (!result || !exercise) return;
		const last = index + 1 >= total;
		if (!last && !result.ok && hearts <= 0) {
			setPhase("down");
			return;
		}
		if (last) {
			const earned = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
			finishLesson(lessonId, earned, 20);
			setSessionXp((value) => value + 20);
			setStars(earned);
			setPhase("done");
			return;
		}
		setResult(null);
		setCanCheck(false);
		setIndex((value) => value + 1);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-0 flex-1 flex-col",
		children: [
			phase === "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center gap-2 px-4 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton$1, {
						label: "Leave lesson",
						onClick: () => setConfirmExit(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-extrabold text-muted",
						children: lesson.subtitle
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-5 pt-4 pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-extrabold text-balance",
							children: lesson.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-pretty text-muted",
							children: lesson.tip
						}),
						lesson.words.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-2",
							children: lesson.words.map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 rounded-2xl border border-line bg-paper px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `Play ${word.en}`,
									onClick: () => speakThai(word.thai),
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-soft text-chili transition-transform duration-150 active:scale-[0.96]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											lang: "th",
											className: "thai-display text-2xl",
											children: word.thai
										}),
										showRoman && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-muted",
											children: word.roman
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-extrabold",
											children: word.en
										})
									]
								})]
							}, word.thai))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-center text-sm font-bold text-muted",
							children: "Five hearts. A miss costs one. You can replay."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "safe-bottom px-4 pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPhase("play"),
						className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
						children: "Start lesson"
					})
				})
			] }),
			phase === "play" && exercise && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center gap-3 px-3 pt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton$1, {
							label: "Leave lesson",
							onClick: () => setConfirmExit(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-3 flex-1 overflow-hidden rounded-full bg-soft",
							"aria-hidden": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-chili transition-[width] duration-300 ease-out",
								style: { width: `${(index + (result ? 1 : 0)) / total * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex shrink-0 items-center",
							"aria-label": `${hearts} hearts`,
							children: Array.from({ length: 5 }, (_, heart) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: cn("h-5 w-5", heart < hearts ? "text-chili" : "text-line"),
								fill: heart < hearts ? "currentColor" : "none"
							}, heart))
						})
					]
				}),
				combo >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pt-2 text-center text-sm font-extrabold text-marigold tabular-nums",
					children: ["Combo ×", combo]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-4 pt-4 pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseBody, {
						exercise,
						speaker,
						showRoman,
						autoplay,
						result,
						gradeRef,
						onAnswer: accept,
						onCanCheck
					}, index)
				}),
				result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: cn("safe-bottom px-4 pt-4", result.ok ? "bg-teal text-on-accent" : "bg-chili text-on-accent"),
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-extrabold",
							children: result.ok ? PRAISE[index % PRAISE.length] : "Not quite."
						}),
						result.solution && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							lang: "th",
							className: "mt-1 font-bold",
							children: result.solution
						}),
						exercise.coach && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm",
							children: exercise.coach
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onContinue,
							className: "btn-3d btn-sheet mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
							children: "Continue"
						})
					]
				}) : exercise.kind === "pairs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "safe-bottom px-4 pt-4 text-center text-sm font-extrabold text-muted",
					children: "Match each pair"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "safe-bottom px-4 pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !canCheck,
						onClick: onCheck,
						className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
						children: "Check"
					})
				})
			] }),
			phase === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndScreen, {
				title: "Lesson complete",
				body: mistakes === 0 ? "No misses." : `${mistakes} ${mistakes === 1 ? "miss" : "misses"}.`,
				sessionXp,
				stars,
				action: "Continue",
				onAction: onExit
			}),
			phase === "down" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndScreen, {
				title: "Out of hearts",
				body: "This lesson stays unfinished. XP you already earned is kept, and hearts refill on the path.",
				sessionXp,
				action: "Back to the path",
				onAction: onExit,
				tone: "chili"
			}),
			confirmExit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-20 flex items-end bg-ink/40 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full rounded-3xl bg-sheet p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-extrabold",
							children: "Leave this lesson?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-pretty text-muted",
							children: "XP you already earned stays. The lesson will not count as finished."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onExit,
							className: "btn-3d btn-chili mt-4 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
							children: "Leave"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setConfirmExit(false),
							className: "mt-2 min-h-12 w-full font-extrabold text-muted",
							children: "Keep going"
						})
					]
				})
			})
		]
	});
}
function EndScreen({ title, body, sessionXp, stars, action, onAction, tone = "teal" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid h-24 w-24 place-items-center rounded-full text-on-accent", tone === "teal" ? "bg-teal" : "bg-chili"),
				children: tone === "teal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-12 w-12" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: "h-12 w-12",
					fill: "currentColor"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-3xl font-extrabold text-balance",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xs text-pretty text-muted",
				children: body
			}),
			stars ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-extrabold tracking-wide text-marigold uppercase",
				children: stars === 3 ? "Three stars" : stars === 2 ? "Two stars" : "One star"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-2xl font-extrabold text-chili tabular-nums",
				children: [
					"+",
					sessionXp,
					" XP"
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "safe-bottom px-4 pt-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onAction,
			className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
			children: action
		})
	})] });
}
function IconButton$1({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted",
		children
	});
}
function Path({ onStart, onReview }) {
	const units = useCatalog((state) => state.units);
	const lessons = useCatalog((state) => state.lessons);
	const vocabulary = useCatalog((state) => state.vocabulary);
	const xp = useProgress((state) => state.xp);
	const streak = useProgress((state) => state.streak);
	const completed = useProgress((state) => state.completed);
	const cards = useProgress((state) => state.cards);
	const speaker = useProgress((state) => state.speaker);
	const setSpeaker = useProgress((state) => state.setSpeaker);
	const showRoman = useProgress((state) => state.showRoman);
	const [note, setNote] = (0, import_react.useState)(null);
	const next = nextLesson(completed, lessons, units);
	const doneCount = lessons.filter((lesson) => completed[lesson.id]).length;
	const due = reviewStats(cards, todayKey()).due;
	const phrase = dailyPhrases[Math.floor(Date.now() / 864e5) % dailyPhrases.length] ?? dailyPhrases[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-extrabold text-chili",
							children: "Sawatdee"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-extrabold text-balance",
							children: "Learn Thai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-xs text-sm text-pretty text-muted",
							children: courseNote
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 rounded-full bg-soft px-3 py-2 font-extrabold tabular-nums",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
						className: "h-5 w-5 text-marigold",
						fill: "currentColor"
					}), streak]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-extrabold text-muted tabular-nums",
					children: [
						xp,
						" XP · ",
						doneCount,
						"/",
						lessons.length,
						" lessons · ",
						Object.keys(cards).length,
						"/",
						vocabulary.length,
						" words"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakerSwitch, {
					speaker,
					onChange: setSpeaker
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => speakThai(phrase.thai),
				className: "mt-4 flex w-full items-center gap-3 rounded-2xl bg-soft px-4 py-3 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5 shrink-0 text-chili" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-extrabold tracking-wide text-muted uppercase",
							children: "Today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "th",
							className: "thai-display text-lg",
							children: phrase.thai
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-sm font-bold text-muted",
							children: [showRoman ? `${phrase.roman} · ` : "", phrase.en]
						})
					]
				})]
			}),
			next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onStart(next.id),
				className: "btn-3d btn-chili mt-4 flex min-h-16 w-full items-center justify-between rounded-2xl px-5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs font-extrabold tracking-wide uppercase opacity-80",
					children: "Continue"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-extrabold",
					children: next.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl bg-teal px-5 py-4 text-on-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-extrabold",
					children: "Path complete."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Replay any lesson. Stars stay at your best."
				})]
			}),
			due > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onReview,
				className: "mt-3 flex min-h-14 w-full items-center justify-between rounded-2xl bg-soft px-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs font-extrabold tracking-wide text-chili uppercase",
					children: "Review"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-extrabold",
					children: [
						due,
						" ",
						due === 1 ? "word" : "words",
						" due"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-chili" })]
			}),
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-bold text-chili",
				children: note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-8",
				children: levels.map((level) => {
					const levelWords = vocabulary.filter((word) => word.level === level.id).length;
					const levelUnits = units.filter((unit) => unit.level === level.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-extrabold tracking-wide text-chili uppercase",
								children: [
									"CEFR · ",
									levelWords,
									" words"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-extrabold",
								children: level.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-pretty text-muted",
								children: level.blurb
							})
						] }), levelUnits.map((unit) => {
							const unitLessons = lessons.filter((lesson) => lesson.unit === unit.id);
							const unitDone = unitLessons.filter((lesson) => completed[lesson.id]).length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-soft px-5 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-extrabold tracking-wide text-chili uppercase",
										children: unit.kicker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-end justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-extrabold",
											children: unit.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-extrabold text-muted tabular-nums",
											children: [
												unitDone,
												"/",
												unitLessons.length
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: unit.blurb
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "relative mt-4 grid gap-4 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 bottom-4 left-1/2 w-1 -translate-x-1/2 bg-line",
									"aria-hidden": true
								}), unitLessons.map((lesson, index) => {
									const open = isUnlocked(lesson.id, completed, lessons, units);
									const done = Boolean(completed[lesson.id]);
									const stars = completed[lesson.id] ?? 0;
									const number = lessons.findIndex((item) => item.id === lesson.id) + 1;
									const side = index % 2 === 0 ? "justify-start pl-6" : "justify-end pr-6";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: cn("relative flex", side),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex w-28 flex-col items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": open ? `Start ${lesson.title}` : `${lesson.title} locked`,
													onClick: () => {
														if (!open) {
															const prev = lessons[number - 2];
															setNote(prev ? `Finish ${prev.title} first.` : "Locked.");
															return;
														}
														setNote(null);
														onStart(lesson.id);
													},
													className: cn("path-node grid h-20 w-20 place-items-center rounded-full", done && "path-node-done", !done && open && lesson.checkpoint && "path-node-check", !done && open && !lesson.checkpoint && "path-node-go", !open && "path-node-lock"),
													children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-8 w-8" }) : !open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-6 w-6" }) : lesson.checkpoint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-8 w-8" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-2xl font-extrabold tabular-nums",
														children: number
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-center text-sm leading-tight font-extrabold",
													children: lesson.title
												}),
												done && stars > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex text-marigold",
													"aria-label": `${stars} stars`,
													children: Array.from({ length: stars }, (_, star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
														className: "h-3.5 w-3.5",
														fill: "currentColor"
													}, star))
												})
											]
										})
									}, lesson.id);
								})]
							})] }, unit.id);
						})]
					}, level.id);
				})
			})
		]
	});
}
function SpeakerSwitch({ speaker, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-extrabold tracking-wide text-muted uppercase",
			children: "I say"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex rounded-full bg-soft p-1",
			children: [[
				"f",
				"ค่ะ",
				"Speak as a woman, ending with ค่ะ"
			], [
				"m",
				"ครับ",
				"Speak as a man, ending with ครับ"
			]].map(([id, label, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": speaker === id,
				"aria-label": name,
				onClick: () => onChange(id),
				className: cn("min-h-11 rounded-full px-3 text-sm font-extrabold", speaker === id ? "bg-ink text-sheet" : "text-muted"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					lang: "th",
					children: label
				})
			}, id))
		})]
	});
}
function Profile() {
	const lessons = useCatalog((state) => state.lessons);
	const vocabulary = useCatalog((state) => state.vocabulary);
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
	const theme = useProgress((state) => state.theme);
	const setTheme = useProgress((state) => state.setTheme);
	const [armReset, setArmReset] = (0, import_react.useState)(false);
	const done = lessons.filter((lesson) => completed[lesson.id]).length;
	const accuracy = answered === 0 ? null : Math.round(100 * correct / answered);
	const deck = reviewStats(cards, todayKey());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-6 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-extrabold text-chili",
				children: "You"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold",
				children: "Profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-pretty text-muted",
				children: "Lessons, review, and XP are saved to this account. Polite particles follow the speaker, not the person you're talking to."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Account, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					on: theme === "dark",
					label: "Dark mode",
					hint: "Night colors for the whole course.",
					onToggle: () => setTheme(theme === "dark" ? "light" : "dark")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						label: "XP",
						value: String(xp)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						label: "Streak",
						value: String(streak)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						label: "Lessons",
						value: `${done}/${lessons.length}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						label: "Words seen",
						value: `${deck.total}/${vocabulary.length}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-bold text-muted",
				children: accuracy === null ? "Accuracy shows up after you check an answer." : `${accuracy}% accuracy across ${answered} answers.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Thai letters"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "This changes every Thai word in the course, on every page. Modern is the loopless face used on signs and phones. Traditional keeps the looped heads you see in books. The spelling stays the same."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptStylePicker, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "How words get in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: [courseNote, " Greetings, food, money, and directions come first, then time, describing things, and what to say when you get stuck. A word has to be something you would say out loud. No royal vocabulary, no slang. Later lessons reuse earlier words, and Review only schedules words from lessons you have opened."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "How you speak"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakerCard, {
					active: speaker === "f",
					thai: "ค่ะ",
					roman: "khâ",
					label: "Woman",
					onClick: () => setSpeaker("f")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakerCard, {
					active: speaker === "m",
					thai: "ครับ",
					roman: "khráp",
					label: "Man",
					onClick: () => setSpeaker("m")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-pretty text-muted",
				children: [
					"Now set to ",
					particleLabel(speaker),
					". Questions from a woman use คะ (khá) instead of ค่ะ. Men keep ครับ. Tiles for “I” use ",
					speaker === "m" ? "ผม (phǒm)" : "ฉัน (chǎn)",
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					on: showRoman,
					label: "Romanization",
					hint: "Show the pronunciation under the Thai script.",
					onToggle: () => setShowRoman(!showRoman)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					on: autoplay,
					label: "Play audio automatically",
					hint: "Speak the prompt when a new exercise opens. The speaker button always works.",
					onToggle: () => setAutoplay(!autoplay)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					if (!armReset) {
						setArmReset(true);
						return;
					}
					resetProgress();
					setArmReset(false);
				},
				className: "mt-8 min-h-12 w-full rounded-2xl border-2 border-line font-extrabold text-chili",
				children: armReset ? "Tap again to reset progress" : "Reset progress"
			})
		]
	});
}
function Account() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-24 animate-pulse rounded-2xl bg-soft" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 rounded-2xl bg-soft px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-extrabold",
				children: "Sign in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "Sign in or create an account with your email and password."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "btn-3d btn-chili mt-3 flex min-h-12 items-center justify-center rounded-2xl font-extrabold",
				children: "Sign in"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 rounded-2xl bg-soft px-4 py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
	});
}
function Stat$1({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-soft px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-extrabold tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-2xl font-extrabold tabular-nums",
			children: value
		})]
	});
}
function ScriptStylePicker() {
	const style = useProgress((state) => state.scriptStyle);
	const setScriptStyle = useProgress((state) => state.setScriptStyle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleCard, {
			active: style === "modern",
			sampleClass: "thai-modern-sample",
			title: "Modern",
			hint: "Loopless",
			onClick: () => setScriptStyle("modern")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleCard, {
			active: style === "traditional",
			sampleClass: "thai-traditional-sample",
			title: "Traditional",
			hint: "Looped heads",
			onClick: () => setScriptStyle("traditional")
		})]
	});
}
function StyleCard({ active, sampleClass, title, hint, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: cn("min-h-24 rounded-2xl border-2 px-3 py-3 text-left", active ? "border-ink bg-ink text-sheet" : "border-line bg-sheet"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				lang: "th",
				className: cn("thai-display block text-3xl", sampleClass),
				children: "สวัสดี"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block font-extrabold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block text-sm font-bold", active ? "text-sheet/80" : "text-muted"),
				children: hint
			})
		]
	});
}
function SpeakerCard({ active, thai, roman, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: cn("min-h-20 rounded-2xl border-2 px-3 py-3 text-left", active ? "border-ink bg-ink text-sheet" : "border-line bg-sheet"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			lang: "th",
			className: "thai-display block text-2xl",
			children: thai
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("block text-sm font-bold", active ? "text-sheet/80" : "text-muted"),
			children: [
				roman,
				" · ",
				label
			]
		})]
	});
}
function Toggle({ on, label, hint, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "switch",
		"aria-checked": on,
		onClick: onToggle,
		className: "flex min-h-16 w-full items-center justify-between gap-3 rounded-2xl bg-soft px-4 py-3 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-extrabold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm text-muted",
			children: hint
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("h-7 w-12 shrink-0 rounded-full p-1", on ? "bg-teal" : "bg-line"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-5 w-5 rounded-full bg-sheet transition-transform duration-150", on && "translate-x-5") })
		})]
	});
}
var COACH = {
	สีขาว: "ขาว rises. ข้าว, rice, falls.",
	ข้าว: "ข้าว falls. ขาว, white, rises.",
	ใกล้: "ใกล้ falls and means near. ไกล is mid and means far.",
	ไกล: "ไกล is mid and means far. ใกล้ falls and means near.",
	ไม่: "ไม่ falls, and it means no. ไหม rises, and it asks.",
	ยี่สิบ: "Twenty is ยี่สิบ. สองสิบ is not the word people use."
};
function toWord(card) {
	return {
		thai: card.thai,
		roman: card.roman,
		en: card.en
	};
}
function makeExercise(card, pool, index) {
	const traps = shuffle(pool.filter((item) => item.thai !== card.thai)).slice(0, 3).map(toWord);
	return {
		kind: "choice",
		dir: [
			"th-en",
			"en-th",
			"listen"
		][index % 3] ?? "th-en",
		word: toWord(card),
		traps,
		coach: COACH[card.thai]
	};
}
function buildQueue(cards, mode) {
	const today = todayKey();
	const list = Object.values(cards);
	return (mode === "due" ? shuffle(list.filter((card) => card.due <= today)).slice(0, 12) : list.filter((card) => card.due > today).sort((a, b) => a.due.localeCompare(b.due)).slice(0, 8)).map((card) => ({
		thai: card.thai,
		attempt: 0
	}));
}
function Review({ onStart }) {
	const vocabulary = useCatalog((state) => state.vocabulary);
	const cards = useProgress((state) => state.cards);
	const showRoman = useProgress((state) => state.showRoman);
	const today = todayKey();
	const stats = reviewStats(cards, today);
	const dueList = Object.values(cards).filter((card) => card.due <= today).sort((a, b) => a.thai.localeCompare(b.thai, "th"));
	const later = Object.values(cards).filter((card) => card.due > today).sort((a, b) => a.due.localeCompare(b.due) || a.thai.localeCompare(b.thai, "th"));
	const session = Math.min(stats.due, 12);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-6 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-extrabold text-chili",
				children: "Review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold text-balance",
				children: "Words you've seen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-pretty text-muted",
				children: "Opening a lesson adds its words here. A miss stays due and comes back later in the round. A correct answer waits 1 day, then 3, then longer, up to 90 days."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Deck",
						value: String(stats.total)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Due",
						value: String(stats.due)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Mastered",
						value: String(stats.mastered)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-pretty text-muted",
				children: ["Mastered means three weeks between reviews.", stats.total === 0 ? " Open a lesson and its word list lands here, ready to review." : stats.due === 0 ? stats.nextDue ? ` Next review ${stats.nextDue}.` : " Nothing is waiting." : ""]
			}),
			dueList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeckList, {
				title: "Due",
				cards: dueList.slice(0, 8),
				extra: Math.max(0, dueList.length - 8),
				today,
				showRoman
			}),
			later.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeckList, {
				title: "Coming up",
				cards: later.slice(0, 5),
				extra: Math.max(0, later.length - 5),
				today,
				showRoman
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				disabled: session === 0,
				onClick: () => onStart("due"),
				className: "btn-3d btn-chili mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl font-extrabold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-5 w-5" }), session === 0 ? "Nothing due" : session === stats.due ? `Review ${stats.due}` : `Review ${session} of ${stats.due}`]
			}),
			stats.total >= 2 && stats.due < stats.total && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onStart("ahead"),
				className: "mt-2 min-h-12 w-full rounded-2xl border-2 border-line font-extrabold",
				children: "Practice ahead"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordBank, {
				vocabulary,
				cards,
				showRoman,
				today
			})
		]
	});
}
function WordBank({ vocabulary, cards, showRoman, today }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [level, setLevel] = (0, import_react.useState)("ALL");
	const [topic, setTopic] = (0, import_react.useState)("ALL");
	const topics = (0, import_react.useMemo)(() => Array.from(new Set(vocabulary.map((word) => word.topic))), [vocabulary]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return vocabulary.filter((word) => {
			if (level !== "ALL" && word.level !== level) return false;
			if (topic !== "ALL" && word.topic !== topic) return false;
			if (!q) return true;
			return word.thai.includes(q) || word.roman.toLowerCase().includes(q) || word.en.toLowerCase().includes(q) || word.topic.toLowerCase().includes(q);
		});
	}, [
		vocabulary,
		level,
		topic,
		query
	]);
	const a1Count = vocabulary.filter((w) => w.level === "A1").length;
	const a2Count = vocabulary.filter((w) => w.level === "A2").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 border-t border-line pt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-extrabold tracking-wide text-chili uppercase",
					children: "Word bank"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-extrabold",
					children: [
						"All ",
						vocabulary.length,
						" course words"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-bold text-muted",
					children: [
						a1Count,
						" CEFR A1 · ",
						a2Count,
						" CEFR A2"
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen((value) => !value),
				className: "min-h-10 rounded-2xl border-2 border-line px-3 text-sm font-extrabold",
				children: open ? "Hide" : "Browse"
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Search Thai, romanization, or English",
						className: "min-h-11 w-full rounded-2xl border-2 border-line bg-paper pr-3 pl-9 text-sm font-bold"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [[
						"ALL",
						"A1",
						"A2"
					].map((lv) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": level === lv,
						onClick: () => setLevel(lv),
						className: cn("min-h-9 rounded-full px-3 text-xs font-extrabold", level === lv ? "bg-ink text-sheet" : "bg-soft text-muted"),
						children: lv === "ALL" ? `All (${vocabulary.length})` : `${lv} (${lv === "A1" ? a1Count : a2Count})`
					}, lv)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						"aria-label": "Filter by topic",
						value: topic,
						onChange: (event) => setTopic(event.target.value),
						className: "min-h-9 rounded-full bg-soft px-3 text-xs font-extrabold text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "ALL",
							children: "All topics"
						}), topics.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-bold text-muted",
					children: [
						"Showing ",
						filtered.length,
						" words. Tap any card to listen."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid max-h-96 gap-2 overflow-y-auto pr-1",
					children: filtered.map((word) => {
						const card = cards[word.thai];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => speakThai(word.thai),
							className: "flex w-full items-center justify-between gap-3 rounded-2xl bg-soft px-4 py-3 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex min-w-0 items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4 shrink-0 text-chili" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											lang: "th",
											className: "thai-display block text-lg",
											children: word.thai
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-sm font-bold text-muted",
											children: [showRoman ? `${word.roman} · ` : "", word.en]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-xs font-bold text-muted/80",
											children: [
												word.level,
												" · ",
												word.pos,
												" · ",
												word.topic
											]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-xs font-extrabold text-chili",
								children: card ? duePhrase(card.due, today) : "New"
							})]
						}) }, word.id);
					})
				})
			]
		})]
	});
}
function ReviewSession({ mode, onExit }) {
	const cards = useProgress((state) => state.cards);
	const showRoman = useProgress((state) => state.showRoman);
	const autoplay = useProgress((state) => state.autoplay);
	const speaker = useProgress((state) => state.speaker);
	const gradeReview = useProgress((state) => state.gradeReview);
	const [queue, setQueue] = (0, import_react.useState)(() => buildQueue(cards, mode));
	const [index, setIndex] = (0, import_react.useState)(0);
	const [result, setResult] = (0, import_react.useState)(null);
	const [canCheck, setCanCheck] = (0, import_react.useState)(false);
	const [remembered, setRemembered] = (0, import_react.useState)(0);
	const [missed, setMissed] = (0, import_react.useState)(0);
	const [phase, setPhase] = (0, import_react.useState)(queue.length === 0 ? "done" : "play");
	const gradeRef = (0, import_react.useRef)(null);
	const onCanCheck = (0, import_react.useCallback)((ready) => setCanCheck(ready), []);
	const item = queue[index];
	const cardsRef = (0, import_react.useRef)(cards);
	cardsRef.current = cards;
	const exercise = (0, import_react.useMemo)(() => {
		if (!item) return null;
		const live = cardsRef.current;
		const current = live[item.thai];
		if (!current) return null;
		return makeExercise(current, Object.values(live), index + item.attempt);
	}, [item, index]);
	const card = item ? cards[item.thai] : void 0;
	function onCheck() {
		const grade = gradeRef.current?.grade();
		if (!grade || result) return;
		if (item && item.attempt === 0) {
			if (grade.ok) setRemembered((value) => value + 1);
			else setMissed((value) => value + 1);
		}
		setResult(grade);
	}
	function onContinue() {
		if (!result || !item || !card) return;
		let nextQueue = queue;
		let grade = null;
		if (result.ok) grade = item.attempt === 0 ? "good" : "shaky";
		else if (item.attempt === 0) {
			grade = "again";
			nextQueue = queue.slice();
			const insertAt = Math.min(index + 3, nextQueue.length);
			nextQueue.splice(insertAt, 0, {
				thai: item.thai,
				attempt: 1
			});
			setQueue(nextQueue);
		}
		if (grade) gradeReview(item.thai, grade);
		if (index + 1 >= nextQueue.length) {
			setPhase("done");
			return;
		}
		setResult(null);
		setCanCheck(false);
		setIndex((value) => value + 1);
	}
	const gap = result && card && item ? result.ok ? gapLabel(nextInterval(card, item.attempt === 0 ? "good" : "shaky")) : item.attempt === 0 ? "Again later this round, and still due after." : "Still due." : "";
	if (phase === "done" || !item || !exercise) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center justify-center px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-24 w-24 place-items-center rounded-full bg-teal text-on-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-12 w-12" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-3xl font-extrabold",
					children: "Review done"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xs text-pretty text-muted",
					children: queue.length === 0 ? "Nothing was waiting." : `${remembered} remembered first try. ${missed} ${missed === 1 ? "comes" : "come"} back sooner.`
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "safe-bottom px-4 pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onExit,
				className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
				children: "Back"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3 px-3 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						label: "Leave review",
						onClick: onExit,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-3 flex-1 overflow-hidden rounded-full bg-soft",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-teal transition-[width] duration-300 ease-out",
							style: { width: `${(index + (result ? 1 : 0)) / queue.length * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "shrink-0 text-sm font-extrabold text-muted tabular-nums",
						children: [
							index + 1,
							"/",
							queue.length
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pt-4 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseBody, {
					exercise,
					speaker,
					showRoman,
					autoplay,
					result,
					gradeRef,
					onAnswer: () => void 0,
					onCanCheck
				}, `${item.thai}-${index}`)
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: cn("safe-bottom px-4 pt-4", result.ok ? "bg-teal text-on-accent" : "bg-chili text-on-accent"),
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-extrabold",
						children: result.ok ? "Kept." : "Not quite."
					}),
					result.solution && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						lang: "th",
						className: "mt-1 font-bold",
						children: result.solution
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: gap
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onContinue,
						className: "btn-3d btn-sheet mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
						children: "Continue"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "safe-bottom px-4 pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !canCheck,
					onClick: onCheck,
					className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
					children: "Check"
				})
			})
		]
	});
}
function DeckList({ title, cards, extra, today, showRoman }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-extrabold tracking-wide text-muted uppercase",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2",
				children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-2xl bg-soft px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "th",
							className: "thai-display block text-xl",
							children: card.thai
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-sm font-bold text-muted",
							children: [showRoman ? `${card.roman} · ` : "", card.en]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-xs font-extrabold text-chili",
						children: duePhrase(card.due, today)
					})]
				}, card.thai))
			}),
			extra > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm font-bold text-muted",
				children: [
					"+",
					extra,
					" more"
				]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-soft px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-extrabold tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-2xl font-extrabold tabular-nums",
			children: value
		})]
	});
}
function IconButton({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted",
		children
	});
}
var tones = [
	{
		id: "mid",
		label: "Mid",
		hint: "Level and relaxed"
	},
	{
		id: "low",
		label: "Low",
		hint: "Sits low"
	},
	{
		id: "falling",
		label: "Falling",
		hint: "Drops away"
	},
	{
		id: "high",
		label: "High",
		hint: "Sits high"
	},
	{
		id: "rising",
		label: "Rising",
		hint: "Dips, then climbs"
	}
];
var toneExamples = [
	{
		tone: "mid",
		thai: "ดี",
		roman: "dii",
		en: "good"
	},
	{
		tone: "low",
		thai: "ใหม่",
		roman: "mài",
		en: "new"
	},
	{
		tone: "falling",
		thai: "ไม่",
		roman: "mâi",
		en: "no"
	},
	{
		tone: "high",
		thai: "ม้า",
		roman: "máa",
		en: "horse"
	},
	{
		tone: "rising",
		thai: "ไหม",
		roman: "mǎi",
		en: "question word"
	}
];
var toneDrills = [
	{
		thai: "มา",
		roman: "maa",
		en: "come",
		tone: "mid"
	},
	{
		thai: "ดี",
		roman: "dii",
		en: "good",
		tone: "mid"
	},
	{
		thai: "ใหม่",
		roman: "mài",
		en: "new",
		tone: "low"
	},
	{
		thai: "สี่",
		roman: "sìi",
		en: "four",
		tone: "low"
	},
	{
		thai: "ไม่",
		roman: "mâi",
		en: "no",
		tone: "falling"
	},
	{
		thai: "ห้า",
		roman: "hâa",
		en: "five",
		tone: "falling"
	},
	{
		thai: "ม้า",
		roman: "máa",
		en: "horse",
		tone: "high"
	},
	{
		thai: "น้ำ",
		roman: "náam",
		en: "water",
		tone: "high"
	},
	{
		thai: "ไหม",
		roman: "mǎi",
		en: "question word",
		tone: "rising"
	},
	{
		thai: "หมา",
		roman: "mǎa",
		en: "dog",
		tone: "rising"
	}
];
var consonants = [
	{
		ch: "ก",
		name: "กอ ไก่",
		gloss: "chicken",
		sound: "g / k",
		cls: "mid",
		core: true
	},
	{
		ch: "ข",
		name: "ขอ ไข่",
		gloss: "egg",
		sound: "kh / k",
		cls: "high",
		core: true
	},
	{
		ch: "ฃ",
		name: "ฃอ ขวด",
		gloss: "bottle (obsolete)",
		sound: "kh",
		cls: "high"
	},
	{
		ch: "ค",
		name: "คอ ควาย",
		gloss: "buffalo",
		sound: "kh / k",
		cls: "low",
		core: true
	},
	{
		ch: "ฅ",
		name: "ฅอ คน",
		gloss: "person (obsolete)",
		sound: "kh",
		cls: "low"
	},
	{
		ch: "ฆ",
		name: "ฆอ ระฆัง",
		gloss: "bell",
		sound: "kh / k",
		cls: "low"
	},
	{
		ch: "ง",
		name: "งอ งู",
		gloss: "snake",
		sound: "ng",
		cls: "low",
		core: true
	},
	{
		ch: "จ",
		name: "จอ จาน",
		gloss: "plate",
		sound: "j / t",
		cls: "mid",
		core: true
	},
	{
		ch: "ฉ",
		name: "ฉอ ฉิ่ง",
		gloss: "cymbals",
		sound: "ch",
		cls: "high"
	},
	{
		ch: "ช",
		name: "ชอ ช้าง",
		gloss: "elephant",
		sound: "ch / t",
		cls: "low",
		core: true
	},
	{
		ch: "ซ",
		name: "ซอ โซ่",
		gloss: "chain",
		sound: "s / t",
		cls: "low"
	},
	{
		ch: "ฌ",
		name: "ฌอ เฌอ",
		gloss: "tree",
		sound: "ch",
		cls: "low"
	},
	{
		ch: "ญ",
		name: "ญอ หญิง",
		gloss: "woman",
		sound: "y / n",
		cls: "low"
	},
	{
		ch: "ฎ",
		name: "ฎอ ชฎา",
		gloss: "headdress",
		sound: "d / t",
		cls: "mid"
	},
	{
		ch: "ฏ",
		name: "ฏอ ปฏัก",
		gloss: "goad",
		sound: "dt / t",
		cls: "mid"
	},
	{
		ch: "ฐ",
		name: "ฐอ ฐาน",
		gloss: "pedestal",
		sound: "th / t",
		cls: "high"
	},
	{
		ch: "ฑ",
		name: "ฑอ มณโฑ",
		gloss: "Montho",
		sound: "th / t",
		cls: "low"
	},
	{
		ch: "ฒ",
		name: "ฒอ ผู้เฒ่า",
		gloss: "elder",
		sound: "th / t",
		cls: "low"
	},
	{
		ch: "ณ",
		name: "ณอ เณร",
		gloss: "novice monk",
		sound: "n",
		cls: "low"
	},
	{
		ch: "ด",
		name: "ดอ เด็ก",
		gloss: "child",
		sound: "d / t",
		cls: "mid",
		core: true
	},
	{
		ch: "ต",
		name: "ตอ เต่า",
		gloss: "turtle",
		sound: "dt / t",
		cls: "mid",
		core: true
	},
	{
		ch: "ถ",
		name: "ถอ ถุง",
		gloss: "bag",
		sound: "th / t",
		cls: "high"
	},
	{
		ch: "ท",
		name: "ทอ ทหาร",
		gloss: "soldier",
		sound: "th / t",
		cls: "low",
		core: true
	},
	{
		ch: "ธ",
		name: "ธอ ธง",
		gloss: "flag",
		sound: "th / t",
		cls: "low"
	},
	{
		ch: "น",
		name: "นอ หนู",
		gloss: "mouse",
		sound: "n",
		cls: "low",
		core: true
	},
	{
		ch: "บ",
		name: "บอ ใบไม้",
		gloss: "leaf",
		sound: "b / p",
		cls: "mid",
		core: true
	},
	{
		ch: "ป",
		name: "ปอ ปลา",
		gloss: "fish",
		sound: "bp / p",
		cls: "mid",
		core: true
	},
	{
		ch: "ผ",
		name: "ผอ ผึ้ง",
		gloss: "bee",
		sound: "ph",
		cls: "high"
	},
	{
		ch: "ฝ",
		name: "ฝอ ฝา",
		gloss: "lid",
		sound: "f",
		cls: "high"
	},
	{
		ch: "พ",
		name: "พอ พาน",
		gloss: "tray",
		sound: "ph / p",
		cls: "low",
		core: true
	},
	{
		ch: "ฟ",
		name: "ฟอ ฟัน",
		gloss: "tooth",
		sound: "f / p",
		cls: "low"
	},
	{
		ch: "ภ",
		name: "ภอ สำเภา",
		gloss: "junk boat",
		sound: "ph / p",
		cls: "low"
	},
	{
		ch: "ม",
		name: "มอ ม้า",
		gloss: "horse",
		sound: "m",
		cls: "low",
		core: true
	},
	{
		ch: "ย",
		name: "ยอ ยักษ์",
		gloss: "giant",
		sound: "y",
		cls: "low",
		core: true
	},
	{
		ch: "ร",
		name: "รอ เรือ",
		gloss: "boat",
		sound: "r / n",
		cls: "low",
		core: true
	},
	{
		ch: "ล",
		name: "ลอ ลิง",
		gloss: "monkey",
		sound: "l / n",
		cls: "low",
		core: true
	},
	{
		ch: "ว",
		name: "วอ แหวน",
		gloss: "ring",
		sound: "w",
		cls: "low",
		core: true
	},
	{
		ch: "ศ",
		name: "ศอ ศาลา",
		gloss: "pavilion",
		sound: "s / t",
		cls: "high"
	},
	{
		ch: "ษ",
		name: "ษอ ฤๅษี",
		gloss: "hermit",
		sound: "s / t",
		cls: "high"
	},
	{
		ch: "ส",
		name: "สอ เสือ",
		gloss: "tiger",
		sound: "s / t",
		cls: "high",
		core: true
	},
	{
		ch: "ห",
		name: "หอ หีบ",
		gloss: "chest",
		sound: "h",
		cls: "high",
		core: true
	},
	{
		ch: "ฬ",
		name: "ฬอ จุฬา",
		gloss: "kite",
		sound: "l / n",
		cls: "low"
	},
	{
		ch: "อ",
		name: "ออ อ่าง",
		gloss: "basin",
		sound: "silent / aaw",
		cls: "mid",
		core: true
	},
	{
		ch: "ฮ",
		name: "ฮอ นกฮูก",
		gloss: "owl",
		sound: "h",
		cls: "low"
	}
];
var vowels = [
	{
		mark: "–ะ",
		sound: "a (short)",
		length: "short",
		thai: "มะม่วง",
		roman: "má-mûang",
		en: "mango"
	},
	{
		mark: "–า",
		sound: "aa (long)",
		length: "long",
		thai: "ข้าว",
		roman: "khâao",
		en: "rice"
	},
	{
		mark: "–ิ",
		sound: "i (short)",
		length: "short",
		thai: "กิน",
		roman: "gin",
		en: "eat"
	},
	{
		mark: "–ี",
		sound: "ii (long)",
		length: "long",
		thai: "ดี",
		roman: "dii",
		en: "good"
	},
	{
		mark: "–ึ",
		sound: "ue (short)",
		length: "short",
		thai: "หนึ่ง",
		roman: "nùeng",
		en: "one"
	},
	{
		mark: "–ือ",
		sound: "uue (long)",
		length: "long",
		thai: "มือ",
		roman: "muue",
		en: "hand"
	},
	{
		mark: "–ุ",
		sound: "u (short)",
		length: "short",
		thai: "คุณ",
		roman: "khun",
		en: "you"
	},
	{
		mark: "–ู",
		sound: "uu (long)",
		length: "long",
		thai: "อยู่",
		roman: "yùu",
		en: "located"
	},
	{
		mark: "เ–",
		sound: "ee (long)",
		length: "long",
		thai: "เลข",
		roman: "lêek",
		en: "number"
	},
	{
		mark: "แ–",
		sound: "aae (long)",
		length: "long",
		thai: "แม่",
		roman: "mâae",
		en: "mom"
	},
	{
		mark: "โ–",
		sound: "oo (long)",
		length: "long",
		thai: "โรงแรม",
		roman: "roong-raaem",
		en: "hotel"
	},
	{
		mark: "–อ",
		sound: "aaw (long)",
		length: "long",
		thai: "ขอ",
		roman: "khǎaw",
		en: "please"
	},
	{
		mark: "เ–อ",
		sound: "oe (long)",
		length: "long",
		thai: "เปิด",
		roman: "bpòet",
		en: "open"
	},
	{
		mark: "เ–ีย",
		sound: "iia",
		length: "combo",
		thai: "เรียน",
		roman: "riian",
		en: "study"
	},
	{
		mark: "เ–ือ",
		sound: "uea",
		length: "combo",
		thai: "เพื่อน",
		roman: "phûean",
		en: "friend"
	},
	{
		mark: "–ัว",
		sound: "ua",
		length: "combo",
		thai: "หัว",
		roman: "hǔa",
		en: "head"
	},
	{
		mark: "ไ– / ใ–",
		sound: "ai",
		length: "combo",
		thai: "ไป",
		roman: "bpai",
		en: "go"
	},
	{
		mark: "เ–า",
		sound: "ao",
		length: "combo",
		thai: "เช้า",
		roman: "cháao",
		en: "morning"
	},
	{
		mark: "–ำ",
		sound: "am",
		length: "combo",
		thai: "น้ำ",
		roman: "náam",
		en: "water"
	}
];
var thaiDigits = [
	["๐", "0"],
	["๑", "1"],
	["๒", "2"],
	["๓", "3"],
	["๔", "4"],
	["๕", "5"],
	["๖", "6"],
	["๗", "7"],
	["๘", "8"],
	["๙", "9"]
];
var classColor = {
	mid: "text-ink",
	high: "text-chili",
	low: "text-teal"
};
function ScriptLab() {
	const [showAllConsonants, setShowAllConsonants] = (0, import_react.useState)(false);
	const shownConsonants = showAllConsonants ? consonants : consonants.filter((item) => item.core);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-6 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-extrabold text-chili",
				children: "Script"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold text-balance",
				children: "Read the tones"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-pretty text-muted",
				children: "Marks on the romanization: unmarked mid, à low, á high, â falling, ǎ rising. Long vowels are doubled. bp and dt are unaspirated."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 text-lg font-extrabold",
				children: "How the letters look"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "This is the same setting as on You. It changes every Thai word in the course, not only this page. Modern drops the little loops. Traditional keeps them. The spelling does not change."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptStylePicker, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToneDrill, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Five tones"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2",
				children: toneExamples.map((example) => {
					const tone = tones.find((item) => item.id === example.tone);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => speakThai(example.thai),
						className: "flex w-full items-center gap-3 rounded-2xl bg-soft px-4 py-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5 shrink-0 text-chili" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-xs font-extrabold tracking-wide text-muted uppercase",
									children: [
										tone?.label,
										" · ",
										tone?.hint
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									lang: "th",
									className: "thai-display text-2xl",
									children: example.thai
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-sm font-bold text-muted",
									children: [
										example.roman,
										" · ",
										example.en
									]
								})
							]
						})]
					}) }, example.thai);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-pretty text-muted",
				children: "ไม่ (mâi, falling) means no. ไหม (mǎi, rising) turns a statement into a question. Same shape on the page, different pitch."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-lg font-extrabold",
					children: [
						"Thai consonants (",
						shownConsonants.length,
						"/",
						consonants.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex rounded-full bg-soft p-1 text-xs font-extrabold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": !showAllConsonants,
						onClick: () => setShowAllConsonants(false),
						className: cn("min-h-9 rounded-full px-3", !showAllConsonants ? "bg-ink text-sheet" : "text-muted"),
						children: "Core 21"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": showAllConsonants,
						onClick: () => setShowAllConsonants(true),
						className: cn("min-h-9 rounded-full px-3", showAllConsonants ? "bg-ink text-sheet" : "text-muted"),
						children: "All 44"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "Color is the consonant class (mid = ink, high = chili, low = teal), which decides the tone of a syllable. Tap any letter to hear its name."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-3 text-xs font-extrabold tracking-wide uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink",
						children: "Mid (9)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-chili",
						children: "High (11)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-teal",
						children: "Low (24)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid grid-cols-4 gap-2",
				children: shownConsonants.map((letter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => speakThai(letter.name),
					title: `${letter.name} (${letter.gloss})`,
					className: "flex min-h-20 w-full flex-col items-center justify-center rounded-2xl bg-soft px-1 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "th",
						className: cn("thai-display text-3xl", classColor[letter.cls]),
						children: letter.ch
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-extrabold text-muted",
						children: letter.sound
					})]
				}) }, letter.ch))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Vowel shapes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2",
				children: vowels.map((vowel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => speakThai(vowel.thai),
					className: "flex w-full items-center gap-3 rounded-2xl border border-line px-4 py-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "th",
						className: "thai-display w-10 text-center text-2xl text-chili",
						children: vowel.mark
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-extrabold tracking-wide text-muted uppercase",
							children: vowel.sound
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "th",
							className: "thai-display text-lg",
							children: vowel.thai
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-sm font-bold text-muted",
							children: [
								vowel.roman,
								" · ",
								vowel.en
							]
						})
					] })]
				}) }, vowel.mark))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Thai digits"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Prices and dates sometimes use these instead of 0–9."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid grid-cols-5 gap-2",
				children: thaiDigits.map(([thai, arabic]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl bg-soft py-2 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "th",
						className: "thai-display block text-2xl",
						children: thai
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-extrabold text-muted tabular-nums",
						children: arabic
					})]
				}, thai))
			})
		]
	});
}
function ToneDrill() {
	const [round, setRound] = (0, import_react.useState)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [pick, setPick] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-5 rounded-3xl border border-line p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-extrabold",
				children: "Tone drill"
			}), round && !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-extrabold text-muted tabular-nums",
				children: [
					index + 1,
					"/",
					round.length
				]
			})]
		}), !round || !card ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm font-bold text-muted",
			children: "Getting six words ready."
		}) : done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-2xl font-extrabold tabular-nums",
					children: [
						score,
						" of ",
						round.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Pitch is the word. Run it again whenever it gets slippery."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: restart,
					className: "btn-3d btn-teal mt-4 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
					children: "Drill again"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => speakThai(card.thai),
				className: "mt-3 flex w-full flex-col items-center rounded-2xl bg-soft px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5 text-chili" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "th",
						className: "thai-display mt-1 text-4xl",
						children: card.thai
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-bold text-muted",
						children: [
							card.roman,
							" · ",
							card.en
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-2",
				children: tones.map((tone) => {
					const chosen = pick === tone.id;
					const right = tone.id === card.tone;
					const locked = pick !== null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: locked,
						onClick: () => {
							setPick(tone.id);
							if (tone.id === card.tone) setScore((value) => value + 1);
						},
						className: cn("min-h-12 rounded-2xl border-2 px-4 text-left font-extrabold", locked && right && "border-teal bg-teal text-on-accent", locked && chosen && !right && "border-chili bg-chili text-on-accent", locked && !right && !chosen && "border-line opacity-50", !locked && "border-line bg-sheet"),
						children: [tone.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("ml-2 text-sm font-bold", locked && (right || chosen) ? "text-on-accent/80" : "text-muted"),
							children: tone.hint
						})]
					}, tone.id);
				})
			}),
			pick && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					if (index + 1 >= round.length) {
						setDone(true);
						return;
					}
					setPick(null);
					setIndex((value) => value + 1);
				},
				className: "btn-3d btn-chili mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
				children: index + 1 >= round.length ? "See score" : "Next"
			})
		] })]
	});
}
function SawatdeeApp() {
	const { user, isPending } = useCurrentUserState();
	const scriptStyle = useProgress((state) => state.scriptStyle);
	const theme = useProgress((state) => state.theme);
	(0, import_react.useLayoutEffect)(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
		root.classList.toggle("thai-traditional", scriptStyle === "traditional");
	}, [theme, scriptStyle]);
	(0, import_react.useEffect)(() => {
		useProgress.persist.rehydrate();
		warmVoices();
	}, []);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GateSplash, { label: "Loading your course" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Course, { userId: user.id });
}
function Course({ userId }) {
	const [phase, setPhase] = (0, import_react.useState)("loading");
	const [attempt, setAttempt] = (0, import_react.useState)(0);
	const ready = (0, import_react.useRef)(false);
	const lastSaved = (0, import_react.useRef)("");
	const timer = (0, import_react.useRef)(null);
	const [tab, setTab] = (0, import_react.useState)("learn");
	const [lessonId, setLessonId] = (0, import_react.useState)(null);
	const [reviewMode, setReviewMode] = (0, import_react.useState)(null);
	const cards = useProgress((state) => state.cards);
	const due = reviewStats(cards, todayKey()).due;
	(0, import_react.useEffect)(() => {
		ready.current = false;
		setPhase("loading");
		let cancel = false;
		Promise.all([loadProgress(), loadCurriculum()]).then(([learning, catalog]) => {
			if (cancel) return;
			useCatalog.getState().setCatalog(catalog);
			if (learning) useProgress.getState().applyLearning(learning);
			else useProgress.getState().resetProgress();
			lastSaved.current = JSON.stringify(learningSnapshot(useProgress.getState()));
			ready.current = true;
			const seen = catalog.lessons.filter((lesson) => useProgress.getState().completed[lesson.id]).flatMap((lesson) => lesson.words);
			useProgress.getState().ingestWords(seen);
			setPhase("ready");
		}).catch(() => {
			if (!cancel) setPhase("error");
		});
		return () => {
			cancel = true;
			ready.current = false;
			if (timer.current) window.clearTimeout(timer.current);
		};
	}, [userId, attempt]);
	(0, import_react.useEffect)(() => {
		return useProgress.subscribe((state) => {
			if (!ready.current) return;
			const snap = learningSnapshot(state);
			const key = JSON.stringify(snap);
			if (key === lastSaved.current) return;
			if (timer.current) window.clearTimeout(timer.current);
			timer.current = window.setTimeout(() => {
				lastSaved.current = key;
				saveProgress({ data: snap }).catch(() => {
					lastSaved.current = "";
				});
			}, 350);
		});
	}, [userId]);
	if (phase === "loading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GateSplash, { label: "Loading your progress" });
	if (phase === "error") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-paper px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-extrabold",
				children: "Couldn't load this account."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setAttempt((value) => value + 1),
				className: "btn-3d btn-chili mt-4 min-h-12 w-full rounded-2xl font-extrabold",
				children: "Try again"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper lg:flex lg:h-dvh lg:overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden bg-sheet lg:mx-0 lg:shrink-0 lg:border-l lg:border-line",
			children: lessonId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lesson, {
				lessonId,
				onExit: () => setLessonId(null)
			}, lessonId) : reviewMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewSession, {
				mode: reviewMode,
				onExit: () => setReviewMode(null)
			}, reviewMode) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: [
					tab === "learn" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
						onStart: setLessonId,
						onReview: () => setTab("review")
					}),
					tab === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Review, { onStart: setReviewMode }),
					tab === "script" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptLab, {}),
					tab === "me" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profile, {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "safe-bottom grid shrink-0 grid-cols-4 gap-1 border-t border-line px-2 pt-2",
				"aria-label": "Sections",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
						active: tab === "learn",
						label: "Learn",
						onClick: () => setTab("learn"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
						active: tab === "review",
						label: "Review",
						dot: due > 0,
						onClick: () => setTab("review"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
						active: tab === "script",
						label: "Script",
						onClick: () => setTab("script"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
						active: tab === "me",
						label: "You",
						onClick: () => setTab("me"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-5 w-5" })
					})
				]
			})] })
		})]
	});
}
function GateSplash({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-paper px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-extrabold text-muted",
			children: label
		})
	});
}
function TabButton({ active, label, onClick, dot, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-current": active ? "page" : void 0,
		onClick,
		className: cn("flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-xs font-extrabold", active ? "bg-soft text-chili" : "text-muted"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative",
			children: [children, dot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-0.5 -right-1.5 h-2 w-2 rounded-full bg-chili" }) : null]
		}), label]
	});
}
function BrandPanel() {
	const lessons = useCatalog((state) => state.lessons);
	const vocabulary = useCatalog((state) => state.vocabulary);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "relative hidden flex-1 flex-col justify-center overflow-hidden px-14 py-12 lg:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 place-items-center rounded-2xl bg-chili text-3xl font-extrabold text-on-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "th",
							className: "thai-display",
							children: "ส"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-extrabold tracking-wide text-chili uppercase",
						children: "Sawatdee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						lang: "th",
						className: "thai-display text-2xl",
						children: "สวัสดี"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 text-5xl font-extrabold text-balance",
					children: "Speak Thai from the first lesson."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-md text-lg text-pretty text-muted",
					children: [
						"A full CEFR A1 course with ",
						vocabulary.length,
						" words across ",
						lessons.length,
						" lessons, real Thai script, five tones, and the polite particle that matches your voice. Review brings back only the words you have already seen."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPoint, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" }),
							title: "Listen, then answer",
							body: "Every new word can be spoken aloud. Tap the speaker if you want it again."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPoint, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" }),
							title: "Build the phrase",
							body: "Tap Thai tiles into order, including ครับ or ค่ะ, depending on how you speak."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPoint, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5" }),
							title: "Read the script",
							body: "All 44 consonants, 19 vowel patterns, Thai digits, and a tone drill live under Script."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm font-bold text-muted",
					children: "Sign in. Lessons, vocabulary, and review stay with your account."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -right-2 -bottom-10 text-9xl font-extrabold text-line select-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				lang: "th",
				className: "thai-display",
				children: "ส"
			})
		})]
	});
}
function BrandPoint({ icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-soft text-chili",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-extrabold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm text-pretty text-muted",
			children: body
		})] })]
	});
}
var SplitComponent = SawatdeeApp;
export { SplitComponent as component };
