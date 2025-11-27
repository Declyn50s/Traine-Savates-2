import React from "react";
import { useSponsors } from "../../api/hooks";

export function SponsorsGrid() {
  const { data: sponsors } = useSponsors();
  const main = sponsors.filter((s) => s.level === "principal");
  const others = sponsors.filter((s) => s.level === "partenaire");

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">Partenaires principaux</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3 md:grid-cols-4">
          {main.map((s) => (
            <div
              key={s.id}
              className="flex h-24 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <span className="text-xs font-semibold text-slate-700">
                Logo {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">Autres partenaires</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3 md:grid-cols-5">
          {others.map((s) => (
            <div
              key={s.id}
              className="flex h-20 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50"
            >
              <span className="text-[11px] font-medium text-slate-500">
                Logo {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
