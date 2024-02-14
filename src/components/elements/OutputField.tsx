import { component$, Slot } from '@builder.io/qwik';
import type { TextAreaProps } from './TextAreaInput';

export const OutputField = component$<TextAreaProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        <Slot />
      </label>
      <OutputFieldRaw {...props} />
    </div>
  );
});

export const OutputFieldRaw = component$<TextAreaProps>((props) => {
  return <>
    <textarea {...{ ...props, class: undefined }} class={{
      'transition ease-in-out cursor-pointer text-lg border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 break-words': true,
      ...props.class,
    }}/>
  </>;
});