import { CodeBlock } from "@/components/ui/CodeBlock";

const NPM_CODE = `npm install kernelplay-js --save`;

const CDN_CODE = `<script type="importmap">
{
  "imports": {
    "kernelplay-js": "https://cdn.jsdelivr.net/npm/kernelplay-js@latest/dist/kernelplay.es.js"
  }
}
</script>`;

const EXAMPLE_CODE = `import { Game, Scene, Entity } from "kernelplay-js";
import { TransformComponent, BoxRenderComponent } from "kernelplay-js";

class MyScene extends Scene {
  init() {
    const box = new Entity();
    box.addComponent("transform", new TransformComponent({
      position: { x: 300, y: 200 }
    }));
    box.addComponent("renderer", new BoxRenderComponent({color:"red"}));

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

export function QuickStart() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-gray-600">Install via npm or use CDN - your choice!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-indigo-400 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 12v12h24V0H0zm19.5 8.5h-15v-1.5h15v1.5zm0-3h-15v-1.5h15v1.5zm0-3h-15v-1.5h15v1.5zm0-3h-15v-1.5h15v1.5zm0-3h-15v-1.5h15v1.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">NPM Install</h3>
            </div>
            <CodeBlock code={NPM_CODE} language="bash" />
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-indigo-400 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 2.15l8.25 4.85v9l-8.25 4.85L3.75 16v-9L12 2.15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">CDN Import</h3>
            </div>
            <CodeBlock code={CDN_CODE} language="html" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border-2 border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Hello World Example</h3>
          <CodeBlock code={EXAMPLE_CODE} filename="main.js" />
        </div>
      </div>
    </section>
  );
}
