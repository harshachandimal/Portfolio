"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;

    function apply() {
      el!.style.setProperty("--spot-x", `${x}px`);
      el!.style.setProperty("--spot-y", `${y}px`);
      raf = 0;
    }
    function onMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
      style={{
        background:
          "radial-gradient(560px circle at var(--spot-x, 50%) var(--spot-y, 30%), color-mix(in oklab, var(--accent-cyan) 9%, transparent), transparent 70%)",
      }}
    />
  );
}
