import type { Metadata } from "next";
import "./globals.css";

// Root layout is intentionally bare. It's shared by EVERY route in the
// app, including /examples/* and /fullscreen/<game>, which need a
// full-height "app shell" feel with no footer -- so the Navbar+Footer
// chrome lives one level down, in app/(site)/layout.tsx, and is applied
// only to the marketing/docs pages that actually want it. Individual
// fullscreen game pages render nothing here but the canvas itself,
// matching the original bare fullscreen/<game>/index.html files exactly.
export const metadata: Metadata = {
  metadataBase: new URL("https://soubhik-rjs.github.io"),
  title: {
    default: "KernelPlay.js - Lightweight 2D JavaScript Game Engine",
    template: "%s — KernelPlay.js",
  },
  description:
    "A lightweight JavaScript game engine inspired by Unity's Entity-Component architecture. Perfect for learning, prototyping, and building small-to-medium 2D games.",
  openGraph: {
    siteName: "KernelPlay.js",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {children}
      </body>
    </html>
  );
}
