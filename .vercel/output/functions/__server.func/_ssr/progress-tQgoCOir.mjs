import { n as createMiddleware } from "./ssr.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
// node_modules/.nitro/vite/services/ssr/assets/progress-tQgoCOir.js
/**
* Auth middleware for server functions — the standard way to get the caller's
* verified user id. When deployed the session cookie is same-origin and rides
* along automatically. In the live preview the client also forwards the bearer
* token (partitioned cookies) via the `.client` hook below — call sites do not
* thread it themselves.
*
*   import { createServerFn } from "@tanstack/react-start";
*   import { getSql } from "@/lib/db";
*   import { authMiddleware } from "@/lib/auth/middleware";
*
*   export const listTodos = createServerFn({ method: "GET" })
*     .middleware([authMiddleware])
*     .handler(async ({ context }) => {
*       const sql = await getSql();
*       return sql`select * from todos where user_id = ${context.userId}`;
*     });
*
* Signed out with auth on (live preview included) -> throws `UnauthorizedError`
* (see `verify.server.ts`). With auth disabled (`VITE_AUTH_ENABLED=false`, the
* shipped default) it resolves the shared dev user — but throws instead when a
* `DATABASE_URL` is also set, so an app without sign-in must not use this at
* all. On the auth-on path, use it on every server function that touches
* per-user data and scope every query by `context.userId`.
*/
var authMiddleware = createMiddleware({ type: "function" }).client(async ({ next }) => {
	const { getBearerToken } = await import("./client-BF-G9gzu.mjs").then((n) => n.n);
	return next({ sendContext: { bearerToken: getBearerToken() ?? void 0 } });
}).server(async ({ next, context }) => {
	const { assertSameSiteRequest } = await import("./isolation.server-z4c_3uw8.mjs");
	const { requireUserId } = await import("./verify.server-CzsFVcgi.mjs");
	assertSameSiteRequest();
	return next({ context: { userId: await requireUserId(context.bearerToken) } });
});
function dayKey(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function addDays(day, days) {
	const [y, m, d] = day.split("-").map(Number);
	const date = new Date(y ?? 0, (m ?? 1) - 1, d ?? 1);
	date.setDate(date.getDate() + days);
	return dayKey(date);
}
function todayKey() {
	return dayKey(/* @__PURE__ */ new Date());
}
/** 1 day, then 3, then interval × ease, capped at 90. A miss clears the ladder. */
function nextInterval(card, grade) {
	if (grade === "again") return 0;
	if (grade === "shaky") return 1;
	const reps = card.reps + 1;
	if (reps <= 1) return 1;
	if (reps === 2) return 3;
	return Math.min(90, Math.max(1, Math.round(Math.max(card.interval, 1) * card.ease)));
}
function clampEase(ease) {
	return Math.round(Math.min(2.8, Math.max(1.3, ease)) * 100) / 100;
}
function scheduleCard(card, grade, today) {
	const interval = nextInterval(card, grade);
	if (grade === "again") return {
		...card,
		reps: 0,
		interval: 0,
		ease: clampEase(card.ease - .2),
		lapses: card.lapses + 1,
		due: today
	};
	if (grade === "shaky") return {
		...card,
		reps: 1,
		interval,
		ease: clampEase(card.ease - .05),
		due: addDays(today, interval)
	};
	return {
		...card,
		reps: card.reps + 1,
		interval,
		due: addDays(today, interval)
	};
}
function daysUntil(due, today) {
	const [y, m, d] = due.split("-").map(Number);
	const [Y, M, D] = today.split("-").map(Number);
	const a = Date.UTC(y ?? 0, (m ?? 1) - 1, d ?? 1);
	const b = Date.UTC(Y ?? 0, (M ?? 1) - 1, D ?? 1);
	return Math.round((a - b) / 864e5);
}
function duePhrase(due, today) {
	const days = daysUntil(due, today);
	if (days <= 0) return "Due";
	if (days === 1) return "Tomorrow";
	return `In ${days} days`;
}
function gapLabel(days) {
	if (days <= 0) return "This one stays due.";
	if (days === 1) return "Back tomorrow.";
	return `Back in ${days} days.`;
}
function reviewStats(cards, today) {
	const list = Object.values(cards);
	const due = list.filter((card) => card.due <= today);
	const later = list.filter((card) => card.due > today).sort((a, b) => a.due.localeCompare(b.due));
	return {
		total: list.length,
		due: due.length,
		mastered: list.filter((card) => card.interval >= 21).length,
		nextDue: later[0]?.due ?? null
	};
}
var initial = {
	xp: 0,
	streak: 0,
	lastDay: null,
	completed: {},
	speaker: "f",
	showRoman: true,
	autoplay: true,
	scriptStyle: "modern",
	theme: "light",
	cards: {},
	answered: 0,
	correct: 0
};
var useProgress = create()(persist((set, get) => ({
	...initial,
	setSpeaker: (speaker) => set({ speaker }),
	setShowRoman: (showRoman) => set({ showRoman }),
	setAutoplay: (autoplay) => set({ autoplay }),
	setScriptStyle: (scriptStyle) => set({ scriptStyle }),
	setTheme: (theme) => set({ theme }),
	ingestWords: (words) => set((state) => {
		const today = todayKey();
		const cards = { ...state.cards };
		let changed = false;
		for (const word of words) {
			if (!word.thai) continue;
			const existing = cards[word.thai];
			if (existing) {
				if (existing.roman !== word.roman || existing.en !== word.en) {
					cards[word.thai] = {
						...existing,
						roman: word.roman,
						en: word.en
					};
					changed = true;
				}
				continue;
			}
			cards[word.thai] = {
				thai: word.thai,
				roman: word.roman,
				en: word.en,
				ease: 2.5,
				interval: 0,
				due: today,
				reps: 0,
				lapses: 0,
				seen: today
			};
			changed = true;
		}
		return changed ? { cards } : state;
	}),
	gradeReview: (thai, grade) => {
		const card = get().cards[thai];
		if (!card) return;
		const next = scheduleCard(card, grade, todayKey());
		set((state) => ({ cards: {
			...state.cards,
			[thai]: next
		} }));
	},
	recordAnswer: (ok, gain) => set((state) => ({
		xp: state.xp + gain,
		answered: state.answered + 1,
		correct: state.correct + (ok ? 1 : 0)
	})),
	finishLesson: (id, stars, bonus) => {
		const state = get();
		const today = todayKey();
		const previous = /* @__PURE__ */ new Date();
		previous.setDate(previous.getDate() - 1);
		const yesterday = `${previous.getFullYear()}-${String(previous.getMonth() + 1).padStart(2, "0")}-${String(previous.getDate()).padStart(2, "0")}`;
		let streak = state.streak;
		if (state.lastDay !== today) streak = state.lastDay === yesterday ? state.streak + 1 : 1;
		else if (streak === 0) streak = 1;
		set({
			xp: state.xp + bonus,
			streak,
			lastDay: today,
			completed: {
				...state.completed,
				[id]: Math.max(state.completed[id] ?? 0, stars)
			}
		});
	},
	resetProgress: () => set({
		xp: 0,
		streak: 0,
		lastDay: null,
		completed: {},
		cards: {},
		answered: 0,
		correct: 0
	}),
	applyLearning: (learning) => set({ ...learning })
}), {
	name: "sawatdee-v1",
	skipHydration: true,
	merge: (persisted, current) => {
		const saved = persisted ?? {};
		return {
			...current,
			scriptStyle: saved.scriptStyle === "traditional" ? "traditional" : "modern",
			theme: saved.theme === "dark" ? "dark" : "light"
		};
	},
	partialize: (state) => ({
		theme: state.theme,
		scriptStyle: state.scriptStyle
	})
}));
function xpGain(comboBefore) {
	return 10 + Math.min(Math.max(comboBefore, 0), 4) * 2;
}
function learningSnapshot(state) {
	return {
		xp: state.xp,
		streak: state.streak,
		lastDay: state.lastDay,
		completed: state.completed,
		speaker: state.speaker,
		showRoman: state.showRoman,
		autoplay: state.autoplay,
		cards: state.cards,
		answered: state.answered,
		correct: state.correct
	};
}
function num(value, fallback) {
	return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function parseLearning(raw) {
	if (!raw || typeof raw !== "object") return null;
	const row = raw;
	const completed = {};
	if (row.completed && typeof row.completed === "object") {
		for (const [id, stars] of Object.entries(row.completed)) if (typeof stars === "number" && stars >= 0 && stars <= 3) completed[id] = stars;
	}
	const cards = {};
	if (row.cards && typeof row.cards === "object") for (const [key, value] of Object.entries(row.cards).slice(0, 400)) {
		if (!value || typeof value !== "object") continue;
		const card = value;
		if (typeof card.thai !== "string" || typeof card.due !== "string") continue;
		cards[key] = {
			thai: card.thai,
			roman: typeof card.roman === "string" ? card.roman : "",
			en: typeof card.en === "string" ? card.en : "",
			ease: num(card.ease, 2.5),
			interval: num(card.interval, 0),
			due: card.due,
			reps: num(card.reps, 0),
			lapses: num(card.lapses, 0),
			seen: typeof card.seen === "string" ? card.seen : card.due
		};
	}
	return {
		xp: Math.max(0, Math.round(num(row.xp, 0))),
		streak: Math.max(0, Math.round(num(row.streak, 0))),
		lastDay: typeof row.lastDay === "string" ? row.lastDay : null,
		completed,
		speaker: row.speaker === "m" ? "m" : "f",
		showRoman: row.showRoman !== false,
		autoplay: row.autoplay !== false,
		cards,
		answered: Math.max(0, Math.round(num(row.answered, 0))),
		correct: Math.max(0, Math.round(num(row.correct, 0)))
	};
}
export { nextInterval as a, todayKey as c, learningSnapshot as i, useProgress as l, duePhrase as n, parseLearning as o, gapLabel as r, reviewStats as s, authMiddleware as t, xpGain as u };
