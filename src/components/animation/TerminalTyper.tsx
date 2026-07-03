"use client";

import { useEffect, useState } from "react";

const lines = [
  "> checking availability...",
  "> status: open_to_work = true",
  "> response_time: \"< 24h\"",
  "> awaiting_your_message_",
];

export default function TerminalTyper() {
  const [text, setText] = useState("");

  useEffect(() => {
    const full = lines.join("\n");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = reduced ? full.length : 1;

    let i = 0;
    const id = setInterval(() => {
      i += step;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 26);

    return () => clearInterval(id);
  }, []);

  return (
    <pre className="mx-auto mt-8 max-w-sm whitespace-pre-wrap rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-left font-mono text-[11px] leading-relaxed text-emerald-glow/90">
      {text}
      <span className="motion-safe:animate-pulse-glow">▍</span>
    </pre>
  );
}
