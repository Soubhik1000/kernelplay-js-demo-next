import type { Metadata } from "next";
import { ExamplesShell } from "@/components/examples/ExamplesShell";
import { ExampleDemoLayout, type CodeTab } from "@/components/examples/ExampleDemoLayout";
import { GameCanvas } from "@/components/examples/GameCanvas";

export const metadata: Metadata = {
  title: "Three.js 3D Renderer",
  description: "KernelPlay.js rendering through the Three.js WebGL 3D backend.",
};

const CODE_TABS: CodeTab[] = [
  {
    filename: "install.sh",
    language: "bash",
    code: `npm install kernelplay-js three @kernelplay/three-renderer --save`,
  },
  {
    filename: "main.ts",
    language: "js",
    code: `// TODO: port this from the original examples/THREE3D/mainWebGL3D.js,
// following the mountGame(container) => cleanupFn shape used in
// src/games/canvas2d/main.ts.
import { Game } from "kernelplay-js";
import { ThreeRenderer } from "@kernelplay/three-renderer";

// ...`,
  },
];

export default function Three3DExamplePage() {
  return (
    <ExamplesShell active="THREE3D">
      <ExampleDemoLayout
        title="Three.js 3D Renderer"
        subtitle="Full 3D rendering pipeline via Three.js"
        fullscreenHref="/fullscreen/THREE3D"
        codeTabs={CODE_TABS}
      >
        <GameCanvas game="stub" />
      </ExampleDemoLayout>
    </ExamplesShell>
  );
}
