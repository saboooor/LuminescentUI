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
import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, Slot } from '@builder.io/qwik';
export const buttonColorClasses = {
    blue: 'bg-blue-600/90 border-blue-500 hover:bg-blue-500 active:bg-blue-400 focus:border-blue-400',
    purple: 'bg-purple-600/90 border-purple-500 hover:bg-purple-500 active:bg-purple-400 focus:border-purple-400',
    pink: 'bg-pink-600/90 border-pink-500 hover:bg-pink-500 active:bg-pink-400 focus:border-pink-400',
    red: 'bg-red-700/90 border-red-600 hover:bg-red-600 active:bg-red-500 focus:border-red-500',
    green: 'bg-green-700/90 border-green-600 hover:bg-green-600 active:bg-green-500 focus:border-green-500',
    yellow: 'bg-yellow-700/90 border-yellow-600 hover:bg-yellow-600 active:bg-yellow-500 focus:border-yellow-500',
    gray: 'bg-gray-700/90 border-gray-600 hover:bg-gray-600 active:bg-gray-500 focus:border-gray-500',
    darkgray: 'bg-gray-800/90 border-gray-700 hover:bg-gray-700 active:bg-gray-600 focus:border-gray-600',
    transparent: 'bg-transparent border-transparent hover:bg-gray-700/30 active:bg-gray-700/40 focus:border-gray-700/40',
};
export const sizeClasses = {
    sm: {
        base: 'text-base rounded-md gap-2',
        pad: 'px-2.5 py-1.5',
        equal: 'p-1.5',
    },
    md: {
        base: 'text-base rounded-md gap-3',
        pad: 'px-4 py-2',
        equal: 'p-2',
    },
    lg: {
        base: 'text-lg rounded-lg gap-3',
        pad: 'px-6 py-3',
        equal: 'p-3',
    },
    xl: {
        base: 'text-lg rounded-xl gap-4',
        pad: 'px-8 py-4',
        equal: 'p-4',
    },
};
const buttonClass = 'relative flex items-center gap-3 transition ease-in-out border text-gray-50 fill-gray-50 disabled:opacity-50 hover:shadow-lg active:scale-95 whitespace-nowrap';
export const Button = component$((_a) => {
    var { color = 'darkgray', size = 'md', square } = _a, props = __rest(_a, ["color", "size", "square"]);
    const colorClass = buttonColorClasses[color];
    const sizeClass = sizeClasses[size];
    props.class = Object.assign({ [buttonClass]: true, [colorClass]: true, [sizeClass.base]: true, [sizeClass.pad]: !square, [sizeClass.equal]: square }, props.class);
    return _jsx("button", Object.assign({}, props, { children: _jsx(Slot, {}) }));
});
export const ButtonAnchor = component$((_a) => {
    var { color = 'darkgray', size = 'md', square } = _a, props = __rest(_a, ["color", "size", "square"]);
    const colorClass = buttonColorClasses[color];
    const sizeClass = sizeClasses[size];
    props.class = Object.assign({ [buttonClass]: true, [colorClass]: true, [sizeClass.base]: true, [sizeClass.pad]: !square, [sizeClass.equal]: square }, props.class);
    return _jsx("a", Object.assign({}, props, { children: _jsx(Slot, {}) }));
});
