interface TimelineItem {
  step: number;
  title: string;
  description: string;
  numberGradient: string;
  cardBorder: string;
}

const TIMELINE: TimelineItem[] = [
  {
    step: 1,
    title: "Core Architecture",
    description: "Built the foundation with Entity-Component System, game loop, and scene management.",
    numberGradient: "from-indigo-500 to-purple-600",
    cardBorder: "border-indigo-200",
  },
  {
    step: 2,
    title: "Render Pipeline",
    description: "Implemented multiple rendering backends: Canvas 2D, WebGL 2D, and Three.js 3D support.",
    numberGradient: "from-purple-500 to-pink-600",
    cardBorder: "border-purple-200",
  },
  {
    step: 3,
    title: "Physics Engine",
    description: "Added 2D/3D physics with collision detection, rigidbodies, gravity, and trigger systems.",
    numberGradient: "from-pink-500 to-red-600",
    cardBorder: "border-pink-200",
  },
  {
    step: 4,
    title: "Input & Interaction",
    description: "Created comprehensive keyboard, mouse input systems, and raycasting for object picking.",
    numberGradient: "from-blue-500 to-indigo-600",
    cardBorder: "border-blue-200",
  },
  {
    step: 5,
    title: "Audio & UI Systems",
    description:
      "Rebuilt audio around the Web Audio API with spatial sound and BGM crossfade, and shipped a full UI canvas layer with eight-plus element types in v0.4.0.",
    numberGradient: "from-teal-500 to-green-600",
    cardBorder: "border-teal-200",
  },
];

export function Timeline() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Development Journey</h2>

        <div className="space-y-8">
          {TIMELINE.map((item) => (
            <div key={item.step} className="flex gap-6">
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.numberGradient} flex items-center justify-center text-white font-bold`}
                >
                  {item.step}
                </div>
              </div>
              <div className={`flex-1 glass-effect rounded-xl p-6 border ${item.cardBorder}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
