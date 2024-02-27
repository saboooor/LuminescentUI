import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@builder.io/qwik/jsx-runtime";
import { Slot, component$ } from '@builder.io/qwik';
import { LoadingIcon } from './LoadingIcon';
import { Anchor } from './Anchor';
export const Header = component$(({ id, loading, subheader }) => {
    let Component = _jsx(_Fragment, { children: _jsxs("h2", { class: "flex gap-2 flex-1 items-center font-bold text-2xl whitespace-nowrap", children: [_jsx(Slot, {}), id && _jsx(Anchor, { id: id })] }) });
    if (subheader) {
        Component = (_jsxs("div", { class: "flex flex-1 flex-col gap-1", children: [Component, _jsx("h3", { class: "flex items-center text-gray-400 text-sm", children: subheader })] }));
    }
    if (loading !== undefined) {
        Component = (_jsxs("div", { class: "flex", children: [Component, _jsx("div", { class: {
                        'transition-all duration-200': true,
                        'opacity-0': !loading,
                        'opacity-100': loading,
                    }, children: _jsx(LoadingIcon, { width: 24 }) })] }));
    }
    return Component;
});
