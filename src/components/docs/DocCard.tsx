import Link from "next/link";
import type { DocMeta } from "@/content/docs/meta";

export function DocCard({ doc }: { doc: DocMeta }) {
  return (
    <Link href={`/docs/${doc.slug}`} className="doc-card block">
      <div className="text-3xl mb-3">{doc.emoji}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{doc.description}</p>
      <span className="text-sm font-bold text-indigo-600">Read guide →</span>
    </Link>
  );
}
