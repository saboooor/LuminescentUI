
import type { PropsOf, QRL } from '@builder.io/qwik';
import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import ColorPicker from 'simple-color-picker';
import { TextInputRaw } from './TextInput';
import { isServer } from '@builder.io/qwik/build';

// COLOR INPUT
// ====================
// This element requires the parent element to have position: relative.
// This is because the color picker is absolutely positioned.
// ====================

interface ColorInputProps extends Omit<(PropsOf<'input'> & { type: 'text' }), 'class'> {
  onInput: QRL;
  value: string;
}

export const ColorInput = component$<ColorInputProps>(({ onInput, id, value, ...props }) => {
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

  return (
    <div>
      <label for={id} class="mb-2 flex">
        <Slot />
      </label>
      <TextInputRaw {...props}
        onFocus$={(event) => {
          const pickerDiv = document.getElementById(`${id}-color-picker`)!;

          if (!pickerDiv.children.length) {
            if (isServer) return;
            const textinput = event.target as HTMLInputElement;
            const picker = new ColorPicker({
              el: pickerDiv,
              color: value,
              background: '#1D1D1D',
              width: 150,
              height: 150,
            });
            picker.onChange((color: string) => {
              textinput.value = color;
              onInput(color);
            });
            textinput.addEventListener('input', () => {
              picker.setColor(textinput.value);
            });
          }

          pickerDiv.style.display = 'block';
        }}
        onBlur$={() => {
          const pickerDiv = document.getElementById(`${id}-color-picker`)!;
          pickerDiv.style.display = 'none';
        }}
        style={{
          borderLeft: `40px solid ${value}`,
          width: '100%',
        }}
      />
      <div id={`${id}-color-picker`} class="hidden absolute mt-2" />
    </div>
  );
});