import { createServerFn } from "@tanstack/react-start";
import type { CurriculumCatalog } from "./curriculum-types";

export const loadCurriculum = createServerFn({ method: "GET" }).handler(
  async (): Promise<CurriculumCatalog> => {
    const { readCurriculumFromDb } = await import("./curriculum-store.server");
    return readCurriculumFromDb();
  },
);
