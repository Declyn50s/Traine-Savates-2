import React from "react";
import { Section } from "../../components/ui/Section";
import { useCommittee } from "../../api/hooks";

export function CommitteePage() {
  const { data: members } = useCommittee();

  return (
    <Section title="Le comité" eyebrow="Le club">
      <p className="mb-6 max-w-2xl text-sm text-slate-700">
        Une équipe de bénévoles qui fait tourner la course et le club, des préparatifs aux
        inscriptions, en passant par le fléchage des parcours et les grillades de fin de journée.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((m) => (
          <div
            key={m.id}
            className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm"
          >
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-2xl">
              😀
            </div>
            <p className="text-sm font-semibold text-slate-900">{m.name}</p>
            <p className="mt-1 text-xs text-slate-600">{m.role}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
