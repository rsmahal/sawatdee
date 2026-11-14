# Parallel Multi-Container Deployment Guide

This configuration runs **Sawatdee** (`sawatdee-app`) with its own **PostgreSQL 16** database (`sawatdee-db`) using Docker Compose, mapped to host port `3001` so an existing service on port `3000` stays untouched.

---

## 1. Container Architecture

| Container Name | Image Source | Port / Volume | Purpose |
|----------------|--------------|---------------|---------|
| `sawatdee-app` | Container registry or local build | `0.0.0.0:${HOST_PORT:-3001} -> 3000` | Sawatdee web app + Better Auth API |
| `sawatdee-db` | `postgres:16-alpine` | `sawatdee_pgdata` volume | Persistent PostgreSQL database |

---

## 2. How Login, Progress, and Vocabulary Are Stored

- **Authentication (`migrations/0001_auth.sql`)**:
  - Uses Better Auth (`user`, `session`, `account`, `verification` tables in PostgreSQL) with email & password sign-up/sign-in.
  - Sessions are persisted in PostgreSQL and secured via `__Host-` HTTP-only cookies over HTTPS.
- **Course Curriculum & Vocabulary Catalog (`migrations/0004_curriculum.sql` & `src/lib/curriculum-*.ts`)**:
  - Normalized PostgreSQL tables (`vocabulary`, `course_units`, `course_lessons`, `lesson_vocabulary`, `curriculum_meta`) are idempotently seeded on server startup and queried by `loadCurriculum()`.
  - Covers full **CEFR A1** (12 units, 37 lessons, 321 words) and **CEFR A2** (12 units, 35 lessons, 331 words) — **652 words** total across **72 lessons** — plus all 44 Thai consonants and 19 vowel patterns.
- **Learner Progress & Vocabulary SRS (`migrations/0002_progress.sql` & `migrations/0003_vocabulary.sql`)**:
  - **`learner_progress`**: Stores each user's XP, streak, completed lessons, preferences, and full card snapshot (`payload jsonb`) keyed by `user_id`.
  - **`user_vocabulary`**: Stores a normalized row per learned Thai word per user (`user_id`, `vocabulary_id`, `thai`, `roman`, `en`, `ease`, `interval_days`, `due_date`, `reps`, `lapses`, `seen_date`) linked to canonical `vocabulary(id)` rows.
- **Automatic Migrations**:
  - Every time `sawatdee-app` starts (`docker-entrypoint.sh`), it waits for PostgreSQL to be healthy and runs `node scripts/migrate.mjs` automatically.

---

## 3. Automated Deployment (`.github/workflows/deploy.yml`)

Pushing to `main` automatically:
1. Lints, type-checks, builds the production Docker image, and pushes it to GHCR.
2. Copies `docker-compose.yml` to `$DO_APP_DIR` (default `/var/www/sawatdee`).
3. On the first deploy, generates a `.env` file on the server containing random persistent `POSTGRES_PASSWORD` and `BETTER_AUTH_SECRET` values (subsequent deploys preserve `.env` so user accounts and sessions stay intact).
4. Pulls the new `sawatdee` image and runs `docker compose up -d --remove-orphans`.

### Required GitHub Repository Secrets
In **Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `DO_HOST` | `<your-server-ip>` |
| `DO_USERNAME` | `root` (or your SSH deploy user) |
| `DO_SSH_KEY` | Private SSH key authorized on your server |
| `DO_APP_URL` | Public HTTPS URL (e.g. `https://sawatdee.example.com`) |
| `DO_APP_PORT` | *(Optional, default `3001`)* Host port mapped to container port `3000` |
| `CR_PAT` | *(Optional)* GitHub PAT with `read:packages` if your GHCR package is private |

---

## 4. Verifying on Your Server

Check running containers:
```bash
docker ps
```
You should see `sawatdee-app` and `sawatdee-db`.

Inspect the stored users or vocabulary in PostgreSQL:
```bash
docker exec -it sawatdee-db psql -U sawatdee -d sawatdee -c "select id, email, name from \"user\";"
docker exec -it sawatdee-db psql -U sawatdee -d sawatdee -c "select user_id, thai, en, interval_days, due_date from user_vocabulary;"
```
