import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button, ButtonAnchor, Card, CardHeader, ColorInput, NumberInput, OutputField, OutputFieldRaw, SelectInput, TextAreaInput, TextInput, Toggle, buttonColorClasses, cardColorClasses, sizeClasses, LogoLuminescentFull } from '@luminescent/ui';

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
    <section class="max-w-6xl mx-auto py-20 flex flex-col gap-4">
      <div style="filter: drop-shadow(0 0 2rem #CB6CE6);">
        <div class="text-5xl font-semibold mb-6 flex items-center gap-1 text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 2rem #CB6CE6);">
          <LogoLuminescentFull width={250} class="mt-1.5" /> / ui
        </div>
      </div>
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
          <SelectInput id="button-color" onChange$={(e, element) => store.button.color = element.value as keyof typeof buttonColorClasses}>
            <span q:slot="label">color</span>
            {Object.keys(buttonColorClasses).map((color, i) => (
              <option key={i} value={color} selected={color == 'gray'}>{color}</option>
            ))}
          </SelectInput>
          <SelectInput id="button-size" onChange$={(e, element) => store.button.size = element.value as keyof typeof sizeClasses}>
            <span q:slot="label">size</span>
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
          <SelectInput id="button-color" onChange$={(e, element) => store.card.color = element.value as keyof typeof cardColorClasses}>
            <span q:slot="label">color</span>
            {Object.keys(cardColorClasses).map((color, i) => (
              <option key={i} value={color} selected={color == 'darkgray'}>{color}</option>
            ))}
          </SelectInput>
        </div>
        <Toggle id="card-hoverable" onChange$={(e, element) => store.card.hoverable = element.checked}>
          hoverable
        </Toggle>
        <Toggle id="card-row" onChange$={(e, element) => store.card.row = element.checked}>
          row
        </Toggle>
        <Toggle id="card-blobs" onChange$={(e, element) => store.card.blobs = element.checked}>
          blobs
        </Toggle>
        <Toggle id="card-loading" onChange$={(e, element) => store.card.loading = element.checked}>
          loading
        </Toggle>
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
          <ColorInput id="color-input" onInput$={() => {}}>
            Color Input
          </ColorInput>
        </div>
        <OutputFieldRaw value={`
<ColorInput id="color-input">
  Color Input
</ColorInput>`} />
      </Card>
      <Card>
        <CardHeader>
          NumberInput
        </CardHeader>
        <Toggle id="numberinput-input" onChange$={(e, element) => store.numberinput.input = element.checked}>
          input
        </Toggle>
        <div>
          <NumberInput id="number-input" onDecrement$={() => {}} onIncrement$={() => {}} input={store.numberinput.input}>
            Number Input
          </NumberInput>
        </div>
        <OutputFieldRaw value={`
<NumberInput id="number-input" ${store.numberinput.input ? ' input' : ''}>
  Number Input
</NumberInput`} />
      </Card>
      <Card>
        <CardHeader>
          OutputField
        </CardHeader>
        <div>
          <OutputField id="output-field" value="text output">
            Output Field
          </OutputField>
        </div>
        <OutputFieldRaw value={`
<NumberInput id="number-input"${store.numberinput.input ? ' input' : ''} value="text output">
  Output Field
</NumberInput>`} />
      </Card>
      <Card>
        <CardHeader>
          SelectInput
        </CardHeader>
        <Toggle id="selectinput-transparent" onChange$={(e, element) => store.selectinput.transparent = element.checked}>
          transparent
        </Toggle>
        <div>
          <SelectInput id="select-input" transparent={store.selectinput.transparent}>
            <span q:slot="label">Select Input</span>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </SelectInput>
        </div>
        <OutputFieldRaw value={`
  <SelectInput id="select-input" label="Select Input"${store.selectinput.transparent ? ' transparent' : ''}>
    <span q:slot="label">Select Input</span>
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
          <TextAreaInput id="textarea-input" value="Text">
            Text Area Input
          </TextAreaInput>
        </div>
        <OutputFieldRaw value={`
<TextAreaInput id="textarea-input" value="Text">
  Text Area Input
</TextAreaInput>`} />
      </Card>
      <Card>
        <CardHeader>
          TextInput
        </CardHeader>
        <div>
          <TextInput id="text-input" value="Text">
            Text Input
          </TextInput>
        </div>
        <OutputFieldRaw value={`
<TextInput id="text-input" value="Text">
  Text Input
</TextInput>`} />
      </Card>
      <Card>
        <CardHeader>
          Toggle
        </CardHeader>
        <Toggle id="toggle-center" onChange$={(e, element) => store.toggle.center = element.checked}>
          center
        </Toggle>
        <div>
          <Toggle id="toggle" center={store.toggle.center}>
            Toggle
          </Toggle>
        </div>
        <OutputFieldRaw value={`
<Toggle id="toggle"${store.toggle.center ? ' center' : ''}>
  Toggle
</Toggle>`} />
      </Card>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Luminescent UI Docs',
  meta: [
    {
      name: 'description',
      content: 'Luminescent UI components documentation',
    },
  ],
};
