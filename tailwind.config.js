/** @type {import('tailwindcss').Config} */

const { theme, plugins } = require('./src/tailwind.config');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        ...theme.extend.animation,
      },
      keyframes: {
        ...theme.extend.keyframes,
      },
    },
  },
  plugins: [
    ...plugins,
  ]
};
