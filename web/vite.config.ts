import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import createExternal from "vite-plugin-external";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
