import { Hero } from "@/components/home/Hero";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { QuickStart } from "@/components/home/QuickStart";
import { CTASection } from "@/components/home/CTASection";

// No special export needed for SSG — in the App Router, any page that
// doesn't read request-time data (headers/cookies/searchParams in a
// dynamic way) is statically rendered at `next build` automatically.
// This page becomes /out/index.html with the full markup already in it.
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <QuickStart />
      <CTASection />
    </>
  );
}
