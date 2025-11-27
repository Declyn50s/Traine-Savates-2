import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Edition } from "../../types/domain";
import { Button } from "../ui/Button";
import logoTs from "../../assets/Les-Traine-Savates-Logotype.png";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Course", to: "/la-course" },
  { label: "Club", to: "/le-club" },
  { label: "Entraînements", to: "/le-club/entrainements" },
  { label: "Infos", to: "/infos-pratiques" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Résultats & photos", to: "/resultats-photos" },
];

interface HeaderProps {
  edition: Edition | undefined;
}

export function Header({ edition }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe4d6]">
            <img
              src={logoTs}
              alt="Logo du club Les Traîne-Savates"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              Les Traîne-Savates
            </p>
            <p className="text-sm font-medium text-slate-800">
              Course populaire & club à Cheseaux
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative pb-1 transition hover:text-brand ${
                  isActive ? "text-brand" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-brand" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">
            <Link to="/le-club/adherer">Rejoindre le club</Link>
          </Button>
          <Link to="/la-course">
            <Button>S'inscrire à la course</Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link to="/la-course">
            <Button variant="secondary">S'inscrire</Button>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Ouvrir le menu"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-brand-light text-brand-dark"
                      : "text-slate-800 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <Link to="/le-club/adherer" onClick={() => setOpen(false)}>
                <Button variant="ghost">Rejoindre le club</Button>
              </Link>
              <Link to="/la-course" onClick={() => setOpen(false)}>
                <Button>S'inscrire à la course</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
