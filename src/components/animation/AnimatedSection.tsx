"use client";

import { ReactNode } from "react";
import { motion, Variants } from "motion/react";

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function staggerContainer(stagger = 0.12, delay = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Distance (px) from viewport edge before the reveal fires. */
  margin?: string;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = 0.12,
  margin = "-80px",
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin }}
    >
      {children}
    </motion.div>
  );
}
