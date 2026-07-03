export default function CodeMindVisual() {
  return (
    <svg viewBox="0 0 240 100" className="h-24 w-full" aria-hidden>
      <defs>
        <linearGradient id="trace-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-emerald)" />
          <stop offset="100%" stopColor="var(--accent-cyan)" />
        </linearGradient>
      </defs>
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="var(--border)" strokeWidth="1" />
      ))}
      <path
        d="M0,80 L30,60 L60,65 L90,30 L120,40 L150,15 L180,25 L210,10 L240,20"
        fill="none"
        stroke="url(#trace-line)"
        strokeWidth="2"
        strokeDasharray="240"
        className="animate-trace"
      />
      <text x="4" y="14" className="font-mono" fontSize="9" fill="var(--muted)">
        O(n log n) · trace
      </text>
    </svg>
  );
}