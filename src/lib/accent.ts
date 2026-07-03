import { Accent } from "@/types";

export const accentMap: Record<
  Accent,
  { text: string; border: string; bg: string; glow: string; from: string }
> = {
  emerald: {
    text: "text-emerald-glow",
    border: "border-emerald-glow/40",
    bg: "bg-emerald-glow/10",
    glow: "shadow-[0_0_40px_-12px_var(--accent-emerald)]",
    from: "from-emerald-glow",
  },
  cyan: {
    text: "text-cyan-glow",
    border: "border-cyan-glow/40",
    bg: "bg-cyan-glow/10",
    glow: "shadow-[0_0_40px_-12px_var(--accent-cyan)]",
    from: "from-cyan-glow",
  },
  violet: {
    text: "text-violet-glow",
    border: "border-violet-glow/40",
    bg: "bg-violet-glow/10",
    glow: "shadow-[0_0_40px_-12px_var(--accent-violet)]",
    from: "from-violet-glow",
  },
};