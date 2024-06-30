import { PluginAPI } from "tailwindcss/types/config";

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-input': {
      '@apply flex motion-safe:transition ease-in-out disabled:opacity-50 hover:drop-shadow-lg whitespace-nowrap touch-manipulation select-none': {},
    },
  })
};