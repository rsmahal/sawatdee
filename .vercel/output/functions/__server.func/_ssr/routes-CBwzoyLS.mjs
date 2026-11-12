import { o as __toESM } from "../_runtime.mjs";
import { n as useCurrentUserState, t as useCurrentUser } from "./use-current-user-oLOIdA8o.mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { a as nextInterval, c as todayKey, i as learningSnapshot, l as useProgress, n as duePhrase, o as parseLearning, r as gapLabel, s as reviewStats, t as authMiddleware, u as xpGain } from "./progress-D0yeEHeT.mjs";
import "./client-BF-G9gzu.mjs";
import { i as hasGateSessionMarker } from "./server-BzNa5Kx7.mjs";
import { Ht as require_react, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, c as Lock, d as Flame, f as ChevronRight, h as Award, l as House, m as BookOpen, n as Volume2, o as RotateCcw, p as Check, r as UserRound, s as Repeat, t as X, u as Heart } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-CBwzoyLS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
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
var today = w("วันนี้", "wan-níi", "Today");
var tomorrow = w("พรุ่งนี้", "phrûng-níi", "Tomorrow");
var yesterday = w("เมื่อวาน", "mûea-waan", "Yesterday");
var now = w("ตอนนี้", "dtaawn-níi", "Now");
var morning = w("เช้า", "cháao", "Morning");
var evening = w("เย็น", "yen", "Evening");
var afternoon = w("บ่าย", "bàai", "Afternoon");
var whatTime = w("กี่โมง", "gìi-moong", "What time");
var hour = w("โมง", "moong", "Hour, in telling time");
var minute = w("นาที", "naa-thii", "Minute");
var clock = w("นาฬิกา", "naa-lí-gaa", "Clock");
var red = w("สีแด่ง", "sǐi-dàaeng", "Red");
var white = w("สีขาว", "sǐi-khǎao", "White");
var black = w("สีด้ำ", "sǐi-dâm", "Black");
var blue = w("สีฟ้า", "sǐi-fáa", "Blue");
var green = w("สีเขียว", "sǐi-khǐao", "Green");
var yellow = w("สีเหลือง", "sǐi-lǔeang", "Yellow");
var big = w("ใหญ่", "yài", "Big");
var small = w("เล็ก", "lék", "Small");
var pretty = w("สวย", "sǔai", "Pretty");
var hot = w("ร้อน", "ráawn", "Hot");
var cold = w("หนาว", "nǎao", "Cold");
var very = w("ม่าก", "mâak", "Very");
var padThai = w("ผั่ดไทย", "phàt-thai", "Pad Thai");
var somtam = w("ส่มต้ำ", "sòm-dtâm", "Papaya salad");
var chicken = w("ไก่", "gài", "Chicken");
var pork = w("มู", "mǔu", "Pork");
var spicy = w("เผ็ด", "phèt", "Spicy");
var take = w("เอา", "ao", "I'll take");
var full = w("อิ่ม", "ìm", "Full, after eating");
var bill = w("เช็คบิล", "chék-bin", "The bill");
var plainWater = w("น้ำเปล่า", "náam-bplào", "Plain water");
var twenty = w("ยี้สิบ", "yíi-sìp", "Twenty");
var hundred = w("ร้อย", "ráawy", "Hundred");
var thousand = w("พัน", "phan", "Thousand");
var near = w("ใกล้", "glâi", "Near");
var far = w("ไกล", "glai", "Far");
var here = w("ที่นี่", "thîi-nîi", "Here");
var there = w("ที่นั่น", "thîi-nân", "There");
var stop = w("หยุด", "yùt", "Stop");
var hotel = w("โรงแรม", "roong-raaem", "Hotel");
var station = w("สถานี", "sà-thǎa-nii", "Station");
var airport = w("สนามบิน", "sà-naam-bin", "Airport");
var bus = w("รถเมล์", "rót-mee", "Bus");
var train = w("รถไฟฟ้า", "rót-fai-fáa", "Skytrain");
var nameW = w("ชื่อ", "chûue", "Name");
var what = w("อะไร", "à-rai", "What");
var person = w("คน", "khon", "Person");
var thaiPerson = w("คนไทย", "khon-thai", "Thai person");
var speak = w("พู่ด", "phûut", "To speak");
var understand = w("เข้าใจ่", "khâo-jài", "To understand");
var aLittle = w("นิดหน่อย", "nít-nòi", "A little");
var slowly = w("ช้าๆ", "cháa-cháa", "Slowly");
var thaiLang = w("ภาษาไทย", "phaa-sǎa-thai", "Thai language");
var rain = w("ฝน", "fǒn", "Rain");
var fall = w("ตก", "dtòk", "To fall");
var sunshine = w("แด่ด", "dàaet", "Sunshine");
var tired = w("เหนื่อย", "nùeai", "Tired");
var like = w("ช่อบ", "châawp", "To like");
var fun = w("สนุก", "sà-nùk", "Fun");
var kha = w("ค่ะ", "khâ", "Polite particle, women");
var khaQ = w("คะ", "khá", "Question particle, women");
var khrap = w("ครับ", "khráp", "Polite particle, men");
var toneCoach = "สี่ stays low. ห้า drops. Don't swap them.";
var maiCoach = "ไหม rises, and it asks. ไม่ falls, and it means no.";
var whiteCoach = "ขาว rises. ข้าว, rice, falls.";
var nearCoach = "ใกล้ falls and means near. ไกล is mid and means far.";
var twentyCoach = "Twenty is ยี้สิบ. สองสิบ is not the word people use.";
var timeCoach = "กี่โมง asks the time. On a Thai clock, สองโมง is 8 in the morning, not 2.";
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
var levels = [{
	id: "A1",
	title: "A1",
	blurb: "Greet people, buy food, and ask where something is."
}, {
	id: "A2",
	title: "A2",
	blurb: "Describe what you see, order a meal, and ask someone to slow down."
}];
var units = [
	{
		id: "hello",
		level: "A1",
		kicker: "Unit 1",
		title: "Say hello",
		blurb: "Greet people, thank them, and answer yes or no."
	},
	{
		id: "people",
		level: "A1",
		kicker: "Unit 2",
		title: "People",
		blurb: "Ask how someone is, and name the family."
	},
	{
		id: "market",
		level: "A1",
		kicker: "Unit 3",
		title: "At the market",
		blurb: "Order food and ask what it costs."
	},
	{
		id: "town",
		level: "A1",
		kicker: "Unit 4",
		title: "Around town",
		blurb: "Count, then find the bathroom."
	},
	{
		id: "time",
		level: "A1",
		kicker: "Unit 5",
		title: "Time",
		blurb: "Today, tomorrow, and how to ask the time."
	},
	{
		id: "describe",
		level: "A2",
		kicker: "Unit 1",
		title: "Describe it",
		blurb: "Colors, size, and how hot it is."
	},
	{
		id: "meal",
		level: "A2",
		kicker: "Unit 2",
		title: "A meal",
		blurb: "Order a dish, say you're full, ask for the bill."
	},
	{
		id: "going",
		level: "A2",
		kicker: "Unit 3",
		title: "Getting there",
		blurb: "Near, far, and the words for the station."
	},
	{
		id: "talking",
		level: "A2",
		kicker: "Unit 4",
		title: "When you're stuck",
		blurb: "Your name, and asking someone to slow down."
	},
	{
		id: "out",
		level: "A2",
		kicker: "Unit 5",
		title: "Out for the day",
		blurb: "Rain, being tired, and what you like."
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
			iM,
			kha,
			khaQ,
			khrap
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
	},
	{
		id: "today",
		unit: "time",
		title: "Today",
		subtitle: "Now, yesterday, tomorrow",
		tip: "นี้ on the end of วันนี้ and พรุ่งนี้ is the same high “this”. เมื่อวาน looks backward.",
		words: [
			today,
			tomorrow,
			yesterday,
			now,
			morning,
			evening
		],
		exercises: [
			choice("th-en", today, [
				tomorrow,
				yesterday,
				now
			]),
			choice("en-th", tomorrow, [
				today,
				morning,
				evening
			]),
			choice("listen", yesterday, [
				today,
				tomorrow,
				now
			]),
			tiles("Today.", [t(today)], [
				t(tomorrow),
				t(yesterday),
				t(now)
			]),
			tiles("Tomorrow morning.", [t(tomorrow), t(morning)], [
				t(evening),
				t(today),
				t(now)
			]),
			choice("th-en", morning, [
				evening,
				now,
				today
			]),
			pairs([
				today,
				tomorrow,
				yesterday,
				morning
			])
		]
	},
	{
		id: "what-time",
		unit: "time",
		title: "What time",
		subtitle: "Ask first. The Thai clock can wait.",
		tip: "กี่โมง is how you ask the time. Answers use a Thai clock, where สองโมง is 8 in the morning, not 2. Learn the question before that system.",
		words: [
			whatTime,
			hour,
			minute,
			clock,
			afternoon
		],
		exercises: [
			choice("th-en", whatTime, [
				hour,
				minute,
				clock
			], timeCoach),
			choice("en-th", minute, [
				hour,
				clock,
				afternoon
			]),
			choice("listen", clock, [
				minute,
				hour,
				whatTime
			]),
			tiles("What time?", [t(whatTime), POLITE_Q], [
				t(now),
				t(morning),
				t(hour)
			], timeCoach),
			tiles("In the afternoon.", [t(afternoon)], [
				t(morning),
				t(evening),
				t(now)
			]),
			pairs([
				whatTime,
				minute,
				clock,
				afternoon
			]),
			choice("th-en", hour, [
				minute,
				clock,
				afternoon
			])
		]
	},
	{
		id: "colors",
		unit: "describe",
		title: "Colors",
		subtitle: "สี sits in front",
		tip: "สี means color and comes first: สีแดง, สีขาว. ขาว rises. ข้าว, rice, falls.",
		words: [
			red,
			white,
			black,
			blue,
			green,
			yellow
		],
		exercises: [
			choice("th-en", white, [
				red,
				black,
				rice
			], whiteCoach),
			choice("en-th", red, [
				blue,
				green,
				yellow
			]),
			choice("listen", blue, [
				green,
				black,
				white
			]),
			tiles("Red.", [t(red)], [
				t(white),
				t(black),
				t(blue)
			]),
			tiles("White.", [t(white)], [
				t(rice),
				t(black),
				t(red)
			], whiteCoach),
			pairs([
				red,
				white,
				black,
				blue
			]),
			choice("th-en", yellow, [
				green,
				white,
				red
			])
		]
	},
	{
		id: "size",
		unit: "describe",
		title: "Big and hot",
		subtitle: "Size, heat, and very",
		tip: "มาก comes after the word it strengthens. ร้อนมาก is very hot. ใหญ่ is big. เล็ก is small.",
		words: [
			big,
			small,
			pretty,
			hot,
			cold,
			very
		],
		exercises: [
			choice("th-en", hot, [
				cold,
				big,
				very
			]),
			choice("en-th", small, [
				big,
				pretty,
				cold
			]),
			choice("listen", big, [
				small,
				hot,
				pretty
			]),
			tiles("Very hot.", [t(hot), t(very)], [
				t(cold),
				t(big),
				t(small)
			]),
			tiles("Small.", [t(small)], [
				t(big),
				t(pretty),
				t(cold)
			]),
			pairs([
				big,
				small,
				hot,
				cold
			]),
			choice("th-en", pretty, [
				big,
				hot,
				very
			])
		]
	},
	{
		id: "dishes",
		unit: "meal",
		title: "Order food",
		subtitle: "A few things you'll actually say",
		tip: "เอา is the short way to order: เอาผัดไทย. ขอ still works. ไม่เผ็ด is how you turn the heat off.",
		words: [
			padThai,
			somtam,
			chicken,
			pork,
			spicy,
			take
		],
		exercises: [
			choice("th-en", padThai, [
				somtam,
				chicken,
				rice
			]),
			choice("en-th", somtam, [
				padThai,
				spicy,
				pork
			]),
			choice("listen", chicken, [
				pork,
				padThai,
				rice
			]),
			tiles("I'll take Pad Thai.", [
				t(take),
				t(padThai),
				POLITE
			], [
				t(somtam),
				t(please),
				t(chicken)
			]),
			tiles("Not spicy.", [t(no), t(spicy)], [
				t(very),
				t(tasty),
				t(pork)
			]),
			pairs([
				padThai,
				somtam,
				chicken,
				pork
			]),
			choice("th-en", spicy, [
				chicken,
				tasty,
				pork
			])
		]
	},
	{
		id: "bill",
		unit: "meal",
		title: "The bill",
		subtitle: "Full, water, and bigger numbers",
		tip: "อิ่ม means you've had enough. เช็คบิล asks for the bill. Twenty is ยี้สิบ, not สองสิบ. ร้อย is a hundred. พัน is a thousand.",
		words: [
			full,
			bill,
			plainWater,
			twenty,
			hundred,
			thousand
		],
		exercises: [
			choice("th-en", full, [
				bill,
				hungry,
				tasty
			]),
			choice("en-th", bill, [
				full,
				water,
				hundred
			]),
			choice("listen", twenty, [
				ten,
				hundred,
				thousand
			], twentyCoach),
			tiles("The bill, please.", [t(bill), POLITE], [
				t(full),
				t(please),
				t(water)
			]),
			tiles("One hundred baht.", [
				t(one),
				t(hundred),
				t(baht)
			], [
				t(twenty),
				t(thousand),
				t(ten)
			]),
			tiles("Twenty baht.", [t(twenty), t(baht)], [
				t(ten),
				t(two),
				t(hundred)
			], twentyCoach),
			pairs([
				full,
				bill,
				twenty,
				hundred
			]),
			choice("th-en", plainWater, [
				water,
				tea,
				coffee
			])
		]
	},
	{
		id: "near-far",
		unit: "going",
		title: "Here and there",
		subtitle: "Near, far, stop",
		tip: "ใกล้ falls and means near. ไกล is mid and means far. ที่นี่ is here. ที่นั่น is there.",
		words: [
			near,
			far,
			here,
			there,
			stop
		],
		exercises: [
			choice("th-en", near, [
				far,
				here,
				there
			], nearCoach),
			choice("en-th", far, [
				near,
				stop,
				here
			], nearCoach),
			choice("listen", here, [
				there,
				near,
				far
			]),
			tiles("Stop here.", [t(stop), t(here)], [
				t(there),
				t(far),
				t(go)
			]),
			tiles("Not far.", [t(no), t(far)], [
				t(near),
				t(here),
				t(stop)
			]),
			pairs([
				near,
				far,
				here,
				there
			]),
			choice("th-en", stop, [
				here,
				far,
				go
			])
		]
	},
	{
		id: "station",
		unit: "going",
		title: "Station",
		subtitle: "Hotel, airport, bus, train",
		tip: "รถไฟฟ้า is the skytrain. รถเมล์ is the bus. อยู่ที่ไหน still asks where.",
		words: [
			hotel,
			station,
			airport,
			bus,
			train
		],
		exercises: [
			choice("th-en", hotel, [
				station,
				airport,
				temple
			]),
			choice("en-th", airport, [
				station,
				hotel,
				bus
			]),
			choice("listen", train, [
				bus,
				taxi,
				station
			]),
			tiles("Where is the station?", [
				t(station),
				t(located),
				t(where),
				POLITE_Q
			], [t(hotel), t(airport)]),
			tiles("Go to the hotel.", [t(go), t(hotel)], [
				t(station),
				t(airport),
				t(bus)
			]),
			pairs([
				hotel,
				station,
				airport,
				bus
			]),
			choice("th-en", bus, [
				train,
				taxi,
				hotel
			])
		]
	},
	{
		id: "names",
		unit: "talking",
		title: "Your name",
		subtitle: "ชื่อ and อะไร",
		tip: "ชื่ออะไร asks the name. ฉันชื่อ or ผมชื่อ starts the answer, then your name. คนไทย is a Thai person.",
		words: [
			nameW,
			what,
			person,
			thaiPerson
		],
		exercises: [
			choice("th-en", nameW, [
				what,
				person,
				you
			]),
			choice("en-th", what, [
				nameW,
				person,
				you
			]),
			choice("listen", person, [
				thaiPerson,
				friend,
				you
			]),
			tiles("What's your name?", [
				t(nameW),
				t(what),
				POLITE_Q
			], [t(person), t(you)]),
			tiles("My name...", [SELF, t(nameW)], [
				OTHER,
				t(what),
				t(person)
			]),
			pairs([
				nameW,
				what,
				person,
				thaiPerson
			]),
			choice("th-en", thaiPerson, [
				person,
				friend,
				you
			])
		]
	},
	{
		id: "slowly",
		unit: "talking",
		title: "Slowly",
		subtitle: "When the sentence goes past you",
		tip: "ไม่เข้าใจ is the most useful sentence in the course. พูดช้าๆ asks them to slow down. นิดหน่อย is a little.",
		words: [
			speak,
			understand,
			aLittle,
			slowly,
			thaiLang
		],
		exercises: [
			choice("th-en", understand, [
				speak,
				slowly,
				aLittle
			]),
			choice("en-th", speak, [
				understand,
				slowly,
				thaiLang
			]),
			choice("listen", slowly, [
				aLittle,
				speak,
				understand
			]),
			tiles("I don't understand.", [
				SELF,
				t(no),
				t(understand)
			], [
				t(speak),
				OTHER,
				t(yes)
			]),
			tiles("Speak slowly.", [
				t(speak),
				t(slowly),
				POLITE
			], [t(aLittle), t(understand)]),
			tiles("A little Thai.", [t(thaiLang), t(aLittle)], [
				t(speak),
				t(slowly),
				t(understand)
			]),
			pairs([
				speak,
				understand,
				slowly,
				aLittle
			])
		]
	},
	{
		id: "outside",
		unit: "out",
		title: "Rain and rest",
		subtitle: "Weather, tired, like",
		tip: "ฝนตก is raining. ชอบ goes before the thing you like. เหนื่อย is tired.",
		words: [
			rain,
			fall,
			sunshine,
			tired,
			like,
			fun
		],
		exercises: [
			choice("th-en", rain, [
				sunshine,
				tired,
				fun
			]),
			choice("en-th", tired, [
				fun,
				like,
				rain
			]),
			choice("listen", like, [
				fun,
				tired,
				rain
			]),
			tiles("It's raining.", [t(rain), t(fall)], [
				t(sunshine),
				t(tired),
				t(fun)
			]),
			tiles("I like it.", [SELF, t(like)], [
				t(no),
				OTHER,
				t(tired)
			]),
			tiles("I'm tired.", [SELF, t(tired)], [
				t(fun),
				t(like),
				OTHER
			]),
			pairs([
				rain,
				sunshine,
				tired,
				fun
			])
		]
	},
	{
		id: "checkpoint-2",
		unit: "out",
		title: "Say it again",
		subtitle: "A mix from the whole course",
		tip: "No new words. Same five hearts. Build the phrases the way you would say them out loud.",
		checkpoint: true,
		words: [],
		exercises: [
			choice("listen", understand, [
				hello,
				thanks,
				rain
			]),
			tiles("I don't understand.", [
				SELF,
				t(no),
				t(understand)
			], [
				t(speak),
				t(yes),
				OTHER
			]),
			tiles("Where is the hotel?", [
				t(hotel),
				t(located),
				t(where),
				POLITE_Q
			], [t(station), t(market)]),
			tiles("Not spicy.", [t(no), t(spicy)], [t(very), t(tasty)]),
			choice("th-en", tomorrow, [
				today,
				yesterday,
				now
			]),
			choice("en-th", bill, [
				full,
				water,
				hundred
			]),
			pairs([
				near,
				white,
				chicken,
				twenty
			]),
			tiles("Speak slowly.", [
				t(speak),
				t(slowly),
				POLITE
			], [t(aLittle), t(understand)]),
			choice("listen", padThai, [
				somtam,
				rice,
				water
			])
		]
	}
];
var courseNote = "A first-trip list, in the order you need the words. Not a dictionary dump.";
var dailyPhrases = [
	hello,
	thanks,
	np,
	howru,
	tasty,
	howMuch,
	bathroom,
	well,
	left,
	today,
	whatTime,
	understand,
	padThai,
	near
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
var _jsxFileName$7 = "/app/applet/src/components/sawatdee/exercise.tsx";
function gloss(word, showRoman) {
	return showRoman ? `${word.thai} · ${word.roman} — ${word.en}` : `${word.thai} — ${word.en}`;
}
function ExerciseBody({ exercise, speaker, showRoman, autoplay, result, gradeRef, onAnswer, onCanCheck }) {
	if (exercise.kind === "choice") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Choice, {
		exercise,
		showRoman,
		autoplay,
		result,
		gradeRef,
		onCanCheck
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 36,
		columnNumber: 7
	}, this);
	if (exercise.kind === "tiles") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tiles, {
		exercise,
		speaker,
		showRoman,
		result,
		gradeRef,
		onCanCheck
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 48,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pairs, {
		exercise,
		showRoman,
		result,
		gradeRef,
		onAnswer,
		onCanCheck
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 59,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "px-1 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs font-extrabold tracking-wide text-muted uppercase",
					children: exercise.dir === "listen" ? "What did you hear?" : exercise.dir === "th-en" ? "What does this mean?" : "How do you say this?"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 112,
					columnNumber: 9
				}, this),
				exercise.dir === "en-th" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-2 text-3xl font-extrabold text-balance",
					children: exercise.word.en
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 120,
					columnNumber: 11
				}, this) : revealed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					lang: "th",
					className: "thai-display mt-2 text-4xl text-balance",
					children: exercise.word.thai
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 123,
					columnNumber: 13
				}, this), showRoman && exercise.dir !== "listen" && /* @__PURE__ */ (void 0)("p", {
					className: "mt-1 text-sm font-bold text-muted",
					children: exercise.word.roman
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 127,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 122,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-lg font-extrabold",
					children: "Listen first"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 131,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 flex items-center justify-center gap-2",
					children: [exercise.dir !== "en-th" && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						"aria-label": "Play Thai",
						onClick: () => speakThai(exercise.word.thai),
						className: "grid h-12 w-12 place-items-center rounded-full bg-soft text-chili transition-transform duration-150 active:scale-[0.96]",
						children: /* @__PURE__ */ (void 0)(Volume2, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 141,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 135,
						columnNumber: 13
					}, this), exercise.dir === "listen" && !revealed && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => setPeek(true),
						className: "min-h-12 rounded-full px-4 text-sm font-extrabold text-teal",
						children: "Show the word"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 145,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 133,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 111,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-2",
			children: options.map((option) => {
				const primary = exercise.dir === "en-th" ? option.thai : option.en;
				const sub = exercise.dir === "en-th" && showRoman ? option.roman : void 0;
				const isPicked = picked === option.thai;
				const isAnswer = option.thai === exercise.word.thai;
				const locked = Boolean(result);
				const filled = locked && (isAnswer || isPicked && !isAnswer);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					disabled: locked,
					"aria-pressed": isPicked,
					onClick: () => setPicked(option.thai),
					className: cn("min-h-14 rounded-2xl border-2 px-4 py-3 text-left transition-transform duration-150 active:not-disabled:scale-[0.96]", locked && isAnswer && "border-teal bg-teal text-on-accent", locked && isPicked && !isAnswer && "border-chili bg-chili text-on-accent", locked && !isAnswer && !isPicked && "border-line opacity-50", !locked && isPicked && "border-chili bg-soft", !locked && !isPicked && "border-line bg-sheet"),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						lang: exercise.dir === "en-th" ? "th" : void 0,
						className: cn("block text-lg font-extrabold", exercise.dir === "en-th" && "thai-display text-2xl"),
						children: primary
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 179,
						columnNumber: 15
					}, this), sub && /* @__PURE__ */ (void 0)("span", {
						className: cn("block text-sm font-bold", filled ? "text-on-accent/80" : "text-muted"),
						children: sub
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 189,
						columnNumber: 17
					}, this)]
				}, option.thai, true, {
					fileName: _jsxFileName$7,
					lineNumber: 164,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 155,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 110,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs font-extrabold tracking-wide text-muted uppercase",
					children: "Build this in Thai"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 260,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-2 text-3xl font-extrabold text-balance",
					children: exercise.prompt
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 261,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 259,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex min-h-20 flex-wrap content-start gap-2 rounded-2xl border-2 border-dashed border-line bg-paper p-3",
				children: [picked.length === 0 && /* @__PURE__ */ (void 0)("p", {
					className: "text-sm font-bold text-muted",
					children: "Tap the words below"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 264,
					columnNumber: 33
				}, this), picked.map((chip) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					word: chip.word,
					showRoman,
					disabled: Boolean(result),
					onClick: () => toggle(chip.key)
				}, chip.key, false, {
					fileName: _jsxFileName$7,
					lineNumber: 266,
					columnNumber: 11
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 263,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: bank.map((chip) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					word: chip.word,
					showRoman,
					disabled: Boolean(result),
					onClick: () => toggle(chip.key)
				}, chip.key, false, {
					fileName: _jsxFileName$7,
					lineNumber: 271,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 269,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 258,
		columnNumber: 5
	}, this);
}
function Tile({ word, showRoman, disabled, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		disabled,
		onClick,
		className: "min-h-12 rounded-2xl border-2 border-line bg-sheet px-3 py-1 text-center transition-transform duration-150 active:not-disabled:scale-[0.96]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			lang: "th",
			className: "thai-display block text-lg",
			children: word.thai
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 296,
			columnNumber: 7
		}, this), showRoman && /* @__PURE__ */ (void 0)("span", {
			className: "block text-xs font-bold text-muted",
			children: word.roman
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 299,
			columnNumber: 21
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 290,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("flex flex-col gap-4", bad && "nudge"),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs font-extrabold tracking-wide text-muted uppercase",
				children: "Match the pairs"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 354,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-2 text-2xl font-extrabold text-balance",
				children: "Thai on the left, English on the right"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 355,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 353,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid content-start gap-2",
				children: exercise.pairs.map((pair) => {
					const done = matched.includes(pair.en);
					const active = leftPick === pair.en;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						disabled: done || Boolean(result),
						onClick: () => setLeftPick(pair.en),
						className: cn("min-h-14 rounded-2xl border-2 px-3 py-2 text-left break-words", done && "border-teal bg-teal text-on-accent", !done && active && "border-chili bg-soft", !done && !active && "border-line bg-sheet"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							lang: "th",
							className: "thai-display block text-lg",
							children: pair.thai
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 375,
							columnNumber: 17
						}, this), showRoman && !done && /* @__PURE__ */ (void 0)("span", {
							className: "block text-xs font-bold text-muted",
							children: pair.roman
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 378,
							columnNumber: 40
						}, this)]
					}, pair.thai, true, {
						fileName: _jsxFileName$7,
						lineNumber: 363,
						columnNumber: 15
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 358,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid content-start gap-2",
				children: right.map((pair) => {
					const done = matched.includes(pair.en);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						disabled: done || Boolean(result),
						onClick: () => pickRight(pair.en),
						className: cn("min-h-14 rounded-2xl border-2 px-3 py-2 text-left text-base font-extrabold break-words", done ? "border-teal bg-teal text-on-accent" : "border-line bg-sheet"),
						children: pair.en
					}, pair.en, false, {
						fileName: _jsxFileName$7,
						lineNumber: 387,
						columnNumber: 15
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 383,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 357,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 352,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/sawatdee/lesson.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex min-h-0 flex-1 flex-col",
		children: [
			phase === "intro" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (void 0)("header", {
					className: "flex items-center gap-2 px-4 pt-4",
					children: [/* @__PURE__ */ (void 0)(IconButton$1, {
						label: "Leave lesson",
						onClick: () => setConfirmExit(true),
						children: /* @__PURE__ */ (void 0)(X, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 96,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 95,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "text-sm font-extrabold text-muted",
						children: lesson.subtitle
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 98,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 94,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-5 pt-4 pb-4",
					children: [
						/* @__PURE__ */ (void 0)("h1", {
							className: "text-3xl font-extrabold text-balance",
							children: lesson.title
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 101,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-2 text-pretty text-muted",
							children: lesson.tip
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 102,
							columnNumber: 13
						}, this),
						lesson.words.length > 0 && /* @__PURE__ */ (void 0)("ul", {
							className: "mt-5 grid gap-2",
							children: lesson.words.map((word) => /* @__PURE__ */ (void 0)("li", {
								className: "flex items-center gap-3 rounded-2xl border border-line bg-paper px-3 py-2",
								children: [/* @__PURE__ */ (void 0)("button", {
									type: "button",
									"aria-label": `Play ${word.en}`,
									onClick: () => speakThai(word.thai),
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-soft text-chili transition-transform duration-150 active:scale-[0.96]",
									children: /* @__PURE__ */ (void 0)(Volume2, { className: "h-5 w-5" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 116,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 110,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (void 0)("p", {
											lang: "th",
											className: "thai-display text-2xl",
											children: word.thai
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 119,
											columnNumber: 23
										}, this),
										showRoman && /* @__PURE__ */ (void 0)("p", {
											className: "text-sm font-bold text-muted",
											children: word.roman
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 122,
											columnNumber: 37
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "font-extrabold",
											children: word.en
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 123,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 118,
									columnNumber: 21
								}, this)]
							}, word.thai, true, {
								fileName: _jsxFileName$6,
								lineNumber: 106,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 104,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-4 text-center text-sm font-bold text-muted",
							children: "Five hearts. A miss costs one. You can replay."
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 129,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 100,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("footer", {
					className: "safe-bottom px-4 pt-2",
					children: /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => setPhase("play"),
						className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
						children: "Start lesson"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 134,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 133,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 93,
				columnNumber: 9
			}, this),
			phase === "play" && exercise && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (void 0)("header", {
					className: "flex items-center gap-3 px-3 pt-3",
					children: [
						/* @__PURE__ */ (void 0)(IconButton$1, {
							label: "Leave lesson",
							onClick: () => setConfirmExit(true),
							children: /* @__PURE__ */ (void 0)(X, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 149,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 148,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "h-3 flex-1 overflow-hidden rounded-full bg-soft",
							"aria-hidden": true,
							children: /* @__PURE__ */ (void 0)("div", {
								className: "h-full rounded-full bg-chili transition-[width] duration-300 ease-out",
								style: { width: `${(index + (result ? 1 : 0)) / total * 100}%` }
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 152,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 151,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex shrink-0 items-center",
							"aria-label": `${hearts} hearts`,
							children: Array.from({ length: 5 }, (_, heart) => /* @__PURE__ */ (void 0)(Heart, {
								className: cn("h-5 w-5", heart < hearts ? "text-chili" : "text-line"),
								fill: heart < hearts ? "currentColor" : "none"
							}, heart, false, {
								fileName: _jsxFileName$6,
								lineNumber: 159,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 157,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 147,
					columnNumber: 11
				}, this),
				combo >= 2 && /* @__PURE__ */ (void 0)("p", {
					className: "pt-2 text-center text-sm font-extrabold text-marigold tabular-nums",
					children: ["Combo ×", combo]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 168,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-4 pt-4 pb-4",
					children: /* @__PURE__ */ (void 0)(ExerciseBody, {
						exercise,
						speaker,
						showRoman,
						autoplay,
						result,
						gradeRef,
						onAnswer: accept,
						onCanCheck
					}, index, false, {
						fileName: _jsxFileName$6,
						lineNumber: 173,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 172,
					columnNumber: 11
				}, this),
				result ? /* @__PURE__ */ (void 0)("footer", {
					className: cn("safe-bottom px-4 pt-4", result.ok ? "bg-teal text-on-accent" : "bg-chili text-on-accent"),
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (void 0)("p", {
							className: "text-xl font-extrabold",
							children: result.ok ? PRAISE[index % PRAISE.length] : "Not quite."
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 190,
							columnNumber: 15
						}, this),
						result.solution && /* @__PURE__ */ (void 0)("p", {
							lang: "th",
							className: "mt-1 font-bold",
							children: result.solution
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 194,
							columnNumber: 17
						}, this),
						exercise.coach && /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-sm",
							children: exercise.coach
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 198,
							columnNumber: 34
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: onContinue,
							className: "btn-3d btn-sheet mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
							children: "Continue"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 199,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 186,
					columnNumber: 13
				}, this) : exercise.kind === "pairs" ? /* @__PURE__ */ (void 0)("footer", {
					className: "safe-bottom px-4 pt-4 text-center text-sm font-extrabold text-muted",
					children: "Match each pair"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 208,
					columnNumber: 13
				}, this) : /* @__PURE__ */ (void 0)("footer", {
					className: "safe-bottom px-4 pt-2",
					children: /* @__PURE__ */ (void 0)("button", {
						type: "button",
						disabled: !canCheck,
						onClick: onCheck,
						className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
						children: "Check"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 213,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 212,
					columnNumber: 13
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 146,
				columnNumber: 9
			}, this),
			phase === "done" && /* @__PURE__ */ (void 0)(EndScreen, {
				title: "Lesson complete",
				body: mistakes === 0 ? "No misses." : `${mistakes} ${mistakes === 1 ? "miss" : "misses"}.`,
				sessionXp,
				stars,
				action: "Continue",
				onAction: onExit
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 227,
				columnNumber: 9
			}, this),
			phase === "down" && /* @__PURE__ */ (void 0)(EndScreen, {
				title: "Out of hearts",
				body: "This lesson stays unfinished. XP you already earned is kept, and hearts refill on the path.",
				sessionXp,
				action: "Back to the path",
				onAction: onExit,
				tone: "chili"
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 238,
				columnNumber: 9
			}, this),
			confirmExit && /* @__PURE__ */ (void 0)("div", {
				className: "absolute inset-0 z-20 flex items-end bg-ink/40 p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "w-full rounded-3xl bg-sheet p-5",
					children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "text-xl font-extrabold",
							children: "Leave this lesson?"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 251,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-sm text-pretty text-muted",
							children: "XP you already earned stays. The lesson will not count as finished."
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 252,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: onExit,
							className: "btn-3d btn-chili mt-4 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
							children: "Leave"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 255,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setConfirmExit(false),
							className: "mt-2 min-h-12 w-full font-extrabold text-muted",
							children: "Keep going"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 262,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 250,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 249,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 91,
		columnNumber: 5
	}, this);
}
function EndScreen({ title, body, sessionXp, stars, action, onAction, tone = "teal" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: cn("grid h-24 w-24 place-items-center rounded-full text-on-accent", tone === "teal" ? "bg-teal" : "bg-chili"),
				children: tone === "teal" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-12 w-12" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 302,
					columnNumber: 30
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, {
					className: "h-12 w-12",
					fill: "currentColor"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 302,
					columnNumber: 64
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 296,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-5 text-3xl font-extrabold text-balance",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 304,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 max-w-xs text-pretty text-muted",
				children: body
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 305,
				columnNumber: 9
			}, this),
			stars ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 text-sm font-extrabold tracking-wide text-marigold uppercase",
				children: stars === 3 ? "Three stars" : stars === 2 ? "Two stars" : "One star"
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 307,
				columnNumber: 11
			}, this) : null,
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-2xl font-extrabold text-chili tabular-nums",
				children: [
					"+",
					sessionXp,
					" XP"
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 311,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 295,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "safe-bottom px-4 pt-2",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			onClick: onAction,
			className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
			children: action
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 314,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 313,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 294,
		columnNumber: 5
	}, this);
}
function IconButton$1({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted",
		children
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 328,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/sawatdee/path.tsx";
function Path({ onStart, onReview }) {
	const xp = useProgress((state) => state.xp);
	const streak = useProgress((state) => state.streak);
	const completed = useProgress((state) => state.completed);
	const cards = useProgress((state) => state.cards);
	const speaker = useProgress((state) => state.speaker);
	const setSpeaker = useProgress((state) => state.setSpeaker);
	const showRoman = useProgress((state) => state.showRoman);
	const [note, setNote] = (0, import_react.useState)(null);
	const next = nextLesson(completed);
	const doneCount = lessons.filter((lesson) => completed[lesson.id]).length;
	const due = reviewStats(cards, todayKey()).due;
	const phrase = dailyPhrases[Math.floor(Date.now() / 864e5) % dailyPhrases.length] ?? dailyPhrases[0];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "px-5 pt-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm font-extrabold text-chili",
							children: "Sawatdee"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 27,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-3xl font-extrabold text-balance",
							children: "Learn Thai"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 28,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 max-w-xs text-sm text-pretty text-muted",
							children: courseNote
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 29,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 26,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-1 rounded-full bg-soft px-3 py-2 font-extrabold tabular-nums",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flame, {
						className: "h-5 w-5 text-marigold",
						fill: "currentColor"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 32,
						columnNumber: 11
					}, this), streak]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 31,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm font-extrabold text-muted tabular-nums",
					children: [
						xp,
						" XP · ",
						doneCount,
						"/",
						lessons.length
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 38,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerSwitch, {
					speaker,
					onChange: setSpeaker
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 41,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => speakThai(phrase.thai),
				className: "mt-4 flex w-full items-center gap-3 rounded-2xl bg-soft px-4 py-3 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "h-5 w-5 shrink-0 text-chili" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 49,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block text-xs font-extrabold tracking-wide text-muted uppercase",
							children: "Today"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 51,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							lang: "th",
							className: "thai-display text-lg",
							children: phrase.thai
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 52,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block text-sm font-bold text-muted",
							children: [showRoman ? `${phrase.roman} · ` : "", phrase.en]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 55,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 50,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			next ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => onStart(next.id),
				className: "btn-3d btn-chili mt-4 flex min-h-16 w-full items-center justify-between rounded-2xl px-5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "block text-xs font-extrabold tracking-wide uppercase opacity-80",
					children: "Continue"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 69,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-lg font-extrabold",
					children: next.title
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 70,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 68,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-6 w-6" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 72,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 63,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 rounded-2xl bg-teal px-5 py-4 text-on-accent",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-lg font-extrabold",
					children: "Path complete."
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 76,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm",
					children: "Replay any lesson. Stars stay at your best."
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 77,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 75,
				columnNumber: 9
			}, this),
			due > 0 && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: onReview,
				className: "mt-3 flex min-h-14 w-full items-center justify-between rounded-2xl bg-soft px-4 text-left",
				children: [/* @__PURE__ */ (void 0)("span", { children: [/* @__PURE__ */ (void 0)("span", {
					className: "block text-xs font-extrabold tracking-wide text-chili uppercase",
					children: "Review"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 87,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("span", {
					className: "font-extrabold",
					children: [
						due,
						" ",
						due === 1 ? "word" : "words",
						" due"
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 88,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 86,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "h-5 w-5 text-chili" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 92,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 81,
				columnNumber: 9
			}, this),
			note && /* @__PURE__ */ (void 0)("p", {
				className: "mt-3 text-sm font-bold text-chili",
				children: note
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 95,
				columnNumber: 16
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 grid gap-8",
				children: levels.map((level) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-extrabold tracking-wide text-chili uppercase",
							children: "CEFR"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 101,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-2xl font-extrabold",
							children: level.title
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 102,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-pretty text-muted",
							children: level.blurb
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 103,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 100,
						columnNumber: 13
					}, this), units.filter((unit) => unit.level === level.id).map((unit) => {
						const unitLessons = lessons.filter((lesson) => lesson.unit === unit.id);
						const unitDone = unitLessons.filter((lesson) => completed[lesson.id]).length;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-3xl bg-soft px-5 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs font-extrabold tracking-wide text-chili uppercase",
									children: unit.kicker
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 113,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-end justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-xl font-extrabold",
										children: unit.title
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 115,
										columnNumber: 25
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-sm font-extrabold text-muted tabular-nums",
										children: [
											unitDone,
											"/",
											unitLessons.length
										]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 116,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 114,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm text-muted",
									children: unit.blurb
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 120,
									columnNumber: 23
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 112,
							columnNumber: 21
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
							className: "relative mt-4 grid gap-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute top-4 bottom-4 left-1/2 w-1 -translate-x-1/2 bg-line",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 123,
								columnNumber: 23
							}, this), unitLessons.map((lesson, index) => {
								const open = isUnlocked(lesson.id, completed);
								const done = Boolean(completed[lesson.id]);
								const stars = completed[lesson.id] ?? 0;
								const number = lessons.findIndex((item) => item.id === lesson.id) + 1;
								const side = index % 2 === 0 ? "justify-start pl-6" : "justify-end pr-6";
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
									className: cn("relative flex", side),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex w-28 flex-col items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
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
												children: done ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-8 w-8" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 154,
													columnNumber: 35
												}, this) : !open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-6 w-6" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 156,
													columnNumber: 35
												}, this) : lesson.checkpoint ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Award, { className: "h-8 w-8" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 158,
													columnNumber: 35
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-2xl font-extrabold tabular-nums",
													children: number
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 160,
													columnNumber: 35
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 133,
												columnNumber: 31
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-center text-sm leading-tight font-extrabold",
												children: lesson.title
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 163,
												columnNumber: 31
											}, this),
											done && stars > 0 && /* @__PURE__ */ (void 0)("span", {
												className: "flex text-marigold",
												"aria-label": `${stars} stars`,
												children: Array.from({ length: stars }, (_, star) => /* @__PURE__ */ (void 0)(Star, {
													className: "h-3.5 w-3.5",
													fill: "currentColor"
												}, star, false, {
													fileName: _jsxFileName$5,
													lineNumber: 167,
													columnNumber: 37
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 165,
												columnNumber: 33
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 132,
										columnNumber: 29
									}, this)
								}, lesson.id, false, {
									fileName: _jsxFileName$5,
									lineNumber: 131,
									columnNumber: 27
								}, this);
							})]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 122,
							columnNumber: 21
						}, this)] }, unit.id, true, {
							fileName: _jsxFileName$5,
							lineNumber: 111,
							columnNumber: 19
						}, this);
					})]
				}, level.id, true, {
					fileName: _jsxFileName$5,
					lineNumber: 99,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 97,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
function SpeakerSwitch({ speaker, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "text-xs font-extrabold tracking-wide text-muted uppercase",
			children: "I say"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 189,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex rounded-full bg-soft p-1",
			children: [[
				"f",
				"ค่ะ",
				"Speak as a woman, ending with ค่ะ"
			], [
				"m",
				"ครับ",
				"Speak as a man, ending with ครับ"
			]].map(([id, label, name]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				"aria-pressed": speaker === id,
				"aria-label": name,
				onClick: () => onChange(id),
				className: cn("min-h-11 rounded-full px-3 text-sm font-extrabold", speaker === id ? "bg-ink text-sheet" : "text-muted"),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					lang: "th",
					children: label
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 208,
					columnNumber: 13
				}, this)
			}, id, false, {
				fileName: _jsxFileName$5,
				lineNumber: 197,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 190,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 188,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/lib/auth/gates.tsx";
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
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
	(0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 105,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 111,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-sm font-medium",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 115,
				columnNumber: 7
			}, this),
			false
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 103,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/sawatdee/profile.tsx";
function Profile() {
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "px-5 pt-6 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm font-extrabold text-chili",
				children: "You"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-3xl font-extrabold",
				children: "Profile"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 35,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-pretty text-muted",
				children: "Lessons, review, and XP are saved to this account. Polite particles follow the speaker, not the person you're talking to."
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 36,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Account, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
					on: theme === "dark",
					label: "Dark mode",
					hint: "Night colors for the whole course.",
					onToggle: () => setTheme(theme === "dark" ? "light" : "dark")
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 44,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 grid grid-cols-2 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat$1, {
						label: "XP",
						value: String(xp)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 53,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat$1, {
						label: "Streak",
						value: String(streak)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 54,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat$1, {
						label: "Lessons",
						value: `${done}/${lessons.length}`
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 55,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat$1, {
						label: "Words",
						value: String(deck.total)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 56,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 52,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm font-bold text-muted",
				children: accuracy === null ? "Accuracy shows up after you check an answer." : `${accuracy}% accuracy across ${answered} answers.`
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 58,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Thai letters"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 64,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "This changes every Thai word in the course, on every page. Modern is the loopless face used on signs and phones. Traditional keeps the looped heads you see in books. The spelling stays the same."
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 65,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScriptStylePicker, {}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 70,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 69,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "How words get in"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: [courseNote, " Greetings, food, money, and directions come first, then time, describing things, and what to say when you get stuck. A word has to be something you would say out loud. No royal vocabulary, no slang. Later lessons reuse earlier words, and Review only schedules words from lessons you have opened."]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 74,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "How you speak"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 80,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerCard, {
					active: speaker === "f",
					thai: "ค่ะ",
					roman: "khâ",
					label: "Woman",
					onClick: () => setSpeaker("f")
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 82,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerCard, {
					active: speaker === "m",
					thai: "ครับ",
					roman: "khráp",
					label: "Man",
					onClick: () => setSpeaker("m")
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 89,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 81,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm text-pretty text-muted",
				children: [
					"Now set to ",
					particleLabel(speaker),
					". Questions from a woman use คะ (khá) instead of ค่ะ. Men keep ครับ. Tiles for “I” use ",
					speaker === "m" ? "ผม (phǒm)" : "ฉัน (chǎn)",
					"."
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 97,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
					on: showRoman,
					label: "Romanization",
					hint: "Show the pronunciation under the Thai script.",
					onToggle: () => setShowRoman(!showRoman)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 103,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
					on: autoplay,
					label: "Play audio automatically",
					hint: "Speak the prompt when a new exercise opens. The speaker button always works.",
					onToggle: () => setAutoplay(!autoplay)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 109,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 102,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
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
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 117,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 33,
		columnNumber: 5
	}, this);
}
function Account() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 h-24 animate-pulse rounded-2xl bg-soft" }, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 137,
		columnNumber: 25
	}, this);
	if (!user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-5 rounded-2xl bg-soft px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-extrabold",
				children: "Sign in"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 141,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "Google, or an email and password you choose."
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 142,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/login",
				className: "btn-3d btn-chili mt-3 flex min-h-12 items-center justify-center rounded-2xl font-extrabold",
				children: "Sign in"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 143,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 140,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-5 rounded-2xl bg-soft px-4 py-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserButton, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 154,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 153,
		columnNumber: 5
	}, this);
}
function Stat$1({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-2xl bg-soft px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-xs font-extrabold tracking-wide text-muted uppercase",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 162,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-2xl font-extrabold tabular-nums",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 163,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 161,
		columnNumber: 5
	}, this);
}
function ScriptStylePicker() {
	const style = useProgress((state) => state.scriptStyle);
	const setScriptStyle = useProgress((state) => state.setScriptStyle);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-2 gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyleCard, {
			active: style === "modern",
			sampleClass: "thai-modern-sample",
			title: "Modern",
			hint: "Loopless",
			onClick: () => setScriptStyle("modern")
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 173,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyleCard, {
			active: style === "traditional",
			sampleClass: "thai-traditional-sample",
			title: "Traditional",
			hint: "Looped heads",
			onClick: () => setScriptStyle("traditional")
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 180,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 172,
		columnNumber: 5
	}, this);
}
function StyleCard({ active, sampleClass, title, hint, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: cn("min-h-24 rounded-2xl border-2 px-3 py-3 text-left", active ? "border-ink bg-ink text-sheet" : "border-line bg-sheet"),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				lang: "th",
				className: cn("thai-display block text-3xl", sampleClass),
				children: "สวัสดี"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 214,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "mt-1 block font-extrabold",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 217,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: cn("block text-sm font-bold", active ? "text-sheet/80" : "text-muted"),
				children: hint
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 218,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 205,
		columnNumber: 5
	}, this);
}
function SpeakerCard({ active, thai, roman, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: cn("min-h-20 rounded-2xl border-2 px-3 py-3 text-left", active ? "border-ink bg-ink text-sheet" : "border-line bg-sheet"),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			lang: "th",
			className: "thai-display block text-2xl",
			children: thai
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 246,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: cn("block text-sm font-bold", active ? "text-sheet/80" : "text-muted"),
			children: [
				roman,
				" · ",
				label
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 249,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 237,
		columnNumber: 5
	}, this);
}
function Toggle({ on, label, hint, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		role: "switch",
		"aria-checked": on,
		onClick: onToggle,
		className: "flex min-h-16 w-full items-center justify-between gap-3 rounded-2xl bg-soft px-4 py-3 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block font-extrabold",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 276,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block text-sm text-muted",
			children: hint
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 277,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 275,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: cn("h-7 w-12 shrink-0 rounded-full p-1", on ? "bg-teal" : "bg-line"),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("block h-5 w-5 rounded-full bg-sheet transition-transform duration-150", on && "translate-x-5") }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 280,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 279,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 268,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/sawatdee/review.tsx";
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
	const cards = useProgress((state) => state.cards);
	const showRoman = useProgress((state) => state.showRoman);
	const today = todayKey();
	const stats = reviewStats(cards, today);
	const dueList = Object.values(cards).filter((card) => card.due <= today).sort((a, b) => a.thai.localeCompare(b.thai, "th"));
	const later = Object.values(cards).filter((card) => card.due > today).sort((a, b) => a.due.localeCompare(b.due) || a.thai.localeCompare(b.thai, "th"));
	const session = Math.min(stats.due, 12);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "px-5 pt-6 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm font-extrabold text-chili",
				children: "Review"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-3xl font-extrabold text-balance",
				children: "Words you've seen"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 62,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-pretty text-muted",
				children: "Opening a lesson adds its words here. A miss stays due and comes back later in the round. A correct answer waits 1 day, then 3, then longer, up to 90 days."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Deck",
						value: String(stats.total)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 69,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Due",
						value: String(stats.due)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 70,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Mastered",
						value: String(stats.mastered)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 71,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 68,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm text-pretty text-muted",
				children: ["Mastered means three weeks between reviews.", stats.total === 0 ? " Open a lesson and its word list lands here, ready to review." : stats.due === 0 ? stats.nextDue ? ` Next review ${stats.nextDue}.` : " Nothing is waiting." : ""]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			dueList.length > 0 && /* @__PURE__ */ (void 0)(DeckList, {
				title: "Due",
				cards: dueList.slice(0, 8),
				extra: Math.max(0, dueList.length - 8),
				today,
				showRoman
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 85,
				columnNumber: 9
			}, this),
			later.length > 0 && /* @__PURE__ */ (void 0)(DeckList, {
				title: "Coming up",
				cards: later.slice(0, 5),
				extra: Math.max(0, later.length - 5),
				today,
				showRoman
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 88,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				disabled: session === 0,
				onClick: () => onStart("due"),
				className: "btn-3d btn-chili mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl font-extrabold",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "h-5 w-5" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 97,
					columnNumber: 9
				}, this), session === 0 ? "Nothing due" : session === stats.due ? `Review ${stats.due}` : `Review ${session} of ${stats.due}`]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 91,
				columnNumber: 7
			}, this),
			stats.total >= 2 && stats.due < stats.total && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: () => onStart("ahead"),
				className: "mt-2 min-h-12 w-full rounded-2xl border-2 border-line font-extrabold",
				children: "Practice ahead"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 101,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 60,
		columnNumber: 5
	}, this);
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
	if (phase === "done" || !item || !exercise) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-1 flex-col items-center justify-center px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid h-24 w-24 place-items-center rounded-full bg-teal text-on-accent",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-12 w-12" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 188,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 187,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-5 text-3xl font-extrabold",
					children: "Review done"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 190,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 max-w-xs text-pretty text-muted",
					children: queue.length === 0 ? "Nothing was waiting." : `${remembered} remembered first try. ${missed} ${missed === 1 ? "comes" : "come"} back sooner.`
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 191,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 186,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
			className: "safe-bottom px-4 pt-2",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onExit,
				className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
				children: "Back"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 198,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 197,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 185,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex min-h-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex items-center gap-3 px-3 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
						label: "Leave review",
						onClick: onExit,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 214,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 213,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "h-3 flex-1 overflow-hidden rounded-full bg-soft",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-full rounded-full bg-teal transition-[width] duration-300 ease-out",
							style: { width: `${(index + (result ? 1 : 0)) / queue.length * 100}%` }
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 217,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 216,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "shrink-0 text-sm font-extrabold text-muted tabular-nums",
						children: [
							index + 1,
							"/",
							queue.length
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 222,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 212,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pt-4 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExerciseBody, {
					exercise,
					speaker,
					showRoman,
					autoplay,
					result,
					gradeRef,
					onAnswer: () => void 0,
					onCanCheck
				}, `${item.thai}-${index}`, false, {
					fileName: _jsxFileName$2,
					lineNumber: 227,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 226,
				columnNumber: 7
			}, this),
			result ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: cn("safe-bottom px-4 pt-4", result.ok ? "bg-teal text-on-accent" : "bg-chili text-on-accent"),
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xl font-extrabold",
						children: result.ok ? "Kept." : "Not quite."
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 244,
						columnNumber: 11
					}, this),
					result.solution && /* @__PURE__ */ (void 0)("p", {
						lang: "th",
						className: "mt-1 font-bold",
						children: result.solution
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 246,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm",
						children: gap
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 250,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: onContinue,
						className: "btn-3d btn-sheet mt-3 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
						children: "Continue"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 251,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 240,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: "safe-bottom px-4 pt-2",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					disabled: !canCheck,
					onClick: onCheck,
					className: "btn-3d btn-chili flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
					children: "Check"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 261,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 260,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 211,
		columnNumber: 5
	}, this);
}
function DeckList({ title, cards, extra, today, showRoman }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "mt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "text-sm font-extrabold tracking-wide text-muted uppercase",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 290,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "mt-2 grid gap-2",
				children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: "flex items-center justify-between gap-3 rounded-2xl bg-soft px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							lang: "th",
							className: "thai-display block text-xl",
							children: card.thai
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 295,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block text-sm font-bold text-muted",
							children: [showRoman ? `${card.roman} · ` : "", card.en]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 298,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 294,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "shrink-0 text-xs font-extrabold text-chili",
						children: duePhrase(card.due, today)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 303,
						columnNumber: 13
					}, this)]
				}, card.thai, true, {
					fileName: _jsxFileName$2,
					lineNumber: 293,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 291,
				columnNumber: 7
			}, this),
			extra > 0 && /* @__PURE__ */ (void 0)("p", {
				className: "mt-2 text-sm font-bold text-muted",
				children: [
					"+",
					extra,
					" more"
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 307,
				columnNumber: 21
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 289,
		columnNumber: 5
	}, this);
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-2xl bg-soft px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-xs font-extrabold tracking-wide text-muted uppercase",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 315,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-2xl font-extrabold tabular-nums",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 316,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 314,
		columnNumber: 5
	}, this);
}
function IconButton({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted",
		children
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 323,
		columnNumber: 5
	}, this);
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
var _jsxFileName$1 = "/app/applet/src/components/sawatdee/script-lab.tsx";
var classColor = {
	mid: "text-ink",
	high: "text-chili",
	low: "text-teal"
};
function ScriptLab() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "px-5 pt-6 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm font-extrabold text-chili",
				children: "Script"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-3xl font-extrabold text-balance",
				children: "Read the tones"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-pretty text-muted",
				children: "Marks on the romanization: unmarked mid, à low, á high, â falling, ǎ rising. Long vowels are doubled. bp and dt are unaspirated."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-6 text-lg font-extrabold",
				children: "How the letters look"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "This is the same setting as on You. It changes every Thai word in the course, not only this page. Modern drops the little loops. Traditional keeps them. The spelling does not change."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScriptStylePicker, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 39,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 38,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToneDrill, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Five tones"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "mt-3 grid gap-2",
				children: toneExamples.map((example) => {
					const tone = tones.find((item) => item.id === example.tone);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => speakThai(example.thai),
						className: "flex w-full items-center gap-3 rounded-2xl bg-soft px-4 py-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "h-5 w-5 shrink-0 text-chili" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 55,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "block text-xs font-extrabold tracking-wide text-muted uppercase",
									children: [
										tone?.label,
										" · ",
										tone?.hint
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 57,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									lang: "th",
									className: "thai-display text-2xl",
									children: example.thai
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 60,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "block text-sm font-bold text-muted",
									children: [
										example.roman,
										" · ",
										example.en
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 63,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 56,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 50,
						columnNumber: 15
					}, this) }, example.thai, false, {
						fileName: _jsxFileName$1,
						lineNumber: 49,
						columnNumber: 13
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm text-pretty text-muted",
				children: "ไม่ (mâi, falling) means no. ไหม (mǎi, rising) turns a statement into a question. Same shape on the page, different pitch."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 72,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Letters you'll meet first"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 77,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-pretty text-muted",
				children: "Not the full alphabet. Color is the class, and class decides the tone of a new word. Mid is ink, high is chili, low is teal. Tap a letter to hear its name."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 flex gap-3 text-xs font-extrabold tracking-wide uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-ink",
						children: "Mid"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 83,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-chili",
						children: "High"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 84,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-teal",
						children: "Low"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 85,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 82,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "mt-3 grid grid-cols-4 gap-2",
				children: consonants.map((letter) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => speakThai(letter.name),
					className: "flex min-h-20 w-full flex-col items-center justify-center rounded-2xl bg-soft px-1 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						lang: "th",
						className: cn("thai-display text-3xl", classColor[letter.cls]),
						children: letter.ch
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 95,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-extrabold text-muted",
						children: letter.sound
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 98,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 90,
					columnNumber: 13
				}, this) }, letter.ch, false, {
					fileName: _jsxFileName$1,
					lineNumber: 89,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 87,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Vowel shapes"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 104,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "mt-3 grid gap-2",
				children: vowels.map((vowel) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => speakThai(vowel.thai),
					className: "flex w-full items-center gap-3 rounded-2xl border border-line px-4 py-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						lang: "th",
						className: "thai-display w-10 text-center text-2xl text-chili",
						children: vowel.mark
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 113,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block text-xs font-extrabold tracking-wide text-muted uppercase",
							children: vowel.sound
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 117,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							lang: "th",
							className: "thai-display text-lg",
							children: vowel.thai
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 118,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block text-sm font-bold text-muted",
							children: [
								vowel.roman,
								" · ",
								vowel.en
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 121,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 116,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 108,
					columnNumber: 13
				}, this) }, vowel.mark, false, {
					fileName: _jsxFileName$1,
					lineNumber: 107,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 105,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-8 text-lg font-extrabold",
				children: "Thai digits"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 130,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Prices and dates sometimes use these instead of 0–9."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 131,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "mt-3 grid grid-cols-5 gap-2",
				children: thaiDigits.map(([thai, arabic]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: "rounded-2xl bg-soft py-2 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						lang: "th",
						className: "thai-display block text-2xl",
						children: thai
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 135,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-extrabold text-muted tabular-nums",
						children: arabic
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 138,
						columnNumber: 13
					}, this)]
				}, thai, true, {
					fileName: _jsxFileName$1,
					lineNumber: 134,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 132,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 25,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "mt-5 rounded-3xl border border-line p-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "text-lg font-extrabold",
				children: "Tone drill"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 170,
				columnNumber: 9
			}, this), round && !done && /* @__PURE__ */ (void 0)("p", {
				className: "text-sm font-extrabold text-muted tabular-nums",
				children: [
					index + 1,
					"/",
					round.length
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 172,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 169,
			columnNumber: 7
		}, this), !round || !card ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-3 text-sm font-bold text-muted",
			children: "Getting six words ready."
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 178,
			columnNumber: 9
		}, this) : done ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-2xl font-extrabold tabular-nums",
					children: [
						score,
						" of ",
						round.length
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 181,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted",
					children: "Pitch is the word. Run it again whenever it gets slippery."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 184,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: restart,
					className: "btn-3d btn-teal mt-4 flex min-h-12 w-full items-center justify-center rounded-2xl font-extrabold",
					children: "Drill again"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 185,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 180,
			columnNumber: 9
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => speakThai(card.thai),
				className: "mt-3 flex w-full flex-col items-center rounded-2xl bg-soft px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "h-5 w-5 text-chili" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 200,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						lang: "th",
						className: "thai-display mt-1 text-4xl",
						children: card.thai
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 201,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-sm font-bold text-muted",
						children: [
							card.roman,
							" · ",
							card.en
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 204,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 195,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 grid gap-2",
				children: tones.map((tone) => {
					const chosen = pick === tone.id;
					const right = tone.id === card.tone;
					const locked = pick !== null;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						disabled: locked,
						onClick: () => {
							setPick(tone.id);
							if (tone.id === card.tone) setScore((value) => value + 1);
						},
						className: cn("min-h-12 rounded-2xl border-2 px-4 text-left font-extrabold", locked && right && "border-teal bg-teal text-on-accent", locked && chosen && !right && "border-chili bg-chili text-on-accent", locked && !right && !chosen && "border-line opacity-50", !locked && "border-line bg-sheet"),
						children: [tone.label, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: cn("ml-2 text-sm font-bold", locked && (right || chosen) ? "text-on-accent/80" : "text-muted"),
							children: tone.hint
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 231,
							columnNumber: 19
						}, this)]
					}, tone.id, true, {
						fileName: _jsxFileName$1,
						lineNumber: 214,
						columnNumber: 17
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 208,
				columnNumber: 11
			}, this),
			pick && /* @__PURE__ */ (void 0)("button", {
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
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 239,
				columnNumber: 13
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 194,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 168,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/sawatdee/app.tsx";
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
	if (isPending) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GateSplash, { label: "Loading your course" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 25
	}, this);
	const activeUserId = user?.id || "dev-user";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Course, { userId: activeUserId }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
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
		loadProgress().then((learning) => {
			if (cancel) return;
			if (learning) useProgress.getState().applyLearning(learning);
		}).catch(() => {}).finally(() => {
			if (cancel) return;
			lastSaved.current = JSON.stringify(learningSnapshot(useProgress.getState()));
			ready.current = true;
			const seen = lessons.filter((lesson) => useProgress.getState().completed[lesson.id]).flatMap((lesson) => lesson.words);
			useProgress.getState().ingestWords(seen);
			setPhase("ready");
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
	if (phase === "loading") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GateSplash, { label: "Loading your progress" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 97,
		columnNumber: 35
	}, this);
	if (phase === "error") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid min-h-dvh place-items-center bg-paper px-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "w-full max-w-sm text-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-lg font-extrabold",
				children: "Couldn't load this account."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => setAttempt((value) => value + 1),
				className: "btn-3d btn-chili mt-4 min-h-12 w-full rounded-2xl font-extrabold",
				children: "Try again"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 101,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 100,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-dvh bg-paper lg:flex lg:h-dvh lg:overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandPanel, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden bg-sheet lg:mx-0 lg:shrink-0 lg:border-l lg:border-line",
			children: lessonId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lesson, {
				lessonId,
				onExit: () => setLessonId(null)
			}, lessonId, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 11
			}, this) : reviewMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReviewSession, {
				mode: reviewMode,
				onExit: () => setReviewMode(null)
			}, reviewMode, false, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: [
					tab === "learn" && /* @__PURE__ */ (void 0)(Path, {
						onStart: setLessonId,
						onReview: () => setTab("review")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 35
					}, this),
					tab === "review" && /* @__PURE__ */ (void 0)(Review, { onStart: setReviewMode }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 36
					}, this),
					tab === "script" && /* @__PURE__ */ (void 0)(ScriptLab, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 36
					}, this),
					tab === "me" && /* @__PURE__ */ (void 0)(Profile, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 32
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "safe-bottom grid shrink-0 grid-cols-4 gap-1 border-t border-line px-2 pt-2",
				"aria-label": "Sections",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabButton, {
						active: tab === "learn",
						label: "Learn",
						onClick: () => setTab("learn"),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabButton, {
						active: tab === "review",
						label: "Review",
						dot: due > 0,
						onClick: () => setTab("review"),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Repeat, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 136,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 135,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabButton, {
						active: tab === "script",
						label: "Script",
						onClick: () => setTab("script"),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpen, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabButton, {
						active: tab === "me",
						label: "You",
						onClick: () => setTab("me"),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserRound, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 142,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 131,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 124,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 5
	}, this);
}
function GateSplash({ label }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid min-h-dvh place-items-center bg-paper px-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-sm font-extrabold text-muted",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 155,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 154,
		columnNumber: 5
	}, this);
}
function TabButton({ active, label, onClick, dot, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		"aria-current": active ? "page" : void 0,
		onClick,
		className: cn("flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-xs font-extrabold", active ? "bg-soft text-chili" : "text-muted"),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "relative",
			children: [children, dot ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -top-0.5 -right-1.5 h-2 w-2 rounded-full bg-chili" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 16
			}, this) : null]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 183,
			columnNumber: 7
		}, this), label]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 174,
		columnNumber: 5
	}, this);
}
function BrandPanel() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
		className: "relative hidden flex-1 flex-col justify-center overflow-hidden px-14 py-12 lg:flex",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid h-14 w-14 place-items-center rounded-2xl bg-chili text-3xl font-extrabold text-on-accent",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							lang: "th",
							className: "thai-display",
							children: "ส"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm font-extrabold tracking-wide text-chili uppercase",
						children: "Sawatdee"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 203,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						lang: "th",
						className: "thai-display text-2xl",
						children: "สวัสดี"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 202,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 196,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-8 text-5xl font-extrabold text-balance",
					children: "Speak Thai from the first lesson."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 209,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-4 max-w-md text-lg text-pretty text-muted",
					children: [
						"A pocket course with real script, the five tones, and the polite particle that matches your voice.",
						" ",
						lessons.length,
						" lessons, from hello to asking someone to slow down. Review brings back only the words you have already seen."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 210,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-8 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandPoint, {
							icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 217,
								columnNumber: 19
							}, this),
							title: "Listen, then answer",
							body: "Every new word can be spoken aloud. Tap the speaker if you want it again."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 216,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandPoint, {
							icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 222,
								columnNumber: 19
							}, this),
							title: "Build the phrase",
							body: "Tap Thai tiles into order, including ครับ or ค่ะ, depending on how you speak."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 221,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandPoint, {
							icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpen, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 227,
								columnNumber: 19
							}, this),
							title: "Read the script",
							body: "A starter alphabet, vowel shapes, Thai digits, and a tone drill live under Script."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 226,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 215,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-8 text-sm font-bold text-muted",
					children: "Sign in. Lessons and review stay with your account."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 232,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 195,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -right-2 -bottom-10 text-9xl font-extrabold text-line select-none",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				lang: "th",
				className: "thai-display",
				children: "ส"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 235,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 234,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 194,
		columnNumber: 5
	}, this);
}
function BrandPoint({ icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-soft text-chili",
			children: icon
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 246,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block font-extrabold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 248,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block text-sm text-pretty text-muted",
			children: body
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 249,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 247,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 245,
		columnNumber: 5
	}, this);
}
var SplitComponent = SawatdeeApp;
export { SplitComponent as component };
