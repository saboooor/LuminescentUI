import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useSignal } from '@builder.io/qwik';

interface NavContainerProps extends Omit<PropsOf<'nav'>, 'class'> {
  class?: { [key: string]: boolean };
  fixed?: boolean;
  floating?: boolean;
  color?: keyof typeof navColorClasses;
}

export const navColorClasses = {
  slate: 'bg-slate-700/50 border-slate-600/50',
  gray: 'bg-gray-700/50 border-gray-600/50',
  darkgray: 'bg-gray-800/50 border-gray-700/50',
  darkergray: 'bg-gray-900/50 border-gray-800/50',
  zinc: 'bg-zinc-700/50 border-zinc-600/50',
  neutral: 'bg-neutral-700/50 border-neutral-600/50',
  stone: 'bg-stone-700/50 border-stone-600/50',
  red: 'bg-red-700/50 border-red-600/50',
  orange: 'bg-orange-700/50 border-orange-600/50',
  amber: 'bg-amber-700/50 border-amber-600/50',
  yellow: 'bg-yellow-700/50 border-yellow-600/50',
  lime: 'bg-lime-700/50 border-lime-600/50',
  green: 'bg-green-700/50 border-green-600/50',
  emerald: 'bg-emerald-700/50 border-emerald-600/50',
  teal: 'bg-teal-700/50 border-teal-600/50',
  cyan: 'bg-cyan-700/50 border-cyan-600/50',
  sky: 'bg-sky-700/50 border-sky-600/50',
  blue: 'bg-blue-700/50 border-blue-600/50',
  indigo: 'bg-indigo-700/50 border-indigo-600/50',
  violet: 'bg-violet-700/50 border-violet-600/50',
  purple: 'bg-purple-700/50 border-purple-600/50',
  fuchsia: 'bg-fuchsia-700/50 border-fuchsia-600/50',
  pink: 'bg-pink-700/50 border-pink-600/50',
  rose: 'bg-rose-700/50 border-rose-600/50',
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
        'sm:hidden motion-safe:transition-all flex flex-col px-2 items-center absolute w-full top-full': true,
        'mt-2': menu.value,
        'opacity-0 pointer-events-none': !menu.value,
        'before:backdrop-blur-lg': color !== 'transparent',
        'before:absolute before:content-[""] before:w-full before:h-full before:drop-shadow-xl before:-z-10 before:rounded-lg': true,
      }}>
        <div class={{
          [navColorClasses[color ?? 'darkgray']]: true,
          'flex flex-col gap-2 motion-safe:transition-all max-w-7xl w-full px-2 py-4 border rounded-lg': true,
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
            <button class={'lum-btn lum-pad-equal-md lum-bg-transparent sm:hidden'}>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
});