import { CodeBlock } from "@/components/ui/CodeBlock";
import { InlineCode } from "@/components/docs/InlineCode";

const PHYS_ENTITY_CODE = `const player = new Entity("Player");

player.addComponent("transform", new TransformComponent({
  position: { x: 400, y: 100 }
}));
player.addComponent("rigidbody2d", new Rigidbody2DComponent({
  useGravity: true,
  mass: 1,
  drag: 0.02
}));
player.addComponent("collider", new ColliderComponent());

scene.addEntity(player);`;

const PHYS_SCRIPT_CODE = `class PlayerController extends ScriptComponent {
  update(dt) {
    const rb = this.entity.getComponent("rigidbody2d");
    const speed = 200;

    // Horizontal movement
    if (Keyboard.isPressed("ArrowRight")) rb.velocity.x = speed;
    else if (Keyboard.isPressed("ArrowLeft")) rb.velocity.x = -speed;
    else rb.velocity.x *= 0.8; // friction

    // Jump — only when on ground
    if (Keyboard.wasPressed("Space") && this.isGrounded) {
      rb.addForce(0, -600, "impulse");  //modes force and impulse
    }

    // Use rigidbodies default ground checking systems
    if (this.rb.isGrounded) {
      // your code
    }
  }

  onCollision(other) {
    // Detect ground
    if (other.tag === "ground") this.isGrounded = true;
    if (other.name === "Enemy") other.destroy();
  }
}`;

const TRIGGER_CODE = `// Coin entity
const coin = new Entity("Coin");
coin.addComponent("collider", new ColliderComponent({
  width: 20, height: 20,
  isTrigger: true        // ← no push, just events
}));
coin.addComponent("script", new class extends ScriptComponent {
  onTriggerEnter(other) {
    if (other.tag === "player") {
      score += 10;
      this.entity.destroy();
    }
  }
}());`;

interface PhysicsProp {
  name: string;
  type: string;
  description: string;
}

const PHYSICS_PROPS: PhysicsProp[] = [
  { name: "mass", type: "number", description: "Affects force response (default: 1)" },
  { name: "gravityScale", type: "number", description: "Multiplier on world gravity (default: 1)" },
  { name: "drag", type: "number", description: "Air resistance (0–1, default: 0.05)" },
  { name: "isKinematic", type: "boolean", description: "Script-driven, ignores gravity/forces" },
  { name: "velocity", type: "{x, y}", description: "Current velocity vector" },
];

export default function PhysicsDoc() {
  return (
    <>
      <h1 className="page-title gradient-text">Physics System</h1>
      <p className="text-gray-500 text-[1.05rem] mb-8">
        Built-in 2D physics with collision detection, rigidbodies, and gravity.
      </p>

      <h2 className="section-title">Physics-Enabled Entity</h2>
      <p className="text-gray-700 mb-3">
        Combine a <InlineCode>Rigidbody2DComponent</InlineCode> and{" "}
        <InlineCode>ColliderComponent</InlineCode> to get full physics.
      </p>
      <CodeBlock code={PHYS_ENTITY_CODE} language="js" />

      <h2 className="section-title mt-9">Controlling Physics in Scripts</h2>
      <CodeBlock code={PHYS_SCRIPT_CODE} language="js" />

      <h2 className="section-title mt-9">Trigger Colliders</h2>
      <p className="text-gray-700 mb-3">
        Set <InlineCode>isTrigger: true</InlineCode> on a collider to detect overlap without a
        physical response.
      </p>
      <CodeBlock code={TRIGGER_CODE} language="js" />

      <h2 className="section-title mt-9">Physics Properties</h2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-indigo-50">
            <th className="p-3 text-left font-bold text-indigo-800">Property</th>
            <th className="p-3 text-left font-bold text-indigo-800">Type</th>
            <th className="p-3 text-left font-bold text-indigo-800">Description</th>
          </tr>
        </thead>
        <tbody>
          {PHYSICS_PROPS.map((prop, i) => (
            <tr key={prop.name} className={i < PHYSICS_PROPS.length - 1 ? "border-b border-indigo-100" : ""}>
              <td className="p-3">
                <InlineCode>{prop.name}</InlineCode>
              </td>
              <td className="p-3 text-gray-500">{prop.type}</td>
              <td className="p-3 text-gray-700">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
