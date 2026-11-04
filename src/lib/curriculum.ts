export type Speaker = "m" | "f";

export type Word = { thai: string; roman: string; en: string };

export type Tok =
  | { kind: "w"; word: Word }
  | { kind: "self" }
  | { kind: "other-self" }
  | { kind: "polite"; q?: boolean };

export type Exercise =
  | {
      kind: "choice";
      dir: "th-en" | "en-th" | "listen";
      word: Word;
      traps: Word[];
      coach?: string;
    }
  | {
      kind: "tiles";
      prompt: string;
      answer: Tok[];
      extra: Tok[];
      coach?: string;
    }
  | { kind: "pairs"; pairs: Word[]; coach?: string };

export type Lesson = {
  id: string;
  unit: string;
  title: string;
  subtitle: string;
  tip: string;
  checkpoint?: boolean;
  words: Word[];
  exercises: Exercise[];
};

const w = (thai: string, roman: string, en: string): Word => ({ thai, roman, en });
const t = (word: Word): Tok => ({ kind: "w", word });
const SELF: Tok = { kind: "self" };
const OTHER: Tok = { kind: "other-self" };
const POLITE: Tok = { kind: "polite" };
const POLITE_Q: Tok = { kind: "polite", q: true };

const hello = w("สวัสดี", "sà-wàt-dii", "Hello");
const bye = w("ลาก่อน", "laa-gàwn", "Goodbye");
const meet = w("ยินดีที่ได้รู้จัก", "yin-dii-thîi-dâai-rúu-jàk", "Nice to meet you");
const thanks = w("ขอบคุณ", "khàawp-khun", "Thank you");
const sorry = w("ขอโทษ", "khǎaw-thôot", "Sorry / excuse me");
const np = w("ไม่เป็นไร", "mâi-bpen-rai", "No problem");
const yes = w("ใช่", "châi", "Yes");
const no = w("ไม่", "mâi", "No");
const can = w("ได้", "dâai", "Can / okay");
const cant = w("ไม่ได้", "mâi-dâai", "Cannot");
const well = w("สบายดี", "sà-baai-dii", "I'm well");
const howru = w("สบายดีไหม", "sà-baai-dii-mǎi", "How are you?");
const iF = w("ฉัน", "chǎn", "I, for women");
const iM = w("ผม", "phǒm", "I, for men");
const you = w("คุณ", "khun", "You");
const mom = w("แม่", "mâae", "Mom");
const dad = w("พ่อ", "phâaw", "Dad");
const older = w("พี่", "phîi", "Older sibling");
const younger = w("น้อง", "náawng", "Younger sibling");
const friend = w("เพื่อน", "phûean", "Friend");
const rice = w("ข้าว", "khâao", "Rice / a meal");
const water = w("น้ำ", "náam", "Water");
const coffee = w("กาแฟ", "gaa-fae", "Coffee");
const tea = w("ชา", "chaa", "Tea");
const tasty = w("อร่อย", "à-ròi", "Delicious");
const hungry = w("หิว", "hǐu", "Hungry");
const eat = w("กิน", "gin", "To eat");
const want = w("อยาก", "yàak", "To want");
const please = w("ขอ", "khǎaw", "Please / may I have");
const thisOne = w("อันนี้", "an-níi", "This one");
const howMuch = w("เท่าไหร่", "thâo-rài", "How much?");
const expensive = w("แพง", "phaeng", "Expensive");
const cheap = w("ถูก", "thùuk", "Cheap");
const baht = w("บาท", "bàat", "Baht");
const one = w("หนึ่ง", "nùeng", "One");
const two = w("สอง", "sǎawng", "Two");
const three = w("สาม", "sǎam", "Three");
const four = w("สี่", "sìi", "Four");
const five = w("ห้า", "hâa", "Five");
const six = w("หก", "hòk", "Six");
const seven = w("เจ็ด", "jèt", "Seven");
const eight = w("แปด", "bpàaet", "Eight");
const nine = w("เก้า", "gâao", "Nine");
const ten = w("สิบ", "sìp", "Ten");
const bathroom = w("ห้องน้ำ", "hông-náam", "Bathroom");
const where = w("ที่ไหน", "thîi-nǎi", "Where");
const located = w("อยู่", "yûu", "Is located");
const go = w("ไป", "bpai", "To go");
const market = w("ตลาด", "dtà-lâat", "Market");
const temple = w("วัด", "wát", "Temple");
const left = w("ซ้าย", "sáai", "Left");
const right = w("ขวา", "khwǎa", "Right");
const straight = w("ตรงไป", "dtrong-bpai", "Straight ahead");
const turn = w("เลี้ยว", "líiao", "To turn");
const taxi = w("แท็กซี่", "tháek-sîi", "Taxi");

const toneCoach = "สี่ stays low. ห้า drops. Don't swap them.";
const maiCoach = "ไหม rises, and it asks. ไม่ falls, and it means no.";

function choice(
  dir: "th-en" | "en-th" | "listen",
  word: Word,
  traps: Word[],
  coach?: string,
): Exercise {
  return { kind: "choice", dir, word, traps, coach };
}

function tiles(prompt: string, answer: Tok[], extra: Tok[], coach?: string): Exercise {
  return { kind: "tiles", prompt, answer, extra, coach };
}

function pairs(list: Word[], coach?: string): Exercise {
  return { kind: "pairs", pairs: list, coach };
}

export const units = [
  {
    id: "hello",
    kicker: "Unit 1",
    title: "Say hello",
    blurb: "Greet people, thank them, and answer yes or no.",
  },
  {
    id: "people",
    kicker: "Unit 2",
    title: "People",
    blurb: "Ask how someone is, and name the family.",
  },
  {
    id: "market",
    kicker: "Unit 3",
    title: "At the market",
    blurb: "Order food and ask what it costs.",
  },
  {
    id: "town",
    kicker: "Unit 4",
    title: "Around town",
    blurb: "Count, then find the bathroom.",
  },
] as const;

export const lessons: Lesson[] = [
  {
    id: "hello",
    unit: "hello",
    title: "Hello",
    subtitle: "Greetings that work all day",
    tip: "สวัสดี works morning, noon, and night. There is no separate good morning. Put your polite particle on the end.",
    words: [hello, bye, meet],
    exercises: [
      choice("th-en", hello, [bye, thanks, yes]),
      choice("en-th", bye, [hello, meet]),
      choice("listen", hello, [bye, meet, thanks]),
      tiles("Say hello politely.", [t(hello), POLITE], [t(bye), t(meet)]),
      tiles("Say goodbye politely.", [t(bye), POLITE], [t(hello), t(thanks)]),
      choice("th-en", meet, [hello, bye, thanks]),
      pairs([hello, bye, meet]),
    ],
  },
  {
    id: "thanks",
    unit: "hello",
    title: "Thanks",
    subtitle: "Please, sorry, you're welcome",
    tip: "ไม่เป็นไร answers thank you. It also means don't worry about it.",
    words: [thanks, sorry, np],
    exercises: [
      choice("th-en", thanks, [sorry, np, hello]),
      choice("en-th", sorry, [thanks, np, bye]),
      choice("listen", np, [thanks, sorry, yes]),
      tiles("Thank you.", [t(thanks), POLITE], [t(sorry), t(np)]),
      tiles("Excuse me.", [t(sorry), POLITE], [t(thanks), t(hello)]),
      choice("th-en", sorry, [thanks, np, bye]),
      pairs([thanks, sorry, np]),
    ],
  },
  {
    id: "yes-no",
    unit: "hello",
    title: "Yes & no",
    subtitle: "ใช่, ไม่, and ได้",
    tip: "ได้ is can, or a soft okay. ไม่ได้ shuts the door: cannot.",
    words: [yes, no, can, cant],
    exercises: [
      choice("th-en", yes, [no, can, thanks]),
      choice("en-th", no, [yes, cant, np]),
      choice("listen", can, [cant, yes, no]),
      tiles("Yes.", [t(yes), POLITE], [t(no), t(can)]),
      tiles("I can't.", [SELF, t(cant)], [t(can), OTHER]),
      choice("th-en", cant, [can, no, sorry]),
      pairs([yes, no, can]),
    ],
  },
  {
    id: "how-are-you",
    unit: "people",
    title: "How are you",
    subtitle: "Questions, and the word for I",
    tip: "Women's questions end in คะ, not ค่ะ. Men stay with ครับ. ผม is I for men. ฉัน is the I this course uses for women.",
    words: [well, howru, you, iF, iM],
    exercises: [
      choice("th-en", well, [howru, you, yes]),
      choice("en-th", howru, [well, you, np], maiCoach),
      choice("listen", you, [well, iF, friend]),
      tiles("How are you?", [t(howru), POLITE_Q], [t(well), t(no), t(yes)], maiCoach),
      tiles("I'm well.", [SELF, t(well)], [OTHER, t(howru)]),
      choice("th-en", no, [howru, yes, can], maiCoach),
      pairs([well, you, iF, iM]),
    ],
  },
  {
    id: "family",
    unit: "people",
    title: "Family",
    subtitle: "Older, younger, and friends",
    tip: "พี่ is someone older you feel close to. น้อง is younger. Friends use these words too, not only siblings.",
    words: [mom, dad, older, younger, friend],
    exercises: [
      choice("th-en", mom, [dad, older, friend]),
      choice("en-th", dad, [mom, younger, you]),
      choice("listen", friend, [older, younger, you]),
      choice("th-en", older, [younger, friend, dad]),
      tiles("Mom.", [t(mom)], [t(dad), t(older), t(friend)]),
      pairs([mom, dad, older, younger]),
      choice("en-th", friend, [older, you, mom]),
    ],
  },
  {
    id: "food",
    unit: "market",
    title: "Hungry",
    subtitle: "Rice, water, and want",
    tip: "ข้าว is rice, and also a meal. อยากกิน is want to eat. ขอ is how you ask for something.",
    words: [rice, water, coffee, tasty, eat, want, hungry],
    exercises: [
      choice("th-en", tasty, [hungry, rice, water]),
      choice("en-th", water, [rice, coffee, tea]),
      choice("listen", rice, [water, tasty, eat]),
      tiles("I want to eat.", [SELF, t(want), t(eat)], [t(water), t(tasty), OTHER]),
      tiles("Water, please.", [t(please), t(water), POLITE], [t(coffee), t(eat)]),
      choice("th-en", hungry, [tasty, eat, want]),
      pairs([rice, water, coffee, tasty]),
    ],
  },
  {
    id: "price",
    unit: "market",
    title: "How much",
    subtitle: "Point, ask, pay",
    tip: "Point and ask อันนี้เท่าไหร่. Prices come back in บาท. แพง is expensive. ถูก is cheap.",
    words: [howMuch, thisOne, expensive, cheap, baht],
    exercises: [
      choice("th-en", howMuch, [expensive, cheap, baht]),
      choice("en-th", expensive, [cheap, howMuch, tasty]),
      choice("listen", cheap, [expensive, baht, water]),
      tiles(
        "How much is this?",
        [t(thisOne), t(howMuch), POLITE_Q],
        [t(expensive), t(baht), t(please)],
      ),
      tiles("This one, please.", [t(thisOne), POLITE], [t(howMuch), t(cheap)]),
      pairs([howMuch, expensive, cheap, baht]),
      choice("th-en", baht, [cheap, howMuch, rice]),
    ],
  },
  {
    id: "numbers",
    unit: "town",
    title: "Numbers",
    subtitle: "One through ten",
    tip: "The tone is the number. สอง and สาม rise. สี่ stays low. ห้า falls.",
    words: [one, two, three, four, five, six, seven, eight, nine, ten],
    exercises: [
      choice("th-en", five, [four, nine, two], toneCoach),
      choice("en-th", three, [two, four, five]),
      choice("listen", eight, [seven, nine, three]),
      tiles("Four.", [t(four)], [t(five), t(six), t(nine)], toneCoach),
      tiles("Ten baht.", [t(ten), t(baht)], [t(one), t(five), t(two)]),
      pairs([one, two, three, four]),
      choice("th-en", nine, [five, six, ten]),
      choice("listen", two, [three, five, one]),
    ],
  },
  {
    id: "places",
    unit: "town",
    title: "Which way",
    subtitle: "Bathroom, market, left, right",
    tip: "อยู่ is the hinge: the place, then อยู่, then ที่ไหน. ห้องน้ำอยู่ที่ไหน is where is the bathroom.",
    words: [bathroom, where, located, left, right, straight, turn, market, temple, taxi],
    exercises: [
      choice("th-en", bathroom, [market, temple, taxi]),
      choice("en-th", temple, [market, bathroom, taxi]),
      choice("listen", taxi, [temple, market, go]),
      tiles(
        "Where is the bathroom?",
        [t(bathroom), t(located), t(where), POLITE_Q],
        [t(market), t(left)],
      ),
      tiles("Turn left.", [t(turn), t(left)], [t(right), t(straight), t(go)]),
      tiles("Go straight.", [t(straight)], [t(turn), t(left), t(right)]),
      pairs([bathroom, market, temple, taxi]),
      choice("th-en", left, [right, straight, where]),
    ],
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
      choice("listen", hello, [thanks, bye, sorry]),
      tiles("Thank you.", [t(thanks), POLITE], [t(sorry), t(np), t(yes)]),
      tiles("How are you?", [t(howru), POLITE_Q], [t(well), t(no)], maiCoach),
      tiles(
        "Where is the bathroom?",
        [t(bathroom), t(located), t(where), POLITE_Q],
        [t(market), t(taxi)],
      ),
      choice("th-en", howMuch, [expensive, bathroom, tasty]),
      choice("en-th", tasty, [hungry, cheap, water]),
      pairs([mom, friend, water, five]),
      tiles("I want to eat.", [SELF, t(want), t(eat)], [t(water), OTHER, t(rice)]),
      choice("listen", sorry, [thanks, np, bye]),
    ],
  },
];

export const dailyPhrases: Word[] = [hello, thanks, np, howru, tasty, howMuch, bathroom, well, left];

export function lessonById(id: string) {
  return lessons.find((lesson) => lesson.id === id) ?? null;
}

export function isUnlocked(id: string, completed: Record<string, number>) {
  const index = lessons.findIndex((lesson) => lesson.id === id);
  if (index <= 0) return true;
  return Boolean(completed[lessons[index - 1]!.id]);
}

export function nextLesson(completed: Record<string, number>) {
  return lessons.find((lesson) => !completed[lesson.id] && isUnlocked(lesson.id, completed)) ?? null;
}

export function resolveTok(tok: Tok, speaker: Speaker): Word {
  if (tok.kind === "w") return tok.word;
  if (tok.kind === "self") return speaker === "m" ? iM : iF;
  if (tok.kind === "other-self") return speaker === "m" ? iF : iM;
  if (speaker === "m") return w("ครับ", "khráp", "polite particle");
  if (tok.q) return w("คะ", "khá", "question particle");
  return w("ค่ะ", "khâ", "polite particle");
}

export function particleLabel(speaker: Speaker) {
  return speaker === "m" ? "ครับ · khráp" : "ค่ะ · khâ";
}
