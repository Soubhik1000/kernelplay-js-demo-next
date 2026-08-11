import Link from "next/link";

const STATS = [
  { icon: "star", label: "30 stars on GitHub" },
  { icon: "clock", label: "Active Development" },
  { icon: "check", label: "MIT License" },
] as const;

function StatIcon({ icon }: { icon: (typeof STATS)[number]["icon"] }) {
  if (icon === "star") {
    return (
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  if (icon === "clock") {
    return (
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
              🎮 v0.4.0 • Open Source
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Amazing 2D Games with
            <span className="gradient-text block mt-2">KernelPlay.js</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            A lightweight JavaScript game engine inspired by Unity&apos;s Entity-Component
            architecture. Perfect for learning, prototyping, and building small-to-medium 2D
            games.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs/getting-started"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Get Started →
            </Link>
            <Link
              href="/examples/Canvas2D"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-800 font-semibold text-lg border-2 border-gray-300 hover:border-indigo-400 transition-all"
            >
              View Examples
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <StatIcon icon={stat.icon} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
