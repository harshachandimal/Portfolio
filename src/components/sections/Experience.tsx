"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { fadeUpItem, staggerContainer } from "@/components/animation/AnimatedSection";

export default function Experience() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        eyebrow="Learning Journey"
        title="From coursework to production systems"
        description="How my focus has evolved from academic foundations to shipping full-stack, AI-driven products."
      />

      <motion.ol
        className="relative space-y-10 border-l border-border pl-8"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experience.map((item) => (
          <motion.li key={item.title} variants={fadeUpItem} className="relative">
            <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-accent" />
            <span className="font-heading text-xs uppercase tracking-widest text-accent">
              {item.period}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted">{item.organization}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
