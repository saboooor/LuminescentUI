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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@builder.io/qwik/jsx-runtime";
import { $, Slot, component$ } from '@builder.io/qwik';
import { InputClasses } from './TextInput';
export const TextArea = component$((props) => {
    return (_jsxs("div", { class: "flex flex-col", children: [_jsx("label", { for: props.id, class: "text-gray-300 pb-1", children: _jsx(Slot, {}) }), _jsx(TextAreaRaw, Object.assign({}, props))] }));
});
export const TextAreaRaw = component$((_a) => {
    var { output } = _a, props = __rest(_a, ["output"]);
    return _jsx(_Fragment, { children: _jsx("textarea", Object.assign({}, props, { class: Object.assign({ [InputClasses]: true, 'h-32': true, 'cursor-pointer active:bg-gray-600': output }, props.class), "onClick$": output ? $((event, element) => {
                navigator.clipboard.writeText(element.value);
                const notification = document.createElement('div');
                notification.className = 'fixed bottom-0 right-0 px-6 py-4 m-6 bg-green-600/50 border border-green-500 text-gray-50 rounded-md shadow-lg whitespace-nowrap backdrop-blur-xl';
                notification.innerText = 'Copied to clipboard!';
                document.body.appendChild(notification);
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }) : undefined, readOnly: output })) });
});
