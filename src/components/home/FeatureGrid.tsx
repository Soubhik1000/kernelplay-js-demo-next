interface Feature {
  title: string;
  description: string;
  cardGradient: string; // bg-gradient-to-br from-X to-Y
  cardBorder: string;
  iconGradient: string;
  paths: string[]; // one or more SVG <path d="..."> values
}

// Single source of truth for the "Everything You Need to Build Games"
// grid. Previously each of these 9 cards was a hand-duplicated block of
// markup in index.html — adding, removing, or reordering a feature meant
// editing raw HTML/SVG in place. Now it's just editing this array.
const FEATURES: Feature[] = [
  {
    title: "Entity-Component System",
    description:
      "Unity-inspired ECS architecture for flexible and modular game object composition.",
    cardGradient: "from-indigo-50 to-purple-50",
    cardBorder: "border-indigo-200",
    iconGradient: "from-indigo-500 to-purple-600",
    paths: ["M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"],
  },
  {
    title: "Multiple Renderers",
    description: "Canvas 2D, WebGL 2D, and Three.js 3D rendering pipelines for maximum flexibility.",
    cardGradient: "from-purple-50 to-pink-50",
    cardBorder: "border-purple-200",
    iconGradient: "from-purple-500 to-pink-600",
    paths: ["M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"],
  },
  {
    title: "Physics Engine",
    description: "Built-in 2D/3D physics with collision detection, rigidbodies, and realistic movement.",
    cardGradient: "from-pink-50 to-red-50",
    cardBorder: "border-pink-200",
    iconGradient: "from-pink-500 to-red-600",
    paths: ["M13 10V3L4 14h7v7l9-11h-7z"],
  },
  {
    title: "Input System",
    description: "Comprehensive keyboard and mouse input handling with easy-to-use APIs.",
    cardGradient: "from-blue-50 to-indigo-50",
    cardBorder: "border-blue-200",
    iconGradient: "from-blue-500 to-indigo-600",
    paths: ["M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"],
  },
  {
    title: "Scene Management",
    description: "Organize your game with scenes and seamlessly switch between levels.",
    cardGradient: "from-green-50 to-emerald-50",
    cardBorder: "border-green-200",
    iconGradient: "from-green-500 to-emerald-600",
    paths: ["M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"],
  },
  {
    title: "Sprite Renderer",
    description: "Efficiently render 2D sprites and animated textures for dynamic visual effects.",
    cardGradient: "from-orange-50 to-red-50",
    cardBorder: "border-orange-200",
    iconGradient: "from-orange-500 to-red-600",
    paths: ["M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"],
  },
  {
    title: "Animation System & State Machine",
    description: "Define complex character animations and behaviors with a flexible state machine.",
    cardGradient: "from-cyan-50 to-blue-50",
    cardBorder: "border-cyan-200",
    iconGradient: "from-cyan-500 to-blue-600",
    paths: [
      "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z",
      "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    ],
  },
  {
    title: "Camera as Entity",
    description:
      "The camera is now a full Entity (game object) in your scene, allowing for more flexible controls and behaviors.",
    cardGradient: "from-teal-50 to-green-50",
    cardBorder: "border-teal-200",
    iconGradient: "from-teal-500 to-green-600",
    paths: [
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    ],
  },
  {
    title: "Lightweight",
    description: "Small footprint, no dependencies (except Three.js for 3D), fast load times.",
    cardGradient: "from-yellow-50 to-orange-50",
    cardBorder: "border-yellow-200",
    iconGradient: "from-yellow-500 to-orange-600",
    paths: ["M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"],
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div
      className={`p-6 rounded-2xl bg-gradient-to-br ${feature.cardGradient} border ${feature.cardBorder} hover:shadow-xl transition-shadow`}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.iconGradient} flex items-center justify-center mb-4`}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {feature.paths.map((d) => (
            <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
          ))}
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}

export function FeatureGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Games
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features that make game development simple and enjoyable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
