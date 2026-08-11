import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DOCS, getDocBySlug, getAdjacentDocs } from "@/content/docs/meta";
import { DOC_CONTENT } from "@/content/docs/registry";
import { DocPlaceholder } from "@/content/docs/DocPlaceholder";
import { PrevNextNav } from "@/components/docs/PrevNextNav";

interface Props {
  params: { slug: string };
}

// This is what makes every doc page pre-render to static HTML at build
// time (`next build` / `next export`), instead of being generated on
// demand. Next calls this once, gets all 13 slugs back, and produces
// /docs/getting-started/index.html, /docs/core-concepts/index.html, etc.
// — full markup, ready for crawlers, before any JS runs.
export function generateStaticParams() {
  return DOCS.map((doc) => ({ slug: doc.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const doc = getDocBySlug(params.slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
  };
}

export default function DocPage({ params }: Props) {
  const doc = getDocBySlug(params.slug);
  if (!doc) notFound();

  const Content = DOC_CONTENT[doc.slug];
  const { prev, next } = getAdjacentDocs(doc.slug);

  return (
    <>
      {Content ? <Content /> : <DocPlaceholder doc={doc} />}
      <PrevNextNav prev={prev} next={next} />
    </>
  );
}
