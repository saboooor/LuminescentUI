import type { JSXChildren, PropsOf } from '@builder.io/qwik';
import { component$, Slot, useStore, useStyles$ } from '@builder.io/qwik';
import { ChevronDown } from '../../svg/ChevronDown';

interface DropdownProps extends Omit<PropsOf<'select'>, 'class' | 'size'> {
  class?: { [key: string]: boolean };
  display?: JSXChildren;
  hover?: boolean;
  values?: {
    name: JSXChildren;
    value: string | number;
  }[];
  id: string;
}

export const Dropdown = component$<DropdownProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="text-gray-300 pb-1 select-none">
        <Slot />
      </label>
      <DropdownRaw {...props}/>
    </div>
  );
});

export const DropdownRaw = component$<DropdownProps>(({ id, values, class: Class, display, hover, ...props }) => {
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
    <div class={{
      'relative touch-manipulation': true,
      'group': hover,
    }}>
      {values &&
        <select {...props} id={id} class={{
          'hidden': true,
        }}>
          {values.map((value, i) => {
            return <option key={i} value={value.value}>{`${value.value}`}</option>;
          })}
        </select>
      }
      <button class={{
        'lum-btn lum-pad-md text-base lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md': true,
        ...Class,
      }} onClick$={() => {
        store.opened = !store.opened;
      }}>
        {display}
        {!display && values &&
          <span id={`lui-${id}-name`} class="flex-1 text-left">
            {values.find((value) => value.value.toString() === store.value)?.name ?? values[0].name}
          </span>
        }
        <ChevronDown width={16} class={{
          'motion-safe:transition-all duration-200': true,
          'transform rotate-180': store.opened,
          'group-hover:transform group-hover:rotate-180': hover,
        }}/>
      </button>
      <div class={{
        'transition-all absolute top-full pt-2 left-0 z-[1000] ': true,
        'opacity-0 scale-95 pointer-events-none': !store.opened,
        'group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100': hover,
      }}>
        <div id={`lui-${id}-opts`} class={{
          'motion-safe:transition-all p-1 gap-1 bg-gray-800/50 backdrop-blur-xl flex flex-col border border-gray-700 max-h-72 lui-scroll overflow-auto select-none': true,
        }}>
          {values?.map(({ name, value }, i) => {
            return (
              <button class={{
                'lum-btn lum-pad-md text-base lum-bg-transparent': true,
              }} key={i} onClick$={() => {
                store.opened = false;
                const select = document.getElementById(id) as HTMLSelectElement | null;
                if (select) {
                  select.value = value.toString();
                  select.dispatchEvent(new Event('change'));
                }
                store.value = value.toString();
              }}>
                {name}
              </button>
            );
          })}
          <Slot name="extra-buttons" />
        </div>
      </div>
    </div>
  );
});