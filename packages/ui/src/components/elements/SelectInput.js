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
import { component$, Slot, useStore, useStyles$ } from '@builder.io/qwik';
import { Button } from './Button';
import { ChevronDown } from '../../svg/ChevronDown';
export const SelectInput = component$((props) => {
    return (_jsxs("div", { class: "flex flex-col", children: [_jsx("label", { for: props.id, class: "text-gray-300 pb-1", children: _jsx(Slot, {}) }), _jsx(SelectInputRaw, Object.assign({}, props))] }));
});
export const SelectInputRaw = component$((_a) => {
    var _b, _c;
    var { id, values, class: Class } = _a, props = __rest(_a, ["id", "values", "class"]);
    const store = useStore({
        opened: false,
    });
    useStyles$(`
    .lui-scroll {
      scroll-behavior: smooth;
    }
    .lui-scroll::-webkit-scrollbar {
      appearance: none;
      -webkit-appearance: none;
      width: 8px;
      height: 8px;
    }
    .lui-scroll::-webkit-scrollbar-track {
      background-color: transparent;
    }
    .lui-scroll::-webkit-scrollbar-thumb {
      background-color: #ffffff20;
      border: 1px solid #ffffff20;
      border-radius: 3px;
    }
    .lui-scroll::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  `);
    return (_jsxs("div", { class: "relative", children: [_jsx("select", Object.assign({}, props, { id: id, class: {
                    'hidden': true,
                }, children: values.map((value, i) => {
                    return _jsx("option", { value: value.value, children: value.name }, i);
                }) })), _jsxs(Button, { size: "sm", class: Object.assign({ 'flex focus:bg-gray-700': true }, Class), "onClick$": () => {
                    store.opened = !store.opened;
                }, children: [_jsx("span", { id: `lui-${id}-name`, class: "flex-1 text-left", children: (_c = (_b = values.find((value) => value.value.toString() === props.value)) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : values[0].name }), _jsx(ChevronDown, { width: 16, class: {
                            'transition-all duration-200': true,
                            'transform rotate-180': store.opened,
                        } })] }), _jsx("div", { id: `lui-${id}-opts`, class: {
                    'transition-all absolute top-full left-0 p-1 mt-2 gap-1 bg-gray-800/50 backdrop-blur-xl flex flex-col rounded-lg border border-gray-700 z-[1000] max-h-72 lui-scroll overflow-auto select-none': true,
                    'pointer-events-none opacity-0 scale-95': !store.opened,
                }, children: values.map((value, i) => {
                    return (_jsx(Button, { "onClick$": () => {
                            store.opened = false;
                            const select = document.getElementById(id);
                            select.value = value.value.toString();
                            const name = document.getElementById(`lui-${id}-name`);
                            name.textContent = value.name;
                            select.dispatchEvent(new Event('change'));
                        }, class: {
                            'border-0 bg-transparent': true,
                            'opacity-0': !store.opened,
                        }, children: value.name }, i));
                }) })] }));
});
