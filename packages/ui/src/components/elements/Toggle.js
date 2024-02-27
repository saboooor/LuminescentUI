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
import { component$ } from '@builder.io/qwik';
export const Toggle = component$((_a) => {
    var { center, label } = _a, props = __rest(_a, ["center", "label"]);
    return (_jsxs("div", { class: {
            'flex gap-3 items-center': true,
            'justify-center': center,
        }, children: [_jsxs("label", { class: "inline-flex relative items-center cursor-pointer", children: [_jsx("input", Object.assign({ type: "checkbox" }, props, { class: Object.assign({ 'sr-only peer': true }, props.class) })), _jsx("div", { class: {
                            'transition ease-in-out w-12 h-7 rounded-md peer border hover:shadow-lg': true,
                            'bg-gray-800 border-gray-700 hover:bg-gray-700 active:bg-gray-600': true,
                            'after:content-[\'\'] after:absolute after:top-[4px] after:left-[4px] after:border after:rounded-md after:h-5 after:w-5 after:transition-all after:ease-in-out': true,
                            'after:bg-gray-700 after:border-gray-600 after:hover:bg-gray-600 after:active:bg-gray-500': true,
                            'peer-checked:bg-blue-700 peer-checked:border-blue-600 peer-checked:hover:bg-blue-600 peer-checked:active:bg-blue-500': true,
                            'peer-checked:after:translate-x-full peer-checked:after:bg-blue-600 peer-checked:after:border-blue-500 peer-checked:after:hover:bg-blue-500 peer-checked:after:active:bg-blue-400': true,
                        } })] }), label && _jsx("label", { for: props.id, class: "text-gray-300 flex gap-2", children: label })] }));
});
