"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 150, damping: 18 });
  const springRy = useSpring(ry, { stiffness: 150, damping: 18 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  }

  function handleMouseLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ perspective: 900 }}
    >
      <motion.div style={{ rotateX: springRx, rotateY: springRy, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
}
