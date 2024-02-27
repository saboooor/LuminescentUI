import { Slot, component$ } from '@builder.io/qwik';
import { Button } from './Button';

interface NavContainerProps {
  floating?: boolean;
}

export const NavContainer = component$<NavContainerProps>(({ floating }) => {
  return (
    <nav class={{
      'transition-all duration-200 flex flex-col fixed top-0 left-0 w-full z-50': true,
      'bg-gray-800/50 backdrop-blur-lg drop-shadow-xl': !floating,
    }}>
      <div class={{
        'flex justify-evenly w-full mx-auto px-4 py-2 max-w-7xl': true,
        'bg-gray-800/50 backdrop-blur-lg drop-shadow-xl mt-3 rounded-lg': floating,
      }}>
        <div class="flex flex-1 gap-2 justify-start">
          <Slot name="start" />
        </div>
        <div class="flex flex-1 gap-2 justify-center">
          <Slot name="center" />
        </div>
        <div class="flex flex-1 gap-2 justify-end">
          <Slot name="end" />
          <Button color="transparent" square>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </Button>
        </div>
      </div>
      <div class={{
        'flex justify-evenly w-full mx-auto px-4 py-2 max-w-7xl': true,
        'bg-gray-800/50 backdrop-blur-lg drop-shadow-xl mt-3 rounded-lg': floating,
      }}>
        <Slot name="mobile" />
        Hello mobile
      </div>
    </nav>
  );
});