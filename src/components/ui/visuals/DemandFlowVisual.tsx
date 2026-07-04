"use client";

import { motion } from "motion/react";

const bars = [40, 55, 35, 65, 50, 72, 60, 85];

export default function DemandFlowVisual() {
  return (
    <svg viewBox="0 0 240 100" className="h-24 w-full" aria-hidden>
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={i * 30 + 6}
          width="16"
          rx="3"
          fill={i >= 6 ? "var(--accent-yellow)" : "var(--muted)"}
          opacity={i >= 6 ? 1 : 0.5}
          initial={{ y: 100, height: 0 }}
          whileInView={{ y: 100 - h, height: h }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <line x1="192" y1="0" x2="192" y2="100" stroke="var(--border)" strokeDasharray="4 4" />
      <text x="196" y="14" className="font-mono" fontSize="9" fill="var(--muted)">
        forecast
      </text>
    </svg>
  );
}
