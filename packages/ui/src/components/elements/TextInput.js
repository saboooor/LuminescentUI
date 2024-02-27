import { jsx as _jsx, jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { Slot, component$ } from '@builder.io/qwik';
export const InputClasses = 'transition ease-in-out border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:outline-none focus:border-gray-400 rounded-md px-2.5 py-1.5';
export const TextInput = component$((props) => {
    return (_jsxs("div", { class: "flex flex-col", children: [_jsx("label", { for: props.id, class: "text-gray-300 pb-1", children: _jsx(Slot, {}) }), _jsx(TextInputRaw, Object.assign({}, props, { children: undefined }))] }));
});
export const TextInputRaw = component$((props) => {
    return (_jsx("input", Object.assign({}, props, { class: Object.assign({ [InputClasses]: true }, props.class) })));
});
