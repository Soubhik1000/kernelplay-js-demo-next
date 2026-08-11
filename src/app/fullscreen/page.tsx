import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { FULLSCREEN_GAMES } from "@/content/fullscreen-games";

export const metadata: Metadata = {
  title: "Fullscreen Demos",
  description: "Launch any KernelPlay.js demo full screen, with zero UI chrome.",
};

// This page renders <Navbar /> itself rather than picking it up from a
// segment layout, since every *other* route under /fullscreen deliberately
// has none (see app/fullscreen/layout.tsx and app/fullscreen/[game]/page.tsx).
export default function FullscreenHubPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
        <h1 className="gradient-text text-3xl sm:text-4xl font-bold mb-3">Fullscreen Demos</h1>
        <p className="text-gray-500 mb-10">
          The same demos as the Examples section, rendered edge-to-edge with no UI chrome.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FULLSCREEN_GAMES.map((game) => (
            <Link key={game.slug} href={`/fullscreen/${game.slug}`} className="doc-card block">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{game.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{game.description}</p>
              <span className="text-sm font-bold text-indigo-600">Launch fullscreen →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
