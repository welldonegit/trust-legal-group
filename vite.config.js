import { resolve } from "node:path";
import { defineConfig } from "vite";

// Multi-page: index.html (сайт) и styleguide.html (система) как точки входа.
export default defineConfig({
  root: ".",
  publicDir: false,
  // Слушаем 0.0.0.0 — иначе из devcontainer порт наружу не проброшивается.
  server: { host: true },
  preview: { host: true },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        styleguide: resolve(__dirname, "styleguide.html"),
        notfound: resolve(__dirname, "404.html"),
        practiceMilitaryNew: resolve(__dirname, "practice-military-new.html"),
        serviceRozshuk: resolve(__dirname, "service-rozshuk.html"),
      },
    },
  },
});
