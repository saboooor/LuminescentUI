import type { PluginAPI } from 'tailwindcss/types/config';

export const defaultClasses = 'lum-bg-gray-900 lum-pad-equal-4xl rounded-lg';

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-card': {
      '@apply flex flex-col gap-3 whitespace-nowrap': {},
      [`@apply ${defaultClasses}`]: {},
    },
  });
}