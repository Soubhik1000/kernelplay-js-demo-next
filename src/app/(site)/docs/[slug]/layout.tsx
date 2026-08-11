import { DocsSidebar } from "@/components/docs/DocsSidebar";

// This layout is scoped to /docs/[slug]/* only — the docs index page at
// /docs (app/docs/page.tsx) intentionally does NOT get a sidebar, matching
// the original site where docs/index.html was a full-width card grid but
// every docs/<slug>/index.html had the two-column sidebar + article shell.
export default function DocSlugLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 pt-[88px] pb-[60px] flex gap-8">
      <DocsSidebar />
      <main className="flex-1 max-w-[860px]">
        <div className="glass-effect rounded-[20px] p-8 sm:p-12 border border-indigo-100 shadow-[0_4px_30px_rgba(99,102,241,0.1)]">
          {children}
        </div>
      </main>
    </div>
  );
}
