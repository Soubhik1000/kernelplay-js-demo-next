import { Game } from "kernelplay-js";
import { Level1 } from "./scenes/Level1";
import type { GameModule } from "@/components/examples/GameCanvas";

class MyGame extends Game {
  init() {
    this.sceneManager.addScene(new Level1("Level1"));
    this.sceneManager.startScene("Level1");
  }
}

export const mountGame: GameModule["mountGame"] = (container) => {
  // `container` needs a stable id for kernelplay-js's `container` option,
  // which takes a CSS selector rather than an element reference.
  if (!container.id) container.id = "canvas2d-demo-root";

  const game = new MyGame({
    container: `#${container.id}`,
    width: 800,
    height: 600,
    fps: 90,
  });

  game.start();

  // Returned to GameCanvas and called on unmount (route change, tab
  // switch away from the demo, etc.) so the game loop doesn't keep
  // running against a detached canvas.
  return () => {
    game.stop?.();
  };
};
