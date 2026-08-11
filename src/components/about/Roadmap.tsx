interface RoadmapColumn {
  title: string;
  cardGradient: string;
  cardBorder: string;
  iconColor: string;
  path: string;
  items: string[];
}

const COLUMNS: RoadmapColumn[] = [
  {
    title: "Completed",
    cardGradient: "from-green-50 to-emerald-50",
    cardBorder: "border-green-200",
    iconColor: "text-green-600",
    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    items: [
      "✓ Entity-Component System",
      "✓ Multiple Renderers",
      "✓ Physics Engine",
      "✓ Input System",
      "✓ Scene Management",
      "✓ Audio System (Web Audio API)",
      "✓ UI Canvas Layer (v0.4.0)",
    ],
  },
  {
    title: "In Progress",
    cardGradient: "from-yellow-50 to-orange-50",
    cardBorder: "border-yellow-200",
    iconColor: "text-yellow-600",
    path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    items: ["⏳ UI Layer system (v0.4.1)", "⏳ Object Pooling", "⏳ Debug Tools"],
  },
  {
    title: "Planned",
    cardGradient: "from-blue-50 to-indigo-50",
    cardBorder: "border-blue-200",
    iconColor: "text-blue-600",
    path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    items: ["→ Particle System", "→ AI Behaviors", "→ Tilemap Support"],
  },
  {
    title: "Future",
    cardGradient: "from-purple-50 to-pink-50",
    cardBorder: "border-purple-200",
    iconColor: "text-purple-600",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
    items: ["🌟 Visual Editor", "🌟 Networking", "🌟 Mobile Export", "🌟 Plugin System"],
  },
];

export function Roadmap() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect rounded-2xl p-8 sm:p-12 border border-indigo-200 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Roadmap</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COLUMNS.map((col) => (
              <div
                key={col.title}
                className={`p-6 rounded-xl bg-gradient-to-br ${col.cardGradient} border ${col.cardBorder}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg className={`w-5 h-5 ${col.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={col.path} />
                  </svg>
                  <h3 className="font-bold text-gray-900">{col.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
