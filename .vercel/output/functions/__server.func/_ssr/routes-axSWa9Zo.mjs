import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, c as Heart, d as Check, f as BookOpen, l as Flame, n as Volume2, o as Lock, p as Award, r as UserRound, s as House, t as X, u as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-axSWa9Zo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var initial = {
	xp: 0,
	streak: 0,
	lastDay: null,
	completed: {},
	speaker: "f",
	showRoman: true,
	autoplay: true,
	answered: 0,
	correct: 0
};
function dayKey(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
var useProgress = create()(persist((set, get) => ({
	...initial,
	setSpeaker: (speaker) => set({ speaker }),
	setShowRoman: (showRoman) => set({ showRoman }),
	setAutoplay: (autoplay) => set({ autoplay }),
	recordAnswer: (ok, gain) => set((state) => ({
		xp: state.xp + gain,
		answered: state.answered + 1,
		correct: state.correct + (ok ? 1 : 0)
	})),
	finishLesson: (id, stars, bonus) => {
		const state = get();
		const today = dayKey(/* @__PURE__ */ new Date());
		const previous = /* @__PURE__ */ new Date();
		previous.setDate(previous.getDate() - 1);
		const yesterday = dayKey(previous);
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
		answered: 0,
		correct: 0
	})
}), {
	name: "sawatdee-v1",
	skipHydration: true
}));
function xpGain(comboBefore) {
	return 10 + Math.min(Math.max(comboBefore, 0), 4) * 2;
}
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
var w = (thai, roman, en) => ({
	thai,
	roman,
	en
});
var t = (word) => ({
	kind: "w",
	word
});
var SELF = { kind: "self" };
var OTHER = { kind: "other-self" };
var POLITE = { kind: "polite" };
var POLITE_Q = {
	kind: "polite",
	q: true
};
var hello = w("สวัสดี", "sà-wàt-dii", "Hello");
var bye = w("ลาก่อน", "laa-gàwn", "Goodbye");
var meet = w("ยินดีที่ได้รู้จัก", "yin-dii-thîi-dâai-rúu-jàk", "Nice to meet you");
var thanks = w("ขอบคุณ", "khàawp-khun", "Thank you");
var sorry = w("ขอโทษ", "khǎaw-thôot", "Sorry / excuse me");
var np = w("ไม่เป็นไร", "mâi-bpen-rai", "No problem");
var yes = w("ใช่", "châi", "Yes");
var no = w("ไม่", "mâi", "No");
var can = w("ได้", "dâai", "Can / okay");
var cant = w("ไม่ได้", "mâi-dâai", "Cannot");
var well = w("สบายดี", "sà-baai-dii", "I'm well");
var howru = w("สบายดีไหม", "sà-baai-dii-mǎi", "How are you?");
var iF = w("ฉัน", "chǎn", "I, for women");
var iM = w("ผม", "phǒm", "I, for men");
var you = w("คุณ", "khun", "You");
var mom = w("แม่", "mâae", "Mom");
var dad = w("พ่อ", "phâaw", "Dad");
var older = w("พี่", "phîi", "Older sibling");
var younger = w("น้อง", "náawng", "Younger sibling");
var friend = w("เพื่อน", "phûean", "Friend");
var rice = w("ข้าว", "khâao", "Rice / a meal");
var water = w("น้ำ", "náam", "Water");
var coffee = w("กาแฟ", "gaa-fae", "Coffee");
var tea = w("ชา", "chaa", "Tea");
var tasty = w("อร่อย", "à-ròi", "Delicious");
var hungry = w("หิว", "hǐu", "Hungry");
var eat = w("กิน", "gin", "To eat");
var want = w("อยาก", "yàak", "To want");
var please = w("ขอ", "khǎaw", "Please / may I have");
var thisOne = w("อันนี้", "an-níi", "This one");
var howMuch = w("เท่าไหร่", "thâo-rài", "How much?");
var expensive = w("แพง", "phaeng", "Expensive");
var cheap = w("ถูก", "thùuk", "Cheap");
var baht = w("บาท", "bàat", "Baht");
var one = w("หนึ่ง", "nùeng", "One");
var two = w("สอง", "sǎawng", "Two");
var three = w("สาม", "sǎam", "Three");
var four = w("สี่", "sìi", "Four");
var five = w("ห้า", "hâa", "Five");
var six = w("หก", "hòk", "Six");
var seven = w("เจ็ด", "jèt", "Seven");
var eight = w("แปด", "bpàaet", "Eight");
var nine = w("เก้า", "gâao", "Nine");
var ten = w("สิบ", "sìp", "Ten");
var bathroom = w("ห้องน้ำ", "hông-náam", "Bathroom");
var where = w("ที่ไหน", "thîi-nǎi", "Where");
var located = w("อยู่", "yûu", "Is located");
var go = w("ไป", "bpai", "To go");
var market = w("ตลาด", "dtà-lâat", "Market");
var temple = w("วัด", "wát", "Temple");
var left = w("ซ้าย", "sáai", "Left");
var right = w("ขวา", "khwǎa", "Right");
var straight = w("ตรงไป", "dtrong-bpai", "Straight ahead");
var turn = w("เลี้ยว", "líiao", "To turn");
var taxi = w("แท็กซี่", "tháek-sîi", "Taxi");
var toneCoach = "สี่ stays low. ห้า drops. Don't swap them.";
var maiCoach = "ไหม rises, and it asks. ไม่ falls, and it means no.";
function choice(dir, word, traps, coach) {
	return {
		kind: "choice",
		dir,
		word,
		traps,
		coach
	};
}
function tiles(prompt, answer, extra, coach) {
	return {
		kind: "tiles",
		prompt,
		answer,
		extra,
		coach
	};
}
function pairs(list, coach) {
	return {
		kind: "pairs",
		pairs: list,
		coach
	};
}
var units = [
	{
		id: "hello",
		kicker: "Unit 1",
		title: "Say hello",
		blurb: "Greet people, thank them, and answer yes or no."
	},
	{
		id: "people",
		kicker: "Unit 2",
		title: "People",
		blurb: "Ask how someone is, and name the family."
	},
	{
		id: "market",
		kicker: "Unit 3",
		title: "At the market",
		blurb: "Order food and ask what it costs."
	},
	{
		id: "town",
		kicker: "Unit 4",
		title: "Around town",
		blurb: "Count, then find the bathroom."
	}
];
var lessons = [
	{
		id: "hello",
		unit: "hello",
		title: "Hello",
		subtitle: "Greetings that work all day",
		tip: "สวัสดี works morning, noon, and night. There is no separate good morning. Put your polite particle on the end.",
		words: [
			hello,
			bye,
			meet
		],
		exercises: [
			choice("th-en", hello, [
				bye,
				thanks,
				yes
			]),
			choice("en-th", bye, [hello, meet]),
			choice("listen", hello, [
				bye,
				meet,
				thanks
			]),
			tiles("Say hello politely.", [t(hello), POLITE], [t(bye), t(meet)]),
			tiles("Say goodbye politely.", [t(bye), POLITE], [t(hello), t(thanks)]),
			choice("th-en", meet, [
				hello,
				bye,
				thanks
			]),
			pairs([
				hello,
				bye,
				meet
			])
		]
	},
	{
		id: "thanks",
		unit: "hello",
		title: "Thanks",
		subtitle: "Please, sorry, you're welcome",
		tip: "ไม่เป็นไร answers thank you. It also means don't worry about it.",
		words: [
			thanks,
			sorry,
			np
		],
		exercises: [
			choice("th-en", thanks, [
				sorry,
				np,
				hello
			]),
			choice("en-th", sorry, [
				thanks,
				np,
				bye
			]),
			choice("listen", np, [
				thanks,
				sorry,
				yes
			]),
			tiles("Thank you.", [t(thanks), POLITE], [t(sorry), t(np)]),
			tiles("Excuse me.", [t(sorry), POLITE], [t(thanks), t(hello)]),
			choice("th-en", sorry, [
				thanks,
				np,
				bye
			]),
			pairs([
				thanks,
				sorry,
				np
			])
		]
	},
	{
		id: "yes-no",
		unit: "hello",
		title: "Yes & no",
		subtitle: "ใช่, ไม่, and ได้",
		tip: "ได้ is can, or a soft okay. ไม่ได้ shuts the door: cannot.",
		words: [
			yes,
			no,
			can,
			cant
		],
		exercises: [
			choice("th-en", yes, [
				no,
				can,
				thanks
			]),
			choice("en-th", no, [
				yes,
				cant,
				np
			]),
			choice("listen", can, [
				cant,
				yes,
				no
			]),
			tiles("Yes.", [t(yes), POLITE], [t(no), t(can)]),
			tiles("I can't.", [SELF, t(cant)], [t(can), OTHER]),
			choice("th-en", cant, [
				can,
				no,
				sorry
			]),
			pairs([
				yes,
				no,
				can
			])
		]
	},
	{
		id: "how-are-you",
		unit: "people",
		title: "How are you",
		subtitle: "Questions, and the word for I",
		tip: "Women's questions end in คะ, not ค่ะ. Men stay with ครับ. ผม is I for men. ฉัน is the I this course uses for women.",
		words: [
			well,
			howru,
			you,
			iF,
			iM
		],
		exercises: [
			choice("th-en", well, [
				howru,
				you,
				yes
			]),
			choice("en-th", howru, [
				well,
				you,
				np
			], maiCoach),
			choice("listen", you, [
				well,
				iF,
				friend
			]),
			tiles("How are you?", [t(howru), POLITE_Q], [
				t(well),
				t(no),
				t(yes)
			], maiCoach),
			tiles("I'm well.", [SELF, t(well)], [OTHER, t(howru)]),
			choice("th-en", no, [
				howru,
				yes,
				can
			], maiCoach),
			pairs([
				well,
				you,
				iF,
				iM
			])
		]
	},
	{
		id: "family",
		unit: "people",
		title: "Family",
		subtitle: "Older, younger, and friends",
		tip: "พี่ is someone older you feel close to. น้อง is younger. Friends use these words too, not only siblings.",
		words: [
			mom,
			dad,
			older,
			younger,
			friend
		],
		exercises: [
			choice("th-en", mom, [
				dad,
				older,
				friend
			]),
			choice("en-th", dad, [
				mom,
				younger,
				you
			]),
			choice("listen", friend, [
				older,
				younger,
				you
			]),
			choice("th-en", older, [
				younger,
				friend,
				dad
			]),
			tiles("Mom.", [t(mom)], [
				t(dad),
				t(older),
				t(friend)
			]),
			pairs([
				mom,
				dad,
				older,
				younger
			]),
			choice("en-th", friend, [
				older,
				you,
				mom
			])
		]
	},
	{
		id: "food",
		unit: "market",
		title: "Hungry",
		subtitle: "Rice, water, and want",
		tip: "ข้าว is rice, and also a meal. อยากกิน is want to eat. ขอ is how you ask for something.",
		words: [
			rice,
			water,
			coffee,
			tasty,
			eat,
			want,
			hungry
		],
		exercises: [
			choice("th-en", tasty, [
				hungry,
				rice,
				water
			]),
			choice("en-th", water, [
				rice,
				coffee,
				tea
			]),
			choice("listen", rice, [
				water,
				tasty,
				eat
			]),
			tiles("I want to eat.", [
				SELF,
				t(want),
				t(eat)
			], [
				t(water),
				t(tasty),
				OTHER
			]),
			tiles("Water, please.", [
				t(please),
				t(water),
				POLITE
			], [t(coffee), t(eat)]),
			choice("th-en", hungry, [
				tasty,
				eat,
				want
			]),
			pairs([
				rice,
				water,
				coffee,
				tasty
			])
		]
	},
	{
		id: "price",
		unit: "market",
		title: "How much",
		subtitle: "Point, ask, pay",
		tip: "Point and ask อันนี้เท่าไหร่. Prices come back in บาท. แพง is expensive. ถูก is cheap.",
		words: [
			howMuch,
			thisOne,
			expensive,
			cheap,
			baht
		],
		exercises: [
			choice("th-en", howMuch, [
				expensive,
				cheap,
				baht
			]),
			choice("en-th", expensive, [
				cheap,
				howMuch,
				tasty
			]),
			choice("listen", cheap, [
				expensive,
				baht,
				water
			]),
			tiles("How much is this?", [
				t(thisOne),
				t(howMuch),
				POLITE_Q
			], [
				t(expensive),
				t(baht),
				t(please)
			]),
			tiles("This one, please.", [t(thisOne), POLITE], [t(howMuch), t(cheap)]),
			pairs([
				howMuch,
				expensive,
				cheap,
				baht
			]),
			choice("th-en", baht, [
				cheap,
				howMuch,
				rice
			])
		]
	},
	{
		id: "numbers",
		unit: "town",
		title: "Numbers",
		subtitle: "One through ten",
		tip: "The tone is the number. สอง and สาม rise. สี่ stays low. ห้า falls.",
		words: [
			one,
			two,
			three,
			four,
			five,
			six,
			seven,
			eight,
			nine,
			ten
		],
		exercises: [
			choice("th-en", five, [
				four,
				nine,
				two
			], toneCoach),
			choice("en-th", three, [
				two,
				four,
				five
			]),
			choice("listen", eight, [
				seven,
				nine,
				three
			]),
			tiles("Four.", [t(four)], [
				t(five),
				t(six),
				t(nine)
			], toneCoach),
			tiles("Ten baht.", [t(ten), t(baht)], [
				t(one),
				t(five),
				t(two)
			]),
			pairs([
				one,
				two,
				three,
				four
			]),
			choice("th-en", nine, [
				five,
				six,
				ten
			]),
			choice("listen", two, [
				three,
				five,
				one
			])
		]
	},
	{
		id: "places",
		unit: "town",
		title: "Which way",
		subtitle: "Bathroom, market, left, right",
		tip: "อยู่ is the hinge: the place, then อยู่, then ที่ไหน. ห้องน้ำอยู่ที่ไหน is where is the bathroom.",
		words: [
			bathroom,
			where,
			located,
			left,
			right,
			straight,
			turn,
			market,
			temple,
			taxi
		],
		exercises: [
			choice("th-en", bathroom, [
				market,
				temple,
				taxi
			]),
			choice("en-th", temple, [
				market,
				bathroom,
				taxi
			]),
			choice("listen", taxi, [
				temple,
				market,
				go
			]),
			tiles("Where is the bathroom?", [
				t(bathroom),
				t(located),
				t(where),
				POLITE_Q
			], [t(market), t(left)]),
			tiles("Turn left.", [t(turn), t(left)], [
				t(right),
				t(straight),
				t(go)
			]),
			tiles("Go straight.", [t(straight)], [
				t(turn),
				t(left),
				t(right)
			]),
			pairs([
				bathroom,
				market,
				temple,
				taxi
			]),
			choice("th-en", left, [
				right,
				straight,
				where
			])
		]
	},
	{
		id: "checkpoint",
		unit: "town",
		title: "Night market",
		subtitle: "A mix from the whole path",
		tip: "No new words. Same five hearts. Build the phrases the way you would say them out loud.",
		checkpoint: true,
		words: [],
		exercises: [
			choice("listen", hello, [
				thanks,
				bye,
				sorry
			]),
			tiles("Thank you.", [t(thanks), POLITE], [
				t(sorry),
				t(np),
				t(yes)
			]),
			tiles("How are you?", [t(howru), POLITE_Q], [t(well), t(no)], maiCoach),
			tiles("Where is the bathroom?", [
				t(bathroom),
				t(located),
				t(where),
				POLITE_Q
			], [t(market), t(taxi)]),
			choice("th-en", howMuch, [
				expensive,
				bathroom,
				tasty
			]),
			choice("en-th", tasty, [
				hungry,
				cheap,
				water
			]),
			pairs([
				mom,
				friend,
				water,
				five
			]),
			tiles("I want to eat.", [
				SELF,
				t(want),
				t(eat)
			], [
				t(water),
				OTHER,
				t(rice)
			]),
			choice("listen", sorry, [
				thanks,
				np,
				bye
			])
		]
	}
];
var dailyPhrases = [
	hello,
	thanks,
	np,
	howru,
	tasty,
	howMuch,
	bathroom,
	well,
	left
];
function lessonById(id) {
	return lessons.find((lesson) => lesson.id === id) ?? null;
}
function isUnlocked(id, completed) {
	const index = lessons.findIndex((lesson) => lesson.id === id);
	if (index <= 0) return true;
	return Boolean(completed[lessons[index - 1].id]);
}
function nextLesson(completed) {
	return lessons.find((lesson) => !completed[lesson.id] && isUnlocked(lesson.id, completed)) ?? null;
}
function resolveTok(tok, speaker) {
	if (tok.kind === "w") return tok.word;
	if (tok.kind === "self") return speaker === "m" ? iM : iF;
	if (tok.kind === "other-self") return speaker === "m" ? iF : iM;
	if (speaker === "m") return w("ครับ", "khráp", "polite particle");
	if (tok.q) return w("คะ", "khá", "question particle");
	return w("ค่ะ", "khâ", "polite particle");
}
function particleLabel(speaker) {
	return speaker === "m" ? "ครับ · khráp" : "ค่ะ · khâ";
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
					className: cn("min-h-14 rounded-2xl border-2 px-4 py-3 text-left transition-transform duration-150 active:not-disabled:scale-[0.96]", locked && isAnswer && "border-teal bg-teal text-sheet", locked && isPicked && !isAnswer && "border-chili bg-chili text-sheet", locked && !isAnswer && !isPicked && "border-line opacity-50", !locked && isPicked && "border-chili bg-soft", !locked && !isPicked && "border-line bg-sheet"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: exercise.dir === "en-th" ? "th" : void 0,
						className: cn("block text-lg font-extrabold", exercise.dir === "en-th" && "thai-display text-2xl"),
						children: primary
					}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("block text-sm font-bold", filled ? "text-sheet/80" : "text-muted"),
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
						className: cn("min-h-14 rounded-2xl border-2 px-3 py-2 text-left break-words", done && "border-teal bg-teal text-sheet", !done && active && "border-chili bg-soft", !done && !active && "border-line bg-sheet"),
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
						className: cn("min-h-14 rounded-2xl border-2 px-3 py-2 text-left text-base font-extrabold break-words", done ? "border-teal bg-teal text-sheet" : "border-line bg-sheet"),
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
	const lesson = lessonById(lessonId);
	const speaker = useProgress((state) => state.speaker);
	const showRoman = useProgress((state) => state.showRoman);
	const autoplay = useProgress((state) => state.autoplay);
	const recordAnswer = useProgress((state) => state.recordAnswer);
	const finishLesson = useProgress((state) => state.finishLesson);
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
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
					className: cn("safe-bottom px-4 pt-4", result.ok ? "bg-teal text-sheet" : "bg-chili text-sheet"),
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
				className: cn("grid h-24 w-24 place-items-center rounded-full text-sheet", tone === "teal" ? "bg-teal" : "bg-chili"),
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
function IconButton({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted",
		children
	});
}
function Path({ onStart }) {
	const xp = useProgress((state) => state.xp);
	const streak = useProgress((state) => state.streak);
	const completed = useProgress((state) => state.completed);
	const speaker = useProgress((state) => state.speaker);
	const setSpeaker = useProgress((state) => state.setSpeaker);
	const showRoman = useProgress((state) => state.showRoman);
	const [note, setNote] = (0, import_react.useState)(null);
	const next = nextLesson(completed);
	const doneCount = lessons.filter((lesson) => completed[lesson.id]).length;
	const phrase = dailyPhrases[Math.floor(Date.now() / 864e5) % dailyPhrases.length] ?? dailyPhrases[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-extrabold text-chili",
					children: "Sawatdee"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-extrabold text-balance",
					children: "Learn Thai"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						lessons.length
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
				className: "mt-4 rounded-2xl bg-teal px-5 py-4 text-sheet",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-extrabold",
					children: "Path complete."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Replay any lesson. Stars stay at your best."
				})]
			}),
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-bold text-chili",
				children: note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6",
				children: units.map((unit) => {
					const unitLessons = lessons.filter((lesson) => lesson.unit === unit.id);
					const unitDone = unitLessons.filter((lesson) => completed[lesson.id]).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-soft px-5 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-extrabold tracking-wide text-chili uppercase",
								children: unit.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
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
							const open = isUnlocked(lesson.id, completed);
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
				children: label
			}, id))
		})]
	});
}
function Profile() {
	const xp = useProgress((state) => state.xp);
	const streak = useProgress((state) => state.streak);
	const completed = useProgress((state) => state.completed);
	const answered = useProgress((state) => state.answered);
	const correct = useProgress((state) => state.correct);
	const speaker = useProgress((state) => state.speaker);
	const showRoman = useProgress((state) => state.showRoman);
	const autoplay = useProgress((state) => state.autoplay);
	const setSpeaker = useProgress((state) => state.setSpeaker);
	const setShowRoman = useProgress((state) => state.setShowRoman);
	const setAutoplay = useProgress((state) => state.setAutoplay);
	const resetProgress = useProgress((state) => state.resetProgress);
	const [armReset, setArmReset] = (0, import_react.useState)(false);
	const done = lessons.filter((lesson) => completed[lesson.id]).length;
	const words = lessons.filter((lesson) => completed[lesson.id]).reduce((sum, lesson) => sum + lesson.words.length, 0);
	const accuracy = answered === 0 ? null : Math.round(100 * correct / answered);
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
				children: "Progress stays on this device. Polite particles follow the speaker, not the person you're talking to."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "XP",
						value: String(xp)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Streak",
						value: String(streak)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Lessons",
						value: `${done}/${lessons.length}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Words",
						value: String(words)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-bold text-muted",
				children: accuracy === null ? "Accuracy shows up after you check an answer." : `${accuracy}% accuracy across ${answered} answers.`
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
function Stat({ label, value }) {
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
		sound: "g",
		cls: "mid"
	},
	{
		ch: "ข",
		name: "ขอ ไข่",
		gloss: "egg",
		sound: "kh",
		cls: "high"
	},
	{
		ch: "ค",
		name: "คอ ควาย",
		gloss: "buffalo",
		sound: "kh",
		cls: "low"
	},
	{
		ch: "ง",
		name: "งอ งู",
		gloss: "snake",
		sound: "ng",
		cls: "low"
	},
	{
		ch: "จ",
		name: "จอ จาน",
		gloss: "plate",
		sound: "j",
		cls: "mid"
	},
	{
		ch: "ช",
		name: "ชอ ช้าง",
		gloss: "elephant",
		sound: "ch",
		cls: "low"
	},
	{
		ch: "ด",
		name: "ดอ เด็ก",
		gloss: "child",
		sound: "d",
		cls: "mid"
	},
	{
		ch: "ต",
		name: "ตอ เต่า",
		gloss: "turtle",
		sound: "dt",
		cls: "mid"
	},
	{
		ch: "ท",
		name: "ทอ ทหาร",
		gloss: "soldier",
		sound: "th",
		cls: "low"
	},
	{
		ch: "น",
		name: "นอ หนู",
		gloss: "mouse",
		sound: "n",
		cls: "low"
	},
	{
		ch: "บ",
		name: "บอ ใบไม้",
		gloss: "leaf",
		sound: "b",
		cls: "mid"
	},
	{
		ch: "ป",
		name: "ปอ ปลา",
		gloss: "fish",
		sound: "bp",
		cls: "mid"
	},
	{
		ch: "พ",
		name: "พอ พาน",
		gloss: "phan tray",
		sound: "ph",
		cls: "low"
	},
	{
		ch: "ม",
		name: "มอ ม้า",
		gloss: "horse",
		sound: "m",
		cls: "low"
	},
	{
		ch: "ย",
		name: "ยอ ยักษ์",
		gloss: "giant",
		sound: "y",
		cls: "low"
	},
	{
		ch: "ร",
		name: "รอ เรือ",
		gloss: "boat",
		sound: "r",
		cls: "low"
	},
	{
		ch: "ล",
		name: "ลอ ลิง",
		gloss: "monkey",
		sound: "l",
		cls: "low"
	},
	{
		ch: "ว",
		name: "วอ แหวน",
		gloss: "ring",
		sound: "w",
		cls: "low"
	},
	{
		ch: "ส",
		name: "สอ เสือ",
		gloss: "tiger",
		sound: "s",
		cls: "high"
	},
	{
		ch: "ห",
		name: "หอ หีบ",
		gloss: "chest",
		sound: "h",
		cls: "high"
	},
	{
		ch: "อ",
		name: "ออ อ่าง",
		gloss: "basin",
		sound: "silent / a",
		cls: "mid"
	}
];
var vowels = [
	{
		mark: "า",
		sound: "aa",
		thai: "ข้าว",
		roman: "khâao",
		en: "rice"
	},
	{
		mark: "ิ",
		sound: "i",
		thai: "กิน",
		roman: "gin",
		en: "eat"
	},
	{
		mark: "ี",
		sound: "ii",
		thai: "ดี",
		roman: "dii",
		en: "good"
	},
	{
		mark: "ุ",
		sound: "u",
		thai: "คุณ",
		roman: "khun",
		en: "you"
	},
	{
		mark: "ู",
		sound: "uu",
		thai: "อยู่",
		roman: "yûu",
		en: "located"
	},
	{
		mark: "เ",
		sound: "e",
		thai: "เจ็ด",
		roman: "jèt",
		en: "seven"
	},
	{
		mark: "แ",
		sound: "ae",
		thai: "แม่",
		roman: "mâae",
		en: "mom"
	},
	{
		mark: "ไ",
		sound: "ai",
		thai: "ไป",
		roman: "bpai",
		en: "go"
	},
	{
		mark: "ำ",
		sound: "am",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Letters you'll meet first"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "Not the full alphabet. Color is the class, and class decides the tone of a new word. Mid is ink, high is chili, low is teal. Tap a letter to hear its name."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-3 text-xs font-extrabold tracking-wide uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink",
						children: "Mid"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-chili",
						children: "High"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-teal",
						children: "Low"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid grid-cols-4 gap-2",
				children: consonants.map((letter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => speakThai(letter.name),
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
						className: cn("min-h-12 rounded-2xl border-2 px-4 text-left font-extrabold", locked && right && "border-teal bg-teal text-sheet", locked && chosen && !right && "border-chili bg-chili text-sheet", locked && !right && !chosen && "border-line opacity-50", !locked && "border-line bg-sheet"),
						children: [tone.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("ml-2 text-sm font-bold", locked && (right || chosen) ? "text-sheet/80" : "text-muted"),
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
	const [tab, setTab] = (0, import_react.useState)("learn");
	const [lessonId, setLessonId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		useProgress.persist.rehydrate();
		warmVoices();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper lg:flex lg:h-dvh lg:overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden bg-sheet lg:mx-0 lg:shrink-0 lg:border-l lg:border-line",
			children: lessonId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lesson, {
				lessonId,
				onExit: () => setLessonId(null)
			}, lessonId) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: [
					tab === "learn" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { onStart: setLessonId }),
					tab === "script" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptLab, {}),
					tab === "me" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profile, {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "safe-bottom grid shrink-0 grid-cols-3 gap-1 border-t border-line px-2 pt-2",
				"aria-label": "Sections",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
						active: tab === "learn",
						label: "Learn",
						onClick: () => setTab("learn"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" })
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
function TabButton({ active, label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-current": active ? "page" : void 0,
		onClick,
		className: cn("flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-xs font-extrabold", active ? "bg-soft text-chili" : "text-muted"),
		children: [children, label]
	});
}
function BrandPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "relative hidden flex-1 flex-col justify-center overflow-hidden px-14 py-12 lg:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 place-items-center rounded-2xl bg-chili text-3xl font-extrabold text-sheet",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-lg text-pretty text-muted",
					children: "A pocket course with real script, the five tones, and the polite particle that matches your voice. Ten lessons, from hello to the night market."
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
							body: "A starter alphabet, vowel shapes, Thai digits, and a tone drill live under Script."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm font-bold text-muted",
					children: "Progress stays on this device."
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
//#endregion
export { SplitComponent as component };
