import Link from "next/link";
import { CodeBlock } from "@/components/ui/CodeBlock";

const TRANSFORM_CODE = `import { TransformComponent } from "kernelplay-js";

entity.addComponent("transform", new TransformComponent({
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 }
});

// Access later
const t = entity.getComponent("transform");
t.position.x += 5;
t.rotation.z += 0.01;`;

const COLLIDER_CODE = `import { ColliderComponent } from "kernelplay-js";

entity.addComponent("collider", new ColliderComponent({
  width: 50,
  height: 50,
  isTrigger: false,   // true = trigger events only, no physics push
  offset: { x: 0, y: 0 }
}));`;

const RIGIDBODY_CODE = `import { Rigidbody2DComponent } from "kernelplay-js";

entity.addComponent("rigidbody2d", new Rigidbody2DComponent({
  mass: 1,
  gravityScale: 1,
  isKinematic: false,  // kinematic = not affected by gravity/forces
  drag: 0.05,
  useGravity: true
}));

// Manipulate at runtime
const rb = entity.getComponent("rigidbody2d");
rb.velocity.x = 200;
rb.addForce({ x: 0, y: -500 });  // impulse upward`;

const BOX_RENDER_CODE = `import { BoxRenderComponent } from "kernelplay-js";

entity.addComponent("renderer", new BoxRenderComponent(
  { color: "red" }
));`;

const SCRIPT_CODE = `import { ScriptComponent } from "kernelplay-js";

class Spinner extends ScriptComponent {
  update(dt) {
    const t = this.entity.getComponent("transform");
    t.rotation.z += 2 * dt; // 2 radians/sec
  }
}

entity.addComponent("script", new Spinner());`;

export default function ComponentsDoc() {
  return (
    <>
      <h1 className="page-title gradient-text">Components</h1>
      <p className="text-gray-500 text-[1.05rem] mb-8">
        Built-in components that define the behaviour of your game entities.
      </p>

      <h2 className="section-title">TransformComponent</h2>
      <p className="text-gray-700 mb-3">
        Position, rotation, and scale of an entity in world space.
      </p>
      <CodeBlock code={TRANSFORM_CODE} language="js" />

      <h2 className="section-title mt-9">ColliderComponent</h2>
      <p className="text-gray-700 mb-3">
        Enables collision detection. Can be solid or trigger-based.
      </p>
      <CodeBlock code={COLLIDER_CODE} language="js" />

      <h2 className="section-title mt-9">Rigidbody2DComponent</h2>
      <p className="text-gray-700 mb-3">
        Adds 2D physics simulation — gravity, velocity, drag, and mass.
      </p>
      <CodeBlock code={RIGIDBODY_CODE} language="js" />

      <h2 className="section-title mt-9">BoxRenderComponent</h2>
      <p className="text-gray-700 mb-3">Renders a filled rectangle. Great for prototyping.</p>
      <CodeBlock code={BOX_RENDER_CODE} language="js" />

      <h2 className="section-title mt-9">ScriptComponent</h2>
      <p className="text-gray-700 mb-3">
        Attach custom logic with lifecycle hooks. See the{" "}
        <Link href="/docs/lifecycle" className="text-indigo-600 font-semibold">
          Script Lifecycle
        </Link>{" "}
        section.
      </p>
      <CodeBlock code={SCRIPT_CODE} language="js" />
    </>
  );
}
