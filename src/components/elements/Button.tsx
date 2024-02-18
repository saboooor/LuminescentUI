import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export const buttonColorClasses = {
  blue: 'bg-blue-600/90 border-blue-500 hover:bg-blue-500 focus:bg-blue-500',
  purple: 'bg-purple-600/90 border-purple-500 hover:bg-purple-500 focus:bg-purple-500',
  pink: 'bg-pink-600/90 border-pink-500 hover:bg-pink-500 focus:bg-pink-500',
  gray: 'bg-gray-800/90 border-gray-700 hover:bg-gray-700 focus:bg-gray-700',
  red: 'bg-red-700/90 border-red-600 hover:bg-red-600 focus:bg-red-600',
  green: 'bg-green-700/90 border-green-600 hover:bg-green-600 focus:bg-green-600',
  yellow: 'bg-yellow-700/90 border-yellow-600 hover:bg-yellow-600 focus:bg-yellow-600',
};

export const sizeClasses = {
  sm: 'text-sm px-2 py-1 rounded-md gap-2',
  md: 'text-base px-4 py-2 rounded-md gap-3',
  lg: 'text-base px-6 py-3 rounded-lg gap-3',
  xl: 'text-base px-8 py-4 rounded-xl gap-4',
};

const buttonClass = 'relative flex items-center gap-3 transition ease-in-out border text-gray-50 fill-gray-50 disabled:opacity-50';

interface GenericButtonProps {
  color?: keyof typeof buttonColorClasses;
  size?: keyof typeof sizeClasses;
  class?: { [key: string]: boolean | undefined };
}

interface ButtonProps extends Omit<PropsOf<'button'>, 'class'>, GenericButtonProps {}
interface AnchorProps extends Omit<PropsOf<'a'>, 'class'>, GenericButtonProps {
  href: string;
}

export const Button = component$<ButtonProps>(({ color = 'gray', size = 'md', ...props }) => {
  const colorClass = buttonColorClasses[color as keyof typeof buttonColorClasses];
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses];

  props.class = {
    [buttonClass]: true,
    [colorClass]: true,
    [sizeClass]: true,
    ...props.class,
  };

  return <button {...props}><Slot /></button>;
});

export const ButtonAnchor = component$<AnchorProps>(({ color = 'gray', size = 'md', ...props }) => {
  const colorClass = buttonColorClasses[color as keyof typeof buttonColorClasses];
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses];

  props.class = {
    [buttonClass]: true,
    [colorClass]: true,
    [sizeClass]: true,
    ...props.class,
  };

  return <a {...props}><Slot /></a>;
});