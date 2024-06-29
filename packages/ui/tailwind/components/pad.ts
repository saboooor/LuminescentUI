import { PluginAPI } from "tailwindcss/types/config";

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-pad-xs': {
      '@apply text-sm gap-1 px-2.5 py-1.5': {},
      '&.lum-pad-equal': {
        '@apply p-1.5': {},
      },
    },
    '.lum-pad-sm': {
      '@apply text-sm gap-2 px-3 py-2': {},
      '&.lum-pad-equal': {
        '@apply p-2': {},
      },
    },
    '.lum-pad-md': {
      '@apply text-base gap-3 px-4 py-2': {},
      '&.lum-pad-equal': {
        '@apply p-2': {},
      },
    },
    '.lum-pad-lg': {
      '@apply text-lg gap-3 px-7 py-4': {},
      '&.lum-pad-equal': {
        '@apply p-4': {},
      },
    },
    '.lum-pad-xl': {
      '@apply text-lg gap-4 px-8 py-4': {},
      '&.lum-pad-equal': {
        '@apply p-4': {},
      },
    },
  });
};