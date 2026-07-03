"use client";

import Image from "next/image";
import { Download, ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import MagneticButton from "@/components/animation/MagneticButton";
import CodeParticles from "@/components/animation/CodeParticles";
import { fadeUpItem, staggerContainer } from "@/components/animation/AnimatedSection";

const titleLine1 = ["I", "build"];
const titleGradient = "intelligent full-stack systems";
const titleLine2 = ["that", "think,", "predict,", "and", "explain."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <CodeParticles />

      <motion.div
        className="relative mx-auto max-w-4xl px-6 text-center"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUpItem} className="relative mx-auto mb-8 h-32 w-32 sm:h-36 sm:w-36">
          <div className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,var(--accent-emerald),var(--accent-cyan),var(--accent-violet),var(--accent-emerald))] opacity-70 blur-md motion-safe:animate-spin-slow" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 shadow-lg motion-safe:animate-float">
            <Image
              src="/Me.jpeg"
              alt="Portrait of Harsha Chandimal"
              fill
              priority
              sizes="(min-width: 640px) 144px, 128px"
              className="object-cover"
              style={{ objectPosition: "50% 15%" }}
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUpItem} className="mb-6 inline-flex">
          <Badge accent="emerald">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-glow" />
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.h1
          variants={staggerContainer(0.06)}
          className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          {titleLine1.map((word) => (
            <motion.span key={word} variants={fadeUpItem} className="mr-[0.3em] inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span variants={fadeUpItem} className="text-gradient mr-[0.3em] inline-block">
            {titleGradient}
          </motion.span>
          {titleLine2.map((word) => (
            <motion.span key={word} variants={fadeUpItem} className="mr-[0.3em] inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeUpItem}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          Computer Science undergraduate focused on Full-Stack Development, AI/ML, and
          production-ready software. I build systems that combine clean engineering,
          practical machine learning, and strong user experience.
        </motion.p>

        <motion.div
          variants={staggerContainer(0.1)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div variants={fadeUpItem}>
            <MagneticButton>
              <Button href="#projects" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
                View Projects
              </Button>
            </MagneticButton>
          </motion.div>
          <motion.div variants={fadeUpItem}>
            <MagneticButton>
              <Button href="#contact" variant="secondary" icon={<Mail className="h-4 w-4" />}>
                Contact Me
              </Button>
            </MagneticButton>
          </motion.div>
          <motion.div variants={fadeUpItem}>
            <MagneticButton>
              <Button
                href="/Harsha-Chandimal-CV.pdf"
                variant="secondary"
                download="Harsha-Chandimal-CV.pdf"
                icon={<Download className="h-4 w-4" />}
              >
                Download CV
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
