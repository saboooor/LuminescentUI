/** @type {import('tailwindcss').Config} */

import { content, theme } from '@luminescent/ui-qwik/config';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    ...content,
  ],
  theme: {
    extend: {
      colors: {
        ...theme.extend.colors,
      },
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
  ]
};
