


"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiPython,
  SiPytorch,
  SiFastapi,
  SiNodedotjs,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Accent = "emerald" | "cyan" | "violet";

interface TechLogo {
  icon: IconType;
  label: string;
  /** Position as % of container, tuned to stay clear of the centered hero content column. */
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
  rotate: number;
  accent: Accent;
  /** mobile: visible always. tablet: visible from sm+. desktop: visible from lg+ only. */
  minBreakpoint: "mobile" | "tablet" | "desktop";
}

const accentVar: Record<Accent, string> = {
  emerald: "var(--accent-emerald)",
  cyan: "var(--accent-cyan)",
  violet: "var(--accent-violet)",
};

// Mobile/tablet: hero content stacks full-height with almost no horizontal
// gutter, so those tiers are pinned inside the section's fixed pt-28/pb-20
// padding bands (top ~<9%, bottom ~>92%) which stay clear of text at any
// content height. Desktop tier (lg+) has real side gutters beside the
// centered max-w-4xl column, so it can use mid-height edge positions.
const logos: TechLogo[] = [
  { icon: SiReact, label: "React", x: "6%", y: "5%", size: 30, delay: 0, duration: 7, driftX: 10, driftY: 12, rotate: 6, accent: "cyan", minBreakpoint: "mobile" },
  { icon: SiNextdotjs, label: "Next.js", x: "92%", y: "6%", size: 32, delay: 0.6, duration: 8, driftX: -12, driftY: 10, rotate: -5, accent: "violet", minBreakpoint: "mobile" },
  { icon: SiTypescript, label: "TypeScript", x: "6%", y: "95%", size: 28, delay: 1.2, duration: 6.5, driftX: 12, driftY: -10, rotate: -6, accent: "cyan", minBreakpoint: "mobile" },
  { icon: SiTailwindcss, label: "Tailwind CSS", x: "94%", y: "93%", size: 30, delay: 1.8, duration: 7.5, driftX: -10, driftY: -12, rotate: 5, accent: "cyan", minBreakpoint: "mobile" },
  { icon: SiPython, label: "Python", x: "38%", y: "97%", size: 28, delay: 2.4, duration: 6, driftX: 14, driftY: -8, rotate: 7, accent: "emerald", minBreakpoint: "mobile" },
  { icon: SiNodedotjs, label: "Node.js", x: "22%", y: "90%", size: 28, delay: 0.9, duration: 7, driftX: -10, driftY: 10, rotate: -7, accent: "emerald", minBreakpoint: "tablet" },
  { icon: SiLaravel, label: "Laravel", x: "78%", y: "96%", size: 26, delay: 3, duration: 8.5, driftX: 10, driftY: -10, rotate: 8, accent: "violet", minBreakpoint: "tablet" },
  { icon: SiMysql, label: "MySQL", x: "62%", y: "91%", size: 26, delay: 1.5, duration: 6.8, driftX: -8, driftY: -12, rotate: -8, accent: "cyan", minBreakpoint: "tablet" },
  { icon: SiPytorch, label: "PyTorch", x: "20%", y: "6%", size: 26, delay: 2.1, duration: 7.2, driftX: 8, driftY: 12, rotate: 5, accent: "emerald", minBreakpoint: "desktop" },
  { icon: SiFastapi, label: "FastAPI", x: "78%", y: "8%", size: 26, delay: 0.3, duration: 6.2, driftX: -10, driftY: 10, rotate: -5, accent: "emerald", minBreakpoint: "desktop" },
  { icon: SiGithub, label: "GitHub", x: "9%", y: "10%", size: 24, delay: 2.7, duration: 8, driftX: 8, driftY: -10, rotate: 6, accent: "violet", minBreakpoint: "desktop" },
  { icon: SiDocker, label: "Docker", x: "90%", y: "78%", size: 24, delay: 1.1, duration: 7.8, driftX: -8, driftY: -12, rotate: -6, accent: "cyan", minBreakpoint: "desktop" },
];

export default function FloatingTechLogos() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {logos.map((logo, i) => {
        const Icon = logo.icon;
        const glow = accentVar[logo.accent];
        const visibilityClass =
          logo.minBreakpoint === "desktop"
            ? "hidden lg:block"
            : logo.minBreakpoint === "tablet"
              ? "hidden sm:block"
              : "";

        return (
          <motion.div
            key={logo.label}
            className={`pointer-events-auto absolute ${visibilityClass}`}
            style={{ left: logo.x, top: logo.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
          >
            <motion.div
              className="group relative flex items-center justify-center rounded-2xl border backdrop-blur-md hover:z-10"
              style={{
                width: logo.size * 2,
                height: logo.size * 2,
                background: "color-mix(in oklab, var(--surface) 55%, transparent)",
                borderColor: "color-mix(in oklab, var(--border) 90%, transparent)",
              }}
              animate={
                reduceMotion
                  ? { opacity: 0.35 }
                  : {
                      x: [0, logo.driftX, 0, -logo.driftX, 0],
                      y: [0, -logo.driftY, 0, logo.driftY, 0],
                      rotate: [0, logo.rotate, 0, -logo.rotate, 0],
                      opacity: 0.35,
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : {
                      duration: logo.duration,
                      delay: logo.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              whileHover={{
                opacity: 1,
                scale: 1.15,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60"
                style={{ background: glow }}
              />
              <Icon
                className="relative transition-colors duration-300"
                style={{ width: logo.size, height: logo.size, color: glow }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}