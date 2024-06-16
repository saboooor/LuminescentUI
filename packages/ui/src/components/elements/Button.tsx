import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export const buttonColorClasses = {
  slate: {
    hover: 'hover:bg-slate-600 active:bg-slate-500 focus:border-slate-500',
    bg: 'bg-slate-700/90 border-slate-600',
  },
  gray: {
    hover: 'hover:bg-gray-600 active:bg-gray-500 focus:border-gray-500',
    bg: 'bg-gray-700/90 border-gray-600',
  },
  darkgray: {
    hover: 'hover:bg-gray-700 active:bg-gray-600 focus:border-gray-600',
    bg: 'bg-gray-800/90 border-gray-700',
  },
  darkergray: {
    hover: 'hover:bg-gray-800 active:bg-gray-700 focus:border-gray-700',
    bg: 'bg-gray-900/90 border-gray-800',
  },
  zinc: {
    hover: 'hover:bg-zinc-600 active:bg-zinc-500 focus:border-zinc-500',
    bg: 'bg-zinc-700/90 border-zinc-600',
  },
  neutral: {
    hover: 'hover:bg-neutral-600 active:bg-neutral-500 focus:border-neutral-500',
    bg: 'bg-neutral-700/90 border-neutral-600',
  },
  stone: {
    hover: 'hover:bg-stone-600 active:bg-stone-500 focus:border-stone-500',
    bg: 'bg-stone-700/90 border-stone-600',
  },
  red: {
    hover: 'hover:bg-red-600 active:bg-red-500 focus:border-red-500',
    bg: 'bg-red-700/90 border-red-600',
  },
  orange: {
    hover: 'hover:bg-orange-600 active:bg-orange-500 focus:border-orange-500',
    bg: 'bg-orange-700/90 border-orange-600',
  },
  amber: {
    hover: 'hover:bg-amber-600 active:bg-amber-500 focus:border-amber-500',
    bg: 'bg-amber-700/90 border-amber-600',
  },
  yellow: {
    hover: 'hover:bg-yellow-600 active:bg-yellow-500 focus:border-yellow-500',
    bg: 'bg-yellow-700/90 border-yellow-600',
  },
  lime: {
    hover: 'hover:bg-lime-600 active:bg-lime-500 focus:border-lime-500',
    bg: 'bg-lime-700/90 border-lime-600',
  },
  green: {
    hover: 'hover:bg-green-600 active:bg-green-500 focus:border-green-500',
    bg: 'bg-green-700/90 border-green-600',
  },
  emerald: {
    hover: 'hover:bg-emerald-600 active:bg-emerald-500 focus:border-emerald-500',
    bg: 'bg-emerald-700/90 border-emerald-600',
  },
  teal: {
    hover: 'hover:bg-teal-600 active:bg-teal-500 focus:border-teal-500',
    bg: 'bg-teal-700/90 border-teal-600',
  },
  cyan: {
    hover: 'hover:bg-cyan-600 active:bg-cyan-500 focus:border-cyan-500',
    bg: 'bg-cyan-700/90 border-cyan-600',
  },
  sky: {
    hover: 'hover:bg-sky-600 active:bg-sky-500 focus:border-sky-500',
    bg: 'bg-sky-700/90 border-sky-600',
  },
  blue: {
    hover: 'hover:bg-blue-600 active:bg-blue-500 focus:border-blue-500',
    bg: 'bg-blue-700/90 border-blue-600',
  },
  indigo: {
    hover: 'hover:bg-indigo-600 active:bg-indigo-500 focus:border-indigo-500',
    bg: 'bg-indigo-700/90 border-indigo-600',
  },
  violet: {
    hover: 'hover:bg-violet-600 active:bg-violet-500 focus:border-violet-500',
    bg: 'bg-violet-700/90 border-violet-600',
  },
  purple: {
    hover: 'hover:bg-purple-600 active:bg-purple-500 focus:border-purple-500',
    bg: 'bg-purple-700/90 border-purple-600',
  },
  fuchsia: {
    hover: 'hover:bg-fuchsia-600 active:bg-fuchsia-500 focus:border-fuchsia-500',
    bg: 'bg-fuchsia-700/90 border-fuchsia-600',
  },
  pink: {
    hover: 'hover:bg-pink-600 active:bg-pink-500 focus:border-pink-500',
    bg: 'bg-pink-700/90 border-pink-600',
  },
  rose: {
    hover: 'hover:bg-rose-600 active:bg-rose-500 focus:border-rose-500',
    bg: 'bg-rose-700/90 border-rose-600',
  },
};

export const mobileSizeClasses = {
  xs: {
    base: 'text-sm gap-1',
    round: 'rounded-md',
    pad: 'px-2 py-1',
    equal: 'p-1',
  },
  sm: {
    base: 'text-sm gap-2',
    round: 'rounded-md',
    pad: 'px-2.5 py-1.5',
    equal: 'p-1.5',
  },
  md: {
    base: 'text-base gap-3',
    round: 'rounded-md',
    pad: 'px-4 py-2',
    equal: 'p-2',
  },
  lg: {
    base: 'text-lg gap-3',
    round: 'rounded-lg',
    pad: 'px-6 py-3',
    equal: 'p-3',
  },
  xl: {
    base: 'text-lg gap-4',
    round: 'rounded-xl',
    pad: 'px-8 py-4',
    equal: 'p-4',
  },
};

export const sizeClasses = {
  xs: {
    base: 'sm:text-sm sm:gap-1',
    round: 'sm:rounded-md',
    pad: 'sm:px-2 sm:py-1',
    equal: 'sm:p-1',
  },
  sm: {
    base: 'sm:text-base sm:gap-2',
    round: 'sm:rounded-md',
    pad: 'sm:px-2.5 sm:py-1.5',
    equal: 'sm:p-1.5',
  },
  md: {
    base: 'sm:text-base sm:gap-3',
    round: 'sm:rounded-md',
    pad: 'sm:px-4 sm:py-2',
    equal: 'sm:p-2',
  },
  lg: {
    base: 'sm:text-lg sm:gap-3',
    round: 'sm:rounded-lg',
    pad: 'sm:px-6 sm:py-3',
    equal: 'sm:p-3',
  },
  xl: {
    base: 'sm:text-lg sm:gap-4',
    round: 'sm:rounded-xl',
    pad: 'sm:px-8 sm:py-4',
    equal: 'sm:p-4',
  },
};

const buttonClass = 'relative flex items-center gap-3 motion-safe:transition ease-in-out border text-gray-50 fill-gray-50 disabled:opacity-50 hover:shadow-lg motion-safe:active:scale-95 whitespace-nowrap touch-manipulation select-none text-center';

interface GenericButtonProps {
  color?: keyof typeof buttonColorClasses;
  transparent?: boolean;
  size?: keyof typeof sizeClasses;
  mobilesize?: keyof typeof mobileSizeClasses;
  round?: boolean;
  square?: boolean;
  class?: { [key: string]: boolean | undefined };
}

interface ButtonProps extends Omit<PropsOf<'button'>, 'class'>, GenericButtonProps {}
interface AnchorProps extends Omit<PropsOf<'a'>, 'class'>, GenericButtonProps {
  href: string;
}

export const Button = component$<ButtonProps>(({ color = 'darkgray', transparent, size = 'md', mobilesize, round, square, ...props }) => {
  const colorClass = buttonColorClasses[color as keyof typeof buttonColorClasses];
  const sizeClass = sizeClasses[size];
  const mobileSizeClass = mobileSizeClasses[mobilesize ? mobilesize
    : size == 'xs' ? 'xs'
      : size == 'sm' ? 'xs'
        : size == 'md' ? 'sm'
          : size == 'lg' ? 'md'
            : size == 'xl' ? 'lg'
              : 'md'];

  props.class = {
    [buttonClass]: true,
    [colorClass.bg]: !transparent,
    'border-transparent': transparent,
    [colorClass.hover]: true,
    [mobileSizeClass.base]: true,
    [sizeClass.base]: true,
    [mobileSizeClass.round]: !round,
    [sizeClass.round]: !round,
    'rounded-full': round,
    [mobileSizeClass.pad]: !square,
    [sizeClass.pad]: !square,
    [mobileSizeClass.equal]: square,
    [sizeClass.equal]: square,
    ...props.class,
  };

  return <button {...props}><Slot /></button>;
});

export const ButtonAnchor = component$<AnchorProps>(({ color = 'darkgray', transparent, size = 'md', mobilesize, round, square, ...props }) => {
  const colorClass = buttonColorClasses[color as keyof typeof buttonColorClasses];
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses];
  const mobileSizeClass = mobileSizeClasses[mobilesize ? mobilesize
    : size == 'xs' ? 'xs'
      : size == 'sm' ? 'xs'
        : size == 'md' ? 'sm'
          : size == 'lg' ? 'md'
            : size == 'xl' ? 'lg'
              : 'md'];

  props.class = {
    [buttonClass]: true,
    [colorClass.bg]: !transparent,
    'border-transparent': transparent,
    [colorClass.hover]: true,
    [mobileSizeClass.base]: true,
    [sizeClass.base]: true,
    [mobileSizeClass.round]: !round,
    [sizeClass.round]: !round,
    'rounded-full': round,
    [mobileSizeClass.pad]: !square,
    [sizeClass.pad]: !square,
    [mobileSizeClass.equal]: square,
    [sizeClass.equal]: square,
    ...props.class,
  };

  return <a {...props}><Slot /></a>;
});