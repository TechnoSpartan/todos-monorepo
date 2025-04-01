import baseConfig from "@codespartan/dev-tools/eslint-config";

export default [
  ...baseConfig,
  { ignores: ["**/dist/**", "**/build/**", "**/packages/**"] },
];
