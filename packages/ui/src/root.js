import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@builder.io/qwik/jsx-runtime";
import { component$, useStore } from '@builder.io/qwik';
import { Button, ButtonAnchor, Card, ColorInput, Header, LoadingIcon, NavContainer, NumberInput, SelectInput, TextArea, TextAreaRaw, TextInput, Toggle, buttonColorClasses, cardColorClasses, sizeClasses } from './components/elements';
import { LogoBirdflop, LogoDiscord, LogoFabric, LogoForge, LogoLuminescent, LogoLuminescentFull, LogoPaper, LogoPterodactyl, LogoPurpur, LogoVelocity, LogoWaterfall } from './components/logos';
import './global.css';
export default component$(() => {
    var _a, _b, _c;
    const store = useStore({
        button: {},
        card: {},
        colorinput: {},
        nav: {},
        numberinput: {},
        selectinput: {},
        textarea: {},
        toggle: {},
    });
    return (_jsxs(_Fragment, { children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("title", { children: "Luminescent UI" })] }), _jsxs("body", { class: "bg-gray-950 text-gray-200 max-w-6xl mx-auto py-24 flex flex-col gap-4", children: [_jsxs(NavContainer, { floating: store.nav.floating, children: [_jsx(Button, { "q:slot": "start", color: "transparent", class: {
                                    'text-[#f0ccfb] fill-[#f0ccfb]': true,
                                }, children: _jsxs("div", { class: "font-semibold flex items-center gap-1 text-[#f0ccfb] fill-[#f0ccfb]", style: "filter: drop-shadow(0 0 1rem #CB6CE6);", children: [_jsx(LogoLuminescentFull, { width: 100, class: "mt-1" }), " / ui"] }) }), _jsx(Toggle, { "q:slot": "end", id: "nav-floating", "onChange$": (e, element) => store.nav.floating = element.checked, label: "Floating" })] }), _jsx("div", { class: "text-4xl font-extrabold tracking-wide mb-2 flex items-center gap-4", children: "Elements" }), _jsxs(Card, { children: [_jsx(Header, { id: "anchor", children: "Anchor" }), _jsx(ButtonAnchor, { href: "#anchor", children: "Scroll to anchor" }), _jsx(TextAreaRaw, { output: true, value: '<Anchor id="anchor"/>' })] }), _jsxs(Card, { children: [_jsx(Header, { children: "Button" }), _jsx(SelectInput, { id: "button-color", "onChange$": (e, element) => store.button.color = element.value, values: Object.keys(buttonColorClasses).map((color) => ({ name: color, value: color })), value: "gray", children: "color" }), _jsx(SelectInput, { id: "button-size", "onChange$": (e, element) => store.button.size = element.value, values: Object.keys(sizeClasses).map((size) => ({ name: size, value: size })), value: "md", children: "size" }), _jsx(Toggle, { id: "button-square", "onChange$": (e, element) => store.button.square = element.checked, label: "square" }), _jsx("div", { children: _jsx(Button, { color: store.button.color, size: store.button.size, square: store.button.square, children: "Button" }) }), _jsx(TextAreaRaw, { output: true, value: `
<Button${(_a = (store.button.color && ` color="${store.button.color}"`)) !== null && _a !== void 0 ? _a : ''}${(_b = (store.button.size && ` size="${store.button.size}"`)) !== null && _b !== void 0 ? _b : ''}${store.button.square ? ' square' : ''}>
  Button
</Button>` })] }), _jsxs(Card, { children: [_jsx(Header, { children: "Card (and Header)" }), _jsx("div", { class: "flex", children: _jsx(SelectInput, { id: "card-color", "onChange$": (e, element) => store.card.color = element.value, values: Object.keys(cardColorClasses).map((color) => ({ name: color, value: color })), value: "darkgray", children: "color" }) }), _jsx(Toggle, { id: "card-hoverable", "onChange$": (e, element) => store.card.hover = element.checked, checked: store.card.hover == 'clickable' || store.card.hover, label: "hoverable" }), _jsx(Toggle, { id: "card-clickable", "onChange$": (e, element) => store.card.hover = element.checked ? 'clickable' : false, checked: store.card.hover == 'clickable', label: "clickable" }), _jsx(Toggle, { id: "card-row", "onChange$": (e, element) => store.card.row = element.checked, label: "row" }), _jsx(Toggle, { id: "card-blobs", "onChange$": (e, element) => store.card.blobs = element.checked, label: "blobs" }), _jsx(Toggle, { id: "card-loading", "onChange$": (e, element) => store.card.loading = element.checked, label: "loading" }), _jsx(Toggle, { id: "card-href", "onChange$": (e, element) => store.card.href = element.checked, label: "href" }), _jsx("div", { children: _jsxs(Card, { color: store.card.color, hover: store.card.hover, row: store.card.row, blobs: store.card.blobs, href: store.card.href ? 'https://luminescent.dev' : undefined, children: [_jsx(Header, { subheader: "Subheader", loading: !!store.card.loading, children: "Header" }), "Content"] }) }), _jsx(TextAreaRaw, { output: true, value: `
<Card${(_c = (store.card.color && ` color="${store.card.color}"`)) !== null && _c !== void 0 ? _c : ''}${store.card.hover ? ' hover' : ''}${store.card.hover == 'clickable' ? '="clickable"' : ''}${store.card.row ? ' row' : ''}${store.card.blobs ? ' blobs' : ''}${store.card.href ? ' href="https://luminescent.dev"' : ''}>
  <Header subheader="Subheader" ${store.card.loading ? 'loading' : ''}/>
    Header
  </Header>
  Content
</Card>` })] }), _jsxs(Card, { children: [_jsx(Header, { children: "ColorInput" }), _jsx(SelectInput, { id: "color-preview", "onChange$": (e, element) => store.colorinput.preview = element.value, values: ['left', 'right', 'top', 'bottom', 'full'].map((preview) => ({ name: preview, value: preview })), value: "left", children: "preview" }), _jsx("div", { children: _jsx(ColorInput, { id: "color-input", "onInput$": () => { }, preview: store.colorinput.preview, children: "Color Input" }) }), _jsx(TextAreaRaw, { output: true, value: `
<ColorInput id="color-input"${store.colorinput.preview ? ` preview="${store.colorinput.preview}"` : ''}>
  Color Input
</ColorInput>` })] }), _jsxs(Card, { children: [_jsx(Header, { children: "NumberInput" }), _jsx(Toggle, { id: "numberinput-input", "onChange$": (e, element) => store.numberinput.input = element.checked, label: 'input' }), _jsx("div", { children: _jsx(NumberInput, { id: "number-input", "onDecrement$": () => { }, "onIncrement$": () => { }, input: store.numberinput.input, children: "Number Input" }) }), _jsx(TextAreaRaw, { output: true, value: `
<NumberInput id="number-input" ${store.numberinput.input ? ' input' : ''}>
  Number Input
</NumberInput` })] }), _jsxs(Card, { children: [_jsx(Header, { children: "SelectInput" }), _jsx("div", { children: _jsx(SelectInput, { id: "select-input", values: [
                                        { name: 'Option 1', value: '1' },
                                        { name: 'Option 2', value: '2' },
                                        { name: 'Option 3', value: '3' },
                                    ], value: "1", children: "Select Input" }) }), _jsx(TextAreaRaw, { output: true, value: `
<SelectInput id="select-input"
  values={[
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}
  value="1"
>
  Select Input
</SelectInput>` })] }), _jsxs(Card, { children: [_jsx(Header, { children: "TextArea" }), _jsx(Toggle, { id: "textarea-output", "onChange$": (e, element) => store.textarea.output = element.checked, label: 'output' }), _jsx("div", { children: _jsx(TextArea, { id: "textarea", value: "Text", output: store.textarea.output, children: "Text Area" }) }), _jsx(TextAreaRaw, { output: true, value: `
<TextArea id="textarea" value="Text"${store.textarea.output ? ' output' : ''}>
  Text Area
</TextArea>` })] }), _jsxs(Card, { children: [_jsx(Header, { children: "TextInput" }), _jsx("div", { children: _jsx(TextInput, { id: "text-input", value: "Text", children: "Text Input" }) }), _jsx(TextAreaRaw, { output: true, value: `
<TextInput id="text-input" value="Text">
  Text Input
</TextInput>` })] }), _jsxs(Card, { children: [_jsx(Header, { children: "Toggle" }), _jsx(Toggle, { id: "toggle-center", "onChange$": (e, element) => store.toggle.center = element.checked, label: 'center' }), _jsx("div", { children: _jsx(Toggle, { id: "toggle", label: "Toggle", center: store.toggle.center }) }), _jsx(TextAreaRaw, { output: true, value: `<Toggle id="toggle" label="Toggle"${store.toggle.center ? ' center' : ''} />` })] }), _jsxs(Card, { children: [_jsx(Header, { children: "Icons/Logos" }), _jsx(Card, { children: _jsxs("div", { class: "flex gap-10 flex-wrap justify-evenly", children: [_jsx(LogoBirdflop, { width: 40 }), _jsx(LogoDiscord, { width: 40 }), _jsx(LogoFabric, { width: 40 }), _jsx(LogoForge, { width: 40 }), _jsx(LoadingIcon, { width: 40 }), _jsx(LogoLuminescent, { width: 40 }), _jsx(LogoLuminescentFull, { width: 40 }), _jsx(LogoPaper, { width: 40 }), _jsx(LogoPterodactyl, { width: 40 }), _jsx(LogoPurpur, { width: 40 }), _jsx(LogoVelocity, { width: 40 }), _jsx(LogoWaterfall, { width: 40 })] }) })] })] })] }));
});
