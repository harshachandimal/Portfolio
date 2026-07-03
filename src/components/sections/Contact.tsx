"use client";

import { ArrowRight, Mail } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import GridBackground from "@/components/ui/GridBackground";
import AnimatedSection, { fadeUpItem } from "@/components/animation/AnimatedSection";
import MagneticButton from "@/components/animation/MagneticButton";
import TerminalTyper from "@/components/animation/TerminalTyper";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28">
      <AnimatedSection>
        <motion.div variants={fadeUpItem} className="relative overflow-hidden rounded-2xl p-[1px]">
          <div className="absolute inset-0 opacity-70 motion-safe:animate-spin-slower bg-[conic-gradient(from_0deg,var(--accent-emerald),var(--accent-cyan),var(--accent-violet),var(--accent-emerald))]" />
          <GlassCard className="glow-border relative overflow-hidden text-center" hover={false}>
            <GridBackground className="opacity-60" animated={false} />
            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow">
                Get In Touch
              </span>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-foreground sm:text-4xl">
                Let&apos;s build something intelligent together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base">
                Open to internships, freelance collaborations, and full-stack / AI engineering
                roles. Reach out and let&apos;s talk about what you&apos;re building.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton>
                  <Button
                    href="mailto:harshachandim92@gmail.com"
                    variant="primary"
                    icon={<Mail className="h-4 w-4" />}
                  >
                    harshachandim92@gmail.com
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button href="#projects" variant="ghost" icon={<ArrowRight className="h-4 w-4" />}>
                    See my work first
                  </Button>
                </MagneticButton>
              </div>

              <TerminalTyper />
            </div>
          </GlassCard>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
