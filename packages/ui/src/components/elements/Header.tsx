
import type { JSXOutput, PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { LoadingIcon } from './LoadingIcon';
import { Anchor } from './Anchor';

interface HeaderProps extends Omit<PropsOf<'h2'>, 'class'> {
  class?: { [key: string]: boolean };
  id?: string;
  loading?: boolean;
  subheader?: string | JSXOutput;
}

export const Header = component$<HeaderProps>(({ id, loading, subheader, ...props }) => {
  let Component = <>
    <h2 class={{
      'flex gap-2 flex-1 items-center font-bold text-xl sm:text-2xl whitespace-nowrap text-white': true,
      ...props.class,
    }}>
      <Slot />
      {id && <Anchor id={id}/>}
    </h2>
  </>;

  if (subheader) {
    Component = (
      <div class="flex flex-1 flex-col gap-1">
        {Component}
        <h3 class="flex items-center text-gray-400 text-sm">
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
          'motion-safe:transition-all duration-200': true,
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