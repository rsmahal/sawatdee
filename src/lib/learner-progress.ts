import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { parseLearning, type Learning } from "@/lib/progress";

export const loadProgress = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<Learning | null> => {
    const sql = await getSql();
    const rows = await sql<{ payload: unknown }>`
      select payload from learner_progress where user_id = ${context.userId}
    `;
    const payload = rows[0]?.payload;
    const raw = typeof payload === "string" ? safeJson(payload) : payload;
    return parseLearning(raw);
  });

export const saveProgress = createServerFn({ method: "POST" })
  .validator((input: unknown): Learning => {
    const learning = parseLearning(input);
    if (!learning) throw new Error("Invalid progress");
    return learning;
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const payload = JSON.stringify(data);
    const cardList = Object.values(data.cards);
    await sql`
      insert into learner_progress (user_id, payload)
      values (${context.userId}, ${payload}::jsonb)
      on conflict (user_id) do update
        set payload = excluded.payload, updated_at = now()
    `;
    if (cardList.length === 0) {
      await sql`delete from user_vocabulary where user_id = ${context.userId}`;
    } else {
      const cardsJson = JSON.stringify(cardList);
      await sql.query(
        `insert into user_vocabulary (
          user_id, thai, roman, en, ease, interval_days, due_date, reps, lapses, seen_date, updated_at
        )
        select
          $1,
          x.thai,
          x.roman,
          x.en,
          x.ease,
          x.interval,
          x.due,
          x.reps,
          x.lapses,
          x.seen,
          now()
        from jsonb_to_recordset($2::jsonb) as x(
          thai text,
          roman text,
          en text,
          ease real,
          interval integer,
          due text,
          reps integer,
          lapses integer,
          seen text
        )
        on conflict (user_id, thai) do update set
          roman = excluded.roman,
          en = excluded.en,
          ease = excluded.ease,
          interval_days = excluded.interval_days,
          due_date = excluded.due_date,
          reps = excluded.reps,
          lapses = excluded.lapses,
          seen_date = excluded.seen_date,
          updated_at = now()`,
        [context.userId, cardsJson],
      );
    }
    return { ok: true as const };
  });

function safeJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}
