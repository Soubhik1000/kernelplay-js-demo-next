// Deliberately bare passthrough. The original fullscreen/<game>/index.html
// files had NO <nav>, no footer, not even Tailwind -- just a <canvas> and
// an importmap. Individual game pages (app/fullscreen/[game]/page.tsx)
// apply their own full-bleed black background. The one exception is
// /fullscreen itself (the hub page), which renders its own <Navbar />
// directly since it's the one page in this segment that wants site chrome
// -- so this layout stays unopinionated rather than forcing a look on
// both.
export default function FullscreenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
