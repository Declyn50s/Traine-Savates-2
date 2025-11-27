import React from "react";
import { useNavigate } from "react-router-dom";
import { useActiveEdition, useRaceCategories } from "../../api/hooks";
import { Section } from "../../components/ui/Section";
import { MascotShoeBadge } from "../../components/ui/MascotShoeBadge";
import { Button } from "../../components/ui/Button";
import { SponsorsGrid } from "../sponsors/SponsorsGrid";
import logoTs from "../../assets/Les-Traine-Savates-Logotype.png";

export function HomePage() {
  const navigate = useNavigate();
  const { data: edition } = useActiveEdition();
  const { data: races } = useRaceCategories();

  // Sécurité au cas où l'API n'a pas encore répondu
  if (!edition) {
    return null;
  }

  const raceList = races ?? [];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#ffefe7]">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1600)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
          {/* Carte hero gauche */}
          <div className="relative max-w-xl space-y-6 bg-white/90 p-6 shadow-lg backdrop-blur-sm sm:rounded-3xl">
            {/* LOGO en haut à droite
                - caché sur mobile/tablette (hidden lg:block)
                - responsive avec max 200px de large
            */}
            <div
              className="pointer-events-none absolute hero-logo hidden lg:block"
              style={{
                top: "0.75rem",    // tu peux ajuster dans l’inspecteur
                right: "0.75rem",  // tu peux ajuster dans l’inspecteur
                width: "40vw",
                maxWidth: "200px", // <= 200px max
                zIndex: 10,
              }}
            >
              <img
                src={logoTs}
                alt="Logo du club Les Traîne-Savates"
                className="drop-shadow-md"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            {/* Intro texte */}
            <div className="mb-1">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                Les Traîne-Savates
              </p>
              <p className="text-[11px] text-slate-600">
                Course populaire & club à Cheseaux
              </p>
            </div>

            <MascotShoeBadge label="Course populaire & club de course" />

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Les Traîne-Savates
              <span className="block text-brand">
                Une course, un club, une passion partagée.
              </span>
            </h1>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Rendez-vous à <span className="font-semibold">{edition.location}</span> pour la
              <span className="font-semibold"> {edition.editionNumber}e édition</span> de notre
              course populaire. Une ambiance de village, des parcours pour tous les niveaux et un
              club ouvert à toutes et tous.
            </p>

            <div className="space-y-3 text-sm">
              <p className="font-semibold text-slate-900">Prochaine édition :</p>
              <p className="flex flex-wrap items-center gap-2 text-slate-800">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand shadow-sm">
                  {edition.date}
                </span>
                <span className="text-xs text-slate-600">
                  Inscriptions en ligne sur notre plateforme sécurisée.
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => navigate("/la-course")}>Infos & inscriptions</Button>
              <Button variant="secondary" onClick={() => navigate("/le-club/adherer")}>
                Rejoindre le club
              </Button>
            </div>
          </div>

          {/* Carte droite (parcours) */}
          <div className="relative mt-8 flex-1 lg:mt-0">
            <div className="absolute -right-10 -top-6 h-24 w-24 rounded-full bg-brand-light" />
            <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-3xl border-2 border-dashed border-brand" />
            <div className="relative overflow-hidden rounded-3xl border border-brand-light bg-white/90 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 p-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    Les parcours
                  </p>
                  <p className="text-sm font-medium text-slate-900">
                    Choisissez votre distance, venez comme vous êtes.
                  </p>
                </div>
                <MascotShoeBadge />
              </div>
              <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
                {raceList.slice(0, 6).map((race) => (
                  <div
                    key={race.id}
                    className="flex flex-col rounded-2xl bg-[#fff7f2] p-3 text-xs shadow-sm"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-brand">
                      {race.type}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{race.name}</p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-700">
                      <span>📏</span>
                      <span>{race.distanceKm.toString().replace(".", ",")} km</span>
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-700">
                      <span>⏰</span>
                      <span>Départ {race.startTime}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc La course */}
      <Section id="course" title="La course des Traîne-Savates" eyebrow="La course">
        <div className="grid gap-6 md:grid-cols-3">
          {raceList.map((race) => (
            <div
              key={race.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                  {race.type}
                </p>
                <h3 className="text-lg font-semibold text-slate-900">{race.name}</h3>
                <p className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="rounded-full bg-brand-light px-2 py-0.5 text-[11px] font-semibold text-brand-dark">
                    {race.distanceKm.toString().replace(".", ",")} km
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-600">
                    <span>⏰</span>
                    <span>Départ {race.startTime}</span>
                  </span>
                </p>
                <p className="text-sm text-slate-700">{race.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  className="text-xs font-semibold text-brand hover:underline"
                  onClick={() => navigate("/la-course")}
                >
                  Voir les détails
                </button>
                <Button variant="secondary" onClick={() => navigate("/la-course")}>
                  S'inscrire
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bloc Le club */}
      <Section id="club" title="Le club des Traîne-Savates" eyebrow="Le club">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-sm leading-relaxed text-slate-700">
            <p>
              À l'origine de la course et du club, c'est un groupe d'amis réunis par une passion
              commune : la course à pied. Aujourd'hui, le club rassemble des coureuses et
              coureurs de tous niveaux, qui se retrouvent chaque semaine pour s'entraîner dans
              une ambiance conviviale.
            </p>
            <p>
              Que vous prépariez une première course populaire, un 20 km ou que vous souhaitiez
              simplement courir en bonne compagnie, vous trouverez un groupe à votre rythme.
            </p>
            <ul className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">💬</span>
                <span>Ambiance village, tutoiement rapide, on rigole autant qu'on transpire.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">👣</span>
                <span>Groupes par niveau : du footing tranquille aux séances plus travaillées.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">👨‍👩‍👧‍👦</span>
                <span>Entraînements pour adultes, juniors et marcheurs / nordic.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🏔️</span>
                <span>Sorties ponctuelles hors du village pour varier les terrains.</span>
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

          <div className="space-y-4">
            <div className="rounded-3xl border border-brand-light bg-[#fff7f2] p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Rejoindre le club
              </p>
              <p className="mt-2 text-sm text-slate-800">
                Cotisation annuelle accessible, assurance par vos soins, mais surtout beaucoup de
                bonne humeur et de sueur partagée.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                <li>• Entraînements encadrés par des membres expérimentés.</li>
                <li>• Participation à des courses régionales.</li>
                <li>• Soirées et moments conviviaux au fil de l'année.</li>
              </ul>
              <div className="mt-4">
                <Button onClick={() => navigate("/le-club/adherer")}>
                  Remplir la demande d'adhésion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Bloc Infos pratiques */}
      <Section id="infos" title="Infos pratiques" eyebrow="Venir à Cheseaux">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Lieu & accès</h3>
            <p className="mt-2 text-sm text-slate-700">
              Départs et arrivée au centre de Cheseaux-sur-Lausanne. Accès facile en LEB et par
              la route.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>• LEB toutes les 15 minutes depuis Lausanne / Echallens.</li>
              <li>• Parking fléché à proximité de la place de fête.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Sur place</h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>• Vestiaires et douches à la salle de sport.</li>
              <li>• Cantine chaude et froide toute la journée.</li>
              <li>• Remise des prix après chaque catégorie.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Questions fréquentes</h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>• Inscriptions sur place possibles selon disponibilité.</li>
              <li>• Course maintenue par tous les temps, sauf conditions extrêmes.</li>
              <li>• Poussettes autorisées sur certains parcours villageois.</li>
            </ul>
            <button
              className="mt-3 text-xs font-semibold text-brand hover:underline"
              onClick={() => navigate("/infos-pratiques")}
            >
              Voir toutes les infos pratiques
            </button>
          </div>
        </div>
      </Section>

      {/* Bloc Sponsors */}
      <Section id="sponsors" title="Nos sponsors & partenaires" eyebrow="Merci pour leur soutien">
        <SponsorsGrid />
      </Section>
    </>
  );
}
