
import type { QRL } from '@builder.io/qwik';
import { Slot, component$, useStyles$ } from '@builder.io/qwik';
import type { TextInputRawProps } from './TextInput';
import { TextInputRaw } from './TextInput';
import { isServer } from '@builder.io/qwik/build';
import { ColorPicker } from '../../utils/simple-color-picker';
import { getBrightness, hexNumberToRgb, hexStringToNumber } from '../../utils/simple-color-picker/color';

// COLOR INPUT
// ====================
// This element requires the parent element to have position: relative.
// This is because the color picker is absolutely positioned.
// ====================

export interface ColorInputProps extends Omit<TextInputRawProps, 'onInput$' | 'children'> {
  onInput$?: QRL<(color: string, element: HTMLInputElement) => void>;
  value?: string;
  presetColors?: string[];
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
}

export const ColorInput = component$<ColorInputProps>(({ onInput$, value = '#000000', presetColors, preview = 'left', ...props }) => {
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
      z-index: 1000;
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
      transition: all 0.2s;
      height: 25px;
      width: 25px;
      border-radius: 5px;
      position: relative;
      background: red;
      border: 1px solid rgb(31 41 55);
      cursor: pointer;
    }

    .color-picker-color:hover {
      border: 1px solid white;
      transform: scale(1.1);
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
    }
  `);

  const { id } = props;

  return (
    <div>
      <label for={id} class="text-gray-300 pb-1 flex">
        <Slot />
      </label>
      <TextInputRaw {...props} value={value}
        onFocus$={(event, element) => {
          const pickerDiv = document.getElementById(`${id}-color-picker`)!;

          if (!pickerDiv.children.length) {
            if (isServer) return;
            const picker = new ColorPicker({
              el: pickerDiv,
              color: value,
              colors: ['#FAEDCB', '#C9E4DE', '#C6DEF1', '#DBCDF0', '#F2C6DE',
              '#FCD05C', '#5FE2C5', '#4498DB', '#9863E7', '#E43A96', ...presetColors ?? []],
              width: 150,
              height: 150,
            });
            picker.onChange((color: string) => {
              element.value = color;
              switch (preview) {
              case 'full':
                element.style.backgroundColor = color;
                element.style.color = getBrightness(hexNumberToRgb(hexStringToNumber(color))) > 0.5 ? 'black' : 'white';
                break;
              case 'left':
                element.style.borderLeft = `40px solid ${color}`;
                break;
              case 'right':
                element.style.borderRight = `40px solid ${color}`;
                break;
              case 'top':
                element.style.borderTop = `10px solid ${color}`;
                break;
              case 'bottom':
                element.style.borderBottom = `10px solid ${color}`;
                break;
              }
              if (onInput$) onInput$(color, element);
            });

            // do not touch, use picker.onChange instead
            element.addEventListener('input', () => picker.setColor(element.value));
          }

          pickerDiv.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
        }}

        onBlur$={(event, element) => {
          console.log(event);
          const pickerDiv = document.getElementById(`${id}-color-picker`)!;
          pickerDiv.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
        }}

        style={preview == 'full' ? {
          backgroundColor: `${value}`,
          color: getBrightness(hexNumberToRgb(hexStringToNumber(value))) > 0.5 ? 'black' : 'white',
        } : preview == 'left' ? {
          borderLeft: `40px solid ${value}`,
        } : preview == 'right' ? {
          borderRight: `40px solid ${value}`,
        } : preview == 'top' ? {
          borderTop: `10px solid ${value}`,
        } : preview == 'bottom' ? {
          borderBottom: `10px solid ${value}`,
        } : {}
        }
      />
      <div id={`${id}-color-picker`} class="absolute mt-2 opacity-0 transition-all pointer-events-none scale-95"></div>
    </div>
  );
});