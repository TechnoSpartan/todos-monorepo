import baseEslint from "./flat.js";
import tsEslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

export default [
  ...baseEslint,
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  {
    files: ["./src/**/*.ts?x"],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        globals: globals.browser,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      unicorn,
    },
    rules: {
      "prettier/prettier": "error",
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
      "unicorn/no-array-reduce": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
