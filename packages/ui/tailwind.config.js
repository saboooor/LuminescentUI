/** @type {import('tailwindcss').Config} */

const { theme } = require('./src/tailwind.config');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /lum-.*/,
      variants: ['hover', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /rounded-.*/,
      variants: ['hover', 'sm', 'md', 'lg', 'xl'],
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
