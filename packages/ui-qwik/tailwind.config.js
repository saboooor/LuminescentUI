/** @type {import('tailwindcss').Config} */

import { theme } from './src/tailwind.config';

export default {
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
    require('@anuragroy/tailwindcss-animate'),
    require('@luminescent/ui'),
  ],
};
