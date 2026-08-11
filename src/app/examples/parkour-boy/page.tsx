import type { Metadata } from "next";
import { ExamplesShell } from "@/components/examples/ExamplesShell";
import { ExampleDemoLayout, type CodeTab } from "@/components/examples/ExampleDemoLayout";
import { GameCanvas } from "@/components/examples/GameCanvas";

export const metadata: Metadata = {
  title: "Parkour Boy",
  description: "A full platformer game demo built with KernelPlay.js.",
};

const CODE_TABS: CodeTab[] = [
  {
    filename: "main.ts",
    language: "js",
    code: `// TODO: port from the original examples/parkour-boy/*.js + assets/.
// Copy the sprite/audio assets into public/games/parkour-boy/assets/
// and update any relative asset paths ("./assets/...") to absolute
// ones ("/games/parkour-boy/assets/...").`,
  },
];

export default function ParkourBoyPage() {
  return (
    <ExamplesShell active="parkour-boy">
      <ExampleDemoLayout
        title="Parkour Boy"
        subtitle="Platformer game demo"
        fullscreenHref="/fullscreen/parkour-boy"
        codeTabs={CODE_TABS}
      >
        <GameCanvas game="stub" />
      </ExampleDemoLayout>
    </ExamplesShell>
  );
}
