# Sawatdee

A pocket-friendly and desktop-ready course for everyday spoken Thai. Progress through a structured **CEFR A1 & A2** curriculum (**24 units**, **72 lessons**, **652 words**), practice Thai script and tones, and retain vocabulary with spaced repetition backed by PostgreSQL.

## Features

- **Full CEFR A1 & A2 Curriculum**:
  - **CEFR A1 (12 units · 37 lessons · 321 words)**: Greetings, numbers, prices, time, food, directions, routines, health, grammar connectors, and shopping.
  - **CEFR A2 (12 units · 35 lessons · 331 words)**: Cooking & dietary requests, flights & transit, social manners (`เกรงใจ`), comparisons & clauses, work & tech, renting & errands, sizing & QR/banking, pharmacy & safety, personality & opinions, culture, and storytelling.
- **Active Exercise Coverage (100%)**: Every word introduced in a lesson is actively tested in multiple choice (`th-en`, `en-th`, `listen`), matching `pairs`, and phrase-building `tiles`—adapting pronouns (`ผม` / `ดิฉัน`) and polite particles (`ครับ` / `ค่ะ` / `คะ`) to your chosen speaker voice.
- **Pre-Generated Thai Audio**: Plays pre-generated `24 kHz` Thai `.mp3` clips (`public/audio/th/*.mp3`) across lesson intros, listening/choice prompts, matching cards, phrase-building tiles, flashcards, Script Lab, and the Word Bank. Supports separate **Woman (`th-TH-PremwadeeNeural`)** and **Man (`th-TH-NiwatNeural`)** neural voice packs (`public/audio/th/f/` and `public/audio/th/m/`) synced to your Profile speaker setting, with automatic fallback to the bundled base `.mp3` pack and browser Web Speech API (`th-TH`).
- **Spaced Repetition & Word Bank**: Opening a lesson adds its words to your Review deck (1 day → 3 days → up to 90 days) and lets you browse, search, and filter all **652 words** by CEFR level and topic.
- **Thai Script Lab**: All **44 consonants** (with mid/high/low tone classes and `Core 21` / `All 44` toggle), **19 vowel patterns**, **5 tones** with an interactive tone drill, Thai digits, and instant switching between **modern** (loopless) and **traditional** (looped) Thai fonts.
- **Responsive Desktop & Mobile UI**: Desktop sidebar workspace with 2-column unit grids and centered lesson stage, plus a touch-friendly mobile layout with light and dark modes.
- **Account Persistence**: Email/password authentication (via Better Auth) and PostgreSQL storage (`vocabulary`, `course_units`, `course_lessons`, `lesson_vocabulary`, `learner_progress`, and `user_vocabulary`).

## Tech Stack

- **Frontend / SSR**: React 19, TanStack Start, TanStack Router, Zustand, Tailwind CSS v4
- **Auth & Database**: Better Auth, PostgreSQL (`pg` in production, embedded PGLite automatically in local/preview environments when `DATABASE_URL` is unset)
- **Audio**: Pre-generated static Thai `.mp3` audio clips (`npm run audio:generate` for base fallback + Edge Neural if reachable, `npm run audio:generate:edge` for dual female/male `PremwadeeNeural` & `NiwatNeural` packs) with browser `window.speechSynthesis` fallback

## Run Locally

```bash
npm install
npm run dev
```

The dev server listens on `http://localhost:3000`. Without `DATABASE_URL` set, it automatically uses an embedded PGLite database and runs `migrations/*.sql` on startup.

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Self-Hosting with Docker

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the Docker Compose (`sawatdee-app` + `postgres:16-alpine`) and GitHub Actions setup. Runtime secrets (`POSTGRES_PASSWORD`, `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL`) live in a server-local `.env` file (ignored by Git) and are never stored in this repository.
