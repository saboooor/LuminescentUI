import type { PluginAPI } from 'tailwindcss/types/config';

export default function ({ matchUtilities, theme }: PluginAPI) {
  const colors: { [key: string]: string } = {};
  Object.entries(theme('colors')!).forEach(([color, value]) => {
    if (typeof value == 'string') {
      colors[color] = color;
    }
    else {
      Object.keys(value).forEach((shade) => {
        colors[`${color}-${shade}`] = `${color}.${shade}`;
      });
    }
  });
  matchUtilities({
    'lum-bg': (value) => {
      const color = value.split('.')[0];
      const shades = Object.values(colors).filter((c) => {
        return c.startsWith(color);
      });
      const index = shades.indexOf(value);
      const borderColor = shades[index - 1 < 0 ? shades.length - 1 : index - 1] || shades[index + 1 > shades.length - 1 ? 0 : index + 1];
      const textColor = shades[index - 5 < 0 ? shades.length - 1 : index - 5] || shades[index + 5 > shades.length - 1 ? 0 : index + 5];

      return {
        background: theme(`colors.${value}`) ?? value,
        color: textColor == value ? 'inherit' : theme(`colors.${textColor}`) ?? 'inherit',
        border: `1px solid ${theme(`colors.${borderColor ?? value}`) ?? borderColor ?? value}`,
        outline: 'none',
        '&:focus': {
          border: `1px solid ${theme(`colors.${textColor}`) ?? 'inherit'}`,
        },
      };
    },
  }, {
    values: colors,
  });
}