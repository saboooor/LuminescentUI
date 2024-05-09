
import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { Blobs } from './Blobs';

interface CardProps extends Omit<PropsOf<'div'>, 'class'> {
  color?: keyof typeof cardColorClasses;
  hover?: boolean | 'clickable' | 'blur';
  href?: string;
  row?: boolean;
  blobs?: boolean;
  class?: { [key: string]: boolean };
}

export const cardColorClasses = {
  slate: {
    bg_blobs: 'bg-slate-400/10 border-slate-400/20',
    bg: 'bg-slate-400/60 border-slate-400',
    hover: 'hover:bg-slate-400/20',
    click: 'active:bg-slate-300/20',
  },
  gray: {
    bg_blobs: 'bg-gray-400/10 border-gray-400/20',
    bg: 'bg-gray-400/60 border-gray-400',
    hover: 'hover:bg-gray-400/20',
    click: 'active:bg-gray-300/20',
  },
  darkgray: {
    bg_blobs: 'bg-gray-800/10 border-gray-800/40',
    bg: 'bg-gray-800/60 border-gray-800',
    hover: 'hover:bg-gray-800/40',
    click: 'active:bg-gray-700/40',
  },
  darkergray: {
    bg_blobs: 'bg-gray-900/10 border-gray-900/50',
    bg: 'bg-gray-900/60 border-gray-900',
    hover: 'hover:bg-gray-900/50',
    click: 'active:bg-gray-800/50',
  },
  zinc: {
    bg_blobs: 'bg-zinc-400/10 border-zinc-400/20',
    bg: 'bg-zinc-400/60 border-zinc-400',
    hover: 'hover:bg-zinc-400/20',
    click: 'active:bg-zinc-300/20',
  },
  neutral: {
    bg_blobs: 'bg-neutral-400/10 border-neutral-400/20',
    bg: 'bg-neutral-400/60 border-neutral-400',
    hover: 'hover:bg-neutral-400/20',
    click: 'active:bg-neutral-300/20',
  },
  stone: {
    bg_blobs: 'bg-stone-400/10 border-stone-400/20',
    bg: 'bg-stone-400/60 border-stone-400',
    hover: 'hover:bg-stone-400/20',
    click: 'active:bg-stone-300/20',
  },
  red: {
    bg_blobs: 'bg-red-400/10 border-red-400/20',
    bg: 'bg-red-400/60 border-red-400',
    hover: 'hover:bg-red-400/20',
    click: 'active:bg-red-300/20',
  },
  orange: {
    bg_blobs: 'bg-orange-400/10 border-orange-400/20',
    bg: 'bg-orange-400/60 border-orange-400',
    hover: 'hover:bg-orange-400/20',
    click: 'active:bg-orange-300/20',
  },
  amber: {
    bg_blobs: 'bg-amber-400/10 border-amber-400/20',
    bg: 'bg-amber-400/60 border-amber-400',
    hover: 'hover:bg-amber-400/20',
    click: 'active:bg-amber-300/20',
  },
  yellow: {
    bg_blobs: 'bg-yellow-400/10 border-yellow-400/20',
    bg: 'bg-yellow-400/60 border-yellow-400',
    hover: 'hover:bg-yellow-400/20',
    click: 'active:bg-yellow-300/20',
  },
  lime: {
    bg_blobs: 'bg-lime-400/10 border-lime-400/20',
    bg: 'bg-lime-400/60 border-lime-400',
    hover: 'hover:bg-lime-400/20',
    click: 'active:bg-lime-300/20',
  },
  green: {
    bg_blobs: 'bg-green-400/10 border-green-400/20',
    bg: 'bg-green-400/60 border-green-400',
    hover: 'hover:bg-green-400/20',
    click: 'active:bg-green-300/20',
  },
  emerald: {
    bg_blobs: 'bg-emerald-400/10 border-emerald-400/20',
    bg: 'bg-emerald-400/60 border-emerald-400',
    hover: 'hover:bg-emerald-400/20',
    click: 'active:bg-emerald-300/20',
  },
  teal: {
    bg_blobs: 'bg-teal-400/10 border-teal-400/20',
    bg: 'bg-teal-400/60 border-teal-400',
    hover: 'hover:bg-teal-400/20',
    click: 'active:bg-teal-300/20',
  },
  cyan: {
    bg_blobs: 'bg-cyan-400/10 border-cyan-400/20',
    bg: 'bg-cyan-400/60 border-cyan-400',
    hover: 'hover:bg-cyan-400/20',
    click: 'active:bg-cyan-300/20',
  },
  sky: {
    bg_blobs: 'bg-sky-400/10 border-sky-400/20',
    bg: 'bg-sky-400/60 border-sky-400',
    hover: 'hover:bg-sky-400/20',
    click: 'active:bg-sky-300/20',
  },
  blue: {
    bg_blobs: 'bg-blue-400/10 border-blue-400/20',
    bg: 'bg-blue-400/60 border-blue-400',
    hover: 'hover:bg-blue-400/20',
    click: 'active:bg-blue-300/20',
  },
  indigo: {
    bg_blobs: 'bg-indigo-400/10 border-indigo-400/20',
    bg: 'bg-indigo-400/60 border-indigo-400',
    hover: 'hover:bg-indigo-400/20',
    click: 'active:bg-indigo-300/20',
  },
  violet: {
    bg_blobs: 'bg-violet-400/10 border-violet-400/20',
    bg: 'bg-violet-400/60 border-violet-400',
    hover: 'hover:bg-violet-400/20',
    click: 'active:bg-violet-300/20',
  },
  purple: {
    bg_blobs: 'bg-purple-400/10 border-purple-400/20',
    bg: 'bg-purple-400/60 border-purple-400',
    hover: 'hover:bg-purple-400/20',
    click: 'active:bg-purple-300/20',
  },
  fuchsia: {
    bg_blobs: 'bg-fuchsia-400/10 border-fuchsia-400/20',
    bg: 'bg-fuchsia-400/60 border-fuchsia-400',
    hover: 'hover:bg-fuchsia-400/20',
    click: 'active:bg-fuchsia-300/20',
  },
  pink: {
    bg_blobs: 'bg-pink-400/10 border-pink-400/20',
    bg: 'bg-pink-400/60 border-pink-400',
    hover: 'hover:bg-pink-400/20',
    click: 'active:bg-pink-300/20',
  },
  rose: {
    bg_blobs: 'bg-rose-400/10 border-rose-400/20',
    bg: 'bg-rose-400/60 border-rose-400',
    hover: 'hover:bg-rose-400/20',
    click: 'active:bg-rose-300/20',
  },
};

export const Card = component$<CardProps>(({ color = 'darkgray', hover, row, blobs, ...props }) => {
  const colorClass = cardColorClasses[color];

  return (
    <div {...props} class={{
      'relative flex gap-3 sm:gap-4 p-5 sm:p-7 border rounded-lg motion-safe:transition-all': true,
      'flex-col': !row,
      [colorClass.bg]: !blobs,
      [colorClass.bg_blobs]: blobs,
      [colorClass.hover + ' hover:shadow-lg']: hover,
      [colorClass.click + ' active:scale-[99%] cursor-pointer select-none touch-manipulation']: hover == 'clickable',
      ...props.class,
    }}>
      {hover == 'blur' &&
        <div class={{
          'transition-all absolute flex inset-0 w-full h-full z-10 backdrop-blur-xl rounded-lg opacity-0 hover:opacity-100': true,
        }}>
          <Slot name="blur" />
        </div>
      }
      <Slot />
      {props.href && <a href={props.href} class="absolute inset-0" />}
      {blobs &&
        <Blobs color={color} class={{
          'overflow-clip': true,
        }}/>
      }
    </div>
  );
});