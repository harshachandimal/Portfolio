"use client";

import { motion } from "motion/react";

const outcomes = [
  { label: "Home", value: 54, color: "var(--accent-emerald)" },
  { label: "Draw", value: 21, color: "var(--accent-violet)" },
  { label: "Away", value: 25, color: "var(--accent-cyan)" },
];

export default function FifaVisual() {
  return (
    <div className="flex h-24 w-full flex-col justify-center gap-2.5">
      {outcomes.map((o, i) => (
        <div key={o.label} className="flex items-center gap-2">
          <span className="w-9 shrink-0 font-mono text-[10px] text-muted">{o.label}</span>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
            <motion.div
              className="h-full rounded-full"
              style={{ background: o.color }}
              initial={{ width: "0%" }}
              whileInView={{ width: `${o.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="w-8 shrink-0 text-right font-mono text-[10px] text-muted">
            {o.value}%
          </span>
        </div>
      ))}
    </div>
  );
}
