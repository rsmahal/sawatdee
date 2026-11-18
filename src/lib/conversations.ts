import { a1Vocab } from "./curriculum-a1";
import { a2Vocab } from "./curriculum-a2";
import { a1ExtraConversations } from "./conversations-a1-extra";
import { a2ExtraConversations } from "./conversations-a2-extra";
import { resolveTok } from "./curriculum";
import type { Conversation, ConversationBlankPart, Lesson, Speaker, Tok, Word } from "./curriculum-types";

const a1 = a1Vocab;
const a2 = a2Vocab;

const t = (word: Word): Tok => ({ kind: "w", word });
const fixed = (token: Tok): ConversationBlankPart => ({ kind: "fixed", token });
const blank = (token: Tok): ConversationBlankPart => ({ kind: "blank", token });
const SELF: Tok = { kind: "self" };
const POLITE: Tok = { kind: "polite" };
const POLITE_Q: Tok = { kind: "polite", q: true };

export function resolveTokensText(tokens: Tok[], speaker: Speaker): string {
  return tokens.map((tok) => resolveTok(tok, speaker).thai).join("");
}

export function resolveTokensRoman(tokens: Tok[], speaker: Speaker, fallbackRoman: string): string {
  if (fallbackRoman.includes("{self}") || fallbackRoman.includes("{polite}") || fallbackRoman.includes("{politeQ}")) {
    return fallbackRoman
      .replace(/\{self\}/g, speaker === "m" ? "phǒm" : "chǎn")
      .replace(/\{polite\}/g, speaker === "m" ? "khráp" : "khâ")
      .replace(/\{politeQ\}/g, speaker === "m" ? "khráp" : "khá");
  }
  if (tokens.some((tok) => tok.kind !== "w")) {
    return tokens.map((tok) => resolveTok(tok, speaker).roman).join(" ");
  }
  return fallbackRoman;
}

const baseConversations: Conversation[] = [
  // ================= A1 CONVERSATIONS =================
  {
    id: "talk-a1-hello",
    unitId: "hello",
    level: "A1",
    title: "First Greeting at a Guesthouse",
    setting: "You arrive at your Bangkok guesthouse and greet the host at reception.",
    npcName: "Mint",
    npcRole: "Host",
    npcSpeaker: "f",
    words: [a1.hello, a1.meet, a1.thanks, a1.sorry, a1.np, a1.can, a1.bye],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.hello), { kind: "w", word: a1.kha }],
          roman: "sà-wàt-dii khâ",
          en: "Hello!",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Greet Mint back and say nice to meet you:",
        parts: [blank(t(a1.hello)), blank(t(a1.meet)), fixed(POLITE)],
        extra: [t(a1.bye), t(a1.thanks), t(a1.sorry)],
        roman: "sà-wàt-dii · yin-dii-thîi-dâai-rúu-jàk {polite}",
        en: "Hello, nice to meet you.",
        coach: "ยินดีที่ได้รู้จัก (yin-dii-thîi-dâai-rúu-jàk) is the warm greeting when meeting someone new.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.sorry), { kind: "w", word: a1.kha }],
          roman: "khǎaw-thôot khâ",
          en: "Excuse me (sorry for the wait).",
        },
        note: "Thai hosts often say ขอโทษ politely even for a tiny delay.",
      },
      {
        kind: "reply-tiles",
        prompt: "Reply smoothly: “No problem, thank you.”",
        answer: [t(a1.np), t(a1.thanks), POLITE],
        extra: [t(a1.sorry), t(a1.no)],
        roman: "mâi-bpen-rai · khàawp-khun {polite}",
        en: "No problem, thank you.",
        coach: "ไม่เป็นไร softens any small apology, followed by ขอบคุณ.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.can), { kind: "w", word: a1.kha }],
          roman: "dâai khâ",
          en: "Of course / you're all set!",
        },
      },
    ],
  },
  {
    id: "talk-a1-people",
    unitId: "people",
    level: "A1",
    title: "Catching Up with a Friend",
    setting: "You bump into Ton outside an office building in Bangkok.",
    npcName: "Ton",
    npcRole: "Friend",
    npcSpeaker: "m",
    words: [a1.howru, a1.well, a1.friend, a1.work, a1.bangkok, a1.thailand, a1.beCopula, a1.hasHave],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.hello), t(a1.howru), { kind: "w", word: a1.khrap }],
          roman: "sà-wàt-dii · sà-baai-dii-mǎi khráp",
          en: "Hello, how are you?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Answer: “I'm well, thank you.”",
        answer: [SELF, t(a1.well), t(a1.thanks), POLITE],
        extra: [t(a1.howru), t(a1.you)],
        roman: "{self} sà-baai-dii · khàawp-khun {polite}",
        en: "I'm well, thank you.",
        coach: "Drop ไหม from สบายดีไหม to answer that you are doing well.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [{ kind: "w", word: a1.iM }, t(a1.beCopula), t(a1.teacher), t(a1.bangkok), { kind: "w", word: a1.khrap }],
          roman: "phǒm bpen khruu grung-thêep khráp",
          en: "I'm a teacher in Bangkok.",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Respond about where you study and having a friend in Thailand:",
        parts: [fixed(SELF), blank(t(a1.study)), fixed(t(a1.thailand)), fixed(t(a1.andW)), blank(t(a1.hasHave)), fixed(t(a1.friend)), fixed(POLITE)],
        extra: [t(a1.work), t(a1.beCopula), t(a1.bangkok)],
        roman: "{self} riian bprà-thêet-thai láe mii phûean {polite}",
        en: "I study in Thailand and have friends here.",
      },
    ],
  },
  {
    id: "talk-a1-market",
    unitId: "market",
    level: "A1",
    title: "Ordering at a Street Food Stall",
    setting: "You're hungry and ordering lunch from Auntie Daeng's cart.",
    npcName: "P'Daeng",
    npcRole: "Vendor",
    npcSpeaker: "f",
    words: [a1.hungry, a1.friedRice, a1.coffee, a1.please, a1.thisOne, a1.howMuch, a1.spicy, a1.tasty, a1.maiQ],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.eat), t(a1.rice), t(a1.maiQ), t(a1.khaQ)],
          roman: "gin khâao mǎi khá",
          en: "Having a meal? (What would you like?)",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Ask politely for fried rice:",
        answer: [t(a1.please), t(a1.friedRice), POLITE],
        extra: [t(a1.noodles), t(a1.howMuch)],
        roman: "khǎaw khâao-phàt {polite}",
        en: "May I have fried rice, please?",
        coach: "ขอ (khǎaw) starts any polite food or drink order.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.spicy), t(a1.maiQ), { kind: "w", word: a1.khaQ }],
          roman: "phèt mǎi khá",
          en: "Do you want it spicy?",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Say you don't want it spicy:",
        parts: [blank(t(a1.no)), blank(t(a1.spicy)), fixed(POLITE)],
        extra: [t(a1.sweet), t(a1.hungry), t(a1.salty)],
        roman: "mâi phèt {polite}",
        en: "Not spicy.",
      },
      {
        kind: "reply-tiles",
        prompt: "Ask the price of this item:",
        answer: [t(a1.thisOne), t(a1.howMuch), POLITE_Q],
        extra: [t(a1.cheap), t(a1.expensive)],
        roman: "an-níi thâo-rài {politeQ}",
        en: "How much is this one?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.fifty), t(a1.baht), { kind: "w", word: a1.kha }],
          roman: "hâa-sìp bàat khâ",
          en: "Fifty baht.",
        },
      },
    ],
  },
  {
    id: "talk-a1-numbers",
    unitId: "numbers-unit",
    level: "A1",
    title: "Ordering Drinks with Classifiers",
    setting: "Buying iced coffee and water for you and a friend at a cafe.",
    npcName: "Beam",
    npcRole: "Barista",
    npcSpeaker: "m",
    words: [a1.one, a1.two, a1.twenty, a1.hundred, a1.clfGlass, a1.clfBottle, a1.allTotal, a1.coffee, a1.water],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.hello), t(a1.takeWant), t(a1.coffee), { kind: "w", word: a1.khrap }],
          roman: "sà-wàt-dii · ao gaa-fae khráp",
          en: "Hello, getting coffee?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Order two cups of coffee (noun + number + classifier):",
        answer: [t(a1.please), t(a1.coffee), t(a1.two), t(a1.clfGlass), POLITE],
        extra: [t(a1.clfBottle), t(a1.three)],
        roman: "khǎaw gaa-fae sǎawng gâaeo {polite}",
        en: "Two glasses of coffee, please.",
        coach: "Put the classifier last: กาแฟ + สอง + แก้ว.",
      },
      {
        kind: "reply-blank",
        prompt: "Add one bottle of water:",
        parts: [fixed(t(a1.water)), blank(t(a1.one)), blank(t(a1.clfBottle)), fixed(POLITE)],
        extra: [t(a1.two), t(a1.clfGlass), t(a1.clfPlate)],
        roman: "náam nùeng khùat {polite}",
        en: "One bottle of water.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.allTotal), t(a1.hundred), t(a1.twenty), t(a1.baht), { kind: "w", word: a1.khrap }],
          roman: "tháng-mòt ráawy yîi-sìp bàat khráp",
          en: "120 baht in total.",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Say “Thank you” as you pay:",
        answer: [t(a1.thanks), POLITE],
        extra: [t(a1.howMany), t(a1.allTotal)],
        roman: "khàawp-khun {polite}",
        en: "Thank you.",
      },
    ],
  },
  {
    id: "talk-a1-town",
    unitId: "town",
    level: "A1",
    title: "Asking Directions to the Market",
    setting: "You stop to ask a local the way to the market and bathroom.",
    npcName: "P'Nok",
    npcRole: "Local",
    npcSpeaker: "f",
    words: [a1.bathroom, a1.market, a1.where, a1.located, a1.straight, a1.turn, a1.left, a1.right, a1.taxi],
    turns: [
      {
        kind: "reply-tiles",
        prompt: "Excuse yourself and ask where the market is:",
        answer: [t(a1.sorry), t(a1.market), t(a1.located), t(a1.where), POLITE_Q],
        extra: [t(a1.go), t(a1.temple)],
        roman: "khǎaw-thôot · dtà-làat yùu thîi-nǎi {politeQ}",
        en: "Excuse me, where is the market?",
        coach: "Pattern: [place] + อยู่ + ที่ไหน (where is ... located?).",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.straight), t(a1.turn), t(a1.left), { kind: "w", word: a1.kha }],
          roman: "dtrong-bpai líiao sáai khâ",
          en: "Go straight and turn left.",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Repeat back P'Nok's directions:",
        parts: [fixed(t(a1.straight)), blank(t(a1.turn)), blank(t(a1.left))],
        extra: [t(a1.right), t(a1.go), t(a1.market)],
        roman: "dtrong-bpai líiao sáai",
        en: "Go straight, turn left.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.bathroom), t(a1.located), t(a1.right), { kind: "w", word: a1.kha }],
          roman: "hông-náam yùu khwǎa khâ",
          en: "And the restroom is on the right.",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Thank P'Nok warmly:",
        answer: [t(a1.thanks), POLITE],
        extra: [t(a1.taxi), t(a1.straight)],
        roman: "khàawp-khun {polite}",
        en: "Thank you.",
      },
    ],
  },
  {
    id: "talk-a1-time",
    unitId: "time",
    level: "A1",
    title: "Setting a Time for Saturday",
    setting: "Planning when to meet your friend for lunch this weekend.",
    npcName: "Pim",
    npcRole: "Friend",
    npcSpeaker: "f",
    words: [a1.today, a1.tomorrow, a1.saturday, a1.morning, a1.afternoon, a1.whatTime, a1.noon, a1.holiday],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.tomorrow), t(a1.holiday), { kind: "w", word: a1.kha }],
          roman: "phrûng-níi wan-yùt khâ",
          en: "Tomorrow is a day off!",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Ask what time you should meet:",
        parts: [blank(t(a1.go)), blank(t(a1.whatTime)), fixed(POLITE_Q)],
        extra: [t(a1.yesterday), t(a1.morning), t(a1.afternoon)],
        roman: "bpai gìi-moong {politeQ}",
        en: "What time are we going?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.noon), { kind: "w", word: a1.kha }],
          roman: "thîiang khâ",
          en: "At noon!",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Agree: “Saturday at noon is okay!”",
        answer: [t(a1.saturday), t(a1.noon), t(a1.can), POLITE],
        extra: [t(a1.monday), t(a1.cant)],
        roman: "wan-sǎo thîiang dâai {polite}",
        en: "Saturday at noon works.",
      },
    ],
  },
  {
    id: "talk-a1-routine",
    unitId: "routine",
    level: "A1",
    title: "Evening Routine Check-in",
    setting: "Chatting with your roommate about your day and dinner.",
    npcName: "Boss",
    npcRole: "Roommate",
    npcSpeaker: "m",
    words: [a1.wakeUp, a1.goBack, a1.buy, a1.cook, a1.wait, a1.rest, a1.help, a1.know],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.goBack), t(a1.home), t(a1.now), { kind: "w", word: a1.khrap }],
          roman: "glàp bâan dtaawn-níi khráp",
          en: "Heading back home now.",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Say you're buying dinner and going home to rest:",
        parts: [
          fixed(SELF),
          blank(t(a1.buy)),
          fixed(t(a1.rice)),
          blank(t(a1.goBack)),
          fixed(t(a1.rest)),
          fixed(POLITE),
        ],
        extra: [t(a1.wakeUp), t(a1.cook), t(a1.wait)],
        roman: "{self} súue khâao glàp phák-phàawn {polite}",
        en: "I'm buying food and going back to rest.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [{ kind: "w", word: a1.iM }, t(a1.wait), t(a1.help), t(a1.cook), { kind: "w", word: a1.khrap }],
          roman: "phǒm raaw chûai tham-aa-hǎan khráp",
          en: "I'll wait and help cook.",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Thank Boss and say okay:",
        answer: [t(a1.can), t(a1.thanks), POLITE],
        extra: [t(a1.sell), t(a1.cant)],
        roman: "dâai · khàawp-khun {polite}",
        en: "Okay, thank you!",
      },
    ],
  },
  {
    id: "talk-a1-home",
    unitId: "home-things",
    level: "A1",
    title: "Heading Out the Door",
    setting: "Looking for your keys and phone before stepping out.",
    npcName: "May",
    npcRole: "Partner",
    npcSpeaker: "f",
    words: [a1.key, a1.phone, a1.bag, a1.table, a1.umbrella, a1.shoes, a1.wear, a1.lookFor],
    turns: [
      {
        kind: "reply-tiles",
        prompt: "Tell May you're looking for your key:",
        answer: [SELF, t(a1.lookFor), t(a1.key), POLITE],
        extra: [t(a1.fridge), t(a1.bed)],
        roman: "{self} hǎa gun-jae {polite}",
        en: "I'm looking for the key.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.key), t(a1.located), t(a1.table), { kind: "w", word: a1.kha }],
          roman: "gun-jae yùu dtó khâ",
          en: "The key is at the table!",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Check if your phone is in the bag:",
        parts: [blank(t(a1.phone)), fixed(t(a1.located)), blank(t(a1.bag)), fixed(POLITE_Q)],
        extra: [t(a1.key), t(a1.table), t(a1.umbrella)],
        roman: "thoo-rá-sàp yùu grà-bpǎo {politeQ}",
        en: "Is the phone in the bag?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.yes), t(a1.phone), t(a1.umbrella), t(a1.located), t(a1.bag), { kind: "w", word: a1.kha }],
          roman: "châi · thoo-rá-sàp rôm yùu grà-bpǎo khâ",
          en: "Yes, both your phone and umbrella are in the bag.",
        },
      },
    ],
  },
  {
    id: "talk-a1-health",
    unitId: "body-health",
    level: "A1",
    title: "At the Neighborhood Clinic",
    setting: "Explaining how you feel to the clinic doctor.",
    npcName: "Dr. Ek",
    npcRole: "Doctor",
    npcSpeaker: "m",
    words: [a1.sick, a1.headache, a1.stomachache, a1.fever, a1.medicine, a1.allergic, a1.recover],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.hello), t(a1.hurt), t(a1.where), { kind: "w", word: a1.khrap }],
          roman: "sà-wàt-dii · jèp thîi-nǎi khráp",
          en: "Hello, where does it hurt?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Tell the doctor you have a headache and fever:",
        answer: [SELF, t(a1.headache), t(a1.fever), POLITE],
        extra: [t(a1.stomachache), t(a1.healthy)],
        roman: "{self} bpùat-hǔa khâi {polite}",
        en: "I have a headache and a fever.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.allergic), t(a1.medicine), { kind: "w", word: a1.khrap }],
          roman: "pháae yaa khráp",
          en: "Are you allergic to any medicine?",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Reply that you are NOT allergic to medicine:",
        parts: [blank(t(a1.no)), blank(t(a1.allergic)), fixed(t(a1.medicine)), fixed(POLITE)],
        extra: [t(a1.sick), t(a1.fever), t(a1.recover)],
        roman: "mâi pháae yaa {polite}",
        en: "I'm not allergic to medicine.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.eat), t(a1.medicine), t(a1.recover), { kind: "w", word: a1.khrap }],
          roman: "gin yaa hǎai khráp",
          en: "Take this medicine and you'll recover soon.",
        },
      },
    ],
  },
  {
    id: "talk-a1-adjectives",
    unitId: "adjectives-a1",
    level: "A1",
    title: "Picking a Shirt Color",
    setting: "Shopping with a friend on a hot afternoon.",
    npcName: "Fah",
    npcRole: "Friend",
    npcSpeaker: "f",
    words: [a1.shirt, a1.color, a1.white, a1.blue, a1.pretty, a1.small, a1.big, a1.hot, a1.happy],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.today), t(a1.hot), { kind: "w", word: a1.kha }],
          roman: "wan-níi ráawn khâ",
          en: "It's hot today!",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Point to the blue shirt and say it's pretty:",
        parts: [fixed(t(a1.shirt)), blank(t(a1.blue)), blank(t(a1.pretty)), fixed(POLITE)],
        extra: [t(a1.white), t(a1.hot), t(a1.small)],
        roman: "sûea sǐi-fáa sǔai {polite}",
        en: "The blue shirt is pretty.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.white), t(a1.good), { kind: "w", word: a1.kha }],
          roman: "sǐi-khǎao dii khâ",
          en: "White is good too!",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Reply: “White is pretty, I'm happy!”",
        answer: [t(a1.white), t(a1.pretty), SELF, t(a1.happy), POLITE],
        extra: [t(a1.black), t(a1.sad)],
        roman: "sǐi-khǎao sǔai · {self} dii-jai {polite}",
        en: "White is pretty, I'm happy!",
      },
    ],
  },
  {
    id: "talk-a1-grammar",
    unitId: "grammar-a1",
    level: "A1",
    title: "Making Plans & Explaining Why",
    setting: "Texting in Thai about where you are meeting and why.",
    npcName: "Khao",
    npcRole: "Friend",
    npcSpeaker: "m",
    words: [a1.who, a1.when, a1.why, a1.because, a1.butW, a1.willW, a1.already, a1.nextTo],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.go), t(a1.market), t(a1.when), { kind: "w", word: a1.khrap }],
          roman: "bpai dtà-làat mûea-rài khráp",
          en: "When are we going to the market?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Reply: “I will go today because tomorrow I'm busy.”",
        answer: [SELF, t(a1.willW), t(a1.go), t(a1.today), t(a1.because), t(a1.tomorrow), t(a1.busy), POLITE],
        extra: [t(a1.butW), t(a1.already)],
        roman: "{self} jà bpai wan-níi phráw-wâa phrûng-níi yûng {polite}",
        en: "I will go today because tomorrow I'm busy.",
        coach: "จะ marks future action, and เพราะว่า means because.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.shop), t(a1.located), t(a1.nextTo), t(a1.market), { kind: "w", word: a1.khrap }],
          roman: "ráan yùu khâang-khâang dtà-làat khráp",
          en: "The shop is right next to the market.",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Ask who is going with you:",
        parts: [blank(t(a1.who)), fixed(t(a1.willW)), fixed(t(a1.go)), blank(t(a1.withW)), fixed(SELF), fixed(POLITE_Q)],
        extra: [t(a1.what), t(a1.when), t(a1.because)],
        roman: "khrai jà bpai gàp {self} {politeQ}",
        en: "Who will go with me?",
      },
    ],
  },
  {
    id: "talk-a1-shopping",
    unitId: "shopping-hobbies",
    level: "A1",
    title: "At a Weekend Market Shop",
    setting: "Trying on a hat, asking for a discount, and paying.",
    npcName: "P'Lek",
    npcRole: "Shopkeeper",
    npcSpeaker: "f",
    words: [a1.hat, a1.tryW, a1.price, a1.discount, a1.cash, a1.creditCard, a1.receipt, a1.travel],
    turns: [
      {
        kind: "reply-tiles",
        prompt: "Ask politely to try on the hat:",
        answer: [t(a1.please), t(a1.tryW), t(a1.hat), POLITE_Q],
        extra: [t(a1.changeW), t(a1.closeW)],
        roman: "khǎaw laawng mùak {politeQ}",
        en: "May I try on the hat?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.can), t(a1.hat), t(a1.pretty), { kind: "w", word: a1.kha }],
          roman: "dâai · mùak sǔai khâ",
          en: "Sure! That hat looks great.",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Ask if they can give a discount:",
        parts: [blank(t(a1.discount)), blank(t(a1.can)), fixed(POLITE_Q)],
        extra: [t(a1.closeW), t(a1.expensive), t(a1.tryW)],
        roman: "lót-raa-khaa dâai {politeQ}",
        en: "Can you discount it?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.can), t(a1.pay), t(a1.cash), t(a1.orW), t(a1.creditCard), { kind: "w", word: a1.kha }],
          roman: "dâai · jàai ngoen-sòt rǔue bàt-khree-dìt khâ",
          en: "Sure! Cash or credit card?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Say you'll pay with cash and ask for a receipt:",
        answer: [t(a1.cash), t(a1.please), t(a1.receipt), POLITE],
        extra: [t(a1.creditCard), t(a1.plasticBag)],
        roman: "ngoen-sòt · khǎaw bai-sèt {polite}",
        en: "Cash — may I have a receipt?",
      },
    ],
  },

  // ================= A2 CONVERSATIONS =================
  {
    id: "talk-a2-meal",
    unitId: "meal",
    level: "A2",
    title: "Customizing Pad Thai & Getting the Bill",
    setting: "Ordering dinner at a busy restaurant with dietary preferences.",
    npcName: "P'Ploy",
    npcRole: "Server",
    npcSpeaker: "f",
    words: [a2.orderW, a2.padThai, a2.chicken, a2.without, a2.peanut, a2.lessSweet, a2.plainWater, a2.bill],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.orderW), t(a1.what), { kind: "w", word: a1.khaQ }],
          roman: "sàng à-rai khá",
          en: "What would you like to order?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Order chicken Pad Thai without peanuts:",
        answer: [t(a1.please), t(a2.padThai), t(a2.chicken), t(a2.without), t(a2.peanut), POLITE],
        extra: [t(a2.shrimp), t(a2.pork)],
        roman: "khǎaw phàt-thai gài mâi-sài thùa {polite}",
        en: "Chicken Pad Thai, no peanuts, please.",
        coach: "Put ไม่ใส่ (without) right before the ingredient you want left out.",
      },
      {
        kind: "reply-blank",
        prompt: "Add plain water and ask for your tea less sweet:",
        parts: [blank(t(a2.plainWater)), fixed(t(a1.andW)), fixed(t(a1.tea)), blank(t(a2.lessSweet)), fixed(POLITE)],
        extra: [t(a2.full), t(a2.chicken), t(a2.bill)],
        roman: "náam-bplào láe chaa wǎan-náawy {polite}",
        en: "Plain water and less-sweet tea.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.flavor), t(a1.good), { kind: "w", word: a1.khaQ }],
          roman: "rót-châat dii khá",
          en: "How did everything taste?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Say it was delicious, you're full, and ask for the bill:",
        answer: [t(a1.tasty), t(a2.full), t(a2.bill), POLITE],
        extra: [t(a2.enough), t(a2.regular)],
        roman: "à-ròi · ìm · chék-bin {polite}",
        en: "Delicious! I'm full — the bill, please.",
      },
    ],
  },
  {
    id: "talk-a2-going",
    unitId: "going",
    level: "A2",
    title: "Skytrain to Hotel Check-in",
    setting: "Getting directions to the BTS station and checking into your hotel.",
    npcName: "Natt",
    npcRole: "Receptionist",
    npcSpeaker: "m",
    words: [a2.skytrain, a2.station, a2.near, a2.intersection, a2.hotel, a2.reserve, a2.checkIn, a2.passport],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.hello), t(a2.hotel), t(a2.checkIn), { kind: "w", word: a1.khrap }],
          roman: "sà-wàt-dii · roong-raaem chék-in khráp",
          en: "Welcome to the hotel! Checking in?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Say you already booked a room:",
        answer: [SELF, t(a2.reserve), t(a1.room), t(a1.already), POLITE],
        extra: [t(a2.cancel), t(a2.checkOut)],
        roman: "{self} jaawng hâawng láaeo {polite}",
        en: "I already reserved a room.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.please), t(a2.passport), { kind: "w", word: a1.khrap }],
          roman: "khǎaw nǎng-sǔue-doen-thaang khráp",
          en: "May I see your passport, please?",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Hand it over and ask if the Skytrain station is near:",
        parts: [fixed(t(a2.station)), fixed(t(a2.skytrain)), blank(t(a2.near)), blank(t(a2.here)), fixed(POLITE_Q)],
        extra: [t(a2.far), t(a2.hotel), t(a2.passport)],
        roman: "sà-thǎa-nii rót-fai-fáa glâi thîi-nîi {politeQ}",
        en: "Is the Skytrain station near here?",
        coach: "ใกล้ (glâi, falling tone) means near; ไกล (glai, mid tone) means far.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.near), t(a2.intersection), { kind: "w", word: a1.khrap }],
          roman: "glâi sìi-yâaek khráp",
          en: "Very close — right by the intersection!",
        },
      },
    ],
  },
  {
    id: "talk-a2-talking",
    unitId: "talking",
    level: "A2",
    title: "Asking Someone to Speak Slowly",
    setting: "Chatting with a friendly Thai colleague when the conversation speeds up.",
    npcName: "P'June",
    npcRole: "Colleague",
    npcSpeaker: "f",
    words: [a2.nameW, a2.speak, a2.thaiLang, a2.understand, a2.aLittle, a2.slowly, a2.meaning, a2.gladly],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.you), t(a2.speak), t(a2.thaiLang), t(a1.good), { kind: "w", word: a1.kha }],
          roman: "khun phûut phaa-sǎa-thai dii khâ",
          en: "You speak Thai really well!",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Reply modestly: “I understand Thai a little.”",
        answer: [SELF, t(a2.understand), t(a2.thaiLang), t(a2.aLittle), POLITE],
        extra: [t(a2.spell), t(a2.promise)],
        roman: "{self} khâo-jai phaa-sǎa-thai nít-nòi {polite}",
        en: "I understand Thai a little.",
      },
      {
        kind: "reply-blank",
        prompt: "Ask P'June politely to speak slowly:",
        parts: [fixed(t(a1.help)), blank(t(a2.speak)), blank(t(a2.slowly)), fixed(POLITE)],
        extra: [t(a2.understand), t(a2.aLittle), t(a2.meaning)],
        roman: "chûai phûut cháa-cháa {polite}",
        en: "Please speak slowly.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.gladly), { kind: "w", word: a1.kha }],
          roman: "yin-dii khâ",
          en: "Gladly! Of course.",
        },
      },
    ],
  },
  {
    id: "talk-a2-out",
    unitId: "out",
    level: "A2",
    title: "Checking Weather for an Island Trip",
    setting: "Planning a boat outing to an island with your friend.",
    npcName: "Win",
    npcRole: "Friend",
    npcSpeaker: "m",
    words: [a2.weatherAir, a2.rain, a2.fall, a2.sunshine, a2.wind, a2.island, a2.boat, a2.fun, a2.like],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.today), t(a2.weatherAir), t(a1.good), t(a2.rain), t(a1.no), t(a2.fall), { kind: "w", word: a1.khrap }],
          roman: "wan-níi aa-gàat dii · fǒn mâi dtòk khráp",
          en: "The weather is great today — no rain!",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Suggest taking a boat to the island:",
        parts: [fixed(t(a1.go)), blank(t(a2.island)), blank(t(a2.fun)), fixed(POLITE)],
        extra: [t(a2.rain), t(a2.wind), t(a2.boat)],
        roman: "bpai gàw sà-nùk {polite}",
        en: "Going to the island will be fun!",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.island), t(a2.shady), t(a2.wind), t(a1.good), { kind: "w", word: a1.khrap }],
          roman: "gàw rôm-rûuen lom dii khráp",
          en: "The island is shady with a nice breeze.",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Say you really like the river and trees:",
        answer: [SELF, t(a2.like), t(a2.river), t(a1.andW), t(a2.tree), POLITE],
        extra: [t(a2.storm), t(a2.rain)],
        roman: "{self} châawp mâae-náam láe dtôn-mái {polite}",
        en: "I like the river and the trees.",
      },
    ],
  },
  {
    id: "talk-a2-compare",
    unitId: "a2-compare",
    level: "A2",
    title: "Comparing Two Neighborhood Cafes",
    setting: "Deciding which coffee shop to visit more often.",
    npcName: "P'Bua",
    npcRole: "Friend",
    npcSpeaker: "f",
    words: [a2.moreThan, a2.mostW, a2.tooMuch, a2.really, a2.often, a2.sameAs, a2.stillYet, a2.soThus],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.shop), t(a1.thisOne), t(a1.coffee), t(a1.tasty), t(a2.moreThan), { kind: "w", word: a1.kha }],
          roman: "ráan an-níi gaa-fae à-ròi gwàa khâ",
          en: "This shop's coffee is tastier.",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Agree, and say the other shop is too expensive:",
        answer: [t(a2.sameAs), t(a1.shop), t(a1.big), t(a1.expensive), t(a2.tooMuch), POLITE],
        extra: [t(a2.mostW), t(a2.neverW)],
        roman: "mǔean-gan · ráan yài phaeng goen-bpai {polite}",
        en: "Same — the big shop is too expensive.",
        coach: "Put เกินไป (too much) after the adjective: แพงเกินไป.",
      },
      {
        kind: "reply-blank",
        prompt: "Ask how often P'Bua comes here:",
        parts: [fixed(t(a1.come)), blank(t(a2.here)), blank(t(a2.often)), fixed(POLITE_Q)],
        extra: [t(a2.moreThan), t(a2.tooMuch), t(a2.sameAs)],
        roman: "maa thîi-nîi bòi-bòi {politeQ}",
        en: "Do you come here often?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.often), t(a2.really), { kind: "w", word: a1.kha }],
          roman: "bòi-bòi jing-jing khâ",
          en: "Really often, actually!",
        },
      },
    ],
  },
  {
    id: "talk-a2-work-tech",
    unitId: "a2-work-tech",
    level: "A2",
    title: "Cafe Wi-Fi & Quick Work Check",
    setting: "Connecting your laptop at a co-working cafe before a meeting.",
    npcName: "Arm",
    npcRole: "Staff",
    npcSpeaker: "m",
    words: [a2.wifi, a2.password, a2.internet, a2.email, a2.sendW, a2.meeting, a2.battery, a2.chargeW],
    turns: [
      {
        kind: "reply-tiles",
        prompt: "Ask the staff politely for the Wi-Fi password:",
        answer: [t(a1.please), t(a2.password), t(a2.wifi), POLITE_Q],
        extra: [t(a2.email), t(a2.deadline)],
        roman: "khǎaw rá-hàt-phàan wai-fai {politeQ}",
        en: "May I have the Wi-Fi password?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.sendW), t(a2.message), t(a1.already), { kind: "w", word: a1.khrap }],
          roman: "sòng khâaw-khwaam láaeo khráp",
          en: "I just sent it to you in a message.",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Thank Arm and mention your battery needs charging:",
        parts: [fixed(t(a1.thanks)), fixed(SELF), fixed(t(a1.mustW)), blank(t(a2.chargeW)), blank(t(a2.battery)), fixed(POLITE)],
        extra: [t(a2.sendW), t(a2.wifi), t(a2.email)],
        roman: "khàawp-khun · {self} dtâawng cháat bàet-dtòe-rîi {polite}",
        en: "Thanks! I need to charge my battery.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.internet), t(a1.fast), t(a1.can), { kind: "w", word: a1.khrap }],
          roman: "in-thoe-nét reo dâai khráp",
          en: "Sure, the internet is fast here too!",
        },
      },
    ],
  },
  {
    id: "talk-a2-errands",
    unitId: "a2-home-errands",
    level: "A2",
    title: "AC Repair & Condo Parcel",
    setting: "Telling your condo juristic office about the AC and picking up a package.",
    npcName: "P'Ann",
    npcRole: "Building Manager",
    npcSpeaker: "f",
    words: [a2.condo, a2.aircon, a2.broken, a2.repair, a2.parcel, a2.receive, a2.floorLevel, a2.elevator],
    turns: [
      {
        kind: "reply-tiles",
        prompt: "Report that the air conditioner in your room is broken:",
        answer: [t(a2.aircon), t(a1.room), SELF, t(a2.broken), POLITE],
        extra: [t(a2.clean), t(a2.trash)],
        roman: "aae hâawng {self} sǐia {polite}",
        en: "My room's air conditioner is broken.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.tomorrow), t(a2.repair), t(a1.can), t(a1.andW), t(a1.you), t(a2.receive), t(a2.parcel), { kind: "w", word: a1.kha }],
          roman: "phrûng-níi sâawm dâai · láe khun ráp-khǎawng phát-sà-dù khâ",
          en: "We can fix it tomorrow — also, you have a parcel to pick up!",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Ask which floor the parcel room is on:",
        parts: [blank(t(a2.parcel)), fixed(t(a1.located)), blank(t(a2.floorLevel)), fixed(t(a1.which)), fixed(POLITE_Q)],
        extra: [t(a2.aircon), t(a2.elevator), t(a2.condo)],
        roman: "phát-sà-dù yùu chán nǎi {politeQ}",
        en: "Which floor is the parcel on?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.floorLevel), t(a1.one), t(a1.nextTo), t(a2.elevator), { kind: "w", word: a1.kha }],
          roman: "chán nùeng khâang-khâang líp khâ",
          en: "First floor, right next to the elevator.",
        },
      },
    ],
  },
  {
    id: "talk-a2-shopping-bank",
    unitId: "a2-shopping-bank",
    level: "A2",
    title: "Checking Fit & Paying by QR Scan",
    setting: "Picking out shoes at a mall stall and paying with Thai QR PromptPay.",
    npcName: "P'Tae",
    npcRole: "Seller",
    npcSpeaker: "m",
    words: [a2.sizeW, a2.tight, a2.loose, a2.justRight, a2.scanQR, a2.transferMoney, a2.worthIt, a2.soldOut],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.shoes), t(a2.sizeW), t(a1.which), { kind: "w", word: a1.khrap }],
          roman: "raawng-tháo sái nǎi khráp",
          en: "What shoe size do you need?",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Say this pair is a bit tight and ask to try a bigger size:",
        parts: [
          fixed(t(a1.thisOne)),
          blank(t(a2.tight)),
          fixed(t(a1.please)),
          fixed(t(a1.tryW)),
          blank(t(a1.big)),
          fixed(t(a2.moreThan)),
          fixed(POLITE),
        ],
        extra: [t(a2.loose), t(a2.justRight), t(a2.soldOut)],
        roman: "an-níi kháp · khǎaw laawng yài gwàa {polite}",
        en: "This one is tight, may I try a bigger one?",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.justRight), t(a2.worthIt), { kind: "w", word: a1.khrap }],
          roman: "phaaw-dii · khúm khráp",
          en: "Fits just right — great value!",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Ask if you can scan QR to transfer money:",
        answer: [t(a2.scanQR), t(a2.transferMoney), t(a1.can), POLITE_Q],
        extra: [t(a2.soldOut), t(a2.giveChange)],
        roman: "sà-gaaen oon-ngoen dâai {politeQ}",
        en: "Can I scan to transfer money?",
      },
    ],
  },
  {
    id: "talk-a2-health",
    unitId: "a2-health-safety",
    level: "A2",
    title: "At the Pharmacy for Cough Medicine",
    setting: "Getting sore-throat relief and checking dosage instructions.",
    npcName: "P'Gai",
    npcRole: "Pharmacist",
    npcSpeaker: "f",
    words: [a2.pharmacy, a2.cough, a2.soreThroat, a2.dizzy, a2.painkiller, a2.pill, a2.perDay, a2.afterMeal],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.hello), t(a1.lookFor), t(a1.medicine), t(a1.what), { kind: "w", word: a1.khaQ }],
          roman: "sà-wàt-dii · hǎa yaa à-rai khá",
          en: "Hello, what medicine are you looking for?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Explain that you're coughing and have a sore throat:",
        answer: [SELF, t(a2.cough), t(a1.andW), t(a2.soreThroat), POLITE],
        extra: [t(a2.rash), t(a2.injured)],
        roman: "{self} ai láe jèp-khaaw {polite}",
        en: "I'm coughing and have a sore throat.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.eat), t(a1.one), t(a2.pill), t(a2.afterMeal), { kind: "w", word: a1.kha }],
          roman: "gin nùeng mét lǎng-aa-hǎan khâ",
          en: "Take one pill after meals.",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Confirm how many times per day:",
        parts: [blank(t(a2.perDay)), fixed(t(a1.howMany)), blank(t(a2.pill)), fixed(POLITE_Q)],
        extra: [t(a2.afterMeal), t(a2.cough), t(a2.painkiller)],
        roman: "wan-lá gìi mét {politeQ}",
        en: "How many pills per day?",
      },
    ],
  },
  {
    id: "talk-a2-personality",
    unitId: "a2-personality",
    level: "A2",
    title: "Planning a Friend's Birthday Party",
    setting: "Choosing a gift and talking about your friend with another coworker.",
    npcName: "Nong Mint",
    npcRole: "Coworker",
    npcSpeaker: "f",
    words: [a2.kind, a2.funny, a2.polite, a2.party, a2.celebrate, a2.gift, a2.agreeOpinion, a2.excited],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.tomorrow), t(a2.celebrate), t(a1.birthday), t(a1.friend), { kind: "w", word: a1.kha }],
          roman: "phrûng-níi chà-lǎawng wan-gòet phûean khâ",
          en: "Tomorrow we're celebrating our friend's birthday!",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Say our friend is kind and funny:",
        parts: [fixed(t(a1.friend)), blank(t(a2.kind)), fixed(t(a1.andW)), blank(t(a2.funny)), fixed(POLITE)],
        extra: [t(a2.polite), t(a2.excited), t(a2.party)],
        roman: "phûean jai-dii láe dtà-lòk {polite}",
        en: "Our friend is kind and funny.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.buy), t(a2.gift), t(a2.flower), t(a1.good), { kind: "w", word: a1.khaQ }],
          roman: "súue khǎawng-khwǎn dàawk-mái dii khá",
          en: "How about buying flowers as a gift?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Agree excitedly: “I agree, I'm excited for the party!”",
        answer: [SELF, t(a2.agreeOpinion), t(a2.excited), t(a2.party), POLITE],
        extra: [t(a2.disagree), t(a2.quiet)],
        roman: "{self} hěn-dûai · dtùuen-dtên bpaa-dtîi {polite}",
        en: "I agree — I'm excited for the party!",
      },
    ],
  },
  {
    id: "talk-a2-culture",
    unitId: "a2-actions-media",
    level: "A2",
    title: "Songkran & Temple Traditions",
    setting: "Talking with a local friend about Thai festivals and making merit.",
    npcName: "P'Keng",
    npcRole: "Friend",
    npcSpeaker: "m",
    words: [a2.songkran, a2.loyKrathong, a2.makeMerit, a2.festival, a2.tradition, a2.startW, a2.finished],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.songkran), t(a2.festival), t(a1.big), t(a1.thailand), { kind: "w", word: a1.khrap }],
          roman: "sǒng-graan thêet-sà-gaan yài bprà-thêet-thai khráp",
          en: "Songkran is Thailand's biggest festival!",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Say you want to try making merit at a temple:",
        answer: [SELF, t(a1.want), t(a2.tryDoing), t(a2.makeMerit), t(a1.temple), POLITE],
        extra: [t(a2.throwAway), t(a2.runAway)],
        roman: "{self} yàak laawng-tham tham-bun wát {polite}",
        en: "I want to try making merit at the temple.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.startW), t(a1.morning), t(a1.good), { kind: "w", word: a1.khrap }],
          roman: "rôem cháao dii khráp",
          en: "Starting in the morning is best!",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Mention you've also heard about Loy Krathong:",
        parts: [fixed(SELF), fixed(t(a2.like)), blank(t(a2.tradition)), blank(t(a2.loyKrathong)), fixed(t(a1.alsoW)), fixed(POLITE)],
        extra: [t(a2.festival), t(a2.songkran), t(a2.makeMerit)],
        roman: "{self} châawp bprà-phee-nii laawy-grà-thong dûai {polite}",
        en: "I like the Loy Krathong tradition too.",
      },
    ],
  },
  {
    id: "talk-a2-story",
    unitId: "a2-finale",
    level: "A2",
    title: "Telling a Bangkok Travel Story",
    setting: "Sharing how you solved a tricky travel hiccup from start to finish.",
    npcName: "P'Dao",
    npcRole: "Friend",
    npcSpeaker: "f",
    words: [a2.atFirst, a2.afterThat, a2.finally, a2.problem, a2.solution, a2.actually, a2.byChance],
    turns: [
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a1.yesterday), t(a2.problem), t(a1.what), { kind: "w", word: a1.khaQ }],
          roman: "mûea-waan bpan-hǎa à-rai khá",
          en: "What was the problem yesterday?",
        },
      },
      {
        kind: "reply-tiles",
        prompt: "Start the story: “At first I forgot my key, actually.”",
        answer: [t(a2.atFirst), SELF, t(a1.forget), t(a1.key), t(a2.actually), POLITE],
        extra: [t(a2.past), t(a2.future)],
        roman: "dtaawn-râaek {self} luuem gun-jae jing-jing-láaeo {polite}",
        en: "At first I actually forgot my key.",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.afterThat), t(a1.how), { kind: "w", word: a1.khaQ }],
          roman: "lǎng-jàak-nán yang-ngai khá",
          en: "After that, what happened?",
        },
      },
      {
        kind: "reply-blank",
        prompt: "Finish the story: “By chance I met a friend, and finally found a solution!”",
        parts: [
          blank(t(a2.byChance)),
          fixed(t(a1.meetFind)),
          fixed(t(a1.friend)),
          blank(t(a2.finally)),
          fixed(t(a1.good)),
          blank(t(a2.solution)),
          fixed(POLITE),
        ],
        extra: [t(a2.atFirst), t(a2.problem), t(a2.afterThat)],
        roman: "bang-oen phóp phûean · nai-thîi-sùt dii thaang-gâae {polite}",
        en: "By chance I met a friend, and finally found a great solution!",
      },
      {
        kind: "line",
        line: {
          speaker: "npc",
          tokens: [t(a2.relieved), { kind: "w", word: a1.kha }],
          roman: "lôong-jai khâ",
          en: "What a relief!",
        },
      },
    ],
  },
];

const unitOrder: string[] = [];
for (const conv of baseConversations) {
  if (!unitOrder.includes(conv.unitId)) unitOrder.push(conv.unitId);
}

const extraByUnit = new Map<string, Conversation[]>();
for (const conv of [...a1ExtraConversations, ...a2ExtraConversations]) {
  const list = extraByUnit.get(conv.unitId) ?? [];
  list.push(conv);
  extraByUnit.set(conv.unitId, list);
}

export const conversations: Conversation[] = unitOrder.flatMap((unitId) => [
  ...baseConversations.filter((conv) => conv.unitId === unitId),
  ...(extraByUnit.get(unitId) ?? []),
]);

export type ConversationUnlockStatus = {
  unlocked: boolean;
  requiredLessons: Lesson[];
  missingLessons: Lesson[];
  learnedWordsCount: number;
  totalWordsCount: number;
};

export function conversationById(id: string): Conversation | null {
  return conversations.find((conv) => conv.id === id) ?? null;
}

export function conversationUnlockStatus(
  conv: Conversation,
  completed: Record<string, number>,
  catalogLessons: Lesson[],
): ConversationUnlockStatus {
  const lessonByWordThai = new Map<string, Lesson>();
  for (const lesson of catalogLessons) {
    for (const word of lesson.words) {
      if (!lessonByWordThai.has(word.thai)) {
        lessonByWordThai.set(word.thai, lesson);
      }
    }
  }

  const requiredMap = new Map<string, Lesson>();
  let learnedWordsCount = 0;

  for (const word of conv.words) {
    const introLesson = lessonByWordThai.get(word.thai);
    if (introLesson) {
      requiredMap.set(introLesson.id, introLesson);
      if (completed[introLesson.id]) {
        learnedWordsCount += 1;
      }
    } else {
      learnedWordsCount += 1;
    }
  }

  // Fallback: if no lesson matched (shouldn't happen), require at least one lesson in the same unit
  if (requiredMap.size === 0) {
    for (const lesson of catalogLessons) {
      if (lesson.unit === conv.unitId) {
        requiredMap.set(lesson.id, lesson);
      }
    }
  }

  const requiredLessons = catalogLessons.filter((lesson) => requiredMap.has(lesson.id));
  const missingLessons = requiredLessons.filter((lesson) => !completed[lesson.id]);

  return {
    unlocked: missingLessons.length === 0,
    requiredLessons,
    missingLessons,
    learnedWordsCount,
    totalWordsCount: conv.words.length,
  };
}
