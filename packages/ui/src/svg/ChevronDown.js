import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
import { component$ } from '@builder.io/qwik';
export const ChevronDown = component$((props) => {
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, props, { height: props.width, children: _jsx("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "48", d: "M112 184l144 144 144-144" }) })));
});
