import baseConfig from "@codespartan/dev-tools/eslint-config";
import pluginReact from "eslint-plugin-react";

export default [
  // Config base
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
