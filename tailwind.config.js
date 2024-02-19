/** @type {import('tailwindcss').Config} */

const luminescentTailwindConfig = require('./src/tailwind-config');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        ...luminescentTailwindConfig.animation,
      },
      keyframes: {
        ...luminescentTailwindConfig.keyframes,
      },
    },
  },
};
