import React from "react";
import { Section } from "../../components/ui/Section";
import { useFaq } from "../../api/hooks";

export function InfosPratiquesPage() {
  const { data: faq } = useFaq();

  return (
    <Section title="Infos pratiques" eyebrow="Venir à Cheseaux">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-700">
          <p>
            La place de fête se situe au cœur de Cheseaux-sur-Lausanne. Tous les départs et
            arrivées se font à proximité immédiate de la gare LEB.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Venir en transports publics
            </h3>
            <p className="mt-2">
              LEB toutes les 15 minutes depuis Lausanne ou Echallens. Descendre à l'arrêt
              «Cheseaux». La place de fête se trouve à 3 minutes à pied.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Venir en voiture</h3>
            <p className="mt-2">
              Suivez la signalisation temporaire «Course populaire». Des parkings sont fléchés à
              l'entrée du village, merci de respecter les indications des bénévoles.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Sur place</h3>
            <ul className="mt-2 space-y-1">
              <li>• Vestiaires et douches dans la salle de sport.</li>
              <li>• Cantine avec plats chauds, sandwiches, pâtisseries.</li>
              <li>• Zone d'animation pour les enfants.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4 text-sm text-slate-700">
          <div className="h-64 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <div className="flex h-full items-center justify-center text-xs text-slate-500">
              Carte interactive intégrée (Google Maps ou autre)
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">FAQ</h3>
            {faq.map((item) => (
              <details
                key={item.id}
                className="mt-2 rounded-2xl bg-slate-50 p-3 text-xs text-slate-700"
              >
                <summary className="cursor-pointer font-semibold">
                  {item.question}
                </summary>
                <p className="mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
