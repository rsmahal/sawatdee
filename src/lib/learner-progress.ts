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
    await sql`
      insert into learner_progress (user_id, payload)
      values (${context.userId}, ${payload}::jsonb)
      on conflict (user_id) do update
        set payload = excluded.payload, updated_at = now()
    `;
    return { ok: true as const };
  });

function safeJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}
