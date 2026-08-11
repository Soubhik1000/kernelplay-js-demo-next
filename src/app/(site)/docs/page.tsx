import type { Metadata } from "next";
import Link from "next/link";
import { DOCS } from "@/content/docs/meta";
import { DocCard } from "@/components/docs/DocCard";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Everything you need to build games with KernelPlay.js.",
};

export default function DocsIndexPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 pt-[100px] pb-[60px]">
      <div className="text-center mb-14">
        <h1 className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-bold">
          Documentation
        </h1>
        <p className="text-gray-500 text-lg mt-3">
          Everything you need to build games with KernelPlay.js
        </p>
        <Link
          href="/docs/getting-started"
          className="inline-block mt-6 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold"
        >
          Get Started →
        </Link>
      </div>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
        {DOCS.map((doc) => (
          <DocCard key={doc.slug} doc={doc} />
        ))}

        <Link
          href="/examples/Canvas2D"
          className="doc-card block"
          style={{
            borderColor: "#ddd6fe",
            background: "linear-gradient(135deg,#f5f3ff,#fdf2f8)",
          }}
        >
          <div className="text-3xl mb-3">▶️</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Live Examples</h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Interactive canvas demos with full code — platformer, bouncing balls, triggers, and
            more.
          </p>
          <span className="text-sm font-bold text-indigo-600">Try examples →</span>
        </Link>
      </div>
    </div>
  );
}
