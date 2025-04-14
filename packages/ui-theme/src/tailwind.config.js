import typography from "./typography.js";
import semanticTokens from "./tokens.semantic.js";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...typography.sans],
        display: ["var(--font-display)", ...typography.display],
        mono: ["var(--font-mono)", ...typography.mono],
      },
      colors: semanticTokens,
    },
  },
  plugins: [],
};
