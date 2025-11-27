import React from "react";
import { Outlet } from "react-router-dom";
import { useActiveEdition } from "../../api/hooks";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function MainLayout() {
  const { data: edition } = useActiveEdition();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header edition={edition} />
      <main className="pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
