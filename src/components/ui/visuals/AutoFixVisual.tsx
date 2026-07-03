"use client";

import { motion } from "motion/react";

const steps = ["Booked", "Assigned", "In Service", "Invoiced"];

export default function AutoFixVisual() {
  return (
    <div className="flex h-24 w-full flex-col justify-center gap-3">
      <div className="flex items-center">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--accent-emerald)" }}
                initial={{ opacity: 0.25, boxShadow: "0 0 0px var(--accent-emerald)" }}
                whileInView={{
                  opacity: [0.25, 1, 0.25],
                  boxShadow: [
                    "0 0 0px var(--accent-emerald)",
                    "0 0 10px var(--accent-emerald)",
                    "0 0 0px var(--accent-emerald)",
                  ],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: (steps.length - 1) * 0.5,
                  ease: "easeInOut",
                }}
              />
              <span className="whitespace-nowrap font-mono text-[9px] text-muted">{step}</span>
            </div>
            {i < steps.length - 1 && <div className="mx-1 h-px flex-1 bg-border" />}
          </div>
        ))}
      </div>
    </div>
  );
}
