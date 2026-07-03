import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  animated?: boolean;
}

export default function GridBackground({ className, animated = true }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]",
          animated && "animate-grid-pan"
        )}
      />
      <div className="absolute left-1/2 top-[-10%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-glow/20 blur-[120px]" />
      <div className="absolute right-[5%] top-[30%] h-[380px] w-[380px] rounded-full bg-violet-glow/15 blur-[110px] animate-float" />
      <div className="absolute left-[5%] bottom-[-10%] h-[380px] w-[380px] rounded-full bg-emerald-glow/15 blur-[110px] animate-float" />
    </div>
  );
}