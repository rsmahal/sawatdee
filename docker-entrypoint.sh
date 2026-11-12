#!/bin/sh
set -eu

if [ -n "${DATABASE_URL:-}" ]; then
  echo "[entrypoint] Running database migrations..."
  attempts=0
  until node scripts/migrate.mjs; do
    attempts=$((attempts + 1))
    if [ "$attempts" -ge 15 ]; then
      echo "[entrypoint] Database migration failed after 15 attempts." >&2
      exit 1
    fi
    echo "[entrypoint] Waiting for PostgreSQL (attempt $attempts/15)..."
    sleep 2
  done
fi

exec node scripts/with-app-env.mjs vite preview --host 0.0.0.0 --port 3000
