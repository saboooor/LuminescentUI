
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

export const ColorInput = component$<ColorInputProps>(({ onInput$, value = '#000000', color, colors, preview = 'left', horizontal, class: Class, showInput = false, ...props }) => {
  const store = useStore({
    opened: false,
  });

  const { id } = props;

  return (
    <div class="relative">
      <label for={id} class="text-gray-300 pb-1 flex select-none">
        <Slot />
      </label>
      <div class={{
        'flex': true,
        'flex-row gap-1': preview == 'left',
        'flex-row-reverse gap-1': preview == 'right',
        'flex-col': preview == 'top',
        'flex-col-reverse': preview == 'bottom',
      }}>
        {preview != 'full' &&
          <div id={`${id}-preview`} class={{
            'border border-gray-700': true,
            'w-9 rounded-md': preview == 'left' || preview == 'right',
            'w-full h-3': preview == 'top' || preview == 'bottom',
            'rounded-t-md': preview == 'top',
            'rounded-b-md': preview == 'bottom',
          }} style={{
            backgroundColor: `${value}`,
          }}>
          </div>
        }
        <TextInputRaw class={{
          'border-t-0 rounded-t-none': preview == 'top',
          'border-b-0 rounded-b-none': preview == 'bottom',
          ...Class,
        }} {...props} value={value} color={color}
        onFocus$={() => {
          const abortController = new AbortController();
          document.addEventListener('click', (e) => {
            if (e.target instanceof HTMLElement && !e.target.closest(`#${id}-popup`) && !e.target.closest(`#${id}`)) {
              store.opened = false;
              abortController.abort();
            }
          }, { signal: abortController.signal });
          store.opened = true;
        }}

        onInput$={(e, el) => {
          const div = document.getElementById(`${id}-popup`)!;
          div.dataset.value = el.value;
          div.dispatchEvent(new Event('input'));
        }}
        style={preview == 'full' ? {
          backgroundColor: `${value}`,
          color: getBrightness(hexNumberToRgb(hexStringToNumber(value))) > 0.5 ? 'black' : 'white',
        } : {}}/>
      </div>
      <ColorPicker
        id={`${id}-popup`}
        value={value}
        color={color}
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
          const previewel = document.getElementById(`${id}-preview`) as HTMLDivElement;
          el.value = color;
          if (preview == 'full') {
            el.style.backgroundColor = color;
            el.style.color = getBrightness(hexNumberToRgb(hexStringToNumber(color))) > 0.5 ? 'black' : 'white';
          } else {
            previewel.style.backgroundColor = color;
          }
          onInput$?.(color);
        }}
      />
    </div>
  );
});