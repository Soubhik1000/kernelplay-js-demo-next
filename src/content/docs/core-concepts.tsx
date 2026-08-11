import { CodeBlock } from "@/components/ui/CodeBlock";

interface ConceptCard {
  emoji: string;
  title: string;
  description: string;
  bg: string;
  border: string;
  titleColor: string;
  textColor: string;
}

const CONCEPTS: ConceptCard[] = [
  {
    emoji: "🎮",
    title: "Game",
    description:
      "The main entry point. Manages the game loop, scenes, and rendering. Configure FPS, canvas size, and renderer type.",
    bg: "linear-gradient(135deg,#eef2ff,#f5f3ff)",
    border: "#c7d2fe",
    titleColor: "#3730a3",
    textColor: "#4338ca",
  },
  {
    emoji: "🎭",
    title: "Scene",
    description:
      "Contains entities and manages updates, rendering, collisions, and raycasting. Think of it as a level or game state.",
    bg: "linear-gradient(135deg,#f5f3ff,#fdf2f8)",
    border: "#ddd6fe",
    titleColor: "#5b21b6",
    textColor: "#6d28d9",
  },
  {
    emoji: "📦",
    title: "Entity",
    description:
      "A game object that holds components. Entities have tags and layers for organization and collision filtering.",
    bg: "linear-gradient(135deg,#fdf2f8,#fff1f2)",
    border: "#fbcfe8",
    titleColor: "#9d174d",
    textColor: "#be185d",
  },
  {
    emoji: "🔧",
    title: "Component",
    description:
      "Behaviors attached to entities. Includes transform, renderer, collider, rigidbody, and custom script components.",
    bg: "linear-gradient(135deg,#eff6ff,#eef2ff)",
    border: "#bfdbfe",
    titleColor: "#1e40af",
    textColor: "#1d4ed8",
  },
];

const ECS_EXAMPLE = `const enemy = new Entity("Enemy");
enemy.tag = "enemy";
enemy.layer = 2;

// Add components to define behavior
enemy.addComponent("transform", new TransformComponent({ position: { x: 200, y: 100 } }));
enemy.addComponent("renderer", new BoxRenderComponent({ color: "red" }));
enemy.addComponent("collider", new ColliderComponent());
enemy.addComponent("script", new EnemyAI()); // custom script

scene.addEntity(enemy);`;

export default function CoreConceptsDoc() {
  return (
    <>
      <h1 className="page-title gradient-text">Core Concepts</h1>
      <p className="text-gray-500 text-[1.05rem] mb-8">
        Understanding the fundamental building blocks of KernelPlay.js.
      </p>

      {CONCEPTS.map((c) => (
        <div
          key={c.title}
          className="info-card mb-4"
          style={{ background: c.bg, borderColor: c.border }}
        >
          <h3 className="text-[1.1rem] font-bold mb-2" style={{ color: c.titleColor }}>
            {c.emoji} {c.title}
          </h3>
          <p style={{ color: c.textColor }}>{c.description}</p>
        </div>
      ))}

      <h2 className="section-title mt-10">The Entity-Component Pattern</h2>
      <p className="text-gray-700 mb-4">
        KernelPlay.js uses an Entity-Component architecture (ECS-inspired). Instead of deep
        inheritance trees, you compose behavior by attaching components.
      </p>

      <CodeBlock code={ECS_EXAMPLE} language="js" />
    </>
  );
}
