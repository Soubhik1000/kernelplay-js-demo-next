"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS } from "@/content/docs/meta";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 flex-shrink-0 hidden lg:block">
      <div className="glass-effect sticky top-[84px] rounded-2xl p-5 border border-indigo-100 shadow-[0_4px_20px_rgba(99,102,241,0.08)]">
        <p className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-wider mb-3">
          Documentation
        </p>
        <nav className="doc-nav">
          {DOCS.map((doc) => {
            const href = `/docs/${doc.slug}`;
            const active = pathname === href;
            return (
              <Link key={doc.slug} href={href} className={active ? "active" : ""}>
                {doc.navLabel}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
