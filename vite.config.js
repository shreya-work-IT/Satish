import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "satish-dynamics-website";
const base = process.env.VITE_BASE_URL || (process.env.GITHUB_ACTIONS ? `/${repoName}/` : "/");

// Enterprise Vite configuration.
// Keeps the build framework-default and predictable so it can be dropped
// into any standard CI/CD pipeline (Azure DevOps, GitHub Actions, etc.).
export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: "dist",
    sourcemap: false
  }
});
