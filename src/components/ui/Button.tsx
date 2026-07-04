import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  download?: boolean | string;
  className?: string;
}

const variants = {
  primary:
    "bg-accent text-background font-semibold hover:bg-accent/90",
  secondary:
    "glass glass-hover text-foreground border-border hover:text-accent",
  ghost:
    "text-muted hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-accent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  download,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
      {icon}
    </Link>
  );
}