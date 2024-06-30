import { PluginAPI } from "tailwindcss/types/config";

export default function ({ addComponents }: PluginAPI) {
  addComponents({
    '.lum-card': {
      '@apply flex flex-col gap-3 motion-safe:transition ease-in-out whitespace-nowrap': {},
    },
  })
};