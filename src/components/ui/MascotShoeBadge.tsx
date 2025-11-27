import React from "react";

interface MascotShoeBadgeProps {
  label?: string;
}

export function MascotShoeBadge({ label }: MascotShoeBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-sm text-white shadow-sm">
        👟
      </span>
      {label && <span>{label}</span>}
    </div>
  );
}
