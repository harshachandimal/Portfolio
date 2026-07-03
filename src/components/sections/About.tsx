"use client";

import { Brain, Cpu, Layers } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection, { fadeUpItem } from "@/components/animation/AnimatedSection";

const pillars = [
  {
    icon: Layers,
    title: "Full-Stack Engineering",
    body: "React, Next.js, Laravel, and MySQL wired into cohesive products — not disconnected demos.",
    accent: "text-cyan-glow",
  },
  {
    icon: Brain,
    title: "Applied AI/ML",
    body: "PyTorch and Scikit-learn models — LSTMs, GRUs, and ensembles — trained to solve real prediction problems.",
    accent: "text-violet-glow",
  },
  {
    icon: Cpu,
    title: "Systems That Explain",
    body: "Interfaces that surface reasoning — complexity, confidence, forecasts — instead of hiding it behind a black box.",
    accent: "text-emerald-glow",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="About"
        title="Engineering intelligent systems, end to end"
        description="I'm Harsha Chandimal, a Computer Science undergraduate at the University of Westminster. I care about building software that doesn't just function — it reasons about data, predicts outcomes, and explains itself to the people using it."
      />

      <AnimatedSection className="grid gap-6 sm:grid-cols-3">
        {pillars.map(({ icon: Icon, title, body, accent }) => (
          <motion.div key={title} variants={fadeUpItem}>
            <GlassCard>
              <Icon className={`h-6 w-6 ${accent}`} aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </GlassCard>
          </motion.div>
        ))}
      </AnimatedSection>
    </section>
  );
}