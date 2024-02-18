
import type { QRL } from '@builder.io/qwik';
import { component$, useStore, useStyles$ } from '@builder.io/qwik';
import ColorPicker from 'simple-color-picker';
import type { TextInputRawProps } from './TextInput';
import { TextInputRaw } from './TextInput';
import { isServer } from '@builder.io/qwik/build';

// COLOR INPUT
// ====================
// This element requires the parent element to have position: relative.
// This is because the color picker is absolutely positioned.
// ====================

interface ColorInputProps extends Omit<TextInputRawProps, 'onInput$'> {
  onInput$?: QRL<(color: string, element: HTMLInputElement) => void>;
  value?: string;
  label?: string;
}

export const ColorInput = component$<ColorInputProps>(({ onInput$, value = '#FFFFFF', ...props }) => {
  useStyles$(`
    .Scp {
      display: flex;
      height: 170px !important;
      width: 170px !important;
      padding: 10px !important;
      border-radius: 0.375rem;
      border: hsl(0, 27%, 76%);
      border-width: 1px;
    }
  `);

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
              background: '#1D1D1D',
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