"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { MAIN_NAV, SITE } from "@/lib/constants";

/**
 * Global site navigation.
 *
 * In the original vanilla site this exact ~50-line block (desktop menu +
 * GitHub button + mobile menu button + mobile menu panel) was hand-copied
 * into the top of index.html, about/index.html, docs/index.html, every
 * docs/<slug>/index.html, examples/index.html, and fullscreen/index.html —
 * with relative hrefs ("../", "../../docs") that had to be re-derived by
 * hand for every folder depth. Here it's one component, rendered once from
 * the root layout, using absolute Next.js routes that work from any depth.
 *
 * `"use client"` is required because this component tracks mobile-menu
 * open/close state and highlights the active link via usePathname(). That
 * does NOT opt this page out of static pre-rendering — Next still renders
 * this component to full HTML at build time; the directive only adds a
 * client-side hydration step for the interactive bits.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-indigo-200 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href)
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600 transition-colors"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <GitHubIcon />
              <span className="font-medium">GitHub</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-indigo-200 bg-white/95 backdrop-blur-lg ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={
                isActive(item.href)
                  ? "block px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-semibold"
                  : "block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 transition-colors"
              }
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white justify-center"
          >
            <GitHubIcon />
            <span className="font-medium">View on GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
