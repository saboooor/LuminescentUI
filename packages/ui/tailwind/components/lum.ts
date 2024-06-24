import { PluginAPI } from "tailwindcss/types/config";

export default function ({ matchUtilities, theme }: PluginAPI) {
  const colors: { [key: string]: string } = {};
  Object.entries(theme('colors')!).forEach(([color, value]) => {
    if (typeof value == 'string') {
      colors[color] = color;
    }
    else {
      Object.keys(value).forEach((shade) => {
        colors[`${color}-${shade}`] = `${color}.${shade}`
      });
    }
  })
  matchUtilities({
    'lum-bg': (value) => {
      const color = value.split('.')[0];
      const shades = Object.values(colors).filter((c) => {
        return c.startsWith(color);
      });
      const index = shades.indexOf(value);
      const borderColor = shades[index - 1] || shades[index + 1];
    
      return {
        background: theme(`colors.${value}`) ?? value,
        border: `1px solid ${theme(`colors.${borderColor ?? value}`) ?? borderColor ?? value}`,
        boxSizing: 'border-box',
      };
    },
  }, {
    values: colors
  });
};