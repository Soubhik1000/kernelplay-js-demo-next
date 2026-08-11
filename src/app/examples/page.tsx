import type { Metadata } from "next";
import Link from "next/link";
import { ExamplesShell } from "@/components/examples/ExamplesShell";

export const metadata: Metadata = {
  title: "Examples",
  description: "Interactive KernelPlay.js demos across Canvas 2D, Pixi.js, and Three.js renderers.",
};

export default function ExamplesIndexPage() {
  return (
    <ExamplesShell>
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8 text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to KernelPlay.js!</h1>
          <p className="text-gray-600 text-lg">
            👋 Glad you&apos;re here! Before you dive in, feel free to explore our demo and test
            features on this page.
          </p>
          <p className="text-gray-500">
            Try things out, click around, and experience how everything works!
          </p>
          <Link
            href="/examples/Canvas2D"
            className="inline-block mt-6 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold"
          >
            Start Exploring →
          </Link>
        </div>
      </div>
    </ExamplesShell>
  );
}
