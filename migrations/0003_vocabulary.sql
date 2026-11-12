-- Normalized per-user vocabulary flashcards (SRS deck) synced alongside learner_progress.
create table if not exists user_vocabulary (
  user_id text not null,
  thai text not null,
  roman text not null,
  en text not null,
  ease real not null default 2.5,
  interval_days integer not null default 0,
  due_date text not null,
  reps integer not null default 0,
  lapses integer not null default 0,
  seen_date text not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, thai)
);

create index if not exists user_vocabulary_due_idx
  on user_vocabulary (user_id, due_date);
