import type { ComponentType } from "react";

import GettingStartedDoc from "./getting-started";
import CoreConceptsDoc from "./core-concepts";
import ComponentsDoc from "./components";
import PhysicsDoc from "./physics";

// Add an entry here each time you finish porting a docs/<slug>/index.html
// page into src/content/docs/<slug>.tsx. Slugs not listed here fall back
// to <DocPlaceholder> in app/docs/[slug]/page.tsx.
export const DOC_CONTENT: Record<string, ComponentType> = {
  "getting-started": GettingStartedDoc,
  "core-concepts": CoreConceptsDoc,
  components: ComponentsDoc,
  physics: PhysicsDoc,
};
