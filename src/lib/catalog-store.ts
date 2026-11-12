import { create } from "zustand";
import { staticCurriculumCatalog, type CurriculumCatalog } from "./curriculum";

type CatalogState = CurriculumCatalog & {
  fromDatabase: boolean;
  setCatalog: (catalog: CurriculumCatalog) => void;
};

export const useCatalog = create<CatalogState>((set) => ({
  ...staticCurriculumCatalog,
  fromDatabase: false,
  setCatalog: (catalog) =>
    set({
      version: catalog.version,
      units: catalog.units,
      lessons: catalog.lessons,
      vocabulary: catalog.vocabulary,
      fromDatabase: true,
    }),
}));
