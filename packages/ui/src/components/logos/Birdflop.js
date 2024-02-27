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
export const LogoBirdflop = component$((_a) => {
    var { confused, fillGradient } = _a, props = __rest(_a, ["confused", "fillGradient"]);
    return (_jsxs("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 1080 1080" }, props, { height: props.width, children: [_jsxs("defs", { children: [fillGradient &&
                        _jsx("linearGradient", { id: "linear-gradient", x1: "0.5", x2: "0.5", y2: "1", gradientUnits: "objectBoundingBox", children: fillGradient.map((color, i) => (_jsx("stop", { offset: i / (fillGradient.length - 1), "stop-color": color }, i))) }), _jsx("clipPath", { id: "clip-bf_3", children: _jsx("rect", { width: "1080", height: "1080" }) })] }), _jsx("g", { id: "bf_3", "data-name": "bf - 3", "clip-path": "url(#clip-bf_3)", fill: "currentColor", children: _jsx("path", { id: "Union_26", "data-name": "Union 26", d: "M-1886.608-89.36c-8.311-65.774-27.64-219.008-27.64-221.333a.279.279,0,0,1,.09-.159q-.474-4.88-.477-9.885A101.066,101.066,0,0,1-1813.61-421.844a100.671,100.671,0,0,1,71.913,30.1l.093-.042c-.077-.093-8.783-10.549-22.7-24.758-8.216-8.388-16.645-16.459-25.052-23.993-10.51-9.417-21.018-18.013-31.23-25.552a120.5,120.5,0,0,0-40.468-71.567,119.916,119.916,0,0,0-77.984-28.881c-66.215,0-120.083,53.941-120.083,120.244h-.237v116.01h-.24c-.131,132.971-107.6,240.728-240.16,240.728V-330.289H-2300V-449.818h.362V-931.536h0V-1170c132.71,0,240.293,106.764,240.293,238.464v145.112a358.089,358.089,0,0,1,47.7-13.28,362.475,362.475,0,0,1,72.6-7.329,362.455,362.455,0,0,1,72.6,7.329,358.112,358.112,0,0,1,67.622,21.02,360.042,360.042,0,0,1,61.191,33.26,362.833,362.833,0,0,1,53.315,44.049,363.178,363.178,0,0,1,43.99,53.387,360.83,360.83,0,0,1,33.213,61.276A359.3,359.3,0,0,1-1586.118-519a363.948,363.948,0,0,1,7.317,72.7,363.957,363.957,0,0,1-7.317,72.7,359.333,359.333,0,0,1-20.992,67.714,360.95,360.95,0,0,1-33.213,61.277,363.233,363.233,0,0,1-43.99,53.388,362.833,362.833,0,0,1-53.315,44.049,360.017,360.017,0,0,1-61.191,33.259,358.108,358.108,0,0,1-67.622,21.02c-6.636,1.36-13.421,2.548-20.165,3.532Zm-79.831-365.056a27.049,27.049,0,0,1,27.038-27.059,27.048,27.048,0,0,1,27.037,27.059,27.049,27.049,0,0,1-27.037,27.06A27.05,27.05,0,0,1-1966.439-454.416Z", transform: "translate(2479.9 1169.7)", fill: fillGradient ? 'url(#linear-gradient)' : '' }) }), confused &&
                _jsxs("g", { style: "transform: translate(595px, 460px) scale(0.375)", stroke: "#1E2837", fill: "#1E2837", children: [_jsx("path", { d: "M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324", fill: "none", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "80" }), _jsx("circle", { cx: "248", cy: "399.99", r: "40", style: "transform: translate(0, 30px)" })] })] })));
});
