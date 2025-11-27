import React from "react";
import { useTrainingSessions } from "../../api/hooks";
import { Section } from "../../components/ui/Section";

export function TrainingsPage() {
  const { data: sessions } = useTrainingSessions();
  const categories = [
    "Adultes",
    "Juniors",
    "Nordic walking",
    "Prépa 20 km",
  ] as const;

  return (
    <Section title="Tous nos entraînements" eyebrow="Le club">
      <p className="mb-6 max-w-2xl text-sm text-slate-700">
        Les groupes sont organisés en fonction des niveaux et des envies. Venez tester un
        entraînement sans engagement, l'ambiance vaut le détour.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat}
            className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-xs">
                👟
              </span>
              {cat}
            </h3>
            {sessions
              .filter((s) => s.category === cat)
              .map((session) => (
                <div key={session.id} className="rounded-2xl bg-slate-50 p-3 text-xs">
                  <p className="font-semibold text-slate-900">{session.title}</p>
                  <p className="mt-1 text-slate-700">
                    {session.day} · {session.time}
                  </p>
                  <p className="mt-1 text-slate-700">{session.location}</p>
                  <p className="mt-1 text-[11px] text-slate-600">{session.level}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
