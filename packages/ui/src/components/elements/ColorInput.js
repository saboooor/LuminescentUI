var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { $, Slot, component$, useOn, useStore } from '@builder.io/qwik';
import { TextInputRaw } from './TextInput';
import { getBrightness, hexNumberToRgb, hexStringToNumber, hsvToRgb, rgbToHex, rgbToHsv, clamp, getMousePosition } from '../../utils/simple-color-picker/color';
export const ColorInput = component$((_a) => {
    var { onInput$, value = '#000000', presetColors, preview = 'left' } = _a, props = __rest(_a, ["onInput$", "value", "presetColors", "preview"]);
    const store = useStore({
        opened: false,
    });
    const { id } = props;
    return (_jsxs("div", { class: "relative", children: [_jsx("label", { for: id, class: "text-gray-300 pb-1 flex", children: _jsx(Slot, {}) }), _jsx(TextInputRaw, Object.assign({}, props, { value: value, "onFocus$": () => {
                    store.opened = true;
                }, "onBlur$": () => {
                    store.opened = false;
                }, "onInput$": (e, el) => {
                    const div = document.getElementById(`${id}-picker`);
                    const event = new Event('change');
                    div.dispatchEvent(event);
                    onInput$ === null || onInput$ === void 0 ? void 0 : onInput$(el.value);
                }, style: preview == 'full' ? {
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
                } : {} })), _jsx(ColorPickerRaw, { id: id, color: value, colors: [
                    '#FAEDCB', '#C9E4DE', '#C6DEF1', '#DBCDF0', '#F2C6DE',
                    '#FCD05C', '#5FE2C5', '#4498DB', '#9863E7', '#E43A96',
                    ...presetColors !== null && presetColors !== void 0 ? presetColors : [],
                ], class: {
                    'transition-all absolute top-full mt-2 left-0 gap-1 z-[1000]': true,
                    'opacity-0 pointer-events-none scale-95': !store.opened,
                }, "onInput$": (color) => {
                    const el = document.getElementById(id);
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
                    onInput$ === null || onInput$ === void 0 ? void 0 : onInput$(color);
                } })] }));
});
export const ColorPickerRaw = component$((_a) => {
    var { id, color, colors, onInput$ } = _a, props = __rest(_a, ["id", "color", "colors", "onInput$"]);
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
    const setColor = $((color) => {
        store.color = color;
        const hsv = rgbToHsv(hexNumberToRgb(hexStringToNumber(color)));
        store.hue.position = hsv.h * maxHue;
        store.hue.color = rgbToHex(hsvToRgb({ h: hsv.h, s: 1, v: 1 }));
        store.sPosition = hsv.s * width;
        store.bPosition = (1 - hsv.v) * maxHue;
        onInput$ === null || onInput$ === void 0 ? void 0 : onInput$(color);
    });
    const hueChange = $((e, hOffset) => {
        const { y } = getMousePosition(e);
        store.hue.position = clamp(maxHue - (y - hOffset), 0, maxHue);
        const hsvColor = rgbToHsv(hexNumberToRgb(hexStringToNumber(store.color)));
        const h = store.hue.position / maxHue;
        hsvColor.h = h;
        store.hue.color = rgbToHex(hsvToRgb({ h, s: 1, v: 1 }));
        store.color = rgbToHex(hsvToRgb(hsvColor));
        onInput$ === null || onInput$ === void 0 ? void 0 : onInput$(store.color);
    });
    const hueMouseDown = $((e, el) => {
        const hOffset = el.getBoundingClientRect().top;
        hueChange(e, hOffset);
        const eventListener = (e) => hueChange(e, hOffset);
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
    const sbChange = $((e, hOffset) => {
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
        onInput$ === null || onInput$ === void 0 ? void 0 : onInput$(store.color);
    });
    const sbMouseDown = $((e, el) => {
        const offset = el.getBoundingClientRect();
        sbChange(e, offset);
        const eventListener = (e) => sbChange(e, offset);
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
    useOn('change', $(() => {
        if (!id)
            return;
        const inputElement = document.getElementById(id);
        if (!inputElement)
            return;
        setColor(inputElement.value);
    }));
    return (_jsxs("div", { class: Object.assign({ 'transition-all p-4 bg-gray-800/50 backdrop-blur-xl flex flex-col gap-6 rounded-lg border border-gray-700 touch-none': true }, props.class), "preventdefault:mousedown": true, "preventdefault:touchstart": true, id: id ? `${id}-picker` : undefined, children: [_jsxs("div", { class: "flex gap-4", children: [_jsxs("div", { class: "w-[125px] h-[150px] border border-gray-700 rounded-md relative", style: {
                            background: `linear-gradient(to right, #FFFFFF, ${store.hue.color})`,
                        }, "onMouseDown$": sbMouseDown, "onTouchStart$": sbMouseDown, "preventdefault:mousedown": true, "preventdefault:touchstart": true, children: [_jsx("div", { class: "w-[125px] h-[150px] border border-gray-700 rounded-md bg-gradient-to-b from-transparent to-black" }), _jsx("div", { class: "absolute -top-2 -left-2 w-4 h-4 border border-white rounded-full bg-white", style: {
                                    background: store.color,
                                    transform: `translate(${store.sPosition}px, ${store.bPosition}px)`,
                                } })] }), _jsx("div", { class: "h-[150px] relative w-2 border border-gray-700 rounded-md", style: {
                            background: 'linear-gradient(to bottom, #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000)',
                        }, "onMouseDown$": hueMouseDown, "onTouchStart$": hueMouseDown, "preventdefault:mousedown": true, "preventdefault:touchstart": true, children: _jsx("div", { class: "absolute -bottom-2 -left-[5px] w-4 h-4 border border-white rounded-full bg-[#ff0000]", style: {
                                transform: `translateY(${-store.hue.position}px)`,
                                background: store.hue.color,
                            } }) })] }), _jsx("div", { class: "w-[150px] flex flex-wrap gap-1 justify-evenly", children: colors.map((color, i) => {
                    return (_jsx("button", { class: "w-[25px] h-[25px] border border-gray-700 rounded-md hover:scale-110 transition-all", style: `background: ${color}`, "onMouseDown$": () => {
                            setColor(color);
                        }, "onTouchStart$": () => {
                            setColor(color);
                        }, "preventdefault:mousedown": true, "preventdefault:touchstart": true }, i));
                }) })] }));
});
