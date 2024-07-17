import type { PluginAPI } from 'tailwindcss/types/config';

export const defaultClasses = 'lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md';

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-input': {
      '@apply flex motion-safe:transition ease-in-out disabled:opacity-50 hover:drop-shadow-lg whitespace-nowrap touch-manipulation select-none': {},
      [`@apply ${defaultClasses}`]: {},
    },
  });
}