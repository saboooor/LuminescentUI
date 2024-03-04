
import { component$ } from '@builder.io/qwik';
import type { sizeClasses } from './Button';

interface BlobProps {
  class?: { [key: string]: boolean };
  color?: keyof typeof blobColorClasses | [string, string, string];
  blur?: keyof typeof sizeClasses;
}

export const blobColorClasses = {
  pink: [
    'bg-pink-400',
    'bg-pink-500',
    'bg-pink-600',
  ],
  red: [
    'bg-red-400',
    'bg-red-500',
    'bg-red-600',
  ],
  orange: [
    'bg-orange-400',
    'bg-orange-500',
    'bg-orange-600',
  ],
  yellow: [
    'bg-yellow-400',
    'bg-yellow-500',
    'bg-yellow-600',
  ],
  green: [
    'bg-green-400',
    'bg-green-500',
    'bg-green-600',
  ],
  blue: [
    'bg-blue-400',
    'bg-blue-500',
    'bg-blue-600',
  ],
  purple: [
    'bg-purple-400',
    'bg-purple-500',
    'bg-purple-600',
  ],
  gray: [
    'bg-gray-400',
    'bg-gray-500',
    'bg-gray-600',
  ],
  darkgray: [
    'bg-gray-500',
    'bg-gray-600',
    'bg-gray-700',
  ],
  darkergray: [
    'bg-gray-600',
    'bg-gray-700',
    'bg-gray-800',
  ],
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

export const Blobs = component$<BlobProps>(({ color = 'darkgray', blur = 'xl', ...props }) => {
  const blob = Math.round(Math.random() * 6);
  const colorClass = typeof color == 'string' ? blobColorClasses[color] : color;

  return (
    <div class={{
      'motion-reduce:hidden absolute inset-0 transition-all animate-in fade-in anim-duration-[2s] -z-[1]': true,
      ...props.class,
    }} style={{ containerType: 'size' }}>
      <div class={{
        'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out': true,
        'blur-sm': blur === 'sm',
        'blur-md': blur === 'md',
        'blur-lg': blur === 'lg',
        'blur-xl': blur === 'xl',
        [blobClasses[blob]]: true,
        [colorClass[0]]: true,
      }} />
      <div class={{
        'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out': true,
        'blur-sm': blur === 'sm',
        'blur-md': blur === 'md',
        'blur-lg': blur === 'lg',
        'blur-xl': blur === 'xl',
        'anim-delay-[-5s]': true,
        [blobClasses[blob]]: true,
        [colorClass[1]]: true,
      }} />
      <div class={{
        'absolute top-0 w-[30cqw] h-[30cqw] rounded-full opacity-20 ease-in-out': true,
        'blur-sm': blur === 'sm',
        'blur-md': blur === 'md',
        'blur-lg': blur === 'lg',
        'blur-xl': blur === 'xl',
        'anim-delay-[-10s]': true,
        [blobClasses[blob]]: true,
        [colorClass[2]]: true,
      }} />
    </div>
  );
});