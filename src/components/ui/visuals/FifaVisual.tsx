const outcomes = [
  { label: "Home", value: 54, color: "var(--accent-emerald)" },
  { label: "Draw", value: 21, color: "var(--accent-violet)" },
  { label: "Away", value: 25, color: "var(--accent-cyan)" },
];

export default function FifaVisual() {
  return (
    <div className="flex h-24 w-full flex-col justify-center gap-2.5">
      {outcomes.map((o) => (
        <div key={o.label} className="flex items-center gap-2">
          <span className="w-9 shrink-0 font-mono text-[10px] text-muted">{o.label}</span>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full"
              style={{ width: `${o.value}%`, background: o.color }}
            />
          </div>
          <span className="w-8 shrink-0 text-right font-mono text-[10px] text-muted">
            {o.value}%
          </span>
        </div>
      ))}
    </div>
  );
}