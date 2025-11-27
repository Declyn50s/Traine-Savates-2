import React from "react";
import { Section } from "../../components/ui/Section";
import { FormField } from "../../components/ui/FormField";
import { TextareaField } from "../../components/ui/TextareaField";
import { Button } from "../../components/ui/Button";

export function ContactPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: brancher sur POST /api/public/contact
    alert("Message envoyé (maquette).");
  }

  return (
    <Section title="Contact" eyebrow="Nous écrire">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Nom" required />
            <FormField label="E-mail" type="email" required />
          </div>
          <FormField label="Sujet" required />
          <TextareaField
            label="Message"
            required
            rows={5}
            placeholder="Votre question, votre message, ou votre proposition de sponsoring..."
          />
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] text-slate-500">
              Nous répondons en général dans les quelques jours suivant votre message.
            </p>
            <Button type="submit">Envoyer</Button>
          </div>
        </form>
        <div className="space-y-4 text-sm text-slate-700">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Coordonnées</h3>
            <p className="mt-2">
              Association « Les Traîne-Savates »
              <br />
              1033 Cheseaux-sur-Lausanne
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Adresse postale indicative – à adapter selon les infos officielles.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Réseaux sociaux</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
