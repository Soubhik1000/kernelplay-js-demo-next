"use client";

import { useState } from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui/CodeBlock";

export interface CodeTab {
  filename: string;
  code: string;
  language?: string;
}

interface ExampleDemoLayoutProps {
  title: string;
  subtitle: string;
  fullscreenHref: string;
  codeTabs: CodeTab[];
  /** The live demo, typically a <GameCanvas load={...} /> */
  children: React.ReactNode;
}

/**
 * Replaces the hand-copied ~250-line header/tabs/settings-dropdown block
 * that used to live in every one of examples/{Canvas2D,PIXI2D,THREE3D,
 * BenchmarkCanvas2D,parkour-boy,zombie-hunter}/index.html, plus the
 * matching DOM-classList-toggling logic in examples.js (mainTabs,
 * codeTabs, settings-dropdown click handlers). Six demo pages now each
 * supply ~10 lines of config instead of duplicating this whole thing.
 */
export function ExampleDemoLayout({
  title,
  subtitle,
  fullscreenHref,
  codeTabs,
  children,
}: ExampleDemoLayoutProps) {
  const [tab, setTab] = useState<"demo" | "code">("demo");
  const [activeFile, setActiveFile] = useState(codeTabs[0]?.filename);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const activeCode = codeTabs.find((f) => f.filename === activeFile) ?? codeTabs[0];

  return (
    <>
      {/* Header */}
      <header className="z-10 glass-effect border-b border-indigo-200 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-green-100 text-green-700 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Active
            </div>

            <div className="relative">
              <button
                onClick={() => setSettingsOpen((v) => !v)}
                className="p-2 rounded-lg hover:bg-indigo-100"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>

              {settingsOpen && (
                <div className="absolute right-0 mt-2 w-56 glass-effect rounded-lg shadow-xl border border-indigo-200 z-50">
                  <div className="py-2">
                    <button
                      onClick={() => window.location.reload()}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-indigo-50 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Reset Demo
                    </button>
                    <Link
                      href={fullscreenHref}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-indigo-50 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"
                        />
                      </svg>
                      Full Screen
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Tab Switcher */}
      <div className="flex items-center justify-between px-6 py-3 glass-effect border-b border-indigo-200">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("demo")}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${
              tab === "demo" ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-indigo-50"
            }`}
          >
            Demo
          </button>
          <button
            onClick={() => setTab("code")}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${
              tab === "code" ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-indigo-50"
            }`}
          >
            Code
          </button>
        </div>
      </div>

      {/* Demo Tab */}
      {tab === "demo" && (
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 overflow-auto">
          {children}
        </div>
      )}

      {/* Code Tab */}
      {tab === "code" && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex gap-2 px-6 py-3 bg-gray-900 border-b border-gray-700 overflow-x-auto">
            {codeTabs.map((file) => (
              <button
                key={file.filename}
                onClick={() => setActiveFile(file.filename)}
                className={`px-4 py-2 rounded-t-lg text-sm font-medium whitespace-nowrap ${
                  activeFile === file.filename
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {file.filename}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-auto p-4 bg-[#1e1e1e]">
            {activeCode && (
              <CodeBlock
                code={activeCode.code}
                language={activeCode.language}
                filename={activeCode.filename}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
