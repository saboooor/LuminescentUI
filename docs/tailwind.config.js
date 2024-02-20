/** @type {import('tailwindcss').Config} */

import { content, theme, plugins } from '@luminescent/ui/config';

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
  plugins: [
    ...plugins,
  ]
};
