"use client";

import { useEffect, useId, useRef, useState } from "react";

export interface GameModule {
  /** Boots the game into the given container element and returns a cleanup fn. */
  mountGame: (container: HTMLElement) => () => void;
}

// Every playable demo's bootstrap module is registered here, by id, so
// pages can request one with `<GameCanvas game="canvas2d" />` instead of
// passing an `import()` closure in as a prop. That distinction matters in
// the App Router: page.tsx files are Server Components (so they can
// export `metadata`), and Server Components cannot pass function props
// to Client Components -- the props have to survive serialization across
// the server/client boundary, and functions don't. Keeping the loader
// map inside this "use client" file sidesteps that entirely.
const GAME_LOADERS: Record<string, () => Promise<GameModule>> = {
  canvas2d: () => import("@/games/canvas2d/main"),
  stub: () => import("@/games/_stub/main"),
};

interface GameCanvasProps {
  /** Key into GAME_LOADERS above. */
  game: keyof typeof GAME_LOADERS | string;
  className?: string;
}

/**
 * Mounts a kernelplay-js game into a plain (non-React-managed) DOM node.
 *
 * Why this shape: the original demo pages had the engine append its own
 * <canvas> to document.body, then a `window.addEventListener('load', ...)`
 * + `setTimeout(..., 100)` hack went and yanked that canvas into the
 * right container after the fact. That's exactly the kind of DOM
 * side-effect that fights React's rendering model.
 *
 * Here, `kernelplay-js`'s `Game` accepts a proper `container` selector
 * (confirmed in the published package -- `new Game({ container: "#id" })`),
 * so we give it a real container div with a stable id and let the engine
 * mount into it directly. No polling, no setTimeout, no fragile DOM
 * queries.
 *
 * The dynamic `import()` inside useEffect means the engine (and any
 * renderer it pulls in, e.g. pixi.js/three) is only ever loaded in the
 * browser, after mount -- it's never touched during the static-export
 * build, so it can't break SSG for the rest of the site.
 */
export function GameCanvas({ game, className }: GameCanvasProps) {
  const reactId = useId();
  const containerId = `game-root-${reactId.replace(/[:]/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const load = GAME_LOADERS[game];
    if (!load) {
      console.error(`GameCanvas: no loader registered for "${game}"`);
      setStatus("error");
      return;
    }

    load()
      .then((mod) => {
        if (cancelled || !containerRef.current) return;
        cleanup = mod.mountGame(containerRef.current);
        setStatus("ready");
      })
      .catch((err) => {
        console.error("Failed to load game module:", err);
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game]);

  return (
    <div
      id={containerId}
      ref={containerRef}
      className={
        className ??
        "game-shadow rounded-xl bg-white border-2 border-indigo-200 flex items-center justify-center min-h-[400px] w-full"
      }
    >
      {status === "loading" && (
        <p className="text-gray-400 text-sm">Loading game engine…</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm">Failed to load the demo. Check the console.</p>
      )}
    </div>
  );
}
