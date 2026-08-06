import { resolve } from "node:path";
import { defineConfig } from "vite";

// Multi-page: index.html (сайт) и styleguide.html (система) как точки входа.
export default defineConfig({
  root: ".",
  publicDir: false,
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        styleguide: resolve(__dirname, "styleguide.html"),
        notfound: resolve(__dirname, "404.html"),
        practiceMilitary: resolve(__dirname, "practice-military.html"),
      },
    },
  },
});
