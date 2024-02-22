import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot, useStore, useStyles$ } from '@builder.io/qwik';
import { Button } from './Button';
import { ChevronDown } from '../../svg/ChevronDown';

interface SelectInputProps extends Omit<PropsOf<'select'>, 'class'> {
  class?: { [key: string]: boolean };
  id: string;
  values: {
    name: string;
    value: string | number;
  }[];
}

export const SelectInput = component$<SelectInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="text-gray-300 pb-1">
        <Slot />
      </label>
      <SelectInputRaw {...props}/>
    </div>
  );
});

export const SelectInputRaw = component$<SelectInputProps>(({ id, values, class: Class, ...props }) => {
  const store = useStore({
    opened: false,
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
    <div class="relative">
      <select {...props} id={id} class={{
        'hidden': true,
      }}>
        {values.map((value, i) => {
          return <option key={i} value={value.value}>{value.name}</option>;
        })}
      </select>
      <Button class={{
        'flex focus:bg-gray-700': true,
        ...Class,
      }} onClick$={() => {
        store.opened = !store.opened;
      }}>
        <span id={`lui-${id}-name`} class="flex-1 text-left">
          {values.find((value) => value.value.toString() === props.value)?.name ?? values[0].name}
        </span>
        <ChevronDown width={16} class={{
          'transition-all duration-200': true,
          'transform rotate-180': store.opened,
        }}/>
      </Button>
      <div id={`lui-${id}-opts`} class={{
        'transition-all absolute top-full left-0 p-1 mt-2 gap-1 bg-gray-800/50 backdrop-blur-xl flex flex-col rounded-lg border border-gray-700 z-[1000] max-h-72 lui-scroll overflow-auto select-none': true,
        'pointer-events-none opacity-0 scale-95': !store.opened,
      }}>
        {values.map((value, i) => {
          return (
            <Button key={i} onClick$={() => {
              store.opened = false;
              const select = document.getElementById(id) as HTMLSelectElement;
              select.value = value.value.toString();
              const name = document.getElementById(`lui-${id}-name`) as HTMLSpanElement;
              name.textContent = value.name;
              select.dispatchEvent(new Event('change'));
            }} class={{
              'border-0 bg-transparent': true,
              'opacity-0': !store.opened,
            }}>
              {value.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
});