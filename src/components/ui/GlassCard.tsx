import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass relative overflow-hidden rounded-2xl p-6",
        hover && "glass-hover",
        className
      )}
    >
      {children}
    </Tag>
  );
}