// packages/dev-config/eslint-config/flat.js

/**
 * Configuración base de ESLint con Flat Config.
 * ¡Asegúrate de usar `export default [...];` para que se pueda importar fácil!
 */
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import _ignore from "./ignorePatterns.js";

export default [
  {
    files: ["**/*.{js,ts,jsx,tsx,vue}"], // Ajusta lo que necesites
    ignores: _ignore.patterns, // Ajusta lo que necesites
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    plugins: {
      typescriptEslint,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
      // Ejemplo: integras Prettier para formateo automático
      // Pon aquí otras reglas globales que quieras compartir
    },
  },
];
