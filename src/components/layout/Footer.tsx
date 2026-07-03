import Link from "next/link";
import { Mail } from "lucide-react";
import { socialLinks } from "@/data/nav";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, twitter: Mail };

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-sm text-muted">
          <span className="text-gradient">Harsha Chandimal</span> · built with Next.js &amp; Tailwind
        </p>

        <ul className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-cyan-glow/40 hover:text-cyan-glow"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} · All systems operational
        </p>
      </div>
    </footer>
  );
}