import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export const buttonColorClasses = {
  slate: 'bg-slate-700/90 border-slate-600 hover:bg-slate-600 active:bg-slate-500 focus:border-slate-500',
  gray: 'bg-gray-700/90 border-gray-600 hover:bg-gray-600 active:bg-gray-500 focus:border-gray-500',
  darkgray: 'bg-gray-800/90 border-gray-700 hover:bg-gray-700 active:bg-gray-600 focus:border-gray-600',
  darkergray: 'bg-gray-900/90 border-gray-800 hover:bg-gray-800 active:bg-gray-700 focus:border-gray-700',
  zinc: 'bg-zinc-700/90 border-zinc-600 hover:bg-zinc-600 active:bg-zinc-500 focus:border-zinc-500',
  neutral: 'bg-neutral-700/90 border-neutral-600 hover:bg-neutral-600 active:bg-neutral-500 focus:border-neutral-500',
  stone: 'bg-stone-700/90 border-stone-600 hover:bg-stone-600 active:bg-stone-500 focus:border-stone-500',
  red: 'bg-red-700/90 border-red-600 hover:bg-red-600 active:bg-red-500 focus:border-red-500',
  orange: 'bg-orange-700/90 border-orange-600 hover:bg-orange-600 active:bg-orange-500 focus:border-orange-500',
  amber: 'bg-amber-700/90 border-amber-600 hover:bg-amber-600 active:bg-amber-500 focus:border-amber-500',
  yellow: 'bg-yellow-700/90 border-yellow-600 hover:bg-yellow-600 active:bg-yellow-500 focus:border-yellow-500',
  lime: 'bg-lime-700/90 border-lime-600 hover:bg-lime-600 active:bg-lime-500 focus:border-lime-500',
  green: 'bg-green-700/90 border-green-600 hover:bg-green-600 active:bg-green-500 focus:border-green-500',
  emerald: 'bg-emerald-700/90 border-emerald-600 hover:bg-emerald-600 active:bg-emerald-500 focus:border-emerald-500',
  teal: 'bg-teal-700/90 border-teal-600 hover:bg-teal-600 active:bg-teal-500 focus:border-teal-500',
  cyan: 'bg-cyan-700/90 border-cyan-600 hover:bg-cyan-600 active:bg-cyan-500 focus:border-cyan-500',
  sky: 'bg-sky-700/90 border-sky-600 hover:bg-sky-600 active:bg-sky-500 focus:border-sky-500',
  blue: 'bg-blue-700/90 border-blue-600 hover:bg-blue-600 active:bg-blue-500 focus:border-blue-500',
  indigo: 'bg-indigo-700/90 border-indigo-600 hover:bg-indigo-600 active:bg-indigo-500 focus:border-indigo-500',
  violet: 'bg-violet-700/90 border-violet-600 hover:bg-violet-600 active:bg-violet-500 focus:border-violet-500',
  purple: 'bg-purple-700/90 border-purple-600 hover:bg-purple-600 active:bg-purple-500 focus:border-purple-500',
  fuchsia: 'bg-fuchsia-700/90 border-fuchsia-600 hover:bg-fuchsia-600 active:bg-fuchsia-500 focus:border-fuchsia-500',
  pink: 'bg-pink-700/90 border-pink-600 hover:bg-pink-600 active:bg-pink-500 focus:border-pink-500',
  rose: 'bg-rose-700/90 border-rose-600 hover:bg-rose-600 active:bg-rose-500 focus:border-rose-500',
  transparent: 'bg-transparent border-transparent hover:bg-gray-600/50 active:bg-gray-600/60 focus:border-gray-600/60',
};

export const sizeClasses = {
  sm: {
    base: 'text-base rounded-md gap-2',
    pad: 'px-2.5 py-1.5',
    equal: 'p-1.5',
  },
  md: {
    base: 'text-base rounded-md gap-3',
    pad: 'px-4 py-2',
    equal: 'p-2',
  },
  lg: {
    base: 'text-lg rounded-lg gap-3',
    pad: 'px-6 py-3',
    equal: 'p-3',
  },
  xl: {
    base: 'text-lg rounded-xl gap-4',
    pad: 'px-8 py-4',
    equal: 'p-4',
  },
};

const buttonClass = 'relative flex items-center gap-3 motion-safe:transition ease-in-out border text-gray-50 fill-gray-50 disabled:opacity-50 hover:shadow-lg motion-safe:active:scale-95 whitespace-nowrap touch-manipulation select-none';

interface GenericButtonProps {
  color?: keyof typeof buttonColorClasses;
  size?: keyof typeof sizeClasses;
  square?: boolean;
  class?: { [key: string]: boolean | undefined };
}

interface ButtonProps extends Omit<PropsOf<'button'>, 'class'>, GenericButtonProps {}
interface AnchorProps extends Omit<PropsOf<'a'>, 'class'>, GenericButtonProps {
  href: string;
}

export const Button = component$<ButtonProps>(({ color = 'darkgray', size = 'md', square, ...props }) => {
  const colorClass = buttonColorClasses[color as keyof typeof buttonColorClasses];
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses];

  props.class = {
    [buttonClass]: true,
    [colorClass]: true,
    [sizeClass.base]: true,
    [sizeClass.pad]: !square,
    [sizeClass.equal]: square,
    ...props.class,
  };

  return <button {...props}><Slot /></button>;
});

export const ButtonAnchor = component$<AnchorProps>(({ color = 'darkgray', size = 'md', square, ...props }) => {
  const colorClass = buttonColorClasses[color as keyof typeof buttonColorClasses];
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses];

  props.class = {
    [buttonClass]: true,
    [colorClass]: true,
    [sizeClass.base]: true,
    [sizeClass.pad]: !square,
    [sizeClass.equal]: square,
    ...props.class,
  };

  return <a {...props}><Slot /></a>;
});