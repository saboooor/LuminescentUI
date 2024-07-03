import type { PluginAPI } from 'tailwindcss/types/config';

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-loading': {
      '@apply animate-spin rounded-full border-transparent border-l-current border-t-current border-4': {},
    },
  });
}