import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import TechList from "@/components/ui/TechList";
import ProjectVisual from "@/components/ui/visuals";
import { GithubIcon } from "@/components/ui/icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard as="article" className="group flex h-full flex-col">
      <div className="rounded-lg border border-border bg-surface-2 p-3">
        <ProjectVisual variant={project.visual} />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-accent">{project.tagline}</p>
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
            <ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0 text-accent" aria-hidden />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-border pt-4">
        <TechList tech={project.tech} limit={5} />
      </div>
    </GlassCard>
  );
}
