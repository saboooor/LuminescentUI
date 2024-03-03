import type { PropsOf, QRL } from '@builder.io/qwik';
import { $, Slot, component$, useStyles$ } from '@builder.io/qwik';
import { Plus } from '../../svg/Plus';
import { Minus } from '../../svg/Minus';
import { InputClasses } from './TextInput';
import { Button } from './Button';

interface NumberInputRawProps extends Omit<(PropsOf<'input'> & { type: 'number' }), 'class' | 'type'> {
  onDecrement$: QRL<(event: PointerEvent, element: HTMLButtonElement, inputElement?: HTMLInputElement) => void>;
  onIncrement$: QRL<(event: PointerEvent, element: HTMLButtonElement, inputElement?: HTMLInputElement) => void>;
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
      <label for={props.id} class="text-gray-300 pb-1 select-none">
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

  return (
    <div class={{
      'flex text-gray-50 touch-manipulation': true,
      'gap-2': !input,
    }}>
      <Button size="sm" color={input ? 'gray' : 'darkgray'} data-action="decrement" aria-label="Decrement" disabled={props.min ? value <= props.min : false}
        onClick$={input ? $((event, element) => {
          const siblingInput = element.nextElementSibling as HTMLInputElement;
          siblingInput.stepDown();
          onDecrement$(event, element, siblingInput);
        }) : onDecrement$} class={{
          'mr-2': input,
        }}>
        <Minus width="24" class="fill-current" />
      </Button>
      { input &&
        <input {...props} type="number" value={value} step={step} class={{
          [InputClasses]: true,
          'text-center': true,
          ...props.class,
        }}/>
      }
      <Button size="sm" color={input ? 'gray' : 'darkgray'} data-action="increment" aria-label="Increment" disabled={props.max ? value >= props.max : false}
        onClick$={input ? $((event, element) => {
          const siblingInput = element.previousElementSibling as HTMLInputElement;
          siblingInput.stepUp();
          onIncrement$(event, element, siblingInput);
        }) : onIncrement$} class={{
          'ml-2': input,
        }}>
        <Plus width="24" class="fill-current" />
      </Button>
    </div>
  );
});