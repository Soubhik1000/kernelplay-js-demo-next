export interface FullscreenGame {
  slug: string;
  title: string;
  description: string;
  /** Matches a key in GAME_LOADERS inside components/examples/GameCanvas.tsx */
  gameLoaderId: string;
}

// Mirrors src/content/docs/meta.ts's role: one array drives both
// generateStaticParams (so every game gets its own pre-rendered
// /fullscreen/<slug>/index.html) and the card grid on the hub page.
export const FULLSCREEN_GAMES: FullscreenGame[] = [
  {
    slug: "Canvas2D",
    title: "Canvas 2D",
    description: "The platformer demo, rendered edge-to-edge with no chrome.",
    gameLoaderId: "canvas2d",
  },
  {
    slug: "PIXI2D",
    title: "Pixi.js 2D",
    description: "WebGL-accelerated 2D rendering, full screen.",
    gameLoaderId: "stub",
  },
  {
    slug: "THREE3D",
    title: "Three.js 3D",
    description: "Full 3D scene rendering, full screen.",
    gameLoaderId: "stub",
  },
  {
    slug: "BenchmarkCanvas2D",
    title: "Stress Test",
    description: "Canvas 2D performance benchmark, full screen.",
    gameLoaderId: "stub",
  },
  {
    slug: "parkour-boy",
    title: "Parkour Boy",
    description: "The full platformer game, full screen.",
    gameLoaderId: "stub",
  },
  {
    slug: "zombie-hunter",
    title: "Zombie Hunter",
    description: "The full top-down shooter, full screen.",
    gameLoaderId: "stub",
  },
];

export function getFullscreenGame(slug: string) {
  return FULLSCREEN_GAMES.find((g) => g.slug === slug);
}
