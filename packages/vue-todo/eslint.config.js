import baseConfig from "@codespartan/dev-tools/eslint-config";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  // Config base compartida
  ...baseConfig,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  eslintConfigPrettier,
];
