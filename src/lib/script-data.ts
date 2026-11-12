export type ToneId = "mid" | "low" | "falling" | "high" | "rising";

export const tones: { id: ToneId; label: string; hint: string }[] = [
  { id: "mid", label: "Mid", hint: "Level and relaxed" },
  { id: "low", label: "Low", hint: "Sits low" },
  { id: "falling", label: "Falling", hint: "Drops away" },
  { id: "high", label: "High", hint: "Sits high" },
  { id: "rising", label: "Rising", hint: "Dips, then climbs" },
];

export const toneExamples: { tone: ToneId; thai: string; roman: string; en: string }[] = [
  { tone: "mid", thai: "ดี", roman: "dii", en: "good" },
  { tone: "low", thai: "ใหม่", roman: "mài", en: "new" },
  { tone: "falling", thai: "ไม่", roman: "mâi", en: "no" },
  { tone: "high", thai: "ม้า", roman: "máa", en: "horse" },
  { tone: "rising", thai: "ไหม", roman: "mǎi", en: "question word" },
];

export const toneDrills: { thai: string; roman: string; en: string; tone: ToneId }[] = [
  { thai: "มา", roman: "maa", en: "come", tone: "mid" },
  { thai: "ดี", roman: "dii", en: "good", tone: "mid" },
  { thai: "ใหม่", roman: "mài", en: "new", tone: "low" },
  { thai: "สี่", roman: "sìi", en: "four", tone: "low" },
  { thai: "ไม่", roman: "mâi", en: "no", tone: "falling" },
  { thai: "ห้า", roman: "hâa", en: "five", tone: "falling" },
  { thai: "ม้า", roman: "máa", en: "horse", tone: "high" },
  { thai: "น้ำ", roman: "náam", en: "water", tone: "high" },
  { thai: "ไหม", roman: "mǎi", en: "question word", tone: "rising" },
  { thai: "หมา", roman: "mǎa", en: "dog", tone: "rising" },
];

export type ConsonantClass = "mid" | "high" | "low";

export type ConsonantEntry = {
  ch: string;
  name: string;
  gloss: string;
  sound: string;
  cls: ConsonantClass;
  core?: boolean;
};

// All 44 Thai consonants in traditional order (ก -> ฮ)
export const consonants: ConsonantEntry[] = [
  { ch: "ก", name: "กอ ไก่", gloss: "chicken", sound: "g / k", cls: "mid", core: true },
  { ch: "ข", name: "ขอ ไข่", gloss: "egg", sound: "kh / k", cls: "high", core: true },
  { ch: "ฃ", name: "ฃอ ขวด", gloss: "bottle (obsolete)", sound: "kh", cls: "high" },
  { ch: "ค", name: "คอ ควาย", gloss: "buffalo", sound: "kh / k", cls: "low", core: true },
  { ch: "ฅ", name: "ฅอ คน", gloss: "person (obsolete)", sound: "kh", cls: "low" },
  { ch: "ฆ", name: "ฆอ ระฆัง", gloss: "bell", sound: "kh / k", cls: "low" },
  { ch: "ง", name: "งอ งู", gloss: "snake", sound: "ng", cls: "low", core: true },
  { ch: "จ", name: "จอ จาน", gloss: "plate", sound: "j / t", cls: "mid", core: true },
  { ch: "ฉ", name: "ฉอ ฉิ่ง", gloss: "cymbals", sound: "ch", cls: "high" },
  { ch: "ช", name: "ชอ ช้าง", gloss: "elephant", sound: "ch / t", cls: "low", core: true },
  { ch: "ซ", name: "ซอ โซ่", gloss: "chain", sound: "s / t", cls: "low" },
  { ch: "ฌ", name: "ฌอ เฌอ", gloss: "tree", sound: "ch", cls: "low" },
  { ch: "ญ", name: "ญอ หญิง", gloss: "woman", sound: "y / n", cls: "low" },
  { ch: "ฎ", name: "ฎอ ชฎา", gloss: "headdress", sound: "d / t", cls: "mid" },
  { ch: "ฏ", name: "ฏอ ปฏัก", gloss: "goad", sound: "dt / t", cls: "mid" },
  { ch: "ฐ", name: "ฐอ ฐาน", gloss: "pedestal", sound: "th / t", cls: "high" },
  { ch: "ฑ", name: "ฑอ มณโฑ", gloss: "Montho", sound: "th / t", cls: "low" },
  { ch: "ฒ", name: "ฒอ ผู้เฒ่า", gloss: "elder", sound: "th / t", cls: "low" },
  { ch: "ณ", name: "ณอ เณร", gloss: "novice monk", sound: "n", cls: "low" },
  { ch: "ด", name: "ดอ เด็ก", gloss: "child", sound: "d / t", cls: "mid", core: true },
  { ch: "ต", name: "ตอ เต่า", gloss: "turtle", sound: "dt / t", cls: "mid", core: true },
  { ch: "ถ", name: "ถอ ถุง", gloss: "bag", sound: "th / t", cls: "high" },
  { ch: "ท", name: "ทอ ทหาร", gloss: "soldier", sound: "th / t", cls: "low", core: true },
  { ch: "ธ", name: "ธอ ธง", gloss: "flag", sound: "th / t", cls: "low" },
  { ch: "น", name: "นอ หนู", gloss: "mouse", sound: "n", cls: "low", core: true },
  { ch: "บ", name: "บอ ใบไม้", gloss: "leaf", sound: "b / p", cls: "mid", core: true },
  { ch: "ป", name: "ปอ ปลา", gloss: "fish", sound: "bp / p", cls: "mid", core: true },
  { ch: "ผ", name: "ผอ ผึ้ง", gloss: "bee", sound: "ph", cls: "high" },
  { ch: "ฝ", name: "ฝอ ฝา", gloss: "lid", sound: "f", cls: "high" },
  { ch: "พ", name: "พอ พาน", gloss: "tray", sound: "ph / p", cls: "low", core: true },
  { ch: "ฟ", name: "ฟอ ฟัน", gloss: "tooth", sound: "f / p", cls: "low" },
  { ch: "ภ", name: "ภอ สำเภา", gloss: "junk boat", sound: "ph / p", cls: "low" },
  { ch: "ม", name: "มอ ม้า", gloss: "horse", sound: "m", cls: "low", core: true },
  { ch: "ย", name: "ยอ ยักษ์", gloss: "giant", sound: "y", cls: "low", core: true },
  { ch: "ร", name: "รอ เรือ", gloss: "boat", sound: "r / n", cls: "low", core: true },
  { ch: "ล", name: "ลอ ลิง", gloss: "monkey", sound: "l / n", cls: "low", core: true },
  { ch: "ว", name: "วอ แหวน", gloss: "ring", sound: "w", cls: "low", core: true },
  { ch: "ศ", name: "ศอ ศาลา", gloss: "pavilion", sound: "s / t", cls: "high" },
  { ch: "ษ", name: "ษอ ฤๅษี", gloss: "hermit", sound: "s / t", cls: "high" },
  { ch: "ส", name: "สอ เสือ", gloss: "tiger", sound: "s / t", cls: "high", core: true },
  { ch: "ห", name: "หอ หีบ", gloss: "chest", sound: "h", cls: "high", core: true },
  { ch: "ฬ", name: "ฬอ จุฬา", gloss: "kite", sound: "l / n", cls: "low" },
  { ch: "อ", name: "ออ อ่าง", gloss: "basin", sound: "silent / aaw", cls: "mid", core: true },
  { ch: "ฮ", name: "ฮอ นกฮูก", gloss: "owl", sound: "h", cls: "low" },
];

export const vowels: { mark: string; sound: string; length: "short" | "long" | "combo"; thai: string; roman: string; en: string }[] = [
  { mark: "–ะ", sound: "a (short)", length: "short", thai: "มะม่วง", roman: "má-mûang", en: "mango" },
  { mark: "–า", sound: "aa (long)", length: "long", thai: "ข้าว", roman: "khâao", en: "rice" },
  { mark: "–ิ", sound: "i (short)", length: "short", thai: "กิน", roman: "gin", en: "eat" },
  { mark: "–ี", sound: "ii (long)", length: "long", thai: "ดี", roman: "dii", en: "good" },
  { mark: "–ึ", sound: "ue (short)", length: "short", thai: "หนึ่ง", roman: "nùeng", en: "one" },
  { mark: "–ือ", sound: "uue (long)", length: "long", thai: "มือ", roman: "muue", en: "hand" },
  { mark: "–ุ", sound: "u (short)", length: "short", thai: "คุณ", roman: "khun", en: "you" },
  { mark: "–ู", sound: "uu (long)", length: "long", thai: "อยู่", roman: "yùu", en: "located" },
  { mark: "เ–", sound: "ee (long)", length: "long", thai: "เลข", roman: "lêek", en: "number" },
  { mark: "แ–", sound: "aae (long)", length: "long", thai: "แม่", roman: "mâae", en: "mom" },
  { mark: "โ–", sound: "oo (long)", length: "long", thai: "โรงแรม", roman: "roong-raaem", en: "hotel" },
  { mark: "–อ", sound: "aaw (long)", length: "long", thai: "ขอ", roman: "khǎaw", en: "please" },
  { mark: "เ–อ", sound: "oe (long)", length: "long", thai: "เปิด", roman: "bpòet", en: "open" },
  { mark: "เ–ีย", sound: "iia", length: "combo", thai: "เรียน", roman: "riian", en: "study" },
  { mark: "เ–ือ", sound: "uea", length: "combo", thai: "เพื่อน", roman: "phûean", en: "friend" },
  { mark: "–ัว", sound: "ua", length: "combo", thai: "หัว", roman: "hǔa", en: "head" },
  { mark: "ไ– / ใ–", sound: "ai", length: "combo", thai: "ไป", roman: "bpai", en: "go" },
  { mark: "เ–า", sound: "ao", length: "combo", thai: "เช้า", roman: "cháao", en: "morning" },
  { mark: "–ำ", sound: "am", length: "combo", thai: "น้ำ", roman: "náam", en: "water" },
];

export const thaiDigits: [string, string][] = [
  ["๐", "0"],
  ["๑", "1"],
  ["๒", "2"],
  ["๓", "3"],
  ["๔", "4"],
  ["๕", "5"],
  ["๖", "6"],
  ["๗", "7"],
  ["๘", "8"],
  ["๙", "9"],
];
