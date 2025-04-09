import typography from "./typography.js";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...typography.sans],
        display: ["var(--font-display)", ...typography.display],
        mono: ["var(--font-mono)", ...typography.mono],
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        "neutral-light": "var(--color-neutral-light)",
        "neutral-dark": "var(--color-neutral-dark)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
      },
    },
  },
  plugins: [],
};
