/** @type {import('tailwindcss').Config} */

const { theme } = require('./src/tailwind.config');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /btn-.*/,
    }
  ],
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
    require('@anuragroy/tailwindcss-animate'),
    require('./tailwind/plugin'),
  ],
};
