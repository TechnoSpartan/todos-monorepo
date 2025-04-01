export default {
  "**/*.{js,ts,jsx,tsx,vue}": ["eslint --fix", "prettier --write", "git add"],
  "**/*.{json,md,yml,yaml}": ["prettier --write", "git add"],
  "**/*.ts?(x)": () => "tsc --noEmit",
  "**/*.{html,json,css,scss,md,mdx}": ["prettier -w", "git add"],
};
