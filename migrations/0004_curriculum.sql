-- Canonical CEFR curriculum and lexical vocabulary catalog in PostgreSQL.
create table if not exists vocabulary (
  id text primary key,
  thai text not null unique,
  roman text not null,
  en text not null,
  cefr_level text not null check (cefr_level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  part_of_speech text not null,
  topic text not null,
  sort_order integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists vocabulary_level_topic_idx
  on vocabulary (cefr_level, topic, sort_order);

create table if not exists course_units (
  id text primary key,
  level text not null check (level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  kicker text not null,
  title text not null,
  blurb text not null,
  sort_order integer not null,
  updated_at timestamptz not null default now()
);

create index if not exists course_units_level_sort_idx
  on course_units (level, sort_order);

create table if not exists course_lessons (
  id text primary key,
  unit_id text not null references course_units(id) on delete cascade,
  title text not null,
  subtitle text not null,
  tip text not null,
  is_checkpoint boolean not null default false,
  exercises jsonb not null default '[]'::jsonb,
  sort_order integer not null,
  updated_at timestamptz not null default now()
);

create index if not exists course_lessons_unit_sort_idx
  on course_lessons (unit_id, sort_order);

create table if not exists lesson_vocabulary (
  lesson_id text not null references course_lessons(id) on delete cascade,
  vocabulary_id text not null references vocabulary(id) on delete cascade,
  sort_order integer not null,
  primary key (lesson_id, vocabulary_id)
);

create table if not exists curriculum_meta (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

alter table user_vocabulary
  add column if not exists vocabulary_id text references vocabulary(id) on delete set null;

create index if not exists user_vocabulary_vocab_id_idx
  on user_vocabulary (vocabulary_id);
