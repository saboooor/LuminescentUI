// @ts-ignore
import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addComponents, matchUtilities, theme }) {
  // btn
  const colors: any = {};
  Object.entries(theme('colors')!).forEach(([color, value]) => {
    if (typeof value == 'string') return;
    Object.keys(value).forEach((shade) => {
      colors[`${color}-${shade}`] = {
        color,
        shade
      }
      colors[`transparent-${color}-${shade}`] = {
        transparent: true,
        color,
        shade
      }
    });
  })
  matchUtilities({
    btn: (value) => {
      const shades = Object.values(colors).filter((color) => color.color === value.color);
      const index = shades.indexOf(value);
      const borderColor = shades[index - 1] || shades[index + 1];
    
      return {
        background: !value.transparent ? theme(`colors.${value.color}.${value.shade}`) : 'transparent',
        borderColor: !value.transparent ? theme(`colors.${borderColor.color}.${borderColor.shade}`) ?? 'transparent' : 'transparent',
        '&:hover': {
          background: theme(`colors.${borderColor.color}.${borderColor.shade}`),
          borderColor: theme(`colors.${value.color}.${value.shade}`),
        },
      };
    },
  }, {
    values: colors
  });
  addComponents({
    '.btn': {
      '@apply relative flex items-center gap-3 motion-safe:transition ease-in-out border text-gray-50 fill-gray-50 disabled:opacity-50 hover:shadow-lg motion-safe:active:scale-95 whitespace-nowrap touch-manipulation select-none text-center': {},
      '&.btn-xs': {
        '@apply text-sm gap-1 px-2.5 py-1.5': {},
        '&.btn-square': {
          '@apply p-1.5': {},
        },
      },
      '&.btn-sm': {
        '@apply text-sm gap-2 px-3 py-2': {},
        '&.btn-square': {
          '@apply p-2': {},
        },
      },
      '&.btn-md': {
        '@apply text-base gap-3 px-4 py-2': {},
        '&.btn-square': {
          '@apply p-2': {},
        },
      },
      '&.btn-lg': {
        '@apply text-lg gap-3 px-7 py-4': {},
        '&.btn-square': {
          '@apply p-4': {},
        },
      },
      '&.btn-xl': {
        '@apply text-lg gap-4 px-8 py-4': {},
        '&.btn-square': {
          '@apply p-4': {},
        },
      },
    },
  })
});