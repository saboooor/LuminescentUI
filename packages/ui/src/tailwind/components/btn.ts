import type { PluginAPI } from 'tailwindcss/types/config';

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-btn': {
      '@apply flex items-center gap-3 motion-safe:transition ease-in-out disabled:opacity-50 hover:drop-shadow-lg motion-safe:active:scale-95 whitespace-nowrap touch-manipulation select-none text-center': {},
    },
  });
}