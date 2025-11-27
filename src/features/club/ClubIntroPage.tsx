import React from "react";
import { Section } from "../../components/ui/Section";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export function ClubIntroPage() {
  const navigate = useNavigate();
  return (
    <Section title="Le club des Traîne-Savates" eyebrow="Le club">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            Le club des Traîne-Savates réunit des coureuses et coureurs de tous niveaux autour
            d'une même envie : partager le plaisir de courir, sans prise de tête, dans une
            ambiance de village.
          </p>
          <p>
            Des entraînements hebdomadaires, des sorties ponctuelles, des objectifs communs
            (20 km de Lausanne, courses populaires de la région) et des moments conviviaux tout
            au long de l'année.
          </p>
          <ul className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">👟</span>
              <span>Séances encadrées par des membres expérimentés.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">👨‍👩‍👧‍👦</span>
              <span>Groupes pour adultes, juniors et marcheurs / nordic walking.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📅</span>
              <span>Entraînements réguliers toute l'année, quelles que soient les conditions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">🎉</span>
              <span>Moments conviviaux : repas, assemblées, sorties spéciales.</span>
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={() => navigate("/le-club/entrainements")}>
              Voir les entraînements
            </Button>
            <Button variant="secondary" onClick={() => navigate("/le-club/adherer")}>
              Adhérer au club
            </Button>
          </div>
        </div>
        <div className="space-y-4 text-sm text-slate-700">
          <div className="rounded-3xl border border-brand-light bg-[#fff7f2] p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Une ambiance à l'image du logo
            </h3>
            <p className="mt-2">
              La chaussure qui sue et qui sourit, c'est exactement l'esprit du club : on se donne
              à fond, mais toujours dans la bonne humeur. Chacun·e vient avec son rythme, son
              histoire, ses objectifs.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Profil des membres</h3>
            <ul className="mt-2 space-y-1">
              <li>• Débutant·e·s qui découvrent la course populaire</li>
              <li>• Coureurs réguliers visant des chronos sur 10 km / 20 km</li>
              <li>• Parents qui courent pendant que les enfants s'entraînent</li>
              <li>• Marcheurs / nordic walking pour profiter de l'ambiance</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
