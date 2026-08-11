import type { Metadata } from "next";
import { ExamplesShell } from "@/components/examples/ExamplesShell";
import { ExampleDemoLayout, type CodeTab } from "@/components/examples/ExampleDemoLayout";
import { GameCanvas } from "@/components/examples/GameCanvas";

export const metadata: Metadata = {
  title: "Zombie Hunter",
  description: "A top-down shooter game demo built with KernelPlay.js and Pixi.js.",
};

const CODE_TABS: CodeTab[] = [
  {
    filename: "install.sh",
    language: "bash",
    code: `npm install kernelplay-js pixi.js @kernelplay/pixi-renderer --save`,
  },
  {
    filename: "main.ts",
    language: "js",
    code: `// TODO: port from the original examples/zombie-hunter/*.js + assets/.
// Copy sprite/audio assets into public/games/zombie-hunter/assets/ and
// update relative asset paths to absolute ones.`,
  },
];

export default function ZombieHunterPage() {
  return (
    <ExamplesShell active="zombie-hunter">
      <ExampleDemoLayout
        title="Zombie Hunter"
        subtitle="Top-down shooter game demo"
        fullscreenHref="/fullscreen/zombie-hunter"
        codeTabs={CODE_TABS}
      >
        <GameCanvas game="stub" />
      </ExampleDemoLayout>
    </ExamplesShell>
  );
}
