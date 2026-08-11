export const SITE = {
  name: "KernelPlay.js",
  tagline: "A lightweight JavaScript game engine for building amazing 2D games.",
  githubUrl: "https://github.com/Soubhik1000/kernelplay",
  npmUrl: "https://www.npmjs.com/package/kernelplay-js",
  liveDemoUrl: "https://soubhik-rjs.github.io/kernelplay-js-demo/",
  licenseUrl: "https://github.com/Soubhik1000/kernelplay/blob/master/LICENSE.md",
} as const;

// Single source of truth for the main nav — was previously duplicated by
// hand across every page's <nav> AND every page's mobile menu (8 pages x
// 2 copies = 16 places that had to stay in sync manually).
export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Examples", href: "/examples" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_QUICK_LINKS = MAIN_NAV;

export const FOOTER_RESOURCE_LINKS = [
  { label: "GitHub", href: SITE.githubUrl },
  { label: "NPM Package", href: SITE.npmUrl },
  { label: "Live Demo", href: SITE.liveDemoUrl },
  { label: "License", href: SITE.licenseUrl },
] as const;
