export interface DocMeta {
  slug: string;
  title: string;
  navLabel: string; // shorter label used in the sidebar
  emoji: string;
  description: string;
}

// This array replaces THREE things that used to drift out of sync in the
// vanilla site:
//   1. The 13 <a> links hand-copied into the sidebar `.doc-nav` on every
//      single docs/<slug>/index.html page (13 pages x 13 links each).
//   2. The 13 `.doc-card` link blocks on docs/index.html.
//   3. Implicit "prev/next" ordering that was manually hardcoded per page.
// Now: reorder/add/remove a doc by editing this one array. The sidebar,
// the index grid, and prev/next links all derive from it automatically.
export const DOCS: DocMeta[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    navLabel: "Getting Started",
    emoji: "🚀",
    description: "Install the library and build your first game. npm, CDN, and basic setup.",
  },
  {
    slug: "core-concepts",
    title: "Core Concepts",
    navLabel: "Core Concepts",
    emoji: "🧠",
    description: "Game, Scene, Entity, Component — the four pillars of KernelPlay.js architecture.",
  },
  {
    slug: "components",
    title: "Components",
    navLabel: "Components",
    emoji: "🔧",
    description: "Transform, Collider, Rigidbody2D, BoxRenderer, and ScriptComponent.",
  },
  {
    slug: "renderers",
    title: "Renderers",
    navLabel: "Renderers",
    emoji: "🎨",
    description: "Canvas 2D, WebGL 2D, and Three.js 3D rendering backends.",
  },
  {
    slug: "physics",
    title: "Physics",
    navLabel: "Physics",
    emoji: "⚙️",
    description: "Gravity, velocity, collision detection, triggers, and rigidbodies.",
  },
  {
    slug: "input",
    title: "Input System",
    navLabel: "Input System",
    emoji: "🎮",
    description: "Keyboard, mouse, gamepad, and raycast picking from scripts.",
  },
  {
    slug: "helper-classes",
    title: "Helper Classes",
    navLabel: "Helper Classes",
    emoji: "🛠️",
    description: "Utility classes for common tasks: math, random, asset loading, and more.",
  },
  {
    slug: "multiple-cameras",
    title: "Multiple Cameras",
    navLabel: "Multiple Cameras Setup",
    emoji: "📸",
    description: "Implement split-screen, minimaps, or cinematic views with multiple cameras.",
  },
  {
    slug: "prop-injection",
    title: "Prop Injection",
    navLabel: "Prop Injection System",
    emoji: "🔌",
    description: "Configure entities and components dynamically with a flexible property injection system.",
  },
  {
    slug: "lifecycle",
    title: "Script Lifecycle",
    navLabel: "Script Lifecycle",
    emoji: "🔄",
    description: "onAttach, onStart, update, lateUpdate, onCollision, onDestroy.",
  },
  {
    slug: "animation",
    title: "Advanced Animation",
    navLabel: "Advanced Animation",
    emoji: "🎬",
    description: "Explore keyframe animation, animation blending, and custom animation curves.",
  },
  {
    slug: "sprites",
    title: "Sprite Management",
    navLabel: "Sprite Management",
    emoji: "🖼️",
    description: "Learn to use sprite sheets, atlases, and efficient sprite rendering techniques.",
  },
  {
    slug: "api",
    title: "API Reference",
    navLabel: "API Reference",
    emoji: "📖",
    description: "Complete method tables for Entity, Scene, SceneManager, and more.",
  },
];

export function getDocBySlug(slug: string): DocMeta | undefined {
  return DOCS.find((d) => d.slug === slug);
}

export function getAdjacentDocs(slug: string): { prev?: DocMeta; next?: DocMeta } {
  const index = DOCS.findIndex((d) => d.slug === slug);
  if (index === -1) return {};
  return { prev: DOCS[index - 1], next: DOCS[index + 1] };
}
