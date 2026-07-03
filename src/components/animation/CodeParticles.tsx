const particles = [
  { x: "6%", y: "22%", size: 13, delay: 0, sym: "</>" },
  { x: "88%", y: "16%", size: 12, delay: 1.1, sym: "{ }" },
  { x: "14%", y: "72%", size: 14, delay: 2.2, sym: "01" },
  { x: "80%", y: "68%", size: 11, delay: 0.6, sym: "AI" },
  { x: "50%", y: "10%", size: 10, delay: 1.8, sym: "λ" },
  { x: "94%", y: "42%", size: 12, delay: 3.1, sym: "π" },
  { x: "3%", y: "48%", size: 11, delay: 2.6, sym: "#" },
  { x: "60%", y: "84%", size: 13, delay: 0.3, sym: "()" },
];

export default function CodeParticles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute select-none font-mono text-muted motion-safe:animate-particle-drift"
          style={{
            left: p.x,
            top: p.y,
            fontSize: p.size,
            animationDelay: `${p.delay}s`,
            opacity: 0.25,
          }}
        >
          {p.sym}
        </span>
      ))}
    </div>
  );
}
