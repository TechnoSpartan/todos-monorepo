// Build modular (con chunks)
// BUILD_MODE=modular pnpm build

import { defineConfig } from "tsup";

const isModular = process.env.BUILD_MODE === "modular";

console.log(
  `📦 Modo build: ${isModular ? "MODULAR (splitting)" : "PRESET (flat)"}`,
);

export default defineConfig([
  {
    name: "Basic",
    // entry: ["index.js", "preset.js"],
    entry: ["index.js", "preset.js"], // en preset compila lo básico
    legacyOutput: true,
    target: "es2020",
    minify: true,
    onSuccess() {
      console.log("🦄 Build Basic finished!");
    },
    outDir: "dist",
    outExtension({ format }) {
      return {
        js: format === "esm" ? ".js" : ".cjs",
      };
    },
    format: ["esm", "cjs"],
    dts: {
      entry: {
        index: "index.js",
        preset: "preset.js",
      },
    },
    sourcemap: true,
    splitting: isModular, // Code splitting Default to true for ESM, false for CJS.
    // You can set it to true explicitly, and may want to disable code splitting sometimes: #255
    clean: !isModular, // si es preset limpiamos la carpeta, modular no
    shims: true,
  },
  {
    name: "Tokens",
    entry: ["src/tokens.raw.js", "src/tokens.semantic.js"],
    outDir: "dist/tokens",
    format: ["esm", "cjs"],
    legacyOutput: true,
    target: "es2022",
    onSuccess() {
      console.log("🎉 Tokens Created! ");
    },
    dts: { resolve: true },
    minify: true,
    splitting: false,
    clean: false,
  },
  {
    name: "Tailwind Config",
    entry: ["src/typography.js", "src/tailwind.config.js"],
    outDir: "dist",
    format: ["esm", "cjs"],
    legacyOutput: true,
    target: "es2022",
    onSuccess() {
      console.log("🎉 Tailwind Config finished! ");
    },
    dts: true,
    minify: true,
    splitting: false,
    clean: false,
  },
  {
    name: "Styles CSS",
    entry: [
      "styles/colors.css",
      "styles/common.css",
      "styles/fonts.css",
      "styles/theme.css",
      "styles/theme-full.css",
      "styles/theme-slim.css",
    ],
    outDir: "dist/styles",
    format: ["esm"], // solo importa CSS, no necesita CJS
    onSuccess() {
      console.log("💅 Styles CSS finished! ");
    },
    loader: {
      ".css": "copy", // 🚀 Este truco es para evitar que tsup lo procese como JS
    },
    clean: false,
  },
  ...(isModular
    ? [
        {
          name: "Modular",
          entry: ["components/index.js"],
          legacyOutput: true,
          target: "es2020",
          minify: true,
          onSuccess() {
            console.log("🚀 Build Modular finished!");
          },
          outDir: "dist/components",
          outExtension({ format }) {
            return {
              js: format === "esm" ? ".js" : ".cjs",
            };
          },
          format: ["esm", "cjs"],
          dts: true,
          sourcemap: true,
          splitting: isModular,
          clean: false,
          shims: true,
        },
      ]
    : []),
]);
