"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  /** Shown in the header instead of the language tag, e.g. "main.js" */
  filename?: string;
}

/**
 * Replaces the old pattern of:
 *   <pre id="npm-code"><code>...</code></pre>
 *   <button onclick="copyCode('npm-code')">Copy</button>
 * plus a global `copyCode(elementId)` in script.js that queried the DOM by
 * id, created a hidden <textarea>, and used document.execCommand('copy').
 *
 * This version uses the modern Clipboard API and keeps copy state local
 * to each block via React state — no global functions, no DOM-id
 * coordination, and no risk of two code blocks on the same page sharing
 * an id (which happened between index.html and docs pages).
 */
export function CodeBlock({ code, language = "text", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="code-wrap relative">
      <div className="code-header">
        <span className="code-lang">{filename ?? language}</span>
        <button
          onClick={handleCopy}
          className={`copy-btn text-xs transition-colors ${
            copied ? "text-green-400" : "text-gray-400 hover:text-white"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
