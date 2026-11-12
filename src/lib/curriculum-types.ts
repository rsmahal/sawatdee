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
