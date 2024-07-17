import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';

const padding = {
  xs: ['2.5', '1.5'],
  sm: ['3', '2'],
  md: ['4', '2'],
  lg: ['7', '4'],
  xl: ['8', '4'],
  '2xl': ['10', '5'],
  '3xl': ['12', '6'],
  '4xl': ['14', '7'],
  '5xl': ['16', '8'],
};

export default function ({ addComponents }: PluginAPI) {
  const classes: CSSRuleObject = {};
  (Object.keys(padding) as Array<keyof typeof padding>).forEach((key) => {
    const [x, y] = padding[key];
    classes[`.lum-pad-${key}`] = {
      [`@apply px-${x} py-${y}`]: {},
    };
    classes[`.lum-pad-equal-${key}`] = {
      [`@apply p-${y}`]: {},
    };
  });
  addComponents(classes);
}