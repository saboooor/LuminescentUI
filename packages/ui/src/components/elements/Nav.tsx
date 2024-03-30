import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useSignal } from '@builder.io/qwik';
import { Button } from './Button';

interface NavContainerProps extends Omit<PropsOf<'nav'>, 'class'> {
  class?: { [key: string]: boolean };
  fixed?: boolean;
  floating?: boolean;
  color?: keyof typeof navColorClasses;
}

export const navColorClasses = {
  red: 'bg-red-700/50 border-red-600/50',
  orange: 'bg-orange-700/50 border-orange-600/50',
  yellow: 'bg-yellow-700/50 border-yellow-600/50',
  green: 'bg-green-700/50 border-green-600/50',
  blue: 'bg-blue-600/50 border-blue-500/50',
  purple: 'bg-purple-600/50 border-purple-500/50',
  pink: 'bg-pink-600/50 border-pink-500/50',
  gray: 'bg-gray-700/50 border-gray-600/50',
  darkgray: 'bg-gray-800/50 border-gray-700/50',
  transparent: 'bg-transparent border-transparent',
};

export const Nav = component$<NavContainerProps>(({ fixed, floating, color, ...props }) => {
  const menu = useSignal(false);

  return (
    <nav {...props} class={{
      'motion-safe:transition-all duration-200 flex flex-col top-0 left-0 w-full z-50': true,
      'fixed': fixed,
      'absolute': !fixed,
      ...props.class,
    }}>
      <div class={{
        'sm:hidden motion-safe:transition-all flex flex-col px-2 items-center absolute w-full': true,
        'top-full mt-2': menu.value,
        'opacity-0 top-0 scale-95 pointer-events-none': !menu.value,
      }}>
        <div class={{
          [navColorClasses[color ?? 'darkgray']]: true,
          'flex flex-col gap-2 motion-safe:transition-all max-w-7xl w-full px-2 py-4 border rounded-lg': true,
          'before:backdrop-blur-lg': color !== 'transparent',
          'before:absolute before:content-[""] before:w-full before:h-full before:drop-shadow-xl before:-z-10': true,
        }}>
          <Slot name="mobile" />
        </div>
      </div>
      <div class={{
        [navColorClasses[color ?? 'darkgray']]: !floating,
        'border-b': !floating,
        'before:backdrop-blur-lg': color !== 'transparent' && !floating,
        'before:absolute before:content-[""] before:w-full before:h-full before:drop-shadow-xl before:-z-10': !floating,
        'relative mt-2 mx-2': floating,
      }}>
        <div class={{
          'flex justify-evenly w-full mx-auto px-2 max-w-7xl': true,
          [navColorClasses[color ?? 'darkgray']]: floating,
          'border rounded-lg': floating,
          'before:backdrop-blur-lg': color !== 'transparent' && floating,
          'before:absolute before:content-[""] before:w-full before:max-w-7xl before:h-full before:rounded-lg before:drop-shadow-xl before:-z-10': floating,
        }}>
          <div class="flex items-center flex-1 gap-2 py-2 justify-start">
            <Slot name="start" />
          </div>
          <div class="flex items-center flex-1 gap-2 py-2 justify-center">
            <Slot name="center" />
          </div>
          <div class="flex items-center flex-1 gap-2 py-2 justify-end">
            <Slot name="end" />
            <Button color="transparent" square class={{ 'sm:hidden': true }}
              onClick$={() => menu.value = !menu.value}>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
});