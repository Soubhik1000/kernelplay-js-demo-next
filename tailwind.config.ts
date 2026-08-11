import type { Config } from "tailwindcss";

// This mirrors the `tailwind.config = {...}` object that used to sit inline
// in a <script> tag in every HTML page's <head> (Tailwind CDN mode).
// Now defined once, compiled at build time, and shared by the whole app.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#ec4899",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
