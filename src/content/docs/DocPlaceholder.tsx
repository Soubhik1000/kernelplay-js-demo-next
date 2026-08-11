import type { DocMeta } from "@/content/docs/meta";

/**
 * Placeholder shown for the doc slugs that haven't been ported yet. Every
 * slug still routes, builds, and is included in generateStaticParams —
 * only the article body is a stand-in. To finish a page: create
 * `src/content/docs/<slug>.tsx` following the pattern in
 * `getting-started.tsx` or `core-concepts.tsx` (port the content from
 * the matching `docs/<slug>/index.html` in the original zip), then add
 * it to the registry in `src/content/docs/registry.tsx`.
 */
export function DocPlaceholder({ doc }: { doc: DocMeta }) {
  return (
    <>
      <h1 className="page-title gradient-text">
        {doc.emoji} {doc.title}
      </h1>
      <p className="text-gray-500 text-[1.05rem] mb-8">{doc.description}</p>
      <div className="info-card" style={{ background: "#fffbeb", borderColor: "#fde68a" }}>
        <p className="text-amber-800 font-semibold mb-1">🚧 Content not yet migrated</p>
        <p className="text-amber-700 text-sm">
          Port this page&apos;s content from{" "}
          <code className="bg-amber-100 px-1.5 py-0.5 rounded">
            docs/{doc.slug}/index.html
          </code>{" "}
          into <code className="bg-amber-100 px-1.5 py-0.5 rounded">
            src/content/docs/{doc.slug}.tsx
          </code>
          , following the pattern used for Getting Started and Core Concepts.
        </p>
      </div>
    </>
  );
}
