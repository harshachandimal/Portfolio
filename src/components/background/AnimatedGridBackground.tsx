import { cn } from "@/lib/utils";

export default function AnimatedGridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("noise fixed inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" />
    </div>
  );
}
