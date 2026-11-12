# Parallel Multi-Container Deployment Guide (DigitalOcean)

This configuration runs **Sawatdee** (`sawatdee-app`) with its own **PostgreSQL 16** database (`sawatdee-db`) in parallel with your existing container (`mario-kart-app`) on your DigitalOcean droplet.

---

## 1. Container Architecture on Your Droplet

| Container Name | Image Source | Port / Volume | Purpose |
|----------------|--------------|---------------|---------|
| `mario-kart-app` | `ghcr.io/rsmahal/leagueoflegendsv2:latest` | `127.0.0.1:3000 -> 3000` | Existing app (untouched) |
| `sawatdee-app` | `ghcr.io/rsmahal/sawatdee:latest` | `0.0.0.0:3001 -> 3000` | Sawatdee web app + Better Auth API |
| `sawatdee-db` | `postgres:16-alpine` | `sawatdee_pgdata` volume | Persistent PostgreSQL database |

---

## 2. How Login, Progress, and Vocabulary Are Stored

- **Authentication (`migrations/0001_auth.sql`)**:
  - Uses Better Auth (`user`, `session`, `account`, `verification` tables in PostgreSQL) with email & password sign-up/sign-in.
  - Sessions are persisted in PostgreSQL and secured via `__Host-` HTTP-only cookies over HTTPS (`https://sawatdee.lolgames.info`).
- **Course Curriculum (`src/lib/curriculum.ts`)**:
  - Contains the structured Thai lessons, script, romanization, tones, and exercises.
- **Learner Progress & Vocabulary SRS (`migrations/0002_progress.sql` & `migrations/0003_vocabulary.sql`)**:
  - **`learner_progress`**: Stores each user's XP, streak, completed lessons, preferences, and full card snapshot (`payload jsonb`) keyed by `user_id`.
  - **`user_vocabulary`**: Stores a normalized row per learned Thai word per user (`user_id`, `thai`, `roman`, `en`, `ease`, `interval_days`, `due_date`, `reps`, `lapses`, `seen_date`) for spaced-repetition review scheduling.
- **Automatic Migrations**:
  - Every time `sawatdee-app` starts (`docker-entrypoint.sh`), it waits for PostgreSQL to be healthy and runs `node scripts/migrate.mjs` automatically.

---

## 3. Automated Deployment (`.github/workflows/deploy.yml`)

Pushing to `main` automatically:
1. Lints, type-checks, builds the production Docker image, and pushes it to `ghcr.io/rsmahal/sawatdee:latest`.
2. Copies `docker-compose.yml` to `$DO_APP_DIR` (default `/var/www/sawatdee`).
3. On the first deploy, generates a `.env` file on the droplet containing random persistent `POSTGRES_PASSWORD` and `BETTER_AUTH_SECRET` values (subsequent deploys preserve `.env` so user accounts and sessions stay intact).
4. Pulls the new `sawatdee` image and runs `docker compose up -d --remove-orphans`, leaving `mario-kart-app` untouched.

### Required GitHub Repository Secrets
In **Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `DO_HOST` | `159.65.23.199` |
| `DO_USERNAME` | `root` |
| `DO_SSH_KEY` | Private SSH key authorized on your droplet |
| `DO_APP_URL` | *(Optional, default `https://sawatdee.lolgames.info`)* Public HTTPS URL |
| `DO_APP_PORT` | *(Optional, default `3001`)* Host port mapped to container port `3000` |
| `CR_PAT` | *(Optional)* GitHub PAT with `read:packages` if your GHCR package is private |

---

## 4. Verifying on Your Droplet

Check running containers:
```bash
docker ps
```
You should see `sawatdee-app`, `sawatdee-db`, and `mario-kart-app`.

Inspect the stored users or vocabulary in PostgreSQL:
```bash
docker exec -it sawatdee-db psql -U sawatdee -d sawatdee -c "select id, email, name from \"user\";"
docker exec -it sawatdee-db psql -U sawatdee -d sawatdee -c "select user_id, thai, en, interval_days, due_date from user_vocabulary;"
```

Check memory headroom on your 512MB droplet:
```bash
free -h
```
*(If your droplet does not have swap enabled yet, adding a 1GB swapfile provides extra safety headroom for running multiple containers.)*
