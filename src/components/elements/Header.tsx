
import type { JSXOutput } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { LoadingIcon } from './LoadingIcon';
import { Anchor } from './Anchor';

interface HeaderProps {
  id?: string;
  loading?: boolean;
  subheader?: string | JSXOutput;
}

export const Header = component$<HeaderProps>(({ id, loading, subheader }) => {
  let Component = <>
    <h2 class="flex items-center font-bold text-2xl">
      {id && <Anchor id={id}/>}
      <Slot />
    </h2>
  </>;

  if (subheader) {
    Component = (
      <div class="flex flex-1 flex-col gap-1">
        {Component}
        <h3 class="flex items-center text-gray-400">
          {subheader}
        </h3>
      </div>
    );
  }

  if (loading !== undefined) {
    Component = (
      <div class="flex">
        {Component}
        <div class={{
          'transition-all duration-200': true,
          'opacity-0': !loading,
          'opacity-100': loading,
        }}>
          <LoadingIcon width={24} />
        </div>
      </div>
    );
  }

  return Component;
});