import { component$, useStore } from '@builder.io/qwik';
import { Button, ButtonAnchor, Card, CardHeader, ColorInput, NumberInput, OutputField, OutputFieldRaw, SelectInput, TextAreaInput, TextInput, Toggle, buttonColorClasses, cardColorClasses, sizeClasses } from './components/elements';
import './global.css';

interface docsStore {
  button: {
    color?: keyof typeof buttonColorClasses;
    size?: keyof typeof sizeClasses;
    bold?: boolean;
  };
  card: {
    color?: keyof typeof cardColorClasses;
    hoverable?: boolean;
    row?: boolean;
    blobs?: boolean;
    loading?: boolean;
  };
  numberinput: {
    input?: boolean;
  };
  selectinput: {
    transparent?: boolean;
  }
  toggle: {
    center?: boolean;
  };
}

export default component$(() => {
  const store = useStore<docsStore>({
    button: {},
    card: {},
    numberinput: {},
    selectinput: {},
    toggle: {},
  });
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Luminescent UI</title>
      </head>
      <body class="bg-gray-950 text-gray-200 max-w-6xl mx-auto py-20 flex flex-col gap-4">
        <h1 class="text-5xl font-bold mb-6">
          Luminescent UI
        </h1>
        <Card>
          <CardHeader id="anchor">
            Anchor
          </CardHeader>
          <ButtonAnchor href="#anchor">
            Scroll to anchor
          </ButtonAnchor>
          <OutputFieldRaw value={'<Anchor id="anchor"/>'} />
        </Card>
        <Card>
          <CardHeader>
            Button
          </CardHeader>
          <div class="grid grid-cols-2 gap-4">
            <SelectInput label="color" id="button-color" onChange$={(e, element) => store.button.color = element.value as keyof typeof buttonColorClasses}>
              {Object.keys(buttonColorClasses).map((color, i) => (
                <option key={i} value={color} selected={color == 'gray'}>{color}</option>
              ))}
            </SelectInput>
            <SelectInput label="size" id="button-size" onChange$={(e, element) => store.button.size = element.value as keyof typeof sizeClasses}>
              {Object.keys(sizeClasses).map((size, i) => (
                <option key={i} value={size} selected={size == 'md'}>{size}</option>
              ))}
            </SelectInput>
          </div>
          <div>
            <Button
              color={store.button.color}
              size={store.button.size}
            >
              Button
            </Button>
          </div>
          <OutputFieldRaw value={`
<Button${(store.button.color && ` color="${store.button.color}"`) ?? ''}${(store.button.size && ` size="${store.button.size}"`) ?? ''}>
  Button
</Button>`} />
        </Card>
        <Card>
          <CardHeader>
            Card
          </CardHeader>
          <div class="flex">
            <SelectInput label="color" id="button-color" onChange$={(e, element) => store.card.color = element.value as keyof typeof cardColorClasses}>
              {Object.keys(cardColorClasses).map((color, i) => (
                <option key={i} value={color} selected={color == 'darkgray'}>{color}</option>
              ))}
            </SelectInput>
          </div>
          <Toggle label="hoverable" id="card-hoverable" onChange$={(e, element) => store.card.hoverable = element.checked} />
          <Toggle label="row" id="card-row" onChange$={(e, element) => store.card.row = element.checked} />
          <Toggle label="blobs" id="card-blobs" onChange$={(e, element) => store.card.blobs = element.checked} />
          <Toggle label="loading" id="card-loading" onChange$={(e, element) => store.card.loading = element.checked} />
          <div>
            <Card
              color={store.card.color}
              hoverable={store.card.hoverable}
              row={store.card.row}
              blobs={store.card.blobs}
            >
              <CardHeader loading={store.card.loading}>
                Header
              </CardHeader>
              Description
            </Card>
          </div>
          <OutputFieldRaw value={`
<Card${(store.card.color && ` color="${store.card.color}"`) ?? ''}${store.card.hoverable ? ' hoverable' : ''}${store.card.row ? ' row' : ''}${store.card.blobs ? ' blobs' : ''}>
  <CardHeader ${store.card.loading ? 'loading' : ''}>
    Header
  </CardHeader>
  Description
</Card>`} />
        </Card>
        <Card>
          <CardHeader>
            ColorInput
          </CardHeader>
          <div>
            <ColorInput id="color-input" onInput$={() => {}} />
          </div>
          <OutputFieldRaw value={'<ColorInput id="color-input" />'} />
        </Card>
        <Card>
          <CardHeader>
            NumberInput
          </CardHeader>
          <Toggle label="input" id="numberinput-input" onChange$={(e, element) => store.numberinput.input = element.checked} />
          <div>
            <NumberInput id="number-input" label="Number Input" onDecrement$={() => {}} onIncrement$={() => {}} input={store.numberinput.input} />
          </div>
          <OutputFieldRaw value={`<NumberInput id="number-input" label="Number Input"${store.numberinput.input ? ' input' : ''} />`} />
        </Card>
        <Card>
          <CardHeader>
            OutputField
          </CardHeader>
          <div>
            <OutputField id="output-field" label="Output Field" value="text output" />
          </div>
          <OutputFieldRaw value={`<NumberInput id="number-input" label="Number Input"${store.numberinput.input ? ' input' : ''} value="text output" />`} />
        </Card>
        <Card>
          <CardHeader>
            SelectInput
          </CardHeader>
          <Toggle label="transparent" id="selectinput-transparent" onChange$={(e, element) => store.selectinput.transparent = element.checked} />
          <div>
            <SelectInput id="select-input" label="Select Input" transparent={store.selectinput.transparent}>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </SelectInput>
          </div>
          <OutputFieldRaw value={`
<SelectInput id="select-input" label="Select Input"${store.selectinput.transparent ? ' transparent' : ''}>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</SelectInput>`} />
        </Card>
        <Card>
          <CardHeader>
            TextAreaInput
          </CardHeader>
          <div>
            <TextAreaInput id="textarea-input" label="Text Area Input" value="Text" />
          </div>
          <OutputFieldRaw value={'<TextAreaInput id="textarea-input" label="Text Area Input" value="Text" />'} />
        </Card>
        <Card>
          <CardHeader>
            TextInput
          </CardHeader>
          <div>
            <TextInput id="text-input" label="Text Input" value="Text" />
          </div>
          <OutputFieldRaw value={'<TextInput id="text-input" label="Text Input" value="Text" />'} />
        </Card>
        <Card>
          <CardHeader>
            Toggle
          </CardHeader>
          <Toggle label="center" id="toggle-center" onChange$={(e, element) => store.toggle.center = element.checked} />
          <div>
            <Toggle id="toggle" label="Toggle" center={store.toggle.center} />
          </div>
          <OutputFieldRaw value={`<Toggle id="toggle" label="Toggle"${store.toggle.center ? ' center' : ''} />`} />
        </Card>
      </body>
    </>
  );
});
