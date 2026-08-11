import Link from "next/link";
import type { DocMeta } from "@/content/docs/meta";

export function PrevNextNav({ prev, next }: { prev?: DocMeta; next?: DocMeta }) {
  return (
    <div className="prev-next">
      {prev ? (
        <Link href={`/docs/${prev.slug}`} className="pn-btn">
          <span className="pn-label">← Previous</span>
          <span className="pn-title">{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link href={`/docs/${next.slug}`} className="pn-btn next">
          <span className="pn-label">Next →</span>
          <span className="pn-title">{next.title}</span>
        </Link>
      )}
    </div>
  );
}
