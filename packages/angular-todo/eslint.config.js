// 2) Importamos plugins/parsers extra que vayamos a usar
import prettierPlugin from "eslint-plugin-prettier";
import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import baseConfig from "@codespartan/dev-tools/eslint-config";
import tsParser from "@typescript-eslint/parser";

export default [
  // Config base
  ...baseConfig,
  {
    // Usamos @typescript-eslint/parser
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"], // Ajusta a tu TS config
        tsconfigRootDir: process.cwd(),
      },
    },

    plugins: {
      "@angular-eslint": angularEslintPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      // Reglas recomendadas para Angular
      ...angularEslintPlugin.configs.recommended.rules,
      // Reglas Prettier
      "prettier/prettier": "error",
    },
  },
];
