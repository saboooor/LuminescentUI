
import type { QRL } from '@builder.io/qwik';
import { component$, useStore } from '@builder.io/qwik';
import type { TextInputRawProps } from './TextInput';
import { TextInputRaw } from './TextInput';
import { isServer } from '@builder.io/qwik/build';
import { ColorPicker } from '../../utils/simple-color-picker';

// COLOR INPUT
// ====================
// This element requires the parent element to have position: relative.
// This is because the color picker is absolutely positioned.
// ====================

interface ColorInputProps extends Omit<TextInputRawProps, 'onInput$'> {
  onInput$?: QRL<(color: string, element: HTMLInputElement) => void>;
  value?: string;
  label?: string;
  presetColors?: string[];
}

export const ColorInput = component$<ColorInputProps>(({ onInput$, value = '#FFFFFF', presetColors, ...props }) => {
  const { id } = props;

  const store = useStore({
    value: value || '#FFFFFF',
  });

  return (
    <div>
      {props.label &&
        <label for={id} class="mb-2 flex">
          {props.label}
        </label>
      }
      <TextInputRaw {...props} value={store.value}
        onFocus$={(event, element) => {
          const pickerDiv = document.getElementById(`${id}-color-picker`)!;

          if (!pickerDiv.children.length) {
            if (isServer) return;
            const picker = new ColorPicker({
              el: pickerDiv,
              color: store.value,
              colors: presetColors,
              width: 150,
              height: 150,
            });
            picker.onChange((color: string) => {
              store.value = color;
              if (onInput$) onInput$(color, element);
            });
            element.addEventListener('input', () => {
              if (!/^#[0-9A-F]{6}$/i.test(element.value)) return;
              picker.setColor(element.value);
            });
          }

          pickerDiv.style.display = 'block';
        }}
        onBlur$={() => {
          const pickerDiv = document.getElementById(`${id}-color-picker`)!;
          pickerDiv.style.display = 'none';
        }}
        style={{
          borderLeft: `40px solid ${store.value}`,
        }}
      />
      <div id={`${id}-color-picker`} class="hidden absolute mt-2" />
    </div>
  );
});