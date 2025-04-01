/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  objectWrap: "preserve",
  tabWidth: 4,
  semi: true,
  printWidth: 80,
  useTabs: true,
  arrowParens: "avoid",
  endOfLine: "lf",
  quoteProps: "as-needed",
  singleAttributePerLine: true,
};

export default config;
