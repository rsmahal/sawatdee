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

const today = w("วันนี้", "wan-níi", "Today");
const tomorrow = w("พรุ่งนี้", "phrûng-níi", "Tomorrow");
const yesterday = w("เมื่อวาน", "mûea-waan", "Yesterday");
const now = w("ตอนนี้", "dtaawn-níi", "Now");
const morning = w("เช้า", "cháao", "Morning");
const evening = w("เย็น", "yen", "Evening");
const afternoon = w("บ่าย", "bàai", "Afternoon");
const whatTime = w("กี่โมง", "gìi-moong", "What time");
const hour = w("โมง", "moong", "Hour, in telling time");
const minute = w("นาที", "naa-thii", "Minute");
const clock = w("นาฬิกา", "naa-lí-gaa", "Clock");
const red = w("สีแด่ง", "sǐi-dàaeng", "Red");
const white = w("สีขาว", "sǐi-khǎao", "White");
const black = w("สีด้ำ", "sǐi-dâm", "Black");
const blue = w("สีฟ้า", "sǐi-fáa", "Blue");
const green = w("สีเขียว", "sǐi-khǐao", "Green");
const yellow = w("สีเหลือง", "sǐi-lǔeang", "Yellow");
const big = w("ใหญ่", "yài", "Big");
const small = w("เล็ก", "lék", "Small");
const pretty = w("สวย", "sǔai", "Pretty");
const hot = w("ร้อน", "ráawn", "Hot");
const cold = w("หนาว", "nǎao", "Cold");
const very = w("ม่าก", "mâak", "Very");
const padThai = w("ผั่ดไทย", "phàt-thai", "Pad Thai");
const somtam = w("ส่มต้ำ", "sòm-dtâm", "Papaya salad");
const chicken = w("ไก่", "gài", "Chicken");
const pork = w("มู", "mǔu", "Pork");
const spicy = w("เผ็ด", "phèt", "Spicy");
const take = w("เอา", "ao", "I'll take");
const full = w("อิ่ม", "ìm", "Full, after eating");
const bill = w("เช็คบิล", "chék-bin", "The bill");
const plainWater = w("น้ำเปล่า", "náam-bplào", "Plain water");
const twenty = w("ยี้สิบ", "yíi-sìp", "Twenty");
const hundred = w("ร้อย", "ráawy", "Hundred");
const thousand = w("พัน", "phan", "Thousand");
const near = w("ใกล้", "glâi", "Near");
const far = w("ไกล", "glai", "Far");
const here = w("ที่นี่", "thîi-nîi", "Here");
const there = w("ที่นั่น", "thîi-nân", "There");
const stop = w("หยุด", "yùt", "Stop");
const hotel = w("โรงแรม", "roong-raaem", "Hotel");
const station = w("สถานี", "sà-thǎa-nii", "Station");
const airport = w("สนามบิน", "sà-naam-bin", "Airport");
const bus = w("รถเมล์", "rót-mee", "Bus");
const train = w("รถไฟฟ้า", "rót-fai-fáa", "Skytrain");
const nameW = w("ชื่อ", "chûue", "Name");
const what = w("อะไร", "à-rai", "What");
const person = w("คน", "khon", "Person");
const thaiPerson = w("คนไทย", "khon-thai", "Thai person");
const speak = w("พู่ด", "phûut", "To speak");
const understand = w("เข้าใจ่", "khâo-jài", "To understand");
const aLittle = w("นิดหน่อย", "nít-nòi", "A little");
const slowly = w("ช้าๆ", "cháa-cháa", "Slowly");
const thaiLang = w("ภาษาไทย", "phaa-sǎa-thai", "Thai language");
const rain = w("ฝน", "fǒn", "Rain");
const fall = w("ตก", "dtòk", "To fall");
const sunshine = w("แด่ด", "dàaet", "Sunshine");
const tired = w("เหนื่อย", "nùeai", "Tired");
const like = w("ช่อบ", "châawp", "To like");
const fun = w("สนุก", "sà-nùk", "Fun");
const kha = w("ค่ะ", "khâ", "Polite particle, women");
const khaQ = w("คะ", "khá", "Question particle, women");
const khrap = w("ครับ", "khráp", "Polite particle, men");

const toneCoach = "สี่ stays low. ห้า drops. Don't swap them.";
const maiCoach = "ไหม rises, and it asks. ไม่ falls, and it means no.";
const whiteCoach = "ขาว rises. ข้าว, rice, falls.";
const nearCoach = "ใกล้ falls and means near. ไกล is mid and means far.";
const twentyCoach = "Twenty is ยี้สิบ. สองสิบ is not the word people use.";
const timeCoach = "กี่โมง asks the time. On a Thai clock, สองโมง is 8 in the morning, not 2.";

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
  {
    id: "time",
    kicker: "Unit 5",
    title: "Time",
    blurb: "Today, tomorrow, and how to ask the time.",
  },
  {
    id: "describe",
    kicker: "Unit 6",
    title: "Describe it",
    blurb: "Colors, size, and how hot it is.",
  },
  {
    id: "meal",
    kicker: "Unit 7",
    title: "A meal",
    blurb: "Order a dish, say you're full, ask for the bill.",
  },
  {
    id: "going",
    kicker: "Unit 8",
    title: "Getting there",
    blurb: "Near, far, and the words for the station.",
  },
  {
    id: "talking",
    kicker: "Unit 9",
    title: "When you're stuck",
    blurb: "Your name, and asking someone to slow down.",
  },
  {
    id: "out",
    kicker: "Unit 10",
    title: "Out for the day",
    blurb: "Rain, being tired, and what you like.",
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
    words: [well, howru, you, iF, iM, kha, khaQ, khrap],
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
  {
    id: "today",
    unit: "time",
    title: "Today",
    subtitle: "Now, yesterday, tomorrow",
    tip: "นี้ on the end of วันนี้ and พรุ่งนี้ is the same high “this”. เมื่อวาน looks backward.",
    words: [today, tomorrow, yesterday, now, morning, evening],
    exercises: [
      choice("th-en", today, [tomorrow, yesterday, now]),
      choice("en-th", tomorrow, [today, morning, evening]),
      choice("listen", yesterday, [today, tomorrow, now]),
      tiles("Today.", [t(today)], [t(tomorrow), t(yesterday), t(now)]),
      tiles("Tomorrow morning.", [t(tomorrow), t(morning)], [t(evening), t(today), t(now)]),
      choice("th-en", morning, [evening, now, today]),
      pairs([today, tomorrow, yesterday, morning]),
    ],
  },
  {
    id: "what-time",
    unit: "time",
    title: "What time",
    subtitle: "Ask first. The Thai clock can wait.",
    tip: "กี่โมง is how you ask the time. Answers use a Thai clock, where สองโมง is 8 in the morning, not 2. Learn the question before that system.",
    words: [whatTime, hour, minute, clock, afternoon],
    exercises: [
      choice("th-en", whatTime, [hour, minute, clock], timeCoach),
      choice("en-th", minute, [hour, clock, afternoon]),
      choice("listen", clock, [minute, hour, whatTime]),
      tiles("What time?", [t(whatTime), POLITE_Q], [t(now), t(morning), t(hour)], timeCoach),
      tiles("In the afternoon.", [t(afternoon)], [t(morning), t(evening), t(now)]),
      pairs([whatTime, minute, clock, afternoon]),
      choice("th-en", hour, [minute, clock, afternoon]),
    ],
  },
  {
    id: "colors",
    unit: "describe",
    title: "Colors",
    subtitle: "สี sits in front",
    tip: "สี means color and comes first: สีแดง, สีขาว. ขาว rises. ข้าว, rice, falls.",
    words: [red, white, black, blue, green, yellow],
    exercises: [
      choice("th-en", white, [red, black, rice], whiteCoach),
      choice("en-th", red, [blue, green, yellow]),
      choice("listen", blue, [green, black, white]),
      tiles("Red.", [t(red)], [t(white), t(black), t(blue)]),
      tiles("White.", [t(white)], [t(rice), t(black), t(red)], whiteCoach),
      pairs([red, white, black, blue]),
      choice("th-en", yellow, [green, white, red]),
    ],
  },
  {
    id: "size",
    unit: "describe",
    title: "Big and hot",
    subtitle: "Size, heat, and very",
    tip: "มาก comes after the word it strengthens. ร้อนมาก is very hot. ใหญ่ is big. เล็ก is small.",
    words: [big, small, pretty, hot, cold, very],
    exercises: [
      choice("th-en", hot, [cold, big, very]),
      choice("en-th", small, [big, pretty, cold]),
      choice("listen", big, [small, hot, pretty]),
      tiles("Very hot.", [t(hot), t(very)], [t(cold), t(big), t(small)]),
      tiles("Small.", [t(small)], [t(big), t(pretty), t(cold)]),
      pairs([big, small, hot, cold]),
      choice("th-en", pretty, [big, hot, very]),
    ],
  },
  {
    id: "dishes",
    unit: "meal",
    title: "Order food",
    subtitle: "A few things you'll actually say",
    tip: "เอา is the short way to order: เอาผัดไทย. ขอ still works. ไม่เผ็ด is how you turn the heat off.",
    words: [padThai, somtam, chicken, pork, spicy, take],
    exercises: [
      choice("th-en", padThai, [somtam, chicken, rice]),
      choice("en-th", somtam, [padThai, spicy, pork]),
      choice("listen", chicken, [pork, padThai, rice]),
      tiles("I'll take Pad Thai.", [t(take), t(padThai), POLITE], [t(somtam), t(please), t(chicken)]),
      tiles("Not spicy.", [t(no), t(spicy)], [t(very), t(tasty), t(pork)]),
      pairs([padThai, somtam, chicken, pork]),
      choice("th-en", spicy, [chicken, tasty, pork]),
    ],
  },
  {
    id: "bill",
    unit: "meal",
    title: "The bill",
    subtitle: "Full, water, and bigger numbers",
    tip: "อิ่ม means you've had enough. เช็คบิล asks for the bill. Twenty is ยี้สิบ, not สองสิบ. ร้อย is a hundred. พัน is a thousand.",
    words: [full, bill, plainWater, twenty, hundred, thousand],
    exercises: [
      choice("th-en", full, [bill, hungry, tasty]),
      choice("en-th", bill, [full, water, hundred]),
      choice("listen", twenty, [ten, hundred, thousand], twentyCoach),
      tiles("The bill, please.", [t(bill), POLITE], [t(full), t(please), t(water)]),
      tiles("One hundred baht.", [t(one), t(hundred), t(baht)], [t(twenty), t(thousand), t(ten)]),
      tiles("Twenty baht.", [t(twenty), t(baht)], [t(ten), t(two), t(hundred)], twentyCoach),
      pairs([full, bill, twenty, hundred]),
      choice("th-en", plainWater, [water, tea, coffee]),
    ],
  },
  {
    id: "near-far",
    unit: "going",
    title: "Here and there",
    subtitle: "Near, far, stop",
    tip: "ใกล้ falls and means near. ไกล is mid and means far. ที่นี่ is here. ที่นั่น is there.",
    words: [near, far, here, there, stop],
    exercises: [
      choice("th-en", near, [far, here, there], nearCoach),
      choice("en-th", far, [near, stop, here], nearCoach),
      choice("listen", here, [there, near, far]),
      tiles("Stop here.", [t(stop), t(here)], [t(there), t(far), t(go)]),
      tiles("Not far.", [t(no), t(far)], [t(near), t(here), t(stop)]),
      pairs([near, far, here, there]),
      choice("th-en", stop, [here, far, go]),
    ],
  },
  {
    id: "station",
    unit: "going",
    title: "Station",
    subtitle: "Hotel, airport, bus, train",
    tip: "รถไฟฟ้า is the skytrain. รถเมล์ is the bus. อยู่ที่ไหน still asks where.",
    words: [hotel, station, airport, bus, train],
    exercises: [
      choice("th-en", hotel, [station, airport, temple]),
      choice("en-th", airport, [station, hotel, bus]),
      choice("listen", train, [bus, taxi, station]),
      tiles(
        "Where is the station?",
        [t(station), t(located), t(where), POLITE_Q],
        [t(hotel), t(airport)],
      ),
      tiles("Go to the hotel.", [t(go), t(hotel)], [t(station), t(airport), t(bus)]),
      pairs([hotel, station, airport, bus]),
      choice("th-en", bus, [train, taxi, hotel]),
    ],
  },
  {
    id: "names",
    unit: "talking",
    title: "Your name",
    subtitle: "ชื่อ and อะไร",
    tip: "ชื่ออะไร asks the name. ฉันชื่อ or ผมชื่อ starts the answer, then your name. คนไทย is a Thai person.",
    words: [nameW, what, person, thaiPerson],
    exercises: [
      choice("th-en", nameW, [what, person, you]),
      choice("en-th", what, [nameW, person, you]),
      choice("listen", person, [thaiPerson, friend, you]),
      tiles("What's your name?", [t(nameW), t(what), POLITE_Q], [t(person), t(you)]),
      tiles("My name...", [SELF, t(nameW)], [OTHER, t(what), t(person)]),
      pairs([nameW, what, person, thaiPerson]),
      choice("th-en", thaiPerson, [person, friend, you]),
    ],
  },
  {
    id: "slowly",
    unit: "talking",
    title: "Slowly",
    subtitle: "When the sentence goes past you",
    tip: "ไม่เข้าใจ is the most useful sentence in the course. พูดช้าๆ asks them to slow down. นิดหน่อย is a little.",
    words: [speak, understand, aLittle, slowly, thaiLang],
    exercises: [
      choice("th-en", understand, [speak, slowly, aLittle]),
      choice("en-th", speak, [understand, slowly, thaiLang]),
      choice("listen", slowly, [aLittle, speak, understand]),
      tiles("I don't understand.", [SELF, t(no), t(understand)], [t(speak), OTHER, t(yes)]),
      tiles("Speak slowly.", [t(speak), t(slowly), POLITE], [t(aLittle), t(understand)]),
      tiles("A little Thai.", [t(thaiLang), t(aLittle)], [t(speak), t(slowly), t(understand)]),
      pairs([speak, understand, slowly, aLittle]),
    ],
  },
  {
    id: "outside",
    unit: "out",
    title: "Rain and rest",
    subtitle: "Weather, tired, like",
    tip: "ฝนตก is raining. ชอบ goes before the thing you like. เหนื่อย is tired.",
    words: [rain, fall, sunshine, tired, like, fun],
    exercises: [
      choice("th-en", rain, [sunshine, tired, fun]),
      choice("en-th", tired, [fun, like, rain]),
      choice("listen", like, [fun, tired, rain]),
      tiles("It's raining.", [t(rain), t(fall)], [t(sunshine), t(tired), t(fun)]),
      tiles("I like it.", [SELF, t(like)], [t(no), OTHER, t(tired)]),
      tiles("I'm tired.", [SELF, t(tired)], [t(fun), t(like), OTHER]),
      pairs([rain, sunshine, tired, fun]),
    ],
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
      choice("listen", understand, [hello, thanks, rain]),
      tiles("I don't understand.", [SELF, t(no), t(understand)], [t(speak), t(yes), OTHER]),
      tiles(
        "Where is the hotel?",
        [t(hotel), t(located), t(where), POLITE_Q],
        [t(station), t(market)],
      ),
      tiles("Not spicy.", [t(no), t(spicy)], [t(very), t(tasty)]),
      choice("th-en", tomorrow, [today, yesterday, now]),
      choice("en-th", bill, [full, water, hundred]),
      pairs([near, white, chicken, twenty]),
      tiles("Speak slowly.", [t(speak), t(slowly), POLITE], [t(aLittle), t(understand)]),
      choice("listen", padThai, [somtam, rice, water]),
    ],
  },
];

export const courseNote =
  "A first-trip list, in the order you need the words. Not a dictionary dump.";

export const dailyPhrases: Word[] = [
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
  near,
];

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
