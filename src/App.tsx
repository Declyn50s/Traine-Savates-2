import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./features/home/HomePage";
import { CoursePage } from "./features/course/CoursePage";
import { TrainingsPage } from "./features/trainings/TrainingsPage";
import { JoinClubPage } from "./features/join/JoinClubPage";
import { CommitteePage } from "./features/committee/CommitteePage";
import { InfosPratiquesPage } from "./features/infos/InfosPratiquesPage";
import { SponsorsPage } from "./features/sponsors/SponsorsPage";
import { PhotosPage } from "./features/photos/PhotosPage";
import { ContactPage } from "./features/contact/ContactPage";
import { ClubIntroPage } from "./features/club/ClubIntroPage";

function NotFoundPage() {
  return (
    <div className="mx-auto flex h-[60vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        Oups
      </p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">Page introuvable</h1>
      <p className="mt-2 text-sm text-slate-600">
        La page que vous cherchez n'existe pas (ou plus). Utilisez le menu pour revenir sur le site.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/la-course" element={<CoursePage />} />
        <Route path="/le-club" element={<ClubIntroPage />} />
        <Route path="/le-club/entrainements" element={<TrainingsPage />} />
        <Route path="/le-club/adherer" element={<JoinClubPage />} />
        <Route path="/le-club/comite" element={<CommitteePage />} />
        <Route path="/infos-pratiques" element={<InfosPratiquesPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/resultats-photos" element={<PhotosPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
