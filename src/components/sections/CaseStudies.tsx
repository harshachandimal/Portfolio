import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechList from "@/components/ui/TechList";
import { projects } from "@/data/projects";
import { accentMap } from "@/lib/accent";

const featuredStudies = projects.filter((p) =>
  ["codemind", "demandflow-ai"].includes(p.slug)
);

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Case Studies"
        title="A closer look under the hood"
        description="How two of these systems are actually engineered — from data pipeline to interface."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {featuredStudies.map((project) => {
          const a = accentMap[project.accent];
          return (
            <GlassCard key={project.slug} className="flex flex-col justify-between">
              <div>
                <span className={`font-mono text-xs uppercase tracking-widest ${a.text}`}>
                  Case Study
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-5 space-y-2 border-l border-border pl-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <TechList tech={project.tech} limit={4} />
                {project.links?.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${a.text}`}
                  >
                    Explore repo <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}