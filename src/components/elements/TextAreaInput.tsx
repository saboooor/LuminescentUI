import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export interface TextAreaProps extends Omit<PropsOf<'textarea'>, 'class'> {
  class?: { [key: string]: boolean };
}

export const TextAreaInput = component$<TextAreaProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        <Slot />
      </label>
      <TextAreaInputRaw {...props} /> :
    </div>
  );
});

export const TextAreaInputRaw = component$<TextAreaProps>((props) => {
  return (
    <textarea {...{ ...props, class: undefined }} class={{
      'transition ease-in-out text-lg border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 resize-y w-full h-32': true,
      ...props.class,
    }}/>
  );
});