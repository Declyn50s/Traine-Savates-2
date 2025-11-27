import React from "react";

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-2">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
