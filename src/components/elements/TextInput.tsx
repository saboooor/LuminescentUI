import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

export interface TextInputRawProps extends Omit<(PropsOf<'input'> & { type: 'text' }), 'class' | 'type'> {
  class?: { [key: string]: boolean };
}

interface TextInputProps extends Omit<TextInputRawProps, 'children'> {
  id: string;
}

export const InputClasses = 'transition ease-in-out border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:outline-none focus:border-gray-400 rounded-md px-3 py-2';

export const TextInput = component$<TextInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="text-gray-300 pb-1">
        <Slot />
      </label>
      <TextInputRaw {...{ ...props, children: undefined }} />
    </div>
  );
});

export const TextInputRaw = component$<TextInputRawProps>((props) => {
  return (
    <input {...props} class={{
      [InputClasses]: true,
      ...props.class,
    }}/>
  );
});