import type { JSXOutput, PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

interface ToggleProps extends Omit<(PropsOf<'input'> & { type: 'checkbox' }), 'class' | 'bind:checked' | 'type' | 'children'> {
  class?: { [key: string]: boolean };
  center?: boolean;
  label?: string | JSXOutput;
}

export const Toggle = component$<ToggleProps>(({ center, label, ...props }) => {
  return (
    <div class={{
      'flex gap-3 items-center': true,
      'justify-center': center,
    }}>
      <label class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" {...props} class={{
          'sr-only peer': true,
          ...props.class,
        }} />
        <div class={{
          'transition ease-in-out w-12 h-7 rounded-md peer border hover:shadow-lg': true,
          'bg-gray-800 border-gray-700 hover:bg-gray-700 active:bg-gray-600': true,
          'after:content-[\'\'] after:absolute after:top-[4px] after:left-[4px] after:border after:rounded-md after:h-5 after:w-5 after:transition-all after:ease-in-out': true,
          'after:bg-gray-700 after:border-gray-600 after:hover:bg-gray-600 after:active:bg-gray-500': true,
          'peer-checked:bg-blue-700 peer-checked:border-blue-600 peer-checked:hover:bg-blue-600 peer-checked:active:bg-blue-500': true,
          'peer-checked:after:translate-x-full peer-checked:after:bg-blue-600 peer-checked:after:border-blue-500 peer-checked:after:hover:bg-blue-500 peer-checked:after:active:bg-blue-400': true,
        }} />
      </label>
      {label && <label for={props.id} class="text-gray-300 flex gap-2">{label}</label>}
    </div>
  );
});