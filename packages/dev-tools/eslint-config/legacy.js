import _ignore from "./ignorePatterns.js";

export default {
  env: { browser: true, es2021: true },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: _ignore.patterns,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // Integra Prettier en ESLint
  ],
  rules: {
    // tus reglas personalizadas
  },
};
