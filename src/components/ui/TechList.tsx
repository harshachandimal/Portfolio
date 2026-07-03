interface TechListProps {
  tech: string[];
  limit?: number;
}

export default function TechList({ tech, limit }: TechListProps) {
  const items = limit ? tech.slice(0, limit) : tech;
  const remaining = limit && tech.length > limit ? tech.length - limit : 0;

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-md border border-border bg-surface-2/80 px-2.5 py-1 text-xs text-muted"
        >
          {t}
        </li>
      ))}
      {remaining > 0 && (
        <li className="rounded-md border border-border bg-surface-2/80 px-2.5 py-1 text-xs text-muted">
          +{remaining}
        </li>
      )}
    </ul>
  );
}