import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

interface SelectInputRawProps extends Omit<PropsOf<'select'>, 'class'> {
  class?: { [key: string]: boolean };
  transparent?: boolean;
}

interface SelectInputProps extends SelectInputRawProps {
  id: string;
  label: string;
}

export const SelectInput = component$<SelectInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        {props.label}
      </label>
      <SelectInputRaw {...props}>
        <Slot />
      </SelectInputRaw>
    </div>
  );
});

export const SelectInputRaw = component$<SelectInputRawProps>(({ transparent, ...props }) => {
  return (
    <select {...props} class={{
      'transition ease-in-out text-lg border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-2 py-3': true,
      'border-0 bg-transparent': transparent,
      ...props.class,
    }}>
      <Slot />
    </select>
  );
});