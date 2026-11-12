import { a1Vocab } from "./curriculum-a1";
import type { Exercise, Lesson, PartOfSpeech, Tok, Unit, Word } from "./curriculum-types";

const w = (
  id: string,
  thai: string,
  roman: string,
  en: string,
  pos: PartOfSpeech,
  topic: string,
): Word => ({ id, thai, roman, en, level: "A2", pos, topic });

const t = (word: Word): Tok => ({ kind: "w", word });
const SELF: Tok = { kind: "self" };
const OTHER: Tok = { kind: "other-self" };
const POLITE: Tok = { kind: "polite" };
const POLITE_Q: Tok = { kind: "polite", q: true };

const choice = (
  dir: "th-en" | "en-th" | "listen",
  word: Word,
  traps: Word[],
  coach?: string,
): Exercise => ({ kind: "choice", dir, word, traps, coach });

const tiles = (
  prompt: string,
  answer: Tok[],
  extra: Tok[],
  coach?: string,
): Exercise => ({ kind: "tiles", prompt, answer, extra, coach });

const pairs = (list: Word[], coach?: string): Exercise => ({
  kind: "pairs",
  pairs: list,
  coach,
});

const a1 = a1Vocab;

export const a2Vocab = {
  // A2 Unit 1: Ordering Like a Local
  padThai: w("a2-pad-thai", "ผัดไทย", "phàt-thai", "Pad Thai", "noun", "Food & Dining"),
  somtam: w("a2-somtam", "ส้มตำ", "sôm-dtam", "Papaya salad", "noun", "Food & Dining"),
  chicken: w("a2-chicken", "ไก่", "gài", "Chicken", "noun", "Food & Dining"),
  pork: w("a2-pork", "หมู", "mǔu", "Pork", "noun", "Food & Dining"),
  special: w("a2-special", "พิเศษ", "phí-sèet", "Extra / large portion", "adjective", "Food & Dining"),
  regular: w("a2-regular", "ธรรมดา", "tham-má-daa", "Regular portion", "adjective", "Food & Dining"),
  lessSweet: w("a2-less-sweet", "หวานน้อย", "wǎan-náawy", "Less sweet", "phrase", "Food & Dining"),
  without: w("a2-without", "ไม่ใส่", "mâi-sài", "Without / no topping", "phrase", "Food & Dining"),
  spoon: w("a2-spoon", "ช้อน", "cháawn", "Spoon", "noun", "Food & Dining"),
  fork: w("a2-fork", "ส้อม", "sâawm", "Fork", "noun", "Food & Dining"),
  chopsticks: w("a2-chopsticks", "ตะเกียบ", "dtà-gìiap", "Chopsticks", "noun", "Food & Dining"),
  full: w("a2-full", "อิ่ม", "ìm", "Full (after eating)", "adjective", "Food & Dining"),
  bill: w("a2-bill", "เช็คบิล", "chék-bin", "The bill", "phrase", "Food & Dining"),
  plainWater: w("a2-plain-water", "น้ำเปล่า", "náam-bplào", "Plain water", "noun", "Food & Dining"),
  orderW: w("a2-order", "สั่ง", "sàng", "To order", "verb", "Food & Dining"),
  takeaway: w("a2-takeaway", "ใส่ถุง", "sài-thǔng", "To pack to go", "phrase", "Food & Dining"),
  flavor: w("a2-flavor", "รสชาติ", "rót-châat", "Taste / flavor", "noun", "Food & Dining"),
  enough: w("a2-enough", "พอ", "phaaw", "Enough", "adverb", "Food & Dining"),

  // A2 Unit 2: Getting Around Thailand
  near: w("a2-near", "ใกล้", "glâi", "Near", "adjective", "Travel & Transit"),
  far: w("a2-far", "ไกล", "glai", "Far", "adjective", "Travel & Transit"),
  here: w("a2-here", "ที่นี่", "thîi-nîi", "Here", "adverb", "Travel & Transit"),
  there: w("a2-there", "ที่นั่น", "thîi-nân", "There", "adverb", "Travel & Transit"),
  stop: w("a2-stop", "หยุด", "yùt", "Stop", "verb", "Travel & Transit"),
  intersection: w("a2-intersection", "สี่แยก", "sìi-yâaek", "Four-way intersection", "noun", "Travel & Transit"),
  crossRoad: w("a2-cross-road", "ข้ามถนน", "khâam-thà-nǒn", "To cross the street", "verb", "Travel & Transit"),
  exitW: w("a2-exit", "ทางออก", "thaang-àawk", "Exit", "noun", "Travel & Transit"),
  hotel: w("a2-hotel", "โรงแรม", "roong-raaem", "Hotel", "noun", "Travel & Transit"),
  station: w("a2-station", "สถานี", "sà-thǎa-nii", "Station", "noun", "Travel & Transit"),
  airport: w("a2-airport", "สนามบิน", "sà-naam-bin", "Airport", "noun", "Travel & Transit"),
  bus: w("a2-bus", "รถเมล์", "rót-mee", "Bus", "noun", "Travel & Transit"),
  skytrain: w("a2-skytrain", "รถไฟฟ้า", "rót-fai-fáa", "Skytrain", "noun", "Travel & Transit"),
  train: w("a2-train", "รถไฟ", "rót-fai", "Train", "noun", "Travel & Transit"),
  boat: w("a2-boat", "เรือ", "ruea", "Boat / ferry", "noun", "Travel & Transit"),
  ticket: w("a2-ticket", "ตั๋ว", "dtǔa", "Ticket", "noun", "Travel & Transit"),
  mapW: w("a2-map", "แผนที่", "phǎaen-thîi", "Map", "noun", "Travel & Transit"),
  reserve: w("a2-reserve", "จอง", "jaawng", "To book / reserve", "verb", "Travel & Transit"),

  // A2 Unit 3: Conversation & Repair
  nameW: w("a2-name", "ชื่อ", "chûue", "Name", "noun", "Conversation"),
  thaiPerson: w("a2-thai-person", "คนไทย", "khon-thai", "Thai person", "noun", "Conversation"),
  age: w("a2-age", "อายุ", "aa-yú", "Age", "noun", "Conversation"),
  reside: w("a2-reside", "อาศัย", "aa-sǎi", "To live / reside", "verb", "Conversation"),
  comeFrom: w("a2-come-from", "มาจาก", "maa-jàak", "To come from", "phrase", "Conversation"),
  speak: w("a2-speak", "พูด", "phûut", "To speak", "verb", "Conversation"),
  understand: w("a2-understand", "เข้าใจ", "khâo-jai", "To understand", "verb", "Conversation"),
  aLittle: w("a2-a-little", "นิดหน่อย", "nít-nòi", "A little", "adverb", "Conversation"),
  slowly: w("a2-slowly", "ช้าๆ", "cháa-cháa", "Slowly", "adverb", "Conversation"),
  thaiLang: w("a2-thai-lang", "ภาษาไทย", "phaa-sǎa-thai", "Thai language", "noun", "Conversation"),
  meaning: w("a2-meaning", "ความหมาย", "khwaam-mǎai", "Meaning", "noun", "Conversation"),

  // A2 Unit 4: Out for the Day
  rain: w("a2-rain", "ฝน", "fǒn", "Rain", "noun", "Weather & Opinions"),
  fall: w("a2-fall", "ตก", "dtòk", "To fall / drop", "verb", "Weather & Opinions"),
  sunshine: w("a2-sunshine", "แดด", "dàaet", "Sunshine", "noun", "Weather & Opinions"),
  wind: w("a2-wind", "ลม", "lom", "Wind", "noun", "Weather & Opinions"),
  tired: w("a2-tired", "เหนื่อย", "nùeai", "Tired", "adjective", "Weather & Opinions"),
  like: w("a2-like", "ชอบ", "châawp", "To like", "verb", "Weather & Opinions"),
  fun: w("a2-fun", "สนุก", "sà-nùk", "Fun", "adjective", "Weather & Opinions"),
} as const;

const v = a2Vocab;
const nearCoach = "ใกล้ falls and means near. ไกล is mid and means far.";

export const a2Units: Unit[] = [
  {
    id: "meal",
    level: "A2",
    kicker: "A2 · Unit 1",
    title: "Ordering Like a Local",
    blurb: "Customize Thai dishes, ask for utensils, and settle the bill.",
  },
  {
    id: "going",
    level: "A2",
    kicker: "A2 · Unit 2",
    title: "Getting Around Thailand",
    blurb: "Near and far, intersections, transit, and booking tickets.",
  },
  {
    id: "talking",
    level: "A2",
    kicker: "A2 · Unit 3",
    title: "Conversation & Repair",
    blurb: "Introduce yourself and ask someone to slow down.",
  },
  {
    id: "out",
    level: "A2",
    kicker: "A2 · Unit 4",
    title: "Out for the Day",
    blurb: "Weather, energy, opinions, and the course finale.",
  },
];

export const a2Lessons: Lesson[] = [
  {
    id: "a2-food-custom",
    unit: "meal",
    title: "Customize Your Dish",
    subtitle: "Portions, sweetness, and utensils",
    tip: "Say หวานน้อย at drink stalls for less sweet, and ธรรมดา or พิเศษ for regular or extra portion.",
    words: [v.padThai, v.somtam, v.chicken, v.pork, v.special, v.regular, v.lessSweet, v.without, v.spoon, v.fork, v.chopsticks],
    exercises: [
      choice("th-en", v.padThai, [v.somtam, v.chicken, v.pork]),
      choice("en-th", v.lessSweet, [v.special, v.regular, v.without]),
      choice("listen", v.somtam, [v.padThai, v.chicken, v.chopsticks]),
      tiles("Chicken Pad Thai", [t(v.padThai), t(v.chicken)], [t(v.pork), t(v.somtam)]),
      tiles("Coffee, less sweet", [t(a1.coffee), t(v.lessSweet), POLITE], [t(v.special), t(v.without)]),
      pairs([v.padThai, v.somtam, v.chicken, v.pork]),
      pairs([v.special, v.regular, v.spoon, v.fork]),
    ],
  },
  {
    id: "a2-bill",
    unit: "meal",
    title: "The Bill & Takeaway",
    subtitle: "Full, plain water, and packing to go",
    tip: "เช็คบิลครับ or ค่ะ gets the check. ใส่ถุง asks the stall to bag your food to go.",
    words: [v.full, v.bill, v.plainWater, v.orderW, v.takeaway, v.flavor, v.enough],
    exercises: [
      choice("th-en", v.bill, [v.full, v.plainWater, v.takeaway]),
      choice("en-th", v.plainWater, [v.bill, v.full, v.flavor]),
      choice("listen", v.full, [v.enough, v.bill, v.orderW]),
      tiles("The bill, please", [t(v.bill), POLITE], [t(v.plainWater), t(v.full)]),
      tiles("Pack it to go", [t(v.takeaway), POLITE], [t(v.orderW), t(v.bill)]),
      pairs([v.full, v.bill, v.plainWater, v.orderW]),
      choice("th-en", v.enough, [v.full, v.flavor, v.takeaway]),
    ],
  },
  {
    id: "a2-directions",
    unit: "going",
    title: "Near & Far",
    subtitle: "Distance, intersections, and exits",
    tip: "ใกล้ (falling) is near. ไกล (mid) is far. Say จอด / หยุด here to stop a taxi or songthaew.",
    words: [v.near, v.far, v.here, v.there, v.stop, v.intersection, v.crossRoad, v.exitW],
    exercises: [
      choice("th-en", v.near, [v.far, v.here, v.there], nearCoach),
      choice("en-th", v.far, [v.near, v.here, v.there], nearCoach),
      choice("listen", v.here, [v.there, v.near, v.stop]),
      tiles("Stop here", [t(v.stop), t(v.here), POLITE], [t(v.there), t(v.near)]),
      tiles("Not far from here", [t(a1.no), t(v.far), t(a1.fromW), t(v.here)], [t(v.near), t(v.there)], nearCoach),
      pairs([v.near, v.far, v.here, v.there]),
      pairs([v.stop, v.intersection, v.crossRoad, v.exitW]),
    ],
  },
  {
    id: "a2-transit",
    unit: "going",
    title: "Transit & Travel",
    subtitle: "Skytrain, boat, tickets, and hotels",
    tip: "รถไฟฟ้า is the BTS/MRT skytrain, รถไฟ is the intercity train, and รถเมล์ is the city bus.",
    words: [v.hotel, v.station, v.airport, v.bus, v.skytrain, v.train, v.boat, v.ticket, v.mapW, v.reserve],
    exercises: [
      choice("th-en", v.hotel, [v.station, v.airport, v.ticket]),
      choice("en-th", v.airport, [v.station, v.hotel, v.bus]),
      choice("listen", v.skytrain, [v.train, v.bus, v.boat]),
      tiles("Where is the station?", [t(v.station), t(a1.located), t(a1.where), POLITE_Q], [t(v.hotel), t(v.airport)]),
      tiles("Book a hotel", [t(v.reserve), t(v.hotel)], [t(v.ticket), t(v.mapW)]),
      pairs([v.hotel, v.station, v.airport, v.ticket]),
      pairs([v.bus, v.skytrain, v.train, v.boat]),
    ],
  },
  {
    id: "a2-intro",
    unit: "talking",
    title: "Introducing Yourself",
    subtitle: "Name, nationality, and origin",
    tip: "ฉัน/ผมมาจาก… says where you come from. ชื่ออะไร asks someone's name politely.",
    words: [v.nameW, v.thaiPerson, v.age, v.reside, v.comeFrom],
    exercises: [
      choice("th-en", v.nameW, [v.age, v.thaiPerson, v.reside]),
      choice("en-th", v.comeFrom, [v.reside, v.nameW, v.age]),
      choice("listen", v.thaiPerson, [v.nameW, v.age, v.reside]),
      tiles("What's your name?", [t(v.nameW), t(a1.what), POLITE_Q], [t(v.age), t(a1.you)]),
      tiles("My name...", [SELF, t(v.nameW)], [OTHER, t(a1.what)]),
      pairs([v.nameW, v.thaiPerson, v.age, v.reside]),
      choice("th-en", v.age, [v.nameW, v.reside, v.comeFrom]),
    ],
  },
  {
    id: "a2-slowly",
    unit: "talking",
    title: "When You're Stuck",
    subtitle: "Ask people to repeat or slow down",
    tip: "ไม่เข้าใจ is one of the highest-value phrases you can know. พูดช้าๆ asks someone to speak slowly.",
    words: [v.speak, v.understand, v.aLittle, v.slowly, v.thaiLang, v.meaning],
    exercises: [
      choice("th-en", v.understand, [v.speak, v.slowly, v.aLittle]),
      choice("en-th", v.speak, [v.understand, v.slowly, v.thaiLang]),
      choice("listen", v.slowly, [v.aLittle, v.speak, v.understand]),
      tiles("I don't understand", [SELF, t(a1.no), t(v.understand), POLITE], [t(v.speak), OTHER]),
      tiles("Speak slowly", [t(v.speak), t(v.slowly), POLITE], [t(v.aLittle), t(v.understand)]),
      tiles("A little Thai", [t(v.thaiLang), t(v.aLittle)], [t(v.speak), t(v.slowly)]),
      pairs([v.speak, v.understand, v.slowly, v.aLittle]),
    ],
  },
  {
    id: "a2-weather",
    unit: "out",
    title: "Weather & Opinions",
    subtitle: "Rain, sun, wind, and likes",
    tip: "ฝนตก means it is raining. ชอบ goes straight before the verb or noun you like.",
    words: [v.rain, v.fall, v.sunshine, v.wind, v.tired, v.like, v.fun],
    exercises: [
      choice("th-en", v.rain, [v.sunshine, v.wind, v.tired]),
      choice("en-th", v.tired, [v.fun, v.like, v.rain]),
      choice("listen", v.like, [v.fun, v.tired, v.wind]),
      tiles("It's raining", [t(v.rain), t(v.fall)], [t(v.sunshine), t(v.wind)]),
      tiles("I like Thailand", [SELF, t(v.like), t(a1.thailand)], [t(a1.no), OTHER, t(v.tired)]),
      pairs([v.rain, v.sunshine, v.wind, v.tired]),
      choice("th-en", v.fun, [v.tired, v.like, v.rain]),
    ],
  },
  {
    id: "checkpoint-2",
    unit: "out",
    title: "Course Finale",
    subtitle: "Checkpoint 3 · A1 & A2 Review",
    tip: "A full mix across A1 and A2—food customization, transit, health, and conversation repair.",
    checkpoint: true,
    words: [],
    exercises: [
      choice("listen", v.understand, [a1.hello, a1.thanks, v.rain]),
      tiles("I don't understand", [SELF, t(a1.no), t(v.understand), POLITE], [t(v.speak), t(a1.yes)]),
      tiles("Where is the hotel?", [t(v.hotel), t(a1.located), t(a1.where), POLITE_Q], [t(v.station), t(a1.market)]),
      tiles("Less sweet", [t(v.lessSweet), POLITE], [t(a1.many), t(a1.tasty)]),
      choice("th-en", a1.tomorrow, [a1.today, a1.yesterday, a1.now]),
      choice("en-th", v.bill, [v.full, a1.water, a1.hundred]),
      pairs([v.near, a1.white, v.chicken, a1.twenty]),
      tiles("Speak slowly", [t(v.speak), t(v.slowly), POLITE], [t(v.aLittle), t(v.understand)]),
      choice("listen", v.padThai, [v.somtam, a1.rice, a1.water]),
    ],
  },
];
