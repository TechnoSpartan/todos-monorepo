// packages/dev-config/eslint-config/flat.js

/**
 * Configuración base de ESLint con Flat Config.
 * ¡Asegúrate de usar `export default [...];` para que se pueda importar fácil!
 */

// 1) Importamos helpers/confs base de ESLint
import js from "@eslint/js"; // configs oficiales de ESLint para JS
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import"; // Reglas para imports
import globals from "globals";
import _ignore from "./ignorePatterns.js";
import unicorn from "eslint-plugin-unicorn";

const baseLinter = [
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
      import: importPlugin,
      prettier: prettierPlugin,
    },
    // “Rules” en Flat Config no usan “extends” pero podemos
    // fusionar reglas de configs “recommended” con spread
    rules: {},
  },
];

/** @type {import('eslint').Linter.FlatConfig[]} */
const unicornEslint = [
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    plugins: {
      unicorn,
    },
    rules: {
      // ✅ Buenas prácticas
      "unicorn/prefer-ternary": "warn",
      "unicorn/explicit-length-check": "warn",
      "unicorn/no-array-push-push": "error",
      "unicorn/prefer-logical-operator-over-ternary": "warn",

      // 💥 Modernizaciones seguras
      "unicorn/prefer-string-slice": "warn",
      "unicorn/prefer-object-from-entries": "warn",
      "unicorn/prefer-array-flat": "warn",
      "unicorn/prefer-array-some": "warn",

      // 🛠️ Desactivamos algunas molestas
      "unicorn/no-null": "off", // null sigue siendo útil
      "unicorn/filename-case": "off", // no impongamos convención aún

      // 🧠 Opcional si trabajas con nombres constantes
      "unicorn/prevent-abbreviations": [
        "warn",
        {
          replacements: {
            env: false,
            err: false,
            fn: false,
            res: false,
            req: false,
          },
        },
      ],
    },
  },
];

export default [
  // 👉 Configuración base de ESLint
  ...baseLinter,

  // 👉 Configuración de Unicorn
  ...unicornEslint,
];
