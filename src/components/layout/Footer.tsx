import React from "react";
import logoTs from "../../assets/Les-Traine-Savates-Logotype.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-light">
            <img
              src={logoTs}
              alt="Logo Les Traîne-Savates"
              className="h-5 w-5 object-contain"
            />
          </span>
          <span>
            © {year} · Les Traîne-Savates · Cheseaux-sur-Lausanne
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#" className="hover:text-slate-700">
            Mentions légales
          </a>
          <span
            className="hidden h-3 w-px bg-slate-300 sm:block"
            aria-hidden="true"
          />
          <div className="flex items-center gap-2">
            <span className="text-[11px]">Suivez-nous :</span>
            <button className="h-7 w-7 rounded-full bg-slate-100 text-[13px]">
              f
            </button>
            <button className="h-7 w-7 rounded-full bg-slate-100 text-[13px]">
              ◎
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
