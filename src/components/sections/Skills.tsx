"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skillGroups } from "@/data/skills";
import { accentMap } from "@/lib/accent";
import AnimatedSection, { fadeUpItem } from "@/components/animation/AnimatedSection";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I use to ship intelligent systems"
        description="A stack chosen for building real products — reliable on the backend, expressive on the frontend, capable where machine learning is involved."
      />

      <div className="relative">
        <svg
          aria-hidden
          viewBox="0 0 400 400"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] motion-safe:animate-spin-slower"
        >
          {[60, 110, 160, 200].map((r) => (
            <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="var(--accent-cyan)" strokeWidth="1" />
          ))}
          <line x1="200" y1="200" x2="200" y2="0" stroke="var(--accent-cyan)" strokeWidth="1" />
        </svg>

        <AnimatedSection className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const a = accentMap[group.accent];
            return (
              <motion.div key={group.category} variants={fadeUpItem} className="group">
                <GlassCard className="transition-shadow duration-500 group-hover:shadow-[0_0_40px_-14px_var(--accent-cyan)]">
                  <h3 className={`text-sm font-semibold uppercase tracking-wide ${a.text}`}>
                    {group.category}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-muted">
                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-125 ${a.text}`}
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
