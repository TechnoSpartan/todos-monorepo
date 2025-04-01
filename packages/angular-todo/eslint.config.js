import baseConfig from "@codespartan/dev-tools/eslint-config";
import angular from "angular-eslint";
import tsEslint from "typescript-eslint";
import process from "node:process";

const angularEslintConfig = tsEslint.config(
  // 👉 Configuración para archivos .ts en Angular
  {
    files: ["./src/**/*.ts"],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: process.cwd(),
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@angular-eslint": angular,
    },
    processor: angular.processInlineTemplates,
    rules: {
      ...angular.configs.tsRecommended[0].rules,
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  // 👉 Configuración para templates HTML (.html)
  {
    files: ["./src/**/*.html"],
    languageOptions: {
      parser: angular.configs.templateRecommended[0].languageOptions?.parser,
    },
    plugins: {
      "@angular-eslint/template":
        angular.templatePlugin["@angular-eslint/template"],
    },
    rules: {
      ...angular.configs.templateRecommended[0].rules,
      ...angular.configs.templateAccessibility[0].rules,
    },
  },
);

export default [
  {
    ignores: [
      "node_modules",
      "build",
      "dist",
      "coverage",
      ".angular",
      ".angular-build",
      ".angular-cache",
      ".angular-cli.json",
      "angular.json",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
      "pnpm-lock.yml",
      "tsconfig.json",
      "tslint.json",
      "*.js.snap",
      "*.test.js.snap",
      "*.test.ts.snap",
    ],
  },
  // 👉 Configuración base común del monorepo
  ...baseConfig,

  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,

  // 👉 Configuración para Angular
  ...angularEslintConfig,
];
