import type { Metadata } from "next";
import { ExamplesShell } from "@/components/examples/ExamplesShell";
import { ExampleDemoLayout, type CodeTab } from "@/components/examples/ExampleDemoLayout";
import { GameCanvas } from "@/components/examples/GameCanvas";

export const metadata: Metadata = {
  title: "Canvas 2D Renderer",
  description: "KernelPlay.js Canvas 2D rendering example — platformer physics, collisions, and player input.",
};

const CODE_TABS: CodeTab[] = [
  {
    filename: "main.ts",
    language: "js",
    code: `import { Game } from "kernelplay-js";
import { Level1 } from "./scenes/Level1";

class MyGame extends Game {
  init() {
    this.sceneManager.addScene(new Level1("Level1"));
    this.sceneManager.startScene("Level1");
  }
}

export const mountGame = (container) => {
  const game = new MyGame({
    container: \`#\${container.id}\`,
    width: 800,
    height: 600,
    fps: 90,
  });
  game.start();
  return () => game.stop?.();
};`,
  },
  {
    filename: "Level1.ts",
    language: "js",
    code: `export class Level1 extends Scene {
  init() {
    const player = new Player(400, 100);

    const camera = new Entity("MainCamera");
    camera.addComponent("transform", new TransformComponent({
      position: { x: 400, y: 300, z: 10 }
    }));
    camera.addComponent("camera", new CameraComponent({
      width: 800, height: 600, isPrimary: true, target: player,
    }));

    this.addEntity(camera);
    this.addEntity(player);

    this.addEntity(new Box(400, 300, "Wall"));
    this.addEntity(new Box(650, 370, "Wall"));
    this.addEntity(new Box(650, 170, "Wall"));
    this.addEntity(new Box(150, 170, "Wall"));
    this.addEntity(new Box(150, 360, "Wall"));

    this.addEntity(new Box(650, 120, "Coin"));
    this.addEntity(new Box(150, 315, "Coin"));
  }
}`,
  },
  {
    filename: "PlayerController.ts",
    language: "js",
    code: `export class PlayerController extends ScriptComponent {
  update() {
    const rb = this.entity.getComponent("rigidbody2d");
    rb.velocity.x = 0;

    if (Keyboard.isPressed("ArrowRight")) rb.velocity.x = 200;
    if (Keyboard.isPressed("ArrowLeft")) rb.velocity.x = -200;

    if (rb.isGrounded && Keyboard.isPressed(" ")) {
      rb.addForce(0, -600, "impulse");
    }
  }

  onTriggerEnter(other) {
    if (other.tag === "coin") {
      other.destroy();
      console.log("Coin collected !!!");
    }
  }
}`,
  },
];

export default function Canvas2DExamplePage() {
  return (
    <ExamplesShell active="Canvas2D">
      <ExampleDemoLayout
        title="Canvas 2D Renderer"
        subtitle="High-performance 2D graphics rendering"
        fullscreenHref="/fullscreen/Canvas2D"
        codeTabs={CODE_TABS}
      >
        <GameCanvas game="canvas2d" />
      </ExampleDemoLayout>
    </ExamplesShell>
  );
}
