import type { JSXChildren, PropsOf } from '@builder.io/qwik';
import { component$, Slot, useStore, useStyles$ } from '@builder.io/qwik';
import type { buttonColorClasses, sizeClasses } from './Button';
import { Button } from './Button';
import { ChevronDown } from '../../svg/ChevronDown';

interface SelectInputProps extends Omit<PropsOf<'select'>, 'class' | 'size'> {
  class?: { [key: string]: boolean };
  display?: JSXChildren;
  color?: keyof typeof buttonColorClasses;
  size?: keyof typeof sizeClasses;
  id: string;
  values: {
    name: JSXChildren;
    value: string | number;
    color?: keyof typeof buttonColorClasses;
  }[];
}

export const SelectInput = component$<SelectInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="text-gray-300 pb-1 select-none">
        <Slot />
      </label>
      <SelectInputRaw {...props}/>
    </div>
  );
});

export const SelectInputRaw = component$<SelectInputProps>(({ id, values, class: Class, display, color, size = 'sm', ...props }) => {
  const store = useStore({
    opened: false,
    value: props.value,
  });

  useStyles$(`
    .lui-scroll {
      scroll-behavior: smooth;
    }
    .lui-scroll::-webkit-scrollbar {
      appearance: none;
      -webkit-appearance: none;
      width: 8px;
      height: 8px;
    }
    .lui-scroll::-webkit-scrollbar-track {
      background-color: transparent;
    }
    .lui-scroll::-webkit-scrollbar-thumb {
      background-color: #ffffff20;
      border: 1px solid #ffffff20;
      border-radius: 3px;
    }
    .lui-scroll::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  `);

  return (
    <div class="relative touch-manipulation">
      <select {...props} id={id} class={{
        'hidden': true,
      }}>
        {values.map((value, i) => {
          return <option key={i} value={value.value}>{`${value.value}`}</option>;
        })}
      </select>
      <Button color={color} size={size} class={{
        'flex': true,
        ...Class,
      }} onClick$={() => {
        store.opened = !store.opened;
      }}>
        {display}
        {!display &&
          <span id={`lui-${id}-name`} class="flex-1 text-left">
            {values.find((value) => value.value.toString() === store.value)?.name ?? values[0].name}
          </span>
        }
        <ChevronDown width={16} class={{
          'motion-safe:transition-all duration-200': true,
          'transform rotate-180': store.opened,
        }}/>
      </Button>
      <div id={`lui-${id}-opts`} class={{
        'motion-safe:transition-all absolute top-full left-0 p-1 mt-2 gap-1 bg-gray-800/50 backdrop-blur-xl flex flex-col rounded-lg border border-gray-700 z-[1000] max-h-72 lui-scroll overflow-auto select-none': true,
        'pointer-events-none opacity-0 scale-95': !store.opened,
      }}>
        {values.map(({ name, value, color = 'transparent' }, i) => {
          return (
            <Button color={color} size={size} key={i} onClick$={() => {
              store.opened = false;
              const select = document.getElementById(id) as HTMLSelectElement;
              select.value = value.toString();
              store.value = value.toString();
              select.dispatchEvent(new Event('change'));
            }}>
              {name}
            </Button>
          );
        })}
      </div>
    </div>
  );
});