/** @type {import('tailwindcss').Config} */

import { theme, content } from '@luminescent/ui/config';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    ...content,
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
};
