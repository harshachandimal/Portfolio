"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { fadeUpItem, staggerContainer } from "@/components/animation/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current || !lineRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(lineRef.current, { scaleY: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 0.6,
          },
        }
      );
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        eyebrow="Learning Journey"
        title="From coursework to production systems"
        description="How my focus has evolved from academic foundations to shipping full-stack, AI-driven products."
      />

      <motion.ol
        ref={listRef}
        className="relative space-y-10 border-l border-border/60 pl-8"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div
          ref={lineRef}
          aria-hidden
          className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-emerald-glow via-cyan-glow to-violet-glow"
        />
        {experience.map((item) => (
          <motion.li key={item.title} variants={fadeUpItem} className="relative">
            <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-gradient-to-br from-emerald-glow via-cyan-glow to-violet-glow shadow-[0_0_12px_var(--accent-cyan)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">
              {item.period}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted">{item.organization}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} accent="violet">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
