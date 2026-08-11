import Link from "next/link";
import { GitHubIcon } from "@/components/ui/GitHubIcon";

export type ExampleSlug = "Canvas2D" | "PIXI2D" | "THREE3D" | "BenchmarkCanvas2D";

interface NavItem {
  slug: ExampleSlug | "parkour-boy" | "zombie-hunter";
  label: string;
  href: string;
  path: string; // svg path d
}

// Single source of truth for the examples sidebar — was hand-copied into
// examples/index.html AND all 6 examples/<demo>/index.html pages, with a
// slightly different "active" class baked into the markup by hand on
// each one.
const RENDERER_ITEMS: NavItem[] = [
  {
    slug: "Canvas2D",
    label: "Canvas 2D",
    href: "/examples/Canvas2D",
    path: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    slug: "PIXI2D",
    label: "Pixi.js 2D",
    href: "/examples/PIXI2D",
    path: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
  {
    slug: "THREE3D",
    label: "Three.js 3D",
    href: "/examples/THREE3D",
    path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
];

const GAME_ITEMS: NavItem[] = [
  {
    slug: "parkour-boy",
    label: "Parkour Boy",
    href: "/examples/parkour-boy",
    path: "M6 12h4m-2-2v4m6-1h.01M17 11h.01M7 17h10a4 4 0 004-4v-1a6 6 0 00-6-6H9a6 6 0 00-6 6v1a4 4 0 004 4z",
  },
  {
    slug: "zombie-hunter",
    label: "Zombie Hunter",
    href: "/examples/zombie-hunter",
    path: "M6 12h4m-2-2v4m6-1h.01M17 11h.01M7 17h10a4 4 0 004-4v-1a6 6 0 00-6-6H9a6 6 0 00-6 6v1a4 4 0 004 4z",
  },
];

const BENCHMARK_ITEM: NavItem = {
  slug: "BenchmarkCanvas2D",
  label: "Stress Test",
  href: "/examples/BenchmarkCanvas2D",
  path: "M13 10V3L4 14h7v7l9-11h-7z",
};

function SidebarLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={
        active
          ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg text-sm"
          : "flex items-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-indigo-50 text-gray-700 border border-gray-200 text-sm"
      }
    >
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
      </svg>
      <span className="font-medium">{item.label}</span>
    </Link>
  );
}

export function ExamplesSidebar({ active }: { active?: NavItem["slug"] }) {
  return (
    <aside className="w-full lg:w-64 glass-effect border-r border-indigo-200 shadow-xl overflow-y-auto">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            🎮 KernelPlay
          </h1>
          <p className="text-sm text-gray-600 mt-1">Game Engine Examples</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Games Demos</h3>
          <div className="space-y-2">
            {GAME_ITEMS.map((item) => (
              <SidebarLink key={item.slug} item={item} active={active === item.slug} />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Renderer</h3>
          <nav className="space-y-2">
            {RENDERER_ITEMS.map((item) => (
              <SidebarLink key={item.slug} item={item} active={active === item.slug} />
            ))}
          </nav>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Benchmark</h3>
          <div className="space-y-2">
            <SidebarLink item={BENCHMARK_ITEM} active={active === BENCHMARK_ITEM.slug} />
          </div>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200">
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Info
          </h3>
          <p className="text-sm text-gray-700">
            Interactive rendering examples using the KernelPlay engine with multiple renderer
            backends.
          </p>
        </div>

        <a
          href="https://github.com/Soubhik1000/kernelplay"
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 text-sm"
        >
          <GitHubIcon className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </aside>
  );
}
