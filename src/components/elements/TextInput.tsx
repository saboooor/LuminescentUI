import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

interface TextInputRawProps extends Omit<(PropsOf<'input'> & { type: 'text' }), 'class' | 'type'> {
  class?: { [key: string]: boolean };
}

interface TextInputProps extends Omit<TextInputRawProps, 'children'> {
  id: string;
}

export const TextInput = component$<TextInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        <Slot />
      </label>
      <TextInputRaw {...{ ...props, children: undefined }} />
    </div>
  );
});

export const TextInputRaw = component$<TextInputRawProps>((props) => {
  return (
    <input {...props} class={{
      'transition ease-in-out text-lg border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2': true,
      ...props.class,
    }}/>
  );
});