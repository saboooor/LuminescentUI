import { jsx as _jsx, jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { Slot, component$ } from '@builder.io/qwik';
import { Button } from './Button';
export const NavContainer = component$(({ floating }) => {
    return (_jsxs("nav", { class: {
            'transition-all duration-200 flex flex-col fixed top-0 left-0 w-full z-50': true,
            'bg-gray-800/50 backdrop-blur-lg drop-shadow-xl': !floating,
        }, children: [_jsxs("div", { class: {
                    'flex justify-evenly w-full mx-auto px-4 py-2 max-w-7xl': true,
                    'bg-gray-800/50 backdrop-blur-lg drop-shadow-xl mt-3 rounded-lg': floating,
                }, children: [_jsx("div", { class: "flex flex-1 gap-2 justify-start", children: _jsx(Slot, { name: "start" }) }), _jsx("div", { class: "flex flex-1 gap-2 justify-center", children: _jsx(Slot, { name: "center" }) }), _jsxs("div", { class: "flex flex-1 gap-2 justify-end", children: [_jsx(Slot, { name: "end" }), _jsx(Button, { color: "transparent", square: true, children: _jsx("svg", { class: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M4 6h16M4 12h16m-7 6h7" }) }) })] })] }), _jsxs("div", { class: {
                    'flex justify-evenly w-full mx-auto px-4 py-2 max-w-7xl': true,
                    'bg-gray-800/50 backdrop-blur-lg drop-shadow-xl mt-3 rounded-lg': floating,
                }, children: [_jsx(Slot, { name: "mobile" }), "Hello mobile"] })] }));
});
