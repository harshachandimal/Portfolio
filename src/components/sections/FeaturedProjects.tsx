"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimatedSection, { fadeUpItem } from "@/components/animation/AnimatedSection";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Featured Work"
        title="Systems built to think and predict"
        description="A selection of production-style projects spanning full-stack platforms and applied machine learning."
      />

      <AnimatedSection className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <motion.div key={project.slug} variants={fadeUpItem} className="h-full">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatedSection>
    </section>
  );
}