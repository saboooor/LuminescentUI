import type { PropsOf, QRL } from '@builder.io/qwik';
import { Slot, component$, useStore } from '@builder.io/qwik';
import { Plus } from '../../svg/Plus';
import { Minus } from '../../svg/Minus';

interface NumberInputRawProps extends Omit<(PropsOf<'input'> & { type: 'number' }), 'class' | 'type'> {
  onDecrement$: QRL<(event: PointerEvent, element: HTMLButtonElement, store: { value: number }) => void>;
  onIncrement$: QRL<(event: PointerEvent, element: HTMLButtonElement, store: { value: number }) => void>;
  input?: boolean;
  class?: { [key: string]: boolean };
  value?: number;
  min?: number;
  max?: number;
  step?: number;
}

interface NumberInputProps extends Omit<NumberInputRawProps, 'children'>{
  id: string;
}

export const NumberInput = component$<NumberInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        <Slot />
      </label>
      <NumberInputRaw {...{ ...props, children: undefined }} />
    </div>
  );
});

export const NumberInputRaw = component$<NumberInputRawProps>(({ input, onDecrement$, onIncrement$, value = 0, step = 1, ...props }) => {
  const store = useStore({
    value,
  });

  return (
    <div class={{
      'flex text-gray-50': true,
      'gap-2': !input,
    }}>
      <button data-action="decrement" aria-label="Decrement" disabled={props.min ? store.value <= props.min : false} onClick$={(event, element) => {
        store.value = store.value - step;
        onDecrement$(event, element, store);
      }} class={{
        'flex justify-center items-center transition ease-in-out border border-gray-700 bg-gray-800 text-2xl hover:bg-gray-600 h-full py-1.5 cursor-pointer': true,
        'px-3 rounded-l-md border-r-0': input,
        'w-[50%] rounded-md': !input,
        'opacity-50 pointer-events-none': props.min ? store.value <= props.min : false,
      }}>
        <Minus width="24" class="fill-current" />
      </button>
      { input &&
        <input type="number" {...props} value={store.value} step={step}
          class={{
            'transition ease-in-out text-lg text-center border border-gray-600 bg-gray-700 hover:bg-gray-600 focus:bg-gray-500 px-3 py-1 w-full': true,
            ...props.class,
          }} />
      }
      <button data-action="increment" aria-label="Increment" disabled={props.max ? store.value >= props.max : false} onClick$={(event, element) => {
        store.value = store.value + step;
        onIncrement$(event, element, store);
      }} class={{
        'flex justify-center items-center transition ease-in-out border border-gray-700 bg-gray-800 text-2xl hover:bg-gray-600 h-full py-1.5 cursor-pointer': true,
        'px-3 rounded-r-md border-l-0': input,
        'w-[50%] rounded-md': !input,
        'opacity-50 pointer-events-none': props.max ? store.value >= props.max : false,
      }}>
        <Plus width="24" class="fill-current" />
      </button>
    </div>
  );
});