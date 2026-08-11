import type { GameModule } from "@/components/examples/GameCanvas";

/**
 * Placeholder mount function for demo pages that still need their engine
 * logic ported over (see the TODO comment on each page that imports
 * this). Swap it for a real module following the pattern in
 * src/games/canvas2d/main.ts — the shape GameCanvas expects is just
 * `{ mountGame(container) => cleanupFn }`.
 */
export const mountGame: GameModule["mountGame"] = (container) => {
  container.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:48px;color:#6b7280;font-family:system-ui;">
      <div style="font-size:2rem;">🚧</div>
      <p style="font-weight:600;">Demo not yet ported</p>
      <p style="font-size:0.85rem;max-width:320px;text-align:center;">
        Port this renderer's scene modules into src/games/, following the
        same pattern used for the Canvas2D example.
      </p>
    </div>
  `;
  return () => {
    container.innerHTML = "";
  };
};
