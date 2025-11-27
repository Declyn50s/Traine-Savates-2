// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Traine-Savates-2/",
  build: {
    outDir: "docs",   // <— important pour GitHub Pages
  },
});
