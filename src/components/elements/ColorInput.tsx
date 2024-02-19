
import type { QRL } from '@builder.io/qwik';
import { component$, useStore, useStyles$ } from '@builder.io/qwik';
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
  useStyles$(`
    .color-picker {
      display: flex;
      gap: 12px;
      height: 185px !important;
      width: 100% !important;
      padding: 15px;
      border-radius: 10px;
      border: 1px solid rgb(31 41 55);
      filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
      background: rgba(31 41 55 / 40%);
      backdrop-filter: blur(10px);
      user-select: none;
      position: relative;
    }

    .color-picker-saturation {
      position: relative;
      height: 100%;
      width: 100%;
      background: linear-gradient(to right, #FFFFFF, #FF0000);
      float: left;
      border-radius: 5px;
      border: 1px solid rgb(31 41 55);
    }

    .color-picker-brightness {
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
    }

    .color-picker-sbSelector {
      border: 1px solid white;
      position: absolute;
      width: 14px;
      height: 14px;
      background: white;
      border-radius: 10px;
      top: -7px;
      left: -7px;
      box-sizing: border-box;
      z-index: 10;
    }

    .color-picker-hue {
      width: 8px;
      border-radius: 5px;
      height: 100%;
      position: relative;
      float: left;
      background: linear-gradient(rgb(255, 0, 0) 0%, rgb(255, 0, 255) 17%, rgb(0, 0, 255) 34%, rgb(0, 255, 255) 50%, rgb(0, 255, 0) 67%, rgb(255, 255, 0) 84%, rgb(255, 0, 0) 100%);
      border: 1px solid rgb(31 41 55);
    }

    .color-picker-colors {
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5px;
      float: left;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }

    .color-picker-color {
      height: 25px;
      width: 25px;
      border-radius: 5px;
      position: relative;
      background: red;
      border: 1px solid rgb(31 41 55);
    }

    .color-picker-hSelector {
      border: 1px solid white;
      position: absolute;
      width: 14px;
      height: 14px;
      background: white;
      border-radius: 10px;
      top: -6px;
      left: -4px;
      box-sizing: border-box;
      z-index: 10;
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