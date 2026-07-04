import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-2/60 px-3 py-1 text-xs font-medium tracking-wide text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
