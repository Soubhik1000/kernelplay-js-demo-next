import type { Metadata } from "next";
import { ExamplesShell } from "@/components/examples/ExamplesShell";
import { ExampleDemoLayout, type CodeTab } from "@/components/examples/ExampleDemoLayout";
import { GameCanvas } from "@/components/examples/GameCanvas";

export const metadata: Metadata = {
  title: "Pixi.js 2D Renderer",
  description: "KernelPlay.js rendering through the Pixi.js WebGL backend.",
};

const CODE_TABS: CodeTab[] = [
  {
    filename: "install.sh",
    language: "bash",
    code: `# Original demo loaded these from a CDN importmap; for the Next.js
# migration, install them as real dependencies instead:
npm install kernelplay-js pixi.js @kernelplay/pixi-renderer --save`,
  },
  {
    filename: "main.ts",
    language: "js",
    code: `// TODO: port this from the original examples/PIXI2D/main.js
// (imports pixi.js + @kernelplay/pixi-renderer), following the same
// mountGame(container) => cleanupFn shape used in
// src/games/canvas2d/main.ts.
import { Game } from "kernelplay-js";
import { PixiRenderer } from "@kernelplay/pixi-renderer";

// ...`,
  },
];

export default function Pixi2DExamplePage() {
  return (
    <ExamplesShell active="PIXI2D">
      <ExampleDemoLayout
        title="Pixi.js 2D Renderer"
        subtitle="WebGL-accelerated 2D rendering via Pixi.js"
        fullscreenHref="/fullscreen/PIXI2D"
        codeTabs={CODE_TABS}
      >
        <GameCanvas game="stub" />
      </ExampleDemoLayout>
    </ExamplesShell>
  );
}
