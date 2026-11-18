import type { Speaker } from "./curriculum-types";

export type GuideSlot = {
  role: string;
  thai: string;
  roman: string;
  en?: string;
  accent?: boolean;
};

export type GuideExample = {
  /** Supports optional {self} and {polite}/{politeQ} placeholders so speaker gender matches the user's setting */
  thai: string;
  roman: string;
  en: string;
  slots: GuideSlot[];
};

export type GuidePattern = {
  title: string;
  formula: string[];
  setup: string;
  examples: GuideExample[];
  watchOut?: string;
};

export type UnitGuideInfo = {
  unitId: string;
  headline: string;
  summary: string;
  patterns: GuidePattern[];
};

export function resolveGuideText(text: string, speaker: Speaker): string {
  return text
    .replace(/\{self\}/g, speaker === "m" ? "ผม" : "ฉัน")
    .replace(/\{polite\}/g, speaker === "m" ? "ครับ" : "ค่ะ")
    .replace(/\{politeQ\}/g, speaker === "m" ? "ครับ" : "คะ");
}

export function resolveGuideRoman(roman: string, speaker: Speaker): string {
  return roman
    .replace(/\{self\}/g, speaker === "m" ? "phǒm" : "chǎn")
    .replace(/\{polite\}/g, speaker === "m" ? "khráp" : "khâ")
    .replace(/\{politeQ\}/g, speaker === "m" ? "khráp" : "khá");
}

export const unitGuides: UnitGuideInfo[] = [
  // ================= A1 UNITS =================
  {
    unitId: "hello",
    headline: "End politely and echo verbs to answer",
    summary:
      "Thai sentences don't change endings for politeness inside the verb—instead, add a polite particle at the very end, and answer yes/no by repeating the verb.",
    patterns: [
      {
        title: "Polite Sentence Endings",
        formula: ["Phrase / Statement", "ค่ะ / คะ (female) or ครับ (male)"],
        setup:
          "Place the polite particle at the end of a phrase. Male speakers always use ครับ (khráp). Female speakers use falling-tone ค่ะ (khâ) for statements and high-tone คะ (khá) for questions.",
        examples: [
          {
            thai: "สวัสดี{polite}",
            roman: "sà-wàt-dii {polite}",
            en: "Hello.",
            slots: [
              { role: "Greeting", thai: "สวัสดี", roman: "sà-wàt-dii", en: "hello" },
              { role: "Polite", thai: "{polite}", roman: "{polite}", accent: true },
            ],
          },
          {
            thai: "ยินดีต้อนรับ เชิญ{polite}",
            roman: "yin-dii-dtâawn-ráp · choen {polite}",
            en: "Welcome — please come in.",
            slots: [
              { role: "Welcome", thai: "ยินดีต้อนรับ", roman: "yin-dii-dtâawn-ráp", en: "welcome" },
              { role: "Invite", thai: "เชิญ", roman: "choen", en: "please go ahead", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "ไม่เป็นไร{polite}",
            roman: "mâi-bpen-rai {polite}",
            en: "No problem / You're welcome.",
            slots: [
              { role: "Phrase", thai: "ไม่เป็นไร", roman: "mâi-bpen-rai", en: "no problem" },
              { role: "Polite", thai: "{polite}", roman: "{polite}", accent: true },
            ],
          },
        ],
        watchOut: "In writing, ค่ะ (statement) has a tone mark and คะ (question) does not. Add หน่อย (nòi) or นิดนึง (nít-nueng) before the particle to soften requests.",
      },
      {
        title: "Negating with ไม่ (mâi)",
        formula: ["ไม่ (not)", "Verb / Adjective", "Polite"],
        setup:
          "Put ไม่ directly in front of a verb or adjective to negate it—no helper word like 'do not' is needed.",
        examples: [
          {
            thai: "ไม่ได้{polite}",
            roman: "mâi dâai {polite}",
            en: "Cannot / Not possible.",
            slots: [
              { role: "Negation", thai: "ไม่", roman: "mâi", en: "not", accent: true },
              { role: "Verb", thai: "ได้", roman: "dâai", en: "can" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "people",
    headline: "Use เป็น (roles) & มี (have) + Subject + Verb + Place",
    summary:
      "Thai uses Subject → เป็น (to be a role/job) for professions, and Subject → มี (to have) for family or possessions—never use เป็น for adjectives.",
    patterns: [
      {
        title: "Roles with เป็น & Having with มี",
        formula: ["Subject (ฉัน / เรา / เขา)", "เป็น / มี", "Noun", "Polite"],
        setup:
          "Use เป็น (bpen) for jobs and identities (ฉันเป็นครู = I'm a teacher) and มี (mii) for having family or things (เรามีเพื่อน = We have friends).",
        examples: [
          {
            thai: "{self}เป็นครู{polite}",
            roman: "{self} bpen khruu {polite}",
            en: "I am a teacher.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Copula", thai: "เป็น", roman: "bpen", en: "am", accent: true },
              { role: "Job", thai: "ครู", roman: "khruu", en: "teacher" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "เขามีครอบครัวใหญ่{polite}",
            roman: "khǎo mii khrâawp-khrua yài {polite}",
            en: "He/she has a big family.",
            slots: [
              { role: "Subject", thai: "เขา", roman: "khǎo", en: "he/she", accent: true },
              { role: "Have", thai: "มี", roman: "mii", en: "has", accent: true },
              { role: "Noun", thai: "ครอบครัว", roman: "khrâawp-khrua", en: "family" },
              { role: "Adj", thai: "ใหญ่", roman: "yài", en: "big" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
        watchOut: "Never say ฉันเป็นสบายดี—skip เป็น before adjectives like สบายดี, สวย, or ดี.",
      },
      {
        title: "Talking About Work & Asking Yes/No with ไหม",
        formula: ["Subject / Statement", "Verb (+ Place)", "(ไหม)", "Polite"],
        setup:
          "Put the city directly after ทำงาน (work) or เรียน (study), and attach ไหม (mǎi) at the end to turn any statement into a yes/no question.",
        examples: [
          {
            thai: "{self}ทำงานกรุงเทพฯ{polite}",
            roman: "{self} tham-ngaan grung-thêep {polite}",
            en: "I work in Bangkok.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Verb", thai: "ทำงาน", roman: "tham-ngaan", en: "work" },
              { role: "Place", thai: "กรุงเทพฯ", roman: "grung-thêep", en: "Bangkok", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "สบายดีไหม{politeQ}",
            roman: "sà-baai-dii mǎi {politeQ}",
            en: "How are you? (lit. Doing well?)",
            slots: [
              { role: "State", thai: "สบายดี", roman: "sà-baai-dii", en: "well" },
              { role: "Question", thai: "ไหม", roman: "mǎi", en: "?", accent: true },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "market",
    headline: "Request with ขอ, ask price with เท่าไหร่",
    summary:
      "Ordering at a food stall or market is compact and direct: start with ขอ (may I have) for items, and place เท่าไหร่ (how much) right at the end for prices.",
    patterns: [
      {
        title: "Ordering Dishes & Adjusting Spice",
        formula: ["ขอ (May I have)", "Food / Drink", "Polite"],
        setup:
          "Put ขอ in front of any dish or drink to order politely. To ask for mild or non-spicy food, simply say ไม่ + adjective (ไม่เผ็ด = not spicy).",
        examples: [
          {
            thai: "ขอข้าวผัด{polite}",
            roman: "khǎaw khâao-phàt {polite}",
            en: "May I have fried rice, please?",
            slots: [
              { role: "Request", thai: "ขอ", roman: "khǎaw", en: "may I have", accent: true },
              { role: "Dish", thai: "ข้าวผัด", roman: "khâao-phàt", en: "fried rice" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "ไม่เผ็ด{polite}",
            roman: "mâi phèt {polite}",
            en: "Not spicy, please.",
            slots: [
              { role: "Negation", thai: "ไม่", roman: "mâi", en: "not", accent: true },
              { role: "Taste", thai: "เผ็ด", roman: "phèt", en: "spicy" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
      {
        title: "Asking Prices & Availability (มี ... ไหม / นี้)",
        formula: ["มี (Do you have) / Item + นี้", "ไหม / เท่าไหร่", "Polite"],
        setup:
          "Use มี + item + ไหม to ask if a stall has something (มีน้ำไหม), and place นี้ (níi, this) or นั้น (nán, that) right after a noun.",
        examples: [
          {
            thai: "มีน้ำไหม{politeQ}",
            roman: "mii náam mǎi {politeQ}",
            en: "Do you have water?",
            slots: [
              { role: "Have", thai: "มี", roman: "mii", en: "have", accent: true },
              { role: "Item", thai: "น้ำ", roman: "náam", en: "water" },
              { role: "Question", thai: "ไหม", roman: "mǎi", en: "?", accent: true },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
          {
            thai: "อันนี้เท่าไหร่{politeQ}",
            roman: "an-níi thâo-rài {politeQ}",
            en: "How much is this one?",
            slots: [
              { role: "Item", thai: "อันนี้", roman: "an-níi", en: "this one" },
              { role: "Question", thai: "เท่าไหร่", roman: "thâo-rài", en: "how much", accent: true },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "numbers-unit",
    headline: "Noun + Number + Classifier",
    summary:
      "In English you count with 'two cups of coffee' (number → unit → noun). Thai flips this: state the thing you want first, then the number, then its classifier word.",
    patterns: [
      {
        title: "Counting & Ordering Items",
        formula: ["(ขอ)", "Noun", "Number", "Classifier", "Polite"],
        setup:
          "Always name the item first, then the number, then the matching classifier: แก้ว (gâaeo) for glasses/cups, ขวด (khùat) for bottles, จาน (jaan) for plates, คน (khon) for people, ตัว (dtua) for clothes/animals, and อัน (an) for general small objects.",
        examples: [
          {
            thai: "ขอกาแฟสองแก้ว{polite}",
            roman: "khǎaw gaa-fae sǎawng gâaeo {polite}",
            en: "Two cups of coffee, please.",
            slots: [
              { role: "Request", thai: "ขอ", roman: "khǎaw", en: "please" },
              { role: "Noun", thai: "กาแฟ", roman: "gaa-fae", en: "coffee", accent: true },
              { role: "Number", thai: "สอง", roman: "sǎawng", en: "two", accent: true },
              { role: "Classifier", thai: "แก้ว", roman: "gâaeo", en: "cups", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "น้ำหนึ่งขวด{polite}",
            roman: "náam nùeng khùat {polite}",
            en: "One bottle of water.",
            slots: [
              { role: "Noun", thai: "น้ำ", roman: "náam", en: "water", accent: true },
              { role: "Number", thai: "หนึ่ง", roman: "nùeng", en: "one", accent: true },
              { role: "Classifier", thai: "ขวด", roman: "khùat", en: "bottle", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
        watchOut:
          "Even when there is only 1 item, keep the classifier: น้ำหนึ่งขวด (water + 1 + bottle), never just หนึ่งน้ำ.",
      },
      {
        title: "Asking 'How Many?'",
        formula: ["Noun", "กี่ (how many)", "Classifier", "Polite"],
        setup:
          "The question word กี่ (gìi, how many) drops right into the Number slot between Noun and Classifier.",
        examples: [
          {
            thai: "กาแฟกี่แก้ว{politeQ}",
            roman: "gaa-fae gìi gâaeo {politeQ}",
            en: "How many cups of coffee?",
            slots: [
              { role: "Noun", thai: "กาแฟ", roman: "gaa-fae", en: "coffee" },
              { role: "How many", thai: "กี่", roman: "gìi", en: "how many", accent: true },
              { role: "Classifier", thai: "แก้ว", roman: "gâaeo", en: "cups" },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "town",
    headline: "Use อยู่ (yùu) to locate places",
    summary:
      "Thai uses อยู่ (yùu) as the location verb ('is located at'). Place the destination first, followed by อยู่ and either ที่ไหน (where?) or a direction.",
    patterns: [
      {
        title: "Asking & Giving Locations",
        formula: ["Place", "อยู่ (located)", "Direction / ที่ไหน (where)", "Polite"],
        setup:
          "Put the place you are looking for at the beginning, then อยู่, then ที่ไหน (where) or ซ้าย/ขวา (left/right). No 'the' or 'at' is needed.",
        examples: [
          {
            thai: "ตลาดอยู่ที่ไหน{politeQ}",
            roman: "dtà-làat yùu thîi-nǎi {politeQ}",
            en: "Where is the market?",
            slots: [
              { role: "Place", thai: "ตลาด", roman: "dtà-làat", en: "market" },
              { role: "Located", thai: "อยู่", roman: "yùu", en: "is at", accent: true },
              { role: "Where", thai: "ที่ไหน", roman: "thîi-nǎi", en: "where", accent: true },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
          {
            thai: "ตรงไปเลี้ยวซ้าย{polite}",
            roman: "dtrong-bpai líiao sáai {polite}",
            en: "Go straight and turn left.",
            slots: [
              { role: "Action 1", thai: "ตรงไป", roman: "dtrong-bpai", en: "go straight" },
              { role: "Action 2", thai: "เลี้ยว", roman: "líiao", en: "turn", accent: true },
              { role: "Side", thai: "ซ้าย", roman: "sáai", en: "left", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
      {
        title: "Transport, Heading Out & Getting Around",
        formula: ["Subject", "Verb (ขับ drive / ไป go / ออก exit)", "Vehicle / Destination", "Polite"],
        setup:
          "Put movement verbs like ไป (go), ขับ (drive), เข้า (enter), or ออก (exit) directly before the transport mode or destination.",
        examples: [
          {
            thai: "{self}ไม่ขับมอเตอร์ไซค์{polite}",
            roman: "{self} mâi khàp maw-dtoe-sai {polite}",
            en: "I don't ride a motorbike.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Neg", thai: "ไม่", roman: "mâi", en: "not", accent: true },
              { role: "Verb", thai: "ขับ", roman: "khàp", en: "drive/ride", accent: true },
              { role: "Vehicle", thai: "มอเตอร์ไซค์", roman: "maw-dtoe-sai", en: "motorbike" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "time",
    headline: "Time expressions frame the sentence",
    summary:
      "Thai verbs never change form for past or future. Instead, place time words like วันนี้ (today), เสาร์อาทิตย์ (weekend), เมื่อคืน (last night), or a month at the start or end.",
    patterns: [
      {
        title: "Setting a Day, Month or Time",
        formula: ["Time / Day / Month", "Subject / Verb", "Okay (ได้)", "Polite"],
        setup:
          "Put the day, weekend, month, or time phrase upfront to set the scene, then follow with the activity or ได้ (works/can).",
        examples: [
          {
            thai: "วันเสาร์เที่ยงได้{polite}",
            roman: "wan-sǎo thîiang dâai {polite}",
            en: "Saturday at noon works!",
            slots: [
              { role: "Day", thai: "วันเสาร์", roman: "wan-sǎo", en: "Saturday", accent: true },
              { role: "Time", thai: "เที่ยง", roman: "thîiang", en: "noon", accent: true },
              { role: "Okay", thai: "ได้", roman: "dâai", en: "can/works" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "ไปกี่โมง{politeQ}",
            roman: "bpai gìi-moong {politeQ}",
            en: "What time are we going?",
            slots: [
              { role: "Verb", thai: "ไป", roman: "bpai", en: "go" },
              { role: "What time", thai: "กี่โมง", roman: "gìi-moong", en: "what time", accent: true },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
        ],
      },
      {
        title: "Past vs. Immediate Timing Markers",
        formula: ["Subject / Action", "เมื่อคืน (last night) / เดี๋ยวนี้ (right now) / เร็วๆนี้ (soon)", "Polite"],
        setup:
          "Time phrases like เมื่อคืน (last night), ตอนเช้า (in the morning), or เดี๋ยวนี้ (right now) pinpoint when an action happens without touching the verb.",
        examples: [
          {
            thai: "{self}เรียนเมื่อคืน{polite}",
            roman: "{self} riian mûea-khuuen {polite}",
            en: "I studied last night.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Verb", thai: "เรียน", roman: "riian", en: "study" },
              { role: "When", thai: "เมื่อคืน", roman: "mûea-khuuen", en: "last night", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "routine",
    headline: "Chain actions smoothly in time order",
    summary:
      "Instead of adding 'and then' or 'to' between verbs, Thai stacks action, study, and social verbs in the exact order they happen.",
    patterns: [
      {
        title: "Serial Verb Chains",
        formula: ["Subject", "Verb 1 (+ Object)", "Verb 2", "Polite"],
        setup:
          "Line up each verb in sequence: 'buy food' → 'go back' → 'rest'. No connecting words like 'to' or 'and' are required between actions.",
        examples: [
          {
            thai: "{self}ซื้อข้าวกลับพักผ่อน{polite}",
            roman: "{self} súue khâao glàp phák-phàawn {polite}",
            en: "I'm buying food and going back to rest.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Verb 1", thai: "ซื้อ", roman: "súue", en: "buy", accent: true },
              { role: "Object", thai: "ข้าว", roman: "khâao", en: "food" },
              { role: "Verb 2", thai: "กลับ", roman: "glàp", en: "return", accent: true },
              { role: "Verb 3", thai: "พักผ่อน", roman: "phák-phàawn", en: "rest" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
      {
        title: "Study, Practice & Daily Habits",
        formula: ["Subject", "ฝึก (practice) / สอน (teach)", "Verb / Action", "ทุกวัน (every day)", "Polite"],
        setup:
          "Pair ฝึก (practice) right in front of another action like คุย (chat), ตอบ (answer), or อ่าน (read), and add ทุกวัน (every day) at the end.",
        examples: [
          {
            thai: "เราฝึกคุยทุกวัน{polite}",
            roman: "rao fùek khui thúk-wan {polite}",
            en: "We practice chatting every day.",
            slots: [
              { role: "Subject", thai: "เรา", roman: "rao", en: "we" },
              { role: "Helper", thai: "ฝึก", roman: "fùek", en: "practice", accent: true },
              { role: "Verb", thai: "คุย", roman: "khui", en: "chat", accent: true },
              { role: "Habit", thai: "ทุกวัน", roman: "thúk-wan", en: "every day" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "home-things",
    headline: "Say where objects are with อยู่ & count pets with ตัว",
    summary:
      "Just like places in town, everyday home items, bath kits, and stationery use อยู่ (yùu) to describe where they sit, while animals and clothes take the classifier ตัว (dtua).",
    patterns: [
      {
        title: "Finding Objects Around the House",
        formula: ["Object", "อยู่ (is in/at)", "Furniture / Room", "Polite"],
        setup:
          "Name the item first, then อยู่, then the sofa, table, bag, or bathroom where it sits.",
        examples: [
          {
            thai: "กุญแจอยู่โต๊ะ{polite}",
            roman: "gun-jae yùu dtó {polite}",
            en: "The key is on the table.",
            slots: [
              { role: "Object", thai: "กุญแจ", roman: "gun-jae", en: "key" },
              { role: "Located", thai: "อยู่", roman: "yùu", en: "is at", accent: true },
              { role: "Spot", thai: "โต๊ะ", roman: "dtó", en: "table" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "สมุดอยู่โซฟา{polite}",
            roman: "sà-mùt yùu soo-faa {polite}",
            en: "The notebook is on the sofa.",
            slots: [
              { role: "Object", thai: "สมุด", roman: "sà-mùt", en: "notebook", accent: true },
              { role: "Located", thai: "อยู่", roman: "yùu", en: "is on" },
              { role: "Spot", thai: "โซฟา", roman: "soo-faa", en: "sofa", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
      {
        title: "Counting Clothing & Pets with ตัว",
        formula: ["มี (have)", "Animal / Shirt", "Number", "ตัว (body classifier)", "Polite"],
        setup:
          "Animals like หมา (dog), แมว (cat), and นก (bird) share the classifier ตัว (dtua) with shirts and pants.",
        examples: [
          {
            thai: "มีหมาแมวสองตัว{polite}",
            roman: "mii mǎa maaeo sǎawng dtua {polite}",
            en: "There are a dog and a cat — two pets.",
            slots: [
              { role: "Have", thai: "มี", roman: "mii", en: "have" },
              { role: "Pets", thai: "หมาแมว", roman: "mǎa maaeo", en: "dog & cat" },
              { role: "Number", thai: "สอง", roman: "sǎawng", en: "two", accent: true },
              { role: "Classifier", thai: "ตัว", roman: "dtua", en: "animals", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "body-health",
    headline: "Express aches & needs without 'I have a'",
    summary:
      "In Thai, symptom words like ปวดหัว (headache), ปวด (ache) + body part, หิวน้ำ (thirsty), and แพ้ (allergic) act directly as verbs—no need to say 'I have a'.",
    patterns: [
      {
        title: "Symptoms, Body Parts & Allergies",
        formula: ["(Subject)", "(ไม่)", "ปวด + Body part / แพ้ + Thing", "Polite"],
        setup:
          "Put ปวด (bpùat, ache) in front of any body part (คอ throat, ไหล่ shoulder, ขา leg, ฟัน tooth), and place ไม่ directly before แพ้ to negate an allergy.",
        examples: [
          {
            thai: "{self}ปวดหัวไข้{polite}",
            roman: "{self} bpùat-hǔa khâi {polite}",
            en: "I have a headache and fever.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Symptom", thai: "ปวดหัว", roman: "bpùat-hǔa", en: "headache", accent: true },
              { role: "Symptom", thai: "ไข้", roman: "khâi", en: "fever", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "ไม่แพ้ยา{polite}",
            roman: "mâi pháae yaa {polite}",
            en: "Not allergic to medicine.",
            slots: [
              { role: "Not", thai: "ไม่", roman: "mâi", en: "not", accent: true },
              { role: "Verb", thai: "แพ้", roman: "pháae", en: "allergic", accent: true },
              { role: "Noun", thai: "ยา", roman: "yaa", en: "medicine" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
      {
        title: "Stating Physical Needs (Thirsty, Sleepy, Care)",
        formula: ["Subject", "หิวน้ำ (thirsty) / ง่วงนอน (sleepy)", "(อยาก + Action)", "Polite"],
        setup:
          "Feelings like หิวน้ำ (thirsty) and ง่วงนอน (sleepy) work without a linking verb—follow with อยาก (want to) + an action like นอน (sleep) when needed.",
        examples: [
          {
            thai: "{self}ง่วงนอนอยากนอน{polite}",
            roman: "{self} ngûang-naawn yàak naawn {polite}",
            en: "I'm sleepy and want to sleep.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "State", thai: "ง่วงนอน", roman: "ngûang-naawn", en: "sleepy", accent: true },
              { role: "Want", thai: "อยาก", roman: "yàak", en: "want" },
              { role: "Verb", thai: "นอน", roman: "naawn", en: "sleep" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "adjectives-a1",
    headline: "Adjectives & colors come AFTER the noun",
    summary:
      "Thai flips English adjective order: say 'shirt blue' instead of 'blue shirt', put modifiers like มาก (very) after the adjective, and skip the verb 'is/are' completely.",
    patterns: [
      {
        title: "Noun + Color / Adjective + มาก",
        formula: ["Noun", "Color / Size / Quality", "(Predicate + มาก)", "Polite"],
        setup:
          "Place modifiers after the noun they describe. Adding a second adjective or เก่ง + มาก at the end makes a full sentence with zero verb 'to be'.",
        examples: [
          {
            thai: "เสื้อสีฟ้าสวย{polite}",
            roman: "sûea sǐi-fáa sǔai {polite}",
            en: "The blue shirt is pretty.",
            slots: [
              { role: "Noun", thai: "เสื้อ", roman: "sûea", en: "shirt" },
              { role: "Color", thai: "สีฟ้า", roman: "sǐi-fáa", en: "blue", accent: true },
              { role: "Predicate", thai: "สวย", roman: "sǔai", en: "is pretty", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "ครูสูงเก่งมาก{polite}",
            roman: "khruu sǔung gèng mâak {polite}",
            en: "The tall teacher is very skilled.",
            slots: [
              { role: "Noun", thai: "ครู", roman: "khruu", en: "teacher" },
              { role: "Trait", thai: "สูง", roman: "sǔung", en: "tall", accent: true },
              { role: "Skill", thai: "เก่ง", roman: "gèng", en: "skilled", accent: true },
              { role: "Degree", thai: "มาก", roman: "mâak", en: "very" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
        watchOut: "Never say สีฟ้าเสื้อ—put the thing first (เสื้อ) and its color right after (สีฟ้า).",
      },
    ],
  },
  {
    unitId: "grammar-a1",
    headline: "Mark tenses with helper words, keep questions in place",
    summary:
      "Thai verbs stay identical in past, present, and future. You add small marker words like จะ (will) before the verb or แล้ว (already) after it, and question words stay right where the answer belongs.",
    patterns: [
      {
        title: "Future & Reasons",
        formula: ["Subject", "จะ (will)", "Verb", "เพราะว่า (because)", "Reason"],
        setup:
          "Insert จะ right before the verb for future actions, and link reasons directly with เพราะว่า (because).",
        examples: [
          {
            thai: "{self}จะไปวันนี้เพราะว่าพรุ่งนี้ยุ่ง{polite}",
            roman: "{self} jà bpai wan-níi phráw-wâa phrûng-níi yûng {polite}",
            en: "I will go today because tomorrow I'm busy.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Future", thai: "จะ", roman: "jà", en: "will", accent: true },
              { role: "Verb", thai: "ไป", roman: "bpai", en: "go" },
              { role: "Time", thai: "วันนี้", roman: "wan-níi", en: "today" },
              { role: "Reason", thai: "เพราะว่า", roman: "phráw-wâa", en: "because", accent: true },
              { role: "Clause", thai: "พรุ่งนี้ยุ่ง", roman: "phrûng-níi yûng", en: "tomorrow busy" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
      {
        title: "In-Situ Questions & Advice (ควร / กัน / ก็ / ที่)",
        formula: ["Subject", "ควร (should) / ก็ (then)", "Verb", "กัน (together)", "Polite"],
        setup:
          "Question words (ใคร who, อะไร what, ที่ไหน where) stay where the answer goes. Use ควร (should) before a verb, กัน (together) after it, ก็ for 'also/then', and ที่ for 'that/which'.",
        examples: [
          {
            thai: "เราควรไปกัน{polite}",
            roman: "rao khuan bpai gan {polite}",
            en: "We should go together.",
            slots: [
              { role: "Subject", thai: "เรา", roman: "rao", en: "we" },
              { role: "Should", thai: "ควร", roman: "khuan", en: "should", accent: true },
              { role: "Verb", thai: "ไป", roman: "bpai", en: "go" },
              { role: "Together", thai: "กัน", roman: "gan", en: "together", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "ใครจะไปกับ{self}{politeQ}",
            roman: "khrai jà bpai gàp {self} {politeQ}",
            en: "Who will go with me?",
            slots: [
              { role: "Who", thai: "ใคร", roman: "khrai", en: "who", accent: true },
              { role: "Future", thai: "จะ", roman: "jà", en: "will" },
              { role: "Verb", thai: "ไป", roman: "bpai", en: "go" },
              { role: "With", thai: "กับ", roman: "gàp", en: "with", accent: true },
              { role: "Person", thai: "{self}", roman: "{self}", en: "me" },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "shopping-hobbies",
    headline: "Ask permission with ขอ and ได้",
    summary:
      "At markets and shops, pair action verbs with ขอ (may I) at the start or ได้ (can/possible) at the end to make smooth, polite requests.",
    patterns: [
      {
        title: "Trying On & Asking for Discounts",
        formula: ["ขอ / Action", "Verb / Noun", "(ได้)", "Polite"],
        setup:
          "Put ขอ + verb to ask to try something (ขอลองหมวก). Put ได้ at the end of a request to ask 'Is ... possible?' (ลดราคาได้คะ).",
        examples: [
          {
            thai: "ขอลองหมวก{politeQ}",
            roman: "khǎaw laawng mùak {politeQ}",
            en: "May I try on the hat?",
            slots: [
              { role: "Request", thai: "ขอ", roman: "khǎaw", en: "may I", accent: true },
              { role: "Verb", thai: "ลอง", roman: "laawng", en: "try" },
              { role: "Item", thai: "หมวก", roman: "mùak", en: "hat" },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
          {
            thai: "ลดราคาได้{politeQ}",
            roman: "lót-raa-khaa dâai {politeQ}",
            en: "Can you give a discount?",
            slots: [
              { role: "Action", thai: "ลดราคา", roman: "lót-raa-khaa", en: "discount", accent: true },
              { role: "Can", thai: "ได้", roman: "dâai", en: "can", accent: true },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
          {
            thai: "อยากออกกำลังกายด้วยกัน{polite}",
            roman: "yàak àawk-gam-lang-gaai dûai-gan {polite}",
            en: "I want to exercise together.",
            slots: [
              { role: "Want", thai: "อยาก", roman: "yàak", en: "want" },
              { role: "Hobby", thai: "ออกกำลังกาย", roman: "àawk-gam-lang-gaai", en: "exercise", accent: true },
              { role: "Together", thai: "ด้วยกัน", roman: "dûai-gan", en: "together", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },

  // ================= A2 UNITS =================
  {
    unitId: "meal",
    headline: "Stack ingredients & ไม่ใส่ to customize food",
    summary:
      "Thai dish modifiers follow the dish name: main dish → meat/protein → exclusions (ไม่ใส่) or sweetness tweaks (หวานน้อย).",
    patterns: [
      {
        title: "Customizing Dishes & Drinks",
        formula: ["ขอ", "Dish", "Protein", "ไม่ใส่ (without)", "Ingredient", "Polite"],
        setup:
          "Start with the dish, name the protein right after it, then add ไม่ใส่ (mâi sài, don't put in) before anything you want left out.",
        examples: [
          {
            thai: "ขอผัดไทยไก่ไม่ใส่ถั่ว{polite}",
            roman: "khǎaw phàt-thai gài mâi-sài thùa {polite}",
            en: "Chicken Pad Thai without peanuts, please.",
            slots: [
              { role: "Please", thai: "ขอ", roman: "khǎaw", en: "please" },
              { role: "Dish", thai: "ผัดไทย", roman: "phàt-thai", en: "Pad Thai" },
              { role: "Protein", thai: "ไก่", roman: "gài", en: "chicken" },
              { role: "Exclude", thai: "ไม่ใส่", roman: "mâi-sài", en: "without", accent: true },
              { role: "Item", thai: "ถั่ว", roman: "thùa", en: "peanuts", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "going",
    headline: "Confirm completed actions with แล้ว",
    summary:
      "Put แล้ว (láaeo, already) at the end of a verb phrase to show a booking or action is done, and use ใกล้ (glâi, near) vs ไกล (glai, far) for distance.",
    patterns: [
      {
        title: "Confirming Reservations & Distance",
        formula: ["Subject", "Verb", "Object", "แล้ว (already)", "Polite"],
        setup:
          "Adding แล้ว after the object turns 'reserve a room' into 'already reserved a room'.",
        examples: [
          {
            thai: "{self}จองห้องแล้ว{polite}",
            roman: "{self} jaawng hâawng láaeo {polite}",
            en: "I already reserved a room.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Verb", thai: "จอง", roman: "jaawng", en: "reserve" },
              { role: "Object", thai: "ห้อง", roman: "hâawng", en: "room" },
              { role: "Done", thai: "แล้ว", roman: "láaeo", en: "already", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
          {
            thai: "สถานีรถไฟฟ้าใกล้ที่นี่{politeQ}",
            roman: "sà-thǎa-nii rót-fai-fáa glâi thîi-nîi {politeQ}",
            en: "Is the Skytrain station near here?",
            slots: [
              { role: "Place", thai: "สถานีรถไฟฟ้า", roman: "sà-thǎa-nii rót-fai-fáa", en: "BTS station" },
              { role: "Distance", thai: "ใกล้", roman: "glâi", en: "near", accent: true },
              { role: "Spot", thai: "ที่นี่", roman: "thîi-nîi", en: "here", accent: true },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "talking",
    headline: "Soften requests with ช่วย (chûai)",
    summary:
      "Start a favor or request with ช่วย (chûai, literally 'help') before the verb to sound polite and natural, like 'Could you please...'.",
    patterns: [
      {
        title: "Polite Requests & Language Help",
        formula: ["ช่วย (Please)", "Verb", "Adverb", "Polite"],
        setup:
          "Place ช่วย directly before the action you're asking someone else to do, and adverbs like ช้าๆ (slowly) right after the verb.",
        examples: [
          {
            thai: "ช่วยพูดช้าๆ{polite}",
            roman: "chûai phûut cháa-cháa {polite}",
            en: "Please speak slowly.",
            slots: [
              { role: "Polite Req", thai: "ช่วย", roman: "chûai", en: "please", accent: true },
              { role: "Verb", thai: "พูด", roman: "phûut", en: "speak", accent: true },
              { role: "How", thai: "ช้าๆ", roman: "cháa-cháa", en: "slowly", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "out",
    headline: "Describe weather as Noun + Verb/Adjective",
    summary:
      "Instead of saying 'It is raining' with a dummy 'it', Thai names the weather element itself (ฝน rain, อากาศ weather, ลม wind) followed by what it's doing.",
    patterns: [
      {
        title: "Weather & Outing Comments",
        formula: ["Weather Noun", "(ไม่)", "Verb / Quality", "Polite"],
        setup:
          "Pair ฝน (rain) with ตก (fall), or อากาศ (weather) / ลม (wind) with ดี (good).",
        examples: [
          {
            thai: "วันนี้อากาศดีฝนไม่ตก{polite}",
            roman: "wan-níi aa-gàat dii · fǒn mâi dtòk {polite}",
            en: "The weather is good today — no rain!",
            slots: [
              { role: "Today", thai: "วันนี้", roman: "wan-níi", en: "today" },
              { role: "Weather", thai: "อากาศ", roman: "aa-gàat", en: "weather" },
              { role: "Adj", thai: "ดี", roman: "dii", en: "good" },
              { role: "Noun", thai: "ฝน", roman: "fǒn", en: "rain", accent: true },
              { role: "Neg Verb", thai: "ไม่ตก", roman: "mâi dtòk", en: "not fall", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "a2-compare",
    headline: "Compare with กว่า, ที่สุด, and เกินไป",
    summary:
      "Thai builds comparatives (-er), superlatives (-est), and 'too much' without changing the adjective—just attach a word right after it.",
    patterns: [
      {
        title: "More, Most & Too Much",
        formula: ["Noun", "Adjective", "กว่า (-er) / ที่สุด (-est) / เกินไป (too)", "Polite"],
        setup:
          "Place กว่า after an adjective for '-er', ที่สุด for '-est', or เกินไป for 'too [adjective]'.",
        examples: [
          {
            thai: "ร้านใหญ่แพงเกินไป{polite}",
            roman: "ráan yài phaeng goen-bpai {polite}",
            en: "The big shop is too expensive.",
            slots: [
              { role: "Noun", thai: "ร้านใหญ่", roman: "ráan yài", en: "big shop" },
              { role: "Adjective", thai: "แพง", roman: "phaeng", en: "expensive" },
              { role: "Excess", thai: "เกินไป", roman: "goen-bpai", en: "too much", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
      {
        title: "Probability, Frequency & Problem Solving",
        formula: ["Subject", "น่าจะ (ought to) / ต้อง (must)", "ตรวจสอบ (check) / ตัดสินใจ (decide)", "Polite"],
        setup:
          "Place modals like น่าจะ (ought to) or ต้อง (must) directly before action verbs such as ตรวจสอบ (check) or แก้ไข (resolve).",
        examples: [
          {
            thai: "เราต้องตรวจสอบก่อนตัดสินใจ{polite}",
            roman: "rao dtâawng dtrùat-sàawp gàawn dtàt-sǐn-jai {polite}",
            en: "We should inspect first before deciding.",
            slots: [
              { role: "Subject", thai: "เรา", roman: "rao", en: "we" },
              { role: "Must", thai: "ต้อง", roman: "dtâawng", en: "must" },
              { role: "Check", thai: "ตรวจสอบ", roman: "dtrùat-sàawp", en: "inspect", accent: true },
              { role: "Before", thai: "ก่อน", roman: "gàawn", en: "before" },
              { role: "Decide", thai: "ตัดสินใจ", roman: "dtàt-sǐn-jai", en: "decide", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "a2-work-tech",
    headline: "Express necessity with ต้อง (dtâawng)",
    summary:
      "Place ต้อง (must / need to) right before any verb to explain what you need to do at work or with devices.",
    patterns: [
      {
        title: "Needing to Do Something",
        formula: ["Subject", "ต้อง (need to)", "Verb", "Object", "Polite"],
        setup:
          "ต้อง behaves like an English modal ('need to / must') right before the main verb.",
        examples: [
          {
            thai: "{self}ต้องชาร์จแบตเตอรี่{polite}",
            roman: "{self} dtâawng cháat bàet-dtòe-rîi {polite}",
            en: "I need to charge the battery.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Must", thai: "ต้อง", roman: "dtâawng", en: "need to", accent: true },
              { role: "Verb", thai: "ชาร์จ", roman: "cháat", en: "charge", accent: true },
              { role: "Object", thai: "แบตเตอรี่", roman: "bàet-dtòe-rîi", en: "battery", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "a2-home-errands",
    headline: "Order possessions from big to small",
    summary:
      "To say 'my room's AC', Thai reverses English possessive order: thing → room → owner, and puts เสีย (broken) at the end.",
    patterns: [
      {
        title: "Reporting Broken Items & Floors",
        formula: ["Item", "Place", "Owner", "เสีย (broken)", "Polite"],
        setup:
          "Start with the specific broken item (แอร์ AC), narrow down which room (ห้อง), then the owner (ฉัน/ผม), then เสีย.",
        examples: [
          {
            thai: "แอร์ห้อง{self}เสีย{polite}",
            roman: "aae hâawng {self} sǐia {polite}",
            en: "My room's AC is broken.",
            slots: [
              { role: "Item", thai: "แอร์", roman: "aae", en: "AC", accent: true },
              { role: "Room", thai: "ห้อง", roman: "hâawng", en: "room" },
              { role: "Owner", thai: "{self}", roman: "{self}", en: "my" },
              { role: "State", thai: "เสีย", roman: "sǐia", en: "broken", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "a2-shopping-bank",
    headline: "Ask for a different size & pay by QR",
    summary:
      "Combine ขอลอง (may I try) with an adjective + กว่า to ask for bigger or smaller sizes without repeating the noun.",
    patterns: [
      {
        title: "Fit & Size Comparisons",
        formula: ["ขอลอง (may I try)", "Adjective", "กว่า (-er)", "Polite"],
        setup:
          "When the item is already clear from context, ขอลองใหญ่กว่า means 'May I try a bigger one?'.",
        examples: [
          {
            thai: "อันนี้คับขอลองใหญ่กว่า{polite}",
            roman: "an-níi kháp · khǎaw laawng yài gwàa {polite}",
            en: "This one is tight — may I try a bigger one?",
            slots: [
              { role: "Item", thai: "อันนี้", roman: "an-níi", en: "this one" },
              { role: "Fit", thai: "คับ", roman: "kháp", en: "tight", accent: true },
              { role: "Ask", thai: "ขอลอง", roman: "khǎaw laawng", en: "try" },
              { role: "Adj+er", thai: "ใหญ่กว่า", roman: "yài gwàa", en: "bigger", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "a2-health-safety",
    headline: "Dosage order: Verb + Amount + Classifier + Timing",
    summary:
      "Medicine instructions follow Thai's counting rule (amount + pill classifier เม็ด) followed by timing like หลังอาหาร (after meals) or วันละ (per day).",
    patterns: [
      {
        title: "Reading & Asking Dosage",
        formula: ["วันละ (per day)", "กี่ (how many)", "เม็ด (pills)", "Polite"],
        setup:
          "Place วันละ (per day) at the start or end, and use กี่ + เม็ด for how many pills.",
        examples: [
          {
            thai: "วันละกี่เม็ด{politeQ}",
            roman: "wan-lá gìi mét {politeQ}",
            en: "How many pills per day?",
            slots: [
              { role: "Per day", thai: "วันละ", roman: "wan-lá", en: "per day", accent: true },
              { role: "How many", thai: "กี่", roman: "gìi", en: "how many" },
              { role: "Classifier", thai: "เม็ด", roman: "mét", en: "pills", accent: true },
              { role: "Polite", thai: "{politeQ}", roman: "{politeQ}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "a2-personality",
    headline: "Link traits & agree naturally",
    summary:
      "Personality descriptions use ใจ (heart/mind) compounds like ใจดี (kind) directly after the person, linked with และ (and).",
    patterns: [
      {
        title: "Describing People",
        formula: ["Person", "Trait 1", "และ (and)", "Trait 2", "Polite"],
        setup:
          "Place the person first, then stack adjectives or ใจ-compounds directly after—no verb 'is' needed.",
        examples: [
          {
            thai: "เพื่อนใจดีและตลก{polite}",
            roman: "phûean jai-dii láe dtà-lòk {polite}",
            en: "Our friend is kind and funny.",
            slots: [
              { role: "Person", thai: "เพื่อน", roman: "phûean", en: "friend" },
              { role: "Trait 1", thai: "ใจดี", roman: "jai-dii", en: "kind", accent: true },
              { role: "Link", thai: "และ", roman: "láe", en: "and" },
              { role: "Trait 2", thai: "ตลก", roman: "dtà-lòk", en: "funny", accent: true },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "a2-actions-media",
    headline: "Combine อยาก (want) + ลองทำ (try) before activities",
    summary:
      "Stack desire (อยาก want), exploration (ลองทำ try doing), and completion (เสร็จแล้ว finished) directly around the main verb.",
    patterns: [
      {
        title: "Trying Cultural Activities",
        formula: ["Subject", "อยาก (want)", "ลองทำ (try)", "Activity", "Place", "Polite"],
        setup:
          "Each helper verb stacks right onto the next without 'to': ฉัน + อยาก + ลองทำ + ทำบุญ + วัด.",
        examples: [
          {
            thai: "{self}อยากลองทำทำบุญวัด{polite}",
            roman: "{self} yàak laawng-tham tham-bun wát {polite}",
            en: "I want to try making merit at the temple.",
            slots: [
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Want", thai: "อยาก", roman: "yàak", en: "want" },
              { role: "Try", thai: "ลองทำ", roman: "laawng-tham", en: "try doing", accent: true },
              { role: "Activity", thai: "ทำบุญ", roman: "tham-bun", en: "make merit" },
              { role: "Place", thai: "วัด", roman: "wát", en: "temple" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
  {
    unitId: "a2-finale",
    headline: "Connect stories with ตอนแรก → หลังจากนั้น → ในที่สุด",
    summary:
      "Narrate events in clear chronological steps by leading each sentence with a sequence connector instead of changing verb tenses.",
    patterns: [
      {
        title: "Storytelling Sequence",
        formula: ["Sequence Marker", "Subject / Verb", "Outcome", "Polite"],
        setup:
          "Open with ตอนแรก (at first) or บังเอิญ (by chance), transition with หลังจากนั้น (after that), and wrap up with ในที่สุด (finally).",
        examples: [
          {
            thai: "ตอนแรก{self}ลืมกุญแจจริงๆแล้ว{polite}",
            roman: "dtaawn-râaek {self} luuem gun-jae jing-jing-láaeo {polite}",
            en: "At first I actually forgot my key.",
            slots: [
              { role: "Start", thai: "ตอนแรก", roman: "dtaawn-râaek", en: "at first", accent: true },
              { role: "Subject", thai: "{self}", roman: "{self}", en: "I" },
              { role: "Event", thai: "ลืมกุญแจ", roman: "luuem gun-jae", en: "forgot key" },
              { role: "Tone", thai: "จริงๆแล้ว", roman: "jing-jing-láaeo", en: "actually" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
      {
        title: "Ideas, Results & Future Plans",
        formula: ["Subject", "มี / อยาก", "ไอเดีย (idea) / โอกาส (opportunity)", "น่าสนใจ (interesting)", "Polite"],
        setup:
          "Pair abstract nouns like แผนการ (plan), เป้าหมาย (goal), or ผลลัพธ์ (result) with evaluation adjectives like คุ้มค่า (worthwhile) or น่าสนใจ (interesting).",
        examples: [
          {
            thai: "ผลลัพธ์คุ้มค่าและดี{polite}",
            roman: "phǒn-láp khúm-khâa láe dii {polite}",
            en: "The result is worthwhile and good.",
            slots: [
              { role: "Outcome", thai: "ผลลัพธ์", roman: "phǒn-láp", en: "result", accent: true },
              { role: "Value", thai: "คุ้มค่า", roman: "khúm-khâa", en: "worthwhile", accent: true },
              { role: "And", thai: "และ", roman: "láe", en: "and" },
              { role: "Quality", thai: "ดี", roman: "dii", en: "good" },
              { role: "Polite", thai: "{polite}", roman: "{polite}" },
            ],
          },
        ],
      },
    ],
  },
];

export function unitGuideById(unitId: string): UnitGuideInfo | null {
  return unitGuides.find((guide) => guide.unitId === unitId) ?? null;
}
