import Link from "next/link";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { FOOTER_QUICK_LINKS, FOOTER_RESOURCE_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="text-white font-bold">{SITE.name}</span>
            </div>
            <p className="text-sm text-gray-400">{SITE.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={SITE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 {SITE.name}. Built with ❤️ by Soubhik Mukherjee. Licensed under MIT.</p>
        </div>
      </div>
    </footer>
  );
}
