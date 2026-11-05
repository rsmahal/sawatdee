import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { r as getSql } from "./db-yRfUMXAR.mjs";
import { o as parseLearning, t as authMiddleware } from "./progress-BpyYwz8Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learner-progress-CTTTghU6.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loadProgress_createServerFn_handler = createServerRpc({
	id: "051aa46e3ecf11264c3d7e62a6ea80618cdeb21a96aa3fb3ae85f924992207ce",
	name: "loadProgress",
	filename: "src/lib/learner-progress.ts"
}, (opts) => loadProgress.__executeServer(opts));
var loadProgress = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(loadProgress_createServerFn_handler, async ({ context }) => {
	const payload = (await (await getSql())`
      select payload from learner_progress where user_id = ${context.userId}
    `)[0]?.payload;
	const raw = typeof payload === "string" ? safeJson(payload) : payload;
	return parseLearning(raw);
});
var saveProgress_createServerFn_handler = createServerRpc({
	id: "89a9b707bb1464d1fa4a04be9382ae4c7fb2a8b57950e23a3285a2f8f31d52a8",
	name: "saveProgress",
	filename: "src/lib/learner-progress.ts"
}, (opts) => saveProgress.__executeServer(opts));
var saveProgress = createServerFn({ method: "POST" }).validator((input) => {
	const learning = parseLearning(input);
	if (!learning) throw new Error("Invalid progress");
	return learning;
}).middleware([authMiddleware]).handler(saveProgress_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	const payload = JSON.stringify(data);
	await sql`
      insert into learner_progress (user_id, payload)
      values (${context.userId}, ${payload}::jsonb)
      on conflict (user_id) do update
        set payload = excluded.payload, updated_at = now()
    `;
	return { ok: true };
});
function safeJson(value) {
	try {
		return JSON.parse(value);
	} catch {
		return null;
	}
}
//#endregion
export { loadProgress_createServerFn_handler, saveProgress_createServerFn_handler };
