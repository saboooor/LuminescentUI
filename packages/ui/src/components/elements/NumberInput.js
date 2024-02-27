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
import { $, Slot, component$, useStyles$ } from '@builder.io/qwik';
import { Plus } from '../../svg/Plus';
import { Minus } from '../../svg/Minus';
import { InputClasses } from './TextInput';
import { Button } from './Button';
export const NumberInput = component$((props) => {
    return (_jsxs("div", { class: "flex flex-col", children: [_jsx("label", { for: props.id, class: "text-gray-300 pb-1", children: _jsx(Slot, {}) }), _jsx(NumberInputRaw, Object.assign({}, props, { children: undefined }))] }));
});
export const NumberInputRaw = component$((_a) => {
    var { input, onDecrement$, onIncrement$, value = 0, step = 1 } = _a, props = __rest(_a, ["input", "onDecrement$", "onIncrement$", "value", "step"]);
    useStyles$(`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
  `);
    return (_jsxs("div", { class: {
            'flex text-gray-50': true,
            'gap-2': !input,
        }, children: [_jsx(Button, { size: "sm", color: input ? 'gray' : 'darkgray', "data-action": "decrement", "aria-label": "Decrement", disabled: props.min ? value <= props.min : false, "onClick$": input ? $((event, element) => {
                    const siblingInput = element.nextElementSibling;
                    siblingInput.stepDown();
                    onDecrement$(event, element, siblingInput);
                }) : onDecrement$, class: {
                    'mr-2': input,
                }, children: _jsx(Minus, { width: "24", class: "fill-current" }) }), input &&
                _jsx("input", Object.assign({}, props, { type: "number", value: value, step: step, class: Object.assign({ [InputClasses]: true, 'text-center': true }, props.class) })), _jsx(Button, { size: "sm", color: input ? 'gray' : 'darkgray', "data-action": "increment", "aria-label": "Increment", disabled: props.max ? value >= props.max : false, "onClick$": input ? $((event, element) => {
                    const siblingInput = element.previousElementSibling;
                    siblingInput.stepUp();
                    onIncrement$(event, element, siblingInput);
                }) : onIncrement$, class: {
                    'ml-2': input,
                }, children: _jsx(Plus, { width: "24", class: "fill-current" }) })] }));
});
