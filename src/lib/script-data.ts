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

export const consonants: {
  ch: string;
  name: string;
  gloss: string;
  sound: string;
  cls: ConsonantClass;
}[] = [
  { ch: "ก", name: "กอ ไก่", gloss: "chicken", sound: "g", cls: "mid" },
  { ch: "ข", name: "ขอ ไข่", gloss: "egg", sound: "kh", cls: "high" },
  { ch: "ค", name: "คอ ควาย", gloss: "buffalo", sound: "kh", cls: "low" },
  { ch: "ง", name: "งอ งู", gloss: "snake", sound: "ng", cls: "low" },
  { ch: "จ", name: "จอ จาน", gloss: "plate", sound: "j", cls: "mid" },
  { ch: "ช", name: "ชอ ช้าง", gloss: "elephant", sound: "ch", cls: "low" },
  { ch: "ด", name: "ดอ เด็ก", gloss: "child", sound: "d", cls: "mid" },
  { ch: "ต", name: "ตอ เต่า", gloss: "turtle", sound: "dt", cls: "mid" },
  { ch: "ท", name: "ทอ ทหาร", gloss: "soldier", sound: "th", cls: "low" },
  { ch: "น", name: "นอ หนู", gloss: "mouse", sound: "n", cls: "low" },
  { ch: "บ", name: "บอ ใบไม้", gloss: "leaf", sound: "b", cls: "mid" },
  { ch: "ป", name: "ปอ ปลา", gloss: "fish", sound: "bp", cls: "mid" },
  { ch: "พ", name: "พอ พาน", gloss: "phan tray", sound: "ph", cls: "low" },
  { ch: "ม", name: "มอ ม้า", gloss: "horse", sound: "m", cls: "low" },
  { ch: "ย", name: "ยอ ยักษ์", gloss: "giant", sound: "y", cls: "low" },
  { ch: "ร", name: "รอ เรือ", gloss: "boat", sound: "r", cls: "low" },
  { ch: "ล", name: "ลอ ลิง", gloss: "monkey", sound: "l", cls: "low" },
  { ch: "ว", name: "วอ แหวน", gloss: "ring", sound: "w", cls: "low" },
  { ch: "ส", name: "สอ เสือ", gloss: "tiger", sound: "s", cls: "high" },
  { ch: "ห", name: "หอ หีบ", gloss: "chest", sound: "h", cls: "high" },
  { ch: "อ", name: "ออ อ่าง", gloss: "basin", sound: "silent / a", cls: "mid" },
];

export const vowels: { mark: string; sound: string; thai: string; roman: string; en: string }[] = [
  { mark: "า", sound: "aa", thai: "ข้าว", roman: "khâao", en: "rice" },
  { mark: "ิ", sound: "i", thai: "กิน", roman: "gin", en: "eat" },
  { mark: "ี", sound: "ii", thai: "ดี", roman: "dii", en: "good" },
  { mark: "ุ", sound: "u", thai: "คุณ", roman: "khun", en: "you" },
  { mark: "ู", sound: "uu", thai: "อยู่", roman: "yûu", en: "located" },
  { mark: "เ", sound: "e", thai: "เจ็ด", roman: "jèt", en: "seven" },
  { mark: "แ", sound: "ae", thai: "แม่", roman: "mâae", en: "mom" },
  { mark: "ไ", sound: "ai", thai: "ไป", roman: "bpai", en: "go" },
  { mark: "ำ", sound: "am", thai: "น้ำ", roman: "náam", en: "water" },
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
