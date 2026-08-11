"use client";

import { useEffect, useRef, useState } from "react";

interface LogEntry {
  id: number;
  type: "log" | "warn" | "error";
  message: string;
  time: string;
}

let nextId = 1;

/**
 * Replaces the global `console.log = function(...) {...}` monkey-patch
 * in examples.js. That version patched `window.console` permanently for
 * the whole page (and never restored it), and manipulated a DOM node by
 * id directly. This version patches console methods only while the
 * panel is mounted, restores them on unmount, and drives the list from
 * React state instead of manual `appendChild`/`removeChild` calls.
 */
export function ConsolePanel() {
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const original = {
      log: console.log,
      warn: console.warn,
      error: console.error,
    };

    const push = (type: LogEntry["type"], args: unknown[]) => {
      const message = args
        .map((a) => (typeof a === "string" ? a : JSON.stringify(a)))
        .join(" ");
      setEntries((prev) => {
        const next = [...prev, { id: nextId++, type, message, time: new Date().toLocaleTimeString() }];
        return next.length > 100 ? next.slice(next.length - 100) : next;
      });
    };

    console.log = (...args: unknown[]) => {
      original.log(...args);
      push("log", args);
    };
    console.warn = (...args: unknown[]) => {
      original.warn(...args);
      push("warn", args);
    };
    console.error = (...args: unknown[]) => {
      original.error(...args);
      push("error", args);
    };

    console.log("KernelPlay.js Examples loaded");
    console.log("Use arrow keys to move the player");

    return () => {
      console.log = original.log;
      console.warn = original.warn;
      console.error = original.error;
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [entries]);

  const colorFor = (type: LogEntry["type"]) =>
    type === "error" ? "text-red-400" : type === "warn" ? "text-yellow-400" : "text-green-400";
  const prefixFor = (type: LogEntry["type"]) => (type === "error" ? "✖" : type === "warn" ? "⚠" : "›");

  return (
    <aside className="w-full lg:w-80 glass-effect border-l border-indigo-200 shadow-xl overflow-hidden flex flex-col">
      <div className="px-4 py-3 bg-gray-900 border-b border-gray-700 flex items-center justify-between">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Console Output
        </h3>
        <button
          onClick={() => setEntries([])}
          className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-gray-700"
        >
          Clear
        </button>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 bg-gray-900 text-sm font-mono">
        {entries.length === 0 ? (
          <div className="text-gray-500">&gt; Console ready...</div>
        ) : (
          entries.map((e) => (
            <div key={e.id} className="mb-1">
              <span className="text-gray-500">[{e.time}]</span>{" "}
              <span className={colorFor(e.type)}>{prefixFor(e.type)}</span> {e.message}
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
