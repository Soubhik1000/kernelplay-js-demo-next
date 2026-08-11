import { Navbar } from "@/components/layout/Navbar";

// /examples/* is an app-like, full-viewport experience (sidebar + demo +
// console panel) rather than a scrolling marketing page, so it reuses the
// global Navbar but skips the Footer entirely -- matching the original
// examples/*.html pages, which had a nav bar but no footer.
//
// Navbar is `position: fixed`, so it doesn't take up flow space -- the
// pt-16 (4rem, matching the navbar's h-16) pushes content below it, and
// h-[calc(100vh-4rem)] gives the remaining area exactly one viewport's
// worth of height so the sidebar/console columns can scroll
// independently instead of scrolling the whole page.
export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-16 h-[calc(100vh-4rem)] overflow-hidden">{children}</div>
    </>
  );
}
