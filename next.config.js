/** @type {import('next').NextConfig} */
const nextConfig = {
  // `output: 'export'` gives you a fully static build (pure HTML/CSS/JS,
  // deployable to GitHub Pages / any static host) — the closest equivalent
  // to the original vanilla site. Every route in this project is static
  // (no server actions, no route handlers reading cookies/headers), so
  // static export is safe here. Comment this out if you later add a
  // server-only feature (auth, ISR with revalidation, etc.).
  output: "export",

  // The original site used trailing-slash URLs (./docs/, ./about/), which
  // is also what GitHub Pages expects. This keeps generated HTML files at
  // /docs/index.html etc., matching the old link structure 1:1.
  trailingSlash: true,

  images: {
    // next/image's optimizer needs a server; disable it for static export.
    unoptimized: true,
  },
};

module.exports = nextConfig;
