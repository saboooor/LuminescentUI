import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
import { component$ } from '@builder.io/qwik';
export const LogoWaterfall = component$((props) => {
    return (_jsx("svg", Object.assign({ viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, props, { height: props.width, children: _jsx("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }) })));
});
