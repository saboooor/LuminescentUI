
import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

interface CardProps extends Omit<PropsOf<'div'>, 'class'> {
  color?: keyof typeof cardColorClasses;
  hover?: boolean | 'clickable';
  href?: string;
  row?: boolean;
  blobs?: boolean;
  class?: { [key: string]: boolean };
}

export const cardColorClasses = {
  pink: {
    card: {
      bg_blobs: 'bg-pink-400/10 border-pink-400/20',
      bg: 'bg-pink-400/60 border-pink-400',
      hover: 'hover:bg-pink-400/20',
      click: 'active:bg-pink-300/20',
    },
    blobs: [
      'bg-pink-400',
      'bg-pink-500',
      'bg-pink-600',
    ],
  },
  red: {
    card: {
      bg_blobs: 'bg-red-400/10 border-red-400/20',
      bg: 'bg-red-400/60 border-red-400',
      hover: 'hover:bg-red-400/20',
      click: 'active:bg-red-300/20',
    },
    blobs: [
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
    ],
  },
  orange: {
    card: {
      bg_blobs: 'bg-orange-400/10 border-orange-400/20',
      bg: 'bg-orange-400/60 border-orange-400',
      hover: 'hover:bg-orange-400/20',
      click: 'active:bg-orange-300/20',
    },
    blobs: [
      'bg-orange-400',
      'bg-orange-500',
      'bg-orange-600',
    ],
  },
  yellow: {
    card: {
      bg_blobs: 'bg-yellow-400/10 border-yellow-400/20',
      bg: 'bg-yellow-400/60 border-yellow-400',
      hover: 'hover:bg-yellow-400/20',
      click: 'active:bg-yellow-300/20',
    },
    blobs: [
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
    ],
  },
  green: {
    card: {
      bg_blobs: 'bg-green-400/10 border-green-400/20',
      bg: 'bg-green-400/60 border-green-400',
      hover: 'hover:bg-green-400/20',
      click: 'active:bg-green-300/20',
    },
    blobs: [
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
    ],
  },
  blue: {
    card: {
      bg_blobs: 'bg-blue-400/10 border-blue-400/20',
      bg: 'bg-blue-400/60 border-blue-400',
      hover: 'hover:bg-blue-400/20',
      click: 'active:bg-blue-300/20',
    },
    blobs: [
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
    ],
  },
  purple: {
    card: {
      bg_blobs: 'bg-purple-400/10 border-purple-400/20',
      bg: 'bg-purple-400/60 border-purple-400',
      hover: 'hover:bg-purple-400/20',
      click: 'active:bg-purple-300/20',
    },
    blobs: [
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
    ],
  },
  gray: {
    card: {
      bg_blobs: 'bg-gray-400/10 border-gray-400/20',
      bg: 'bg-gray-400/60 border-gray-400',
      hover: 'hover:bg-gray-400/20',
      click: 'active:bg-gray-300/20',
    },
    blobs: [
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
    ],
  },
  darkgray: {
    card: {
      bg_blobs: 'bg-gray-800/10 border-gray-800/40',
      bg: 'bg-gray-800/60 border-gray-800',
      hover: 'hover:bg-gray-800/40',
      click: 'active:bg-gray-700/40',
    },
    blobs: [
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
    ],
  },
  darkergray: {
    card: {
      bg_blobs: 'bg-gray-900/10 border-gray-900/50',
      bg: 'bg-gray-900/60 border-gray-900',
      hover: 'hover:bg-gray-900/50',
      click: 'active:bg-gray-800/50',
    },
    blobs: [
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
    ],
  },
};

const blobClasses = [
  'animate-blob',
  'animate-blob1',
  'animate-blob2',
  'animate-blob3',
  'animate-blob4',
  'animate-blob5',
  'animate-blob6',
];

export const Card = component$<CardProps>(({ color = 'darkgray', hover, row, blobs, ...props }) => {
  const blob = Math.round(Math.random() * 6);
  const colorClass = cardColorClasses[color];

  return (
    <div  {...props} class={{
      'relative p-8 border rounded-lg transition-all': true,
      [colorClass.card.bg]: !blobs,
      [colorClass.card.bg_blobs]: blobs,
      [colorClass.card.hover + ' hover:shadow-lg']: hover,
      [colorClass.card.click + ' active:scale-[99%] cursor-pointer select-none touch-manipulation']: hover == 'clickable',
      ...props.class,
    }}>
      <div class={{
        'flex gap-4': true,
        'flex-col': !row,
        'flex-row items-center': row,
      }}>
        <Slot />
      </div>
      {props.href && <a href={props.href} class="absolute inset-0" />}
      {blobs &&
        <div class="absolute -z-10 inset-0 transition-all overflow-clip animate-in fade-in anim-duration-[2s]" style={{ containerType: 'size' }}>
          <div class={{
            'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out blur-xl': true,
            [blobClasses[blob]]: true,
            [colorClass.blobs[0]]: true,
          }} />
          <div class={{
            'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out blur-xl': true,
            'anim-delay-[-5s]': true,
            [blobClasses[blob]]: true,
            [colorClass.blobs[1]]: true,
          }} />
          <div class={{
            'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out blur-xl': true,
            'anim-delay-[-10s]': true,
            [blobClasses[blob]]: true,
            [colorClass.blobs[2]]: true,
          }} />
        </div>
      }
    </div>
  );
});