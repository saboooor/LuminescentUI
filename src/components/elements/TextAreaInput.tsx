import { component$, Slot } from '@builder.io/qwik';

export const TextAreaInput = component$(({ ...props }: any) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        <Slot />
      </label>
      <TextAreaInputRaw {...props} /> :
    </div>
  );
});

export const TextAreaInputRaw = component$(({ extraClass, ...props }: any) => {
  return (
    <textarea {...props} class={{
      'transition ease-in-out text-lg border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 resize-y w-full h-32': true,
      ...extraClass,
    }}/>
  );
});