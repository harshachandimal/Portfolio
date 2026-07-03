import Image from "next/image";
import { Download, ArrowRight, Mail } from "lucide-react";
import GridBackground from "@/components/ui/GridBackground";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <GridBackground />

      <div className="relative mx-auto max-w-4xl px-6 text-center animate-fade-up">
        <div className="relative mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border border-white/10 shadow-lg sm:h-36 sm:w-36">
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

        <div className="mb-6 inline-flex">
          <Badge accent="emerald">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-glow" />
            Available for opportunities
          </Badge>
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          I build{" "}
          <span className="text-gradient">intelligent full-stack systems</span> that
          think, predict, and explain.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
          Computer Science undergraduate focused on Full-Stack Development, AI/ML, and
          production-ready software. I build systems that combine clean engineering,
          practical machine learning, and strong user experience.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
            View Projects
          </Button>
          <Button href="#contact" variant="secondary" icon={<Mail className="h-4 w-4" />}>
            Contact Me
          </Button>
          <Button href="/resume.pdf" variant="secondary" external icon={<Download className="h-4 w-4" />}>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}