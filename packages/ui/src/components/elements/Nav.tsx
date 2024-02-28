import { Slot, component$, useSignal } from '@builder.io/qwik';
import { Button } from './Button';

interface NavContainerProps {
  fixed?: boolean;
  floating?: boolean;
}

export const Nav = component$<NavContainerProps>(({ fixed, floating }) => {
  const menu = useSignal(false);

  return (
    <nav class={{
      'transition-all duration-200 flex flex-col top-0 left-0 w-full z-50': true,
      'fixed': fixed,
      'absolute': !fixed,
    }}>
      <div class={{
        'sm:hidden transition-all flex flex-col px-4 items-center absolute w-full': true,
        'top-full mt-4': menu.value,
        'opacity-0 top-0': !menu.value,
      }}>
        <div class={{
          'flex flex-col transition-all max-w-7xl w-full p-2 bg-gray-800/50 border border-gray-700/50 backdrop-blur-lg drop-shadow-xl rounded-lg': true,
        }}>
          <Slot name="mobile" />
        </div>
      </div>
      <div class={{
        'bg-gray-800/50 border-b border-gray-700/50 backdrop-blur-lg drop-shadow-xl': !floating,
        'p-4 pb-0': floating,
      }}>
        <div class={{
          'flex justify-evenly w-full mx-auto px-4 py-2 max-w-7xl': true,
          'bg-gray-800/50 border border-gray-700/50 backdrop-blur-lg drop-shadow-xl rounded-lg': floating,
        }}>
          <div class="flex flex-1 gap-2 justify-start">
            <Slot name="start" />
          </div>
          <div class="flex flex-1 gap-2 justify-center">
            <Slot name="center" />
          </div>
          <div class="flex flex-1 gap-2 justify-end">
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