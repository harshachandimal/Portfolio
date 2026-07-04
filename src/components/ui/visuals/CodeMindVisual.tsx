"use client";

import { motion } from "motion/react";

export default function CodeMindVisual() {
  return (
    <svg viewBox="0 0 240 100" className="h-24 w-full" aria-hidden>
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="var(--border)" strokeWidth="1" />
      ))}
      <motion.path
        d="M0,80 L30,60 L60,65 L90,30 L120,40 L150,15 L180,25 L210,10 L240,20"
        fill="none"
        stroke="var(--accent-yellow)"
        strokeWidth="2"
        strokeDasharray="240"
        initial={{ strokeDashoffset: 240 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <text x="4" y="14" className="font-mono" fontSize="9" fill="var(--muted)">
        O(n log n) · trace
      </text>
    </svg>
  );
}
