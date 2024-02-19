/** @type {import('tailwindcss').Config} */

import luminescentTailwindConfig from '@luminescent/ui';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    ...luminescentTailwindConfig.content,
  ],
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
