import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Featured Work"
        title="Systems built to think and predict"
        description="A selection of production-style projects spanning full-stack platforms and applied machine learning."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}