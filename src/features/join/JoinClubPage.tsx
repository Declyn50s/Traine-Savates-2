import React from "react";
import { Section } from "../../components/ui/Section";
import { FormField } from "../../components/ui/FormField";
import { TextareaField } from "../../components/ui/TextareaField";
import { Button } from "../../components/ui/Button";

export function JoinClubPage() {
  const committee = [
    { id: 1, name: "Prénom Nom", role: "Président·e" },
    { id: 2, name: "Prénom Nom", role: "Vice-président·e" },
    { id: 3, name: "Prénom Nom", role: "Responsable course" },
    { id: 4, name: "Prénom Nom", role: "Trésorier·ère" },
    { id: 5, name: "Prénom Nom", role: "Responsable juniors" },
    { id: 6, name: "Prénom Nom", role: "Responsable marche / nordic" },
    { id: 7, name: "Prénom Nom", role: "Responsable sponsors" },
    { id: 8, name: "Prénom Nom", role: "Responsable communication" },
    { id: 9, name: "Prénom Nom", role: "Logistique parcours" },
    { id: 10, name: "Prénom Nom", role: "Membre du comité" },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: brancher sur POST /api/public/club/membership
    alert("Formulaire d'adhésion soumis (maquette).");
  }

  return (
    <Section title="Adhérer au club" eyebrow="Le club">
      {/* Formulaire + bloc cotisations */}
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-700">
          <p>
            Remplissez le formulaire ci-dessous pour demander votre adhésion. Nous vous
            contacterons rapidement pour confirmer votre inscription et vous donner toutes les
            informations pratiques.
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Nom" required />
              <FormField label="Prénom" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="E-mail" type="email" required />
              <FormField label="Téléphone" />
            </div>
            <FormField label="Année de naissance" type="number" />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Adresse" />
              <FormField label="Localité" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                Type d'adhésion
              </label>
              <select className="w-full rounded-2xl border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light">
                <option>Adulte</option>
                <option>Junior</option>
                <option>Marche / nordic</option>
                <option>Famille</option>
              </select>
            </div>
            <TextareaField
              label="Message (optionnel)"
              placeholder="Parlez-nous de votre expérience, de vos objectifs, ou posez vos questions..."
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] text-slate-500">
                En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour la
                gestion de votre adhésion.
              </p>
              <Button type="submit">Envoyer ma demande</Button>
            </div>
          </form>
        </div>

        <div className="space-y-4 text-sm text-slate-700">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Une ambiance qui ressemble au logo
            </h3>
            <p className="mt-2">
              La chaussure qui sue et qui sourit, c'est exactement ça : on se donne à fond, mais
              toujours dans la bonne humeur. Venez courir avec nous, sans prise de tête.
            </p>
          </div>
        </div>
      </div>

      {/* Bloc comité en bas de page */}
      <div className="mt-12 border-t border-slate-200 pt-8">
        <h3 className="text-sm font-semibold text-slate-900">Le comité du club</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-700">
          Une équipe de bénévoles qui fait tourner la course et le club, des préparatifs aux
          inscriptions, en passant par le fléchage des parcours et les grillades de fin de
          journée.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {committee.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#ffe4d6] text-xl">
                {/* Remplace ça par une vraie photo : <img src={member.photoUrl} ... /> */}
                😀
              </div>
              <p className="text-xs font-semibold text-slate-900">{member.name}</p>
              <p className="mt-1 text-[11px] text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
