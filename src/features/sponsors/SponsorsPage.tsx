import React from "react";
import { Section } from "../../components/ui/Section";
import { SponsorsGrid } from "./SponsorsGrid";

export function SponsorsPage() {
  return (
    <Section title="Sponsors & partenaires" eyebrow="Merci pour leur soutien">
      <SponsorsGrid />
      <div className="mt-8 max-w-2xl text-sm text-slate-700">
        <h3 className="text-sm font-semibold text-slate-900">Devenir sponsor</h3>
        <p className="mt-2">
          Vous souhaitez associer votre entreprise à un événement sportif convivial et bien
          ancré dans la région ? Contactez-nous pour discuter des possibilités de partenariat.
        </p>
      </div>
    </Section>
  );
}
