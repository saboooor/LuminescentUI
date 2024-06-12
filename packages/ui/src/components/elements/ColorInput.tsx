
import type { QRL } from '@builder.io/qwik';
import { Slot, component$, useStore } from '@builder.io/qwik';
import type { TextInputRawProps } from './TextInput';
import { TextInputRaw } from './TextInput';
import { getBrightness, hexNumberToRgb, hexStringToNumber } from '../../utils/color';
import { ColorPicker } from './ColorPicker';

export interface ColorInputProps extends Omit<TextInputRawProps, 'onInput$' | 'children'> {
  onInput$?: QRL<(color: string) => void>;
  value?: string;
  colors?: string[];
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  horizontal?: boolean;
  showInput?: boolean;
  id: string;
}

export const ColorInput = component$<ColorInputProps>(({ onInput$, value = '#000000', colors, preview = 'left', horizontal, class: Class, showInput = false, ...props }) => {
  const store = useStore({
    opened: false,
  });

  const { id } = props;

  return (
    <div class="relative">
      <label for={id} class="text-gray-300 pb-1 flex select-none">
        <Slot />
      </label>
      <TextInputRaw class={{
        'w-full': true,
        ...Class,
      }} {...props} value={value}

      onFocus$={() => {
        const abortController = new AbortController();
        document.addEventListener('click', (e) => {
          if (e.target instanceof HTMLElement && !e.target.closest(`#${id}-picker`) && !e.target.closest(`#${id}`)) {
            store.opened = false;
            abortController.abort();
          }
        }, { signal: abortController.signal });
        store.opened = true;
      }}

      onInput$={(e, el) => {
        const div = document.getElementById(`${id}-picker`)!;
        const event = new Event('change');
        div.dispatchEvent(event);
        onInput$?.(el.value);
      }}

      style={preview == 'full' ? {
        backgroundColor: `${value}`,
        color: getBrightness(hexNumberToRgb(hexStringToNumber(value))) > 0.5 ? 'black' : 'white',
      } : preview == 'left' ? {
        borderLeft: `35px solid ${value}`,
      } : preview == 'right' ? {
        borderRight: `35px solid ${value}`,
      } : preview == 'top' ? {
        borderTop: `10px solid ${value}`,
      } : preview == 'bottom' ? {
        borderBottom: `10px solid ${value}`,
      } : {}
      }
      />
      <ColorPicker
        id={id}
        value={value}
        color={props.color}
        colors={colors}
        preview={preview}
        horizontal={horizontal}
        showInput={showInput}
        class={{
          'motion-safe:transition-all absolute top-full mt-2 left-0 gap-1 z-[1000]': true,
          'opacity-0 scale-95 pointer-events-none': !store.opened,
        }}
        onInput$={(color: string) => {
          const el = document.getElementById(id) as HTMLInputElement;
          el.value = color;
          switch (preview) {
          case 'full':
            el.style.backgroundColor = color;
            el.style.color = getBrightness(hexNumberToRgb(hexStringToNumber(color))) > 0.5 ? 'black' : 'white';
            break;
          case 'left':
            el.style.borderLeft = `35px solid ${color}`;
            break;
          case 'right':
            el.style.borderRight = `35px solid ${color}`;
            break;
          case 'top':
            el.style.borderTop = `10px solid ${color}`;
            break;
          case 'bottom':
            el.style.borderBottom = `10px solid ${color}`;
            break;
          }
          onInput$?.(color);
        }}
      />
    </div>
  );
});