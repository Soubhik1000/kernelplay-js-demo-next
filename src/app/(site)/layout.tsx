import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Applies to "/", "/about", "/docs", "/docs/[slug]" — every route inside
// app/(site)/. The "(site)" folder name is a Next.js route group: the
// parentheses mean it groups routes for layout purposes WITHOUT adding
// "/site" to the URL. So app/(site)/about/page.tsx still serves at
// exactly /about.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
