import React from "react";
import { Section } from "../../components/ui/Section";
import { useActiveEdition } from "../../api/hooks";
import { Button } from "../../components/ui/Button";

export function PhotosPage() {
  const { data: edition } = useActiveEdition();
  const years = [2025, 2024, 2023, 2022, 2019, 2018, 2016];

  return (
    <Section title="Résultats & galeries photos" eyebrow="Souvenirs de la course">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div>
          <p className="text-sm text-slate-700">
            Revivez l'ambiance de la course en images et consultez les résultats de toutes les
            éditions récentes.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {edition.resultsUrl && (
              <Button
                onClick={() => window.open(edition.resultsUrl!, "_blank", "noopener")}
              >
                Voir les résultats {edition.year}
              </Button>
            )}
            {edition.photosUrl && (
              <Button
                variant="secondary"
                onClick={() => window.open(edition.photosUrl!, "_blank", "noopener")}
              >
                Voir les photos {edition.year}
              </Button>
            )}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 rounded-3xl bg-slate-100 p-2 sm:grid-cols-4">
            {Array.from({ length: 16 }).map((_, idx) => (
              <div
                key={idx}
                className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-300/60"
              >
                <div className="flex h-full items-center justify-center text-[10px] text-slate-600">
                  Photo course
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-900">Archives externes</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {years.map((year) => (
              <li
                key={year}
                className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm"
              >
                <span>Édition {year} – galerie photos</span>
                <button className="text-xs font-semibold text-brand hover:underline">
                  Ouvrir
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
