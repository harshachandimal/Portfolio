import { cn } from "@/lib/utils";

export default function AnimatedGridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("noise fixed inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)] motion-safe:animate-grid-pan" />
      <div className="absolute left-1/2 top-[-10%] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-glow/15 blur-[130px]" />
      <div className="absolute right-[5%] top-[25%] h-[420px] w-[420px] rounded-full bg-violet-glow/12 blur-[120px] motion-safe:animate-float" />
      <div
        className="absolute left-[5%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-glow/12 blur-[120px] motion-safe:animate-float"
        style={{ animationDelay: "-3s" }}
      />
    </div>
  );
}
