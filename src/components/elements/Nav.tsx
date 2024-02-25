import { Slot, component$ } from '@builder.io/qwik';

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
        <div class="flex flex-1 justify-start">
          <Slot name="start" />
        </div>
        <div class="flex flex-1 justify-center">
          <Slot name="center" />
        </div>
        <div class="flex flex-1 justify-end">
          <Slot name="end" />
        </div>
      </div>
    </nav>
  );
});