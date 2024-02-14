import type { PropsOf, QRL } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Add, Remove } from 'qwik-ionicons';

interface NumberInputProps extends Omit<(PropsOf<'input'> & { type: 'number' }), 'class'> {
  onDecrement$: QRL;
  onIncrement$: QRL;
  input?: boolean;
  class?: { [key: string]: boolean };
}

export const NumberInput = component$<NumberInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        <Slot />
      </label>
      <NumberInputRaw {...props} />
    </div>
  );
});

export const NumberInputRaw = component$<NumberInputProps>(({ input, onDecrement$, onIncrement$, value = 0, ...props }) => {
  if (!value) value = 0;

  return (
    <div class={{
      'flex': true,
      'gap-2': !input,
    }}>
      <button data-action="decrement" aria-label="Decrement" disabled={props.min ? value <= props.min : false} onClick$={onDecrement$} class={{
        'flex justify-center items-center transition ease-in-out border border-gray-700 bg-gray-800 text-2xl hover:bg-gray-600 h-full py-1.5 cursor-pointer': true,
        'px-3 rounded-l-md border-r-0': input,
        'w-[50%] rounded-md': !input,
        'opacity-50 pointer-events-none': props.min ? value <= props.min : false,
      }}>
        <Remove width="24" class="fill-current" />
      </button>
      { input &&
        <input {...props}
          class={{
            'transition ease-in-out text-lg text-center border border-gray-600 bg-gray-700 text-gray-50 hover:bg-gray-600 focus:bg-gray-500 px-3 py-1 w-full': true,
            ...props.class,
          }} />
      }
      <button data-action="increment" aria-label="Increment" disabled={props.max ? value >= props.max : false} onClick$={onIncrement$} class={{
        'flex justify-center items-center transition ease-in-out border border-gray-700 bg-gray-800 text-2xl hover:bg-gray-600 h-full py-1.5 cursor-pointer': true,
        'px-3 rounded-r-md border-l-0': input,
        'w-[50%] rounded-md': !input,
        'opacity-50 pointer-events-none': props.max ? value >= props.max : false,
      }}>
        <Add width="24" class="fill-current" />
      </button>
    </div>
  );
});