import { ReactNode } from "react";
import { Accent } from "@/types";
import { accentMap } from "@/lib/accent";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}

export default function Badge({ children, accent = "cyan", className }: BadgeProps) {
  const a = accentMap[accent];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        "bg-surface-2/60 text-muted",
        a.border,
        className
      )}
    >
      {children}
    </span>
  );
}