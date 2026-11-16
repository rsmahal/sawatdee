export type Speaker = "m" | "f";

export type CefrLevel = "A1" | "A2";

export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "pronoun"
  | "number"
  | "particle"
  | "phrase"
  | "classifier"
  | "preposition"
  | "conjunction"
  | "question";

export type Word = {
  id?: string;
  thai: string;
  roman: string;
  en: string;
  level?: CefrLevel;
  pos?: PartOfSpeech;
  topic?: string;
};

export type VocabularyEntry = {
  id: string;
  thai: string;
  roman: string;
  en: string;
  level: CefrLevel;
  pos: PartOfSpeech;
  topic: string;
  lessonId: string;
  unitId: string;
  sortOrder: number;
};

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

export type Unit = {
  id: string;
  level: CefrLevel;
  kicker: string;
  title: string;
  blurb: string;
};

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

export type LevelInfo = {
  id: CefrLevel;
  title: string;
  blurb: string;
};

export type CurriculumCatalog = {
  version: string;
  units: Unit[];
  lessons: Lesson[];
  vocabulary: VocabularyEntry[];
};

export type DialogueLine = {
  speaker: "npc" | "user";
  /** Thai text segments; Tok lets user lines adapt ฉัน/ผม and ค่ะ/ครับ to the learner's speaker setting */
  tokens: Tok[];
  /** Custom display/roman override if needed, otherwise joined from tokens */
  roman: string;
  en: string;
};

export type ConversationBlankPart =
  | { kind: "fixed"; token: Tok }
  | { kind: "blank"; token: Tok };

export type ConversationTurn =
  | {
      kind: "line";
      line: DialogueLine;
      note?: string;
    }
  | {
      kind: "reply-blank";
      prompt: string;
      /** Sentence template mixing fixed context words and at least 2 blank slots */
      parts: ConversationBlankPart[];
      /** Thai distractor words mixed into the answer bank alongside the blank words */
      extra: Tok[];
      roman: string;
      en: string;
      coach?: string;
    }
  | {
      kind: "reply-tiles";
      prompt: string;
      answer: Tok[];
      extra: Tok[];
      roman: string;
      en: string;
      coach?: string;
    };

export type Conversation = {
  id: string;
  unitId: string;
  level: CefrLevel;
  title: string;
  setting: string;
  npcName: string;
  npcRole: string;
  npcSpeaker: Speaker;
  /** Core words practiced; all lessons introducing these words must be completed to unlock */
  words: Word[];
  turns: ConversationTurn[];
};

