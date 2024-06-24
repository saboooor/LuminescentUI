import { PluginAPI } from "tailwindcss/types/config";

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.btn': {
      '@apply relative flex items-center gap-3 motion-safe:transition ease-in-out text-gray-50 fill-gray-50 disabled:opacity-50 hover:shadow-lg motion-safe:active:scale-95 whitespace-nowrap touch-manipulation select-none text-center': {},
      '&.btn-xs': {
        '@apply text-sm gap-1 px-2.5 py-1.5': {},
        '&.btn-icon': {
          '@apply p-1.5': {},
        },
      },
      '&.btn-sm': {
        '@apply text-sm gap-2 px-3 py-2': {},
        '&.btn-icon': {
          '@apply p-2': {},
        },
      },
      '&.btn-md': {
        '@apply text-base gap-3 px-4 py-2': {},
        '&.btn-icon': {
          '@apply p-2': {},
        },
      },
      '&.btn-lg': {
        '@apply text-lg gap-3 px-7 py-4': {},
        '&.btn-icon': {
          '@apply p-4': {},
        },
      },
      '&.btn-xl': {
        '@apply text-lg gap-4 px-8 py-4': {},
        '&.btn-icon': {
          '@apply p-4': {},
        },
      },
    },
  })
};