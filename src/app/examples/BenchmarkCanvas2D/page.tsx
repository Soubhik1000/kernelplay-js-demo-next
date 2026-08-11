import type { Metadata } from "next";
import { ExamplesShell } from "@/components/examples/ExamplesShell";
import { ExampleDemoLayout, type CodeTab } from "@/components/examples/ExampleDemoLayout";
import { GameCanvas } from "@/components/examples/GameCanvas";

export const metadata: Metadata = {
  title: "Stress Test Benchmark",
  description: "Canvas 2D performance stress test — hundreds of active entities at once.",
};

const CODE_TABS: CodeTab[] = [
  {
    filename: "main.ts",
    language: "js",
    code: `// TODO: port this from the original examples/BenchmarkCanvas2D/Benchmark.js,
// following the mountGame(container) => cleanupFn shape used in
// src/games/canvas2d/main.ts.`,
  },
];

export default function BenchmarkExamplePage() {
  return (
    <ExamplesShell active="BenchmarkCanvas2D">
      <ExampleDemoLayout
        title="Stress Test"
        subtitle="Canvas 2D performance benchmark"
        fullscreenHref="/fullscreen/BenchmarkCanvas2D"
        codeTabs={CODE_TABS}
      >
        <GameCanvas game="stub" />
      </ExampleDemoLayout>
    </ExamplesShell>
  );
}
