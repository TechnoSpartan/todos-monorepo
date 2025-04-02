// tsup.config.js (en raíz del dev-tools o en scripts/build.mjs)
import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "eslint-config/flat.js",
    "eslint-config/legacy.js",
    "eslint-config/typescript.js",
    "prettier-config/index.js",
    "commitlint/index.js",
    "commitizen/index.js",
  ],
  // format: ['esm', 'cjs'],
  format: ["cjs"],
  dts: false,
  splitting: false,
  clean: true,
  outDir: "dist",
  shims: false,
  outExtension({ format }) {
    return {
      // js: format === 'cjs' ? '.cjs' : '.js'
      js: ".cjs",
    };
  },
});
