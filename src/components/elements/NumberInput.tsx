import type { PropsOf, QRL } from '@builder.io/qwik';
import { Slot, component$, useStore, useStyles$ } from '@builder.io/qwik';
import { Plus } from '../../svg/Plus';
import { Minus } from '../../svg/Minus';
import { InputClasses } from './TextInput';
import { Button } from './Button';

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
      <label for={props.id} class="pb-2">
        <Slot />
      </label>
      <NumberInputRaw {...{ ...props, children: undefined }} />
    </div>
  );
});

export const NumberInputRaw = component$<NumberInputRawProps>(({ input, onDecrement$, onIncrement$, value = 0, step = 1, ...props }) => {
  useStyles$(`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
  `);

  const store = useStore({
    value,
  });

  return (
    <div class={{
      'flex text-gray-50': true,
      'gap-2': !input,
    }}>
      <Button color={input ? 'gray' : 'darkgray'} data-action="decrement" aria-label="Decrement" disabled={props.min ? store.value <= props.min : false} onClick$={(event, element) => {
        store.value = store.value - step;
        onDecrement$(event, element, store);
      }} class={{
        'mr-2': input,
      }}>
        <Minus width="24" class="fill-current" />
      </Button>
      { input &&
        <input {...props} type="number" value={store.value} step={step} class={{
          [InputClasses]: true,
          ...props.class,
        }}/>
      }
      <Button color={input ? 'gray' : 'darkgray'} data-action="increment" aria-label="Increment" disabled={props.max ? store.value >= props.max : false} onClick$={(event, element) => {
        store.value = store.value + step;
        onIncrement$(event, element, store);
      }} class={{
        'ml-2': input,
      }}>
        <Plus width="24" class="fill-current" />
      </Button>
    </div>
  );
});