import React, { useState } from "react";
import { useActiveEdition, useRaceCategories } from "../../api/hooks";
import { Section } from "../../components/ui/Section";
import { MascotShoeBadge } from "../../components/ui/MascotShoeBadge";
import { Button } from "../../components/ui/Button";

const filters = ["Tous", "Adultes", "Enfants", "Villageoise", "Walking"] as const;

export function CoursePage() {
  const { data: edition } = useActiveEdition();
  const { data: races } = useRaceCategories();
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Tous");

  // Sécurité si l'API n'a pas encore répondu
  if (!edition || !races) {
    return null;
  }

  const filtered =
    activeFilter === "Tous" ? races : races.filter((r) => r.type === activeFilter);

  return (
    <div className="bg-white">
      <Section title="Découvrez notre course populaire" eyebrow="La course">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-900">{edition.date}</p>
            <p className="text-sm text-slate-700">{edition.location}</p>
          </div>

          {/* CTA inscriptions → lien MSO */}
          <div className="flex flex-wrap gap-2">
            <MascotShoeBadge label="Je m'inscris" />
            <Button
              onClick={() => {
                window.open(
                  "https://www.mso.swiss/events/2250-les-traine-savates",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              S'inscrire maintenant
            </Button>
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-4 py-1 text-xs font-semibold transition ${
                activeFilter === f
                  ? "border-brand bg-brand-light text-brand-dark"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((race) => (
            <div
              key={race.id}
              className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-[#fff7f2] p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {race.type}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {race.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">{race.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2 text-xs text-slate-700">
                  <span className="rounded-full bg-white px-3 py-1 font-semibold text-brand shadow-sm">
                    {race.distanceKm.toString().replace(".", ",")} km
                  </span>
                  <span className="flex items-center gap-1">
                    <span>⏰</span>
                    <span>{race.startTime}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-700">
                <span>Ravitaillement sur le parcours et à l'arrivée.</span>
                <button className="font-semibold text-brand hover:underline">
                  Détails du règlement
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold text-slate-900">Programme de la journée</h3>
            <dl className="mt-4 space-y-3 text-sm text-slate-700">
              <ProgramRow hour="Dès 8h00" label="Inscriptions et retrait des dossards" />
              <ProgramRow hour="10h00" label="Départ course 5.1 km" />
              <ProgramRow hour="10h45" label="Départ course 10.3 km" />
              <ProgramRow hour="10h50" label="Départ walking / nordic walking" />
              <ProgramRow hour="13h00" label="Départ course villageoise" />
              <ProgramRow hour="13h30" label="Courses enfants" />
              <ProgramRow hour="14h00" label="Proclamation des résultats" />
            </dl>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Parcours & téléchargements</h3>
            <p className="mt-2">
              Retrouvez les cartes détaillées des parcours et les fichiers GPX pour préparer vos
              entraînements.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center justify-between text-sm">
                <span>Parcours 10.3 km</span>
                <button className="text-xs font-semibold text-brand hover:underline">
                  Télécharger GPX
                </button>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span>Parcours 5.1 km</span>
                <button className="text-xs font-semibold text-brand hover:underline">
                  Télécharger GPX
                </button>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span>Parcours villageois 2 km</span>
                <button className="text-xs font-semibold text-brand hover:underline">
                  Télécharger GPX
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

interface ProgramRowProps {
  hour: string;
  label: string;
}

function ProgramRow({ hour, label }: ProgramRowProps) {
  return (
    <div className="flex items-start gap-3">
      <dt className="mt-0.5 min-w-[5rem] rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand shadow-sm">
        {hour}
      </dt>
      <dd className="text-sm text-slate-700">{label}</dd>
    </div>
  );
}
