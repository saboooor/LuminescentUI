
import type { PropsOf, QRL } from '@builder.io/qwik';
import { $, Slot, component$, useStore } from '@builder.io/qwik';
import type { TextInputRawProps } from './TextInput';
import { TextInputRaw } from './TextInput';
import { getBrightness, hexNumberToRgb, hexStringToNumber, hsvToRgb, rgbToHex, rgbToHsv, clamp, getMousePosition } from '../../utils/simple-color-picker/color';

export interface ColorInputProps extends Omit<TextInputRawProps, 'onInput$' | 'children'> {
  onInput$?: QRL<(color: string) => void>;
  value?: string;
  presetColors?: string[];
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  id: string;
}

export const ColorInput = component$<ColorInputProps>(({ onInput$, value = '#000000', presetColors, preview = 'left', ...props }) => {
  const store = useStore({
    opened: false,
  });

  const { id } = props;

  return (
    <div class="relative">
      <label for={id} class="text-gray-300 pb-1 flex">
        <Slot />
      </label>
      <TextInputRaw {...props} value={value}
        onFocus$={() => {
          store.opened = true;
        }}

        onBlur$={() => {
          store.opened = false;
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
      <ColorPickerRaw
        color={value}
        colors={[
          '#FAEDCB', '#C9E4DE', '#C6DEF1', '#DBCDF0', '#F2C6DE',
          '#FCD05C', '#5FE2C5', '#4498DB', '#9863E7', '#E43A96',
          ...presetColors ?? [],
        ]}
        class={{
          'transition-all absolute top-full mt-2 left-0 gap-1 z-[1000]': true,
          'opacity-0 pointer-events-none scale-95': !store.opened,
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
            el.style.borderLeft = `40px solid ${color}`;
            break;
          case 'right':
            el.style.borderRight = `40px solid ${color}`;
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

export interface ColorPickerProps extends Omit<PropsOf<'div'>, 'class' | 'onInput$'> {
  class: {
    [key: string]: boolean;
  };
  onInput$?: QRL<(color: string) => void>;
  color: string;
  colors: string[];
}

export const ColorPickerRaw = component$<ColorPickerProps>(({ color, colors, onInput$, ...props }) => {
  const height = 150;
  const width = height - 25;
  const maxHue = height - 2;

  const hsvColor = rgbToHsv(hexNumberToRgb(hexStringToNumber(color)));
  const store = useStore({
    hue: {
      position: hsvColor.h * maxHue,
      color: rgbToHex(hsvToRgb({ h: hsvColor.h, s: 1, v: 1 })),
    },
    bPosition: (1 - hsvColor.v) * maxHue,
    sPosition: hsvColor.s * width,
    color: color,
  });

  const setColor = $((color: string) => {
    store.color = color;
    const hsv = rgbToHsv(hexNumberToRgb(hexStringToNumber(color)));
    store.hue.position = hsv.h * maxHue;
    store.hue.color = rgbToHex(hsvToRgb({ h: hsv.h, s: 1, v: 1 }));
    store.sPosition = hsv.s * width;
    store.bPosition = (1 - hsv.v) * maxHue;
    onInput$?.(color);
  });

  const hueChange = $((e: MouseEvent | TouchEvent, hOffset: number) => {
    const { y } = getMousePosition(e);
    store.hue.position = clamp(maxHue - (y - hOffset), 0, maxHue);
    const hsvColor = rgbToHsv(hexNumberToRgb(hexStringToNumber(store.color)));
    const h = store.hue.position / maxHue;
    hsvColor.h = h;
    store.hue.color = rgbToHex(hsvToRgb({ h, s: 1, v: 1 }));
    store.color = rgbToHex(hsvToRgb(hsvColor));
    onInput$?.(store.color);
  });

  const hueMouseDown = $((e: MouseEvent | TouchEvent, el: HTMLDivElement) => {
    const hOffset = el.getBoundingClientRect().top;
    hueChange(e, hOffset);
    const eventListener = (e: MouseEvent | TouchEvent) => hueChange(e, hOffset);
    window.addEventListener('mousemove', eventListener);
    window.addEventListener('touchmove', eventListener);
    const mouseUpListener = () => {
      window.removeEventListener('mousemove', eventListener);
      window.removeEventListener('touchmove', eventListener);
      window.removeEventListener('mouseup', mouseUpListener);
      window.removeEventListener('touchend', mouseUpListener);
    };
    window.addEventListener('mouseup', mouseUpListener);
    window.addEventListener('touchend', mouseUpListener);
  });

  const sbChange = $((e: MouseEvent | TouchEvent, hOffset: DOMRect) => {
    const { x, y } = getMousePosition(e);
    store.bPosition = clamp(y - hOffset.top, 0, maxHue);
    store.sPosition = clamp(x - hOffset.left, 0, width);
    const s = store.sPosition / width;
    const v = 1 - store.bPosition / maxHue;
    store.color = rgbToHex(hsvToRgb({
      h: store.hue.position / maxHue,
      s,
      v,
    }));
    onInput$?.(store.color);
  });

  const sbMouseDown = $((e: MouseEvent | TouchEvent, el: HTMLDivElement) => {
    const offset = el.getBoundingClientRect();
    sbChange(e, offset);
    const eventListener = (e: MouseEvent | TouchEvent) => sbChange(e, offset);
    window.addEventListener('mousemove', eventListener);
    window.addEventListener('touchmove', eventListener);
    const mouseUpListener = () => {
      window.removeEventListener('mousemove', eventListener);
      window.removeEventListener('touchmove', eventListener);
      window.removeEventListener('mouseup', mouseUpListener);
      window.removeEventListener('touchend', mouseUpListener);
    };
    window.addEventListener('mouseup', mouseUpListener);
    window.addEventListener('touchend', mouseUpListener);
  });

  return (
    <div class={{
      'transition-all p-4 gap-4 bg-gray-800/50 backdrop-blur-xl flex rounded-lg border border-gray-700 touch-none': true,
      ...props.class,
    }}
    preventdefault:mousedown
    preventdefault:touchstart>
      <div class="w-[125px] h-[150px] border border-gray-700 rounded-md relative"
        style={{
          background: `linear-gradient(to right, #FFFFFF, ${store.hue.color})`,
        }}
        onMouseDown$={sbMouseDown}
        onTouchStart$={sbMouseDown}
        preventdefault:mousedown
        preventdefault:touchstart
      >
        <div class="w-[125px] h-[150px] border border-gray-700 rounded-md bg-gradient-to-b from-transparent to-black"/>
        <div class="absolute -top-2 -left-2 w-4 h-4 border border-white rounded-full bg-white"
          style={{
            background: store.color,
            transform: `translate(${store.sPosition}px, ${store.bPosition}px)`,
          }}/>
      </div>
      <div class="h-[150px] relative w-2 border border-gray-700 rounded-md"
        style={{
          background: 'linear-gradient(to bottom, #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000)',
        }}
        onMouseDown$={hueMouseDown}
        onTouchStart$={hueMouseDown}
        preventdefault:mousedown
        preventdefault:touchstart
      >
        <div class="absolute -bottom-2 -left-[5px] w-4 h-4 border border-white rounded-full bg-[#ff0000]"
          style={{
            transform: `translateY(${-store.hue.position}px)`,
            background: store.hue.color,
          }}/>
      </div>
      <div class="h-[150px] flex flex-col flex-wrap gap-1 justify-evenly">
        {colors.map((color, i) => {
          return (
            <button key={i} class="w-[25px] h-[25px] border border-gray-700 rounded-md hover:scale-110 transition-all"
              style={`background: ${color}`}
              onMouseDown$={() => {
                setColor(color);
              }}
              onTouchStart$={() => {
                setColor(color);
              }}
              preventdefault:mousedown
              preventdefault:touchstart
            ></button>
          );
        })}
      </div>
    </div>
  );
});