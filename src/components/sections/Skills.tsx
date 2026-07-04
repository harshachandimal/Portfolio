"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skillGroups } from "@/data/skills";
import AnimatedSection, { fadeUpItem } from "@/components/animation/AnimatedSection";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I use to ship intelligent systems"
        description="A stack chosen for building real products — reliable on the backend, expressive on the frontend, capable where machine learning is involved."
      />

      <AnimatedSection className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={fadeUpItem} className="group">
            <GlassCard>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </AnimatedSection>
    </section>
  );
}
