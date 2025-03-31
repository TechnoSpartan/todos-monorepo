// packages/dev-config/eslint-config/flat.js

/**
 * Configuración base de ESLint con Flat Config.
 * ¡Asegúrate de usar `export default [...];` para que se pueda importar fácil!
 */

// 1) Importamos helpers/confs base de ESLint
import js from "@eslint/js"; // configs oficiales de ESLint para JS
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import _ignore from "./ignorePatterns.js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,ts,jsx,tsx,vue}"], // Ajusta lo que necesites
    ignores: _ignore.patterns, // Ajusta lo que necesites
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    // “Rules” en Flat Config no usan “extends” pero podemos
    // fusionar reglas de configs “recommended” con spread
    rules: {
      // Activa la regla del plugin Prettier
      "prettier/prettier": "error",
    },
  },
];
