import { PluginAPI } from "tailwindcss/types/config";

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-pad-xs': {
      '@apply px-2.5 py-1.5': {},
      '&.lum-pad-equal': {
        '@apply p-1.5': {},
      },
    },
    '.lum-pad-sm': {
      '@apply px-3 py-2': {},
      '&.lum-pad-equal': {
        '@apply p-2': {},
      },
    },
    '.lum-pad-md': {
      '@apply px-4 py-2': {},
      '&.lum-pad-equal': {
        '@apply p-2': {},
      },
    },
    '.lum-pad-lg': {
      '@apply px-7 py-4': {},
      '&.lum-pad-equal': {
        '@apply p-4': {},
      },
    },
    '.lum-pad-xl': {
      '@apply px-8 py-4': {},
      '&.lum-pad-equal': {
        '@apply p-4': {},
      },
    },
    '.lum-pad-2xl': {
      '@apply px-10 py-5': {},
      '&.lum-pad-equal': {
        '@apply p-5': {},
      },
    },
    '.lum-pad-3xl': {
      '@apply px-12 py-6': {},
      '&.lum-pad-equal': {
        '@apply p-6': {},
      },
    },
    '.lum-pad-4xl': {
      '@apply px-14 py-7': {},
      '&.lum-pad-equal': {
        '@apply p-7': {},
      },
    },
    '.lum-pad-5xl': {
      '@apply px-16 py-8': {},
      '&.lum-pad-equal': {
        '@apply p-8': {},
      },
    },
  });
};