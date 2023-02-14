import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import solidPlugin from "vite-plugin-solid";

import pkg from "./package.json";

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      tsConfigFilePath: "tsconfig.build.json",
      insertTypesEntry: true,
      noEmitOnError: true,
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "music-app-ui",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.peerDependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
});
