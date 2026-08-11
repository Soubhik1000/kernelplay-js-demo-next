import { CodeBlock } from "@/components/ui/CodeBlock";

const NPM_INSTALL = `npm install kernelplay-js --save`;

const CDN_INSTALL = `<script type="importmap">
{
  "imports": {
    "kernelplay-js": "https://cdn.jsdelivr.net/npm/kernelplay-js/dist/kernelplay.es.js"
  }
}
</script>`;

const BASIC_SETUP = `import { Game, Scene, Entity } from "kernelplay-js";
import { TransformComponent, BoxRenderComponent } from "kernelplay-js";

class MyScene extends Scene {
  init() {
    const box = new Entity();
    box.addComponent("transform", new TransformComponent({
      position: { x: 400, y: 300 }
    }));
    box.addComponent("renderer", new BoxRenderComponent({ color: "red" }));
    this.addEntity(box);
  }
}

class MyGame extends Game {
  init() {
    const scene = new MyScene("Main");
    this.sceneManager.addScene(scene);
    this.sceneManager.startScene("Main");
  }
}

new MyGame({ width: 800, height: 600, fps: 60 }).start();`;

export default function GettingStartedDoc() {
  return (
    <>
      <h1 className="page-title gradient-text">Getting Started</h1>
      <p className="text-gray-500 text-[1.05rem] mb-8">
        Install KernelPlay.js and build your first game in minutes.
      </p>

      <h2 className="section-title">Installation</h2>
      <p className="text-gray-700 mb-4">
        Install via npm (recommended) or use the CDN for quick prototyping.
      </p>

      <CodeBlock code={NPM_INSTALL} language="bash" />
      <CodeBlock code={CDN_INSTALL} language="html" />

      <h2 className="section-title mt-10">Basic Setup</h2>
      <p className="text-gray-700 mb-4">
        Create a scene, add an entity with components, and start the game loop.
      </p>

      <CodeBlock code={BASIC_SETUP} language="js" />

      <div
        className="info-card mt-8"
        style={{ background: "#f0fdf4", borderColor: "#bbf7d0" }}
      >
        <p className="text-green-800 font-semibold mb-1">✅ That&apos;s all it takes!</p>
        <p className="text-green-700 text-sm">
          Your game loop, canvas, and renderer are all handled automatically. Continue reading
          to explore components, physics, and scripting.
        </p>
      </div>
    </>
  );
}
