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
import { component$ } from '@builder.io/qwik';
export const LoadingIcon = component$((_a) => {
    var { width, speed = '0.6s' } = _a, props = __rest(_a, ["width", "speed"]);
    return (_jsx("div", Object.assign({}, props, { style: {
            borderWidth: width / 8,
            width, height: width,
            animation: `spin ${speed} ease-in-out infinite`,
        }, class: Object.assign({ 'animate-spin rounded-full border-transparent border-l-current border-t-current': true }, props.class) })));
});
