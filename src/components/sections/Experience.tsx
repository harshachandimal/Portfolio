import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        eyebrow="Learning Journey"
        title="From coursework to production systems"
        description="How my focus has evolved from academic foundations to shipping full-stack, AI-driven products."
      />

      <ol className="relative space-y-10 border-l border-border pl-8">
        {experience.map((item) => (
          <li key={item.title} className="relative">
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
          </li>
        ))}
      </ol>
    </section>
  );
}