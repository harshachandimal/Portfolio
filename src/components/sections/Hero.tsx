"use client";

import Image from "next/image";
import { Download, ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
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
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUpItem} className="relative mx-auto mb-8 h-32 w-32 sm:h-36 sm:w-36">
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-accent motion-safe:animate-float">
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
          <Badge>
            <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.h1
          variants={staggerContainer(0.06)}
          className="text-balance font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          {titleLine1.map((word) => (
            <motion.span key={word} variants={fadeUpItem} className="mr-[0.3em] inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span variants={fadeUpItem} className="mr-[0.3em] inline-block text-accent">
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
            <Button href="#projects" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              View Projects
            </Button>
          </motion.div>
          <motion.div variants={fadeUpItem}>
            <Button href="#contact" variant="secondary" icon={<Mail className="h-4 w-4" />}>
              Contact Me
            </Button>
          </motion.div>
          <motion.div variants={fadeUpItem}>
            <Button
              href="/Harsha-Chandimal-CV.pdf"
              variant="secondary"
              download="Harsha-Chandimal-CV.pdf"
              icon={<Download className="h-4 w-4" />}
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
