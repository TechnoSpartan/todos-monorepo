// packages/tailwind-config/index.cjs
const colors = require('./colors.js');
const typography = require('./typography.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: typography,
    },
  },
  plugins: [],
};
