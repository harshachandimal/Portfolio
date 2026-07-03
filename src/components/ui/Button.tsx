import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

const variants = {
  primary:
    "bg-gradient-to-r from-emerald-glow via-cyan-glow to-violet-glow text-background font-semibold hover:brightness-110 hover:shadow-[0_0_30px_-6px_var(--accent-cyan)]",
  secondary:
    "glass glass-hover text-foreground border-border hover:text-cyan-glow",
  ghost:
    "text-muted hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-cyan-glow",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
      {icon}
    </Link>
  );
}