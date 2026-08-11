# KernelPlay.js Website — Next.js Migration

Migrated from a static Vite/vanilla-HTML site to Next.js 14 (App Router),
statically exported (`output: 'export'`) so every page ships as
pre-rendered HTML for crawlers, same as the original site.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to ./out
```

## What's fully ported

- **Layout & chrome**: `Navbar`, `Footer`, global styles (`globals.css`),
  Tailwind config — all consolidated from copies duplicated across every
  original HTML file into single components/files.
- **Home page**: Hero, FeatureGrid (9 cards, data-driven), QuickStart
  (with a real `CodeBlock` copy-to-clipboard component), CTASection.
- **About page**: Story, Timeline, Roadmap, Creator, Contributing,
  License — all data-driven from arrays, not hand-copied blocks.
- **Docs system**: `/docs` (card grid) + `/docs/[slug]` (dynamic route,
  `generateStaticParams` pre-renders all 13 pages). Sidebar, prev/next
  nav, and the docs index cards all derive from one registry
  (`src/content/docs/meta.ts`). Four pages are fully ported with real
  content: **Getting Started**, **Core Concepts**, **Components**, and
  **Physics** — the rest render a clearly-labeled placeholder (see
  "What's left" below).
- **Examples system**: `/examples` (hub) + one real, working demo at
  `/examples/Canvas2D` — a genuine ported KernelPlay.js scene (Level1 +
  Player + Box + PlayerController, copied from the original repo almost
  unchanged) rendering live via the actual `kernelplay-js` npm package.
  The other 5 demo pages (PIXI2D, THREE3D, BenchmarkCanvas2D,
  parkour-boy, zombie-hunter) use the identical reusable
  `ExampleDemoLayout` + `GameCanvas` components with a placeholder game
  module, proving the pattern generalizes.
- **Fullscreen system**: `/fullscreen` (hub, has nav chrome) +
  `/fullscreen/[game]` (dynamic route, `generateStaticParams` for all 6
  games, zero chrome — matches the original bare fullscreen pages
  exactly).

## What's left (clearly marked with TODO comments in the code)

1. **9 remaining docs pages** — port content from
   `docs/<slug>/index.html` in the original zip into
   `src/content/docs/<slug>.tsx`, following the pattern in
   `getting-started.tsx` / `core-concepts.tsx`, then register in
   `src/content/docs/registry.tsx`.
2. **5 remaining game demos** — port each renderer's bootstrap logic
   into `src/games/<name>/main.ts` (same `mountGame(container) =>
   cleanupFn` shape as `src/games/canvas2d/main.ts`), register it in
   `GAME_LOADERS` in `src/components/examples/GameCanvas.tsx`, and swap
   each page's `<GameCanvas game="stub" />` for the real id.
3. **Game assets** (sprites, audio for parkour-boy / zombie-hunter) —
   copy from the original `examples/<game>/assets/` into
   `public/games/<game>/assets/`, then update any relative asset paths
   in the ported code to absolute ones (`/games/<game>/assets/...`).
4. **`three` / `pixi.js` / `@kernelplay/*-renderer` packages** — install
   as real npm dependencies (see the `install.sh` code tab on each
   relevant example page) rather than the original CDN importmap.

## Notable architecture decisions

- **Route groups for layout**: `app/(site)` wraps the marketing/docs
  pages with `Navbar` + `Footer`. `app/examples` and `app/fullscreen`
  are full-height "app shells" that skip the footer (and, for individual
  fullscreen games, skip the navbar too) — this couldn't be done with a
  single global layout, since the root layout wraps *every* route.
- **`Game` mounts into a real container** instead of the original's
  `document.body.appendChild` + `setTimeout` + `getElementsByTagName`
  hack — `kernelplay-js`'s `Game` constructor already accepts a
  `container` CSS-selector option; `GameCanvas` just gives it one.
- **No function props across the Server/Client boundary**: page files
  need to stay Server Components (to export `metadata` for SEO), but
  `GameCanvas` needs to run client-side. Rather than passing an
  `import()` closure as a prop (which Next.js can't serialize across
  that boundary), `GameCanvas` takes a plain string id and looks up the
  loader from an internal registry.
