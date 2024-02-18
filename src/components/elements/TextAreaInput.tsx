import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

export interface TextAreaRawProps extends Omit<PropsOf<'textarea'>, 'class'> {
  class?: { [key: string]: boolean };
}

interface TextAreaProps extends TextAreaRawProps {
  id: string;
  label: string;
}

export const TextAreaInput = component$<TextAreaProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        {props.label}
      </label>
      <TextAreaInputRaw {...props} />
    </div>
  );
});

export const TextAreaInputRaw = component$<TextAreaRawProps>((props) => {
  return (
    <textarea {...props} class={{
      'transition ease-in-out text-lg border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 resize-y w-full h-32': true,
      ...props.class,
    }}/>
  );
});