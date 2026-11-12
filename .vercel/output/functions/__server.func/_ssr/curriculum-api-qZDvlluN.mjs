import { t as createServerRpc } from "./createServerRpc-CcwiDFzT.mjs";
import { r as createServerFn } from "./ssr.mjs";
// node_modules/.nitro/vite/services/ssr/assets/curriculum-api-qZDvlluN.js
var loadCurriculum_createServerFn_handler = createServerRpc({
	id: "880f58976003d284c9c5ea0bbf786ffa13b2036ada12da19e05c1a0c50dcd649",
	name: "loadCurriculum",
	filename: "src/lib/curriculum-api.ts"
}, (opts) => loadCurriculum.__executeServer(opts));
var loadCurriculum = createServerFn({ method: "GET" }).handler(loadCurriculum_createServerFn_handler, async () => {
	const { readCurriculumFromDb } = await import("./curriculum-store.server-BDMa7_Kx.mjs");
	return readCurriculumFromDb();
});
export { loadCurriculum_createServerFn_handler };
