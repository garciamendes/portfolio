import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  plugins: [react()],
  json: {
    stringify: true,
  },
});
