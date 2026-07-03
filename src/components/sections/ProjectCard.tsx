import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import TechList from "@/components/ui/TechList";
import { accentMap } from "@/lib/accent";
import ProjectVisual from "@/components/ui/visuals";
import { GithubIcon } from "@/components/ui/icons";
import TiltCard from "@/components/animation/TiltCard";

export default function ProjectCard({ project }: { project: Project }) {
  const a = accentMap[project.accent];

  return (
    <TiltCard className="group h-full">
      <GlassCard
        as="article"
        hover={false}
        className={`flex h-full flex-col transition-shadow duration-500 ${a.hoverGlow}`}
      >
        <div className="shine-sweep" />
        <div className="relative z-10 flex h-full flex-col">
          <div className={`rounded-xl border ${a.border} ${a.bg} p-3`}>
            <ProjectVisual variant={project.visual} />
          </div>

          <div className="mt-5 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
              <p className={`mt-0.5 text-xs font-medium ${a.text}`}>{project.tagline}</p>
            </div>
            {project.links?.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="shrink-0 text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-muted">
                <ArrowUpRight className={`mt-0.5 h-3 w-3 shrink-0 ${a.text}`} aria-hidden />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-5 border-t border-border pt-4">
            <TechList tech={project.tech} limit={5} />
          </div>
        </div>
      </GlassCard>
    </TiltCard>
  );
}
