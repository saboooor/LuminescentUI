import { component$, useStore } from '@builder.io/qwik';
import { Button, ButtonAnchor, Card, Header, ColorInput, NumberInput, LoadingIcon, SelectInput, TextArea, TextAreaRaw, TextInput, Toggle, buttonColorClasses, cardColorClasses, sizeClasses } from './components/elements';
import { LogoBirdflop, LogoDiscord, LogoFabric, LogoForge, LogoLuminescent, LogoLuminescentFull, LogoPaper, LogoPterodactyl, LogoPurpur, LogoVelocity, LogoWaterfall } from './components/logos';
import './global.css';

interface docsStore {
  button: {
    color?: keyof typeof buttonColorClasses;
    size?: keyof typeof sizeClasses;
    bold?: boolean;
  };
  card: {
    color?: keyof typeof cardColorClasses;
    hover?: boolean | 'clickable';
    row?: boolean;
    blobs?: boolean;
    loading?: boolean;
    href?: boolean;
  };
  colorinput: {
    preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  };
  numberinput: {
    input?: boolean;
  };
  selectinput: {
    transparent?: boolean;
  };
  textarea: {
    output?: boolean;
  };
  toggle: {
    center?: boolean;
  };
}

export default component$(() => {
  const store = useStore<docsStore>({
    button: {},
    card: {},
    colorinput: {},
    numberinput: {},
    selectinput: {},
    textarea: {},
    toggle: {},
  });
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Luminescent UI</title>
      </head>
      <body class="bg-gray-950 text-gray-200 max-w-6xl mx-auto py-20 flex flex-col gap-4">
        <div style="filter: drop-shadow(0 0 2rem #CB6CE6);">
          <div class="text-5xl font-semibold mb-6 flex items-center gap-4 text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 2rem #CB6CE6);">
            <LogoLuminescentFull width={250} class="mt-1.5" /> / ui
          </div>
        </div>
        <Card>
          <Header id="anchor">
            Anchor
          </Header>
          <ButtonAnchor href="#anchor">
            Scroll to anchor
          </ButtonAnchor>
          <TextAreaRaw output value={'<Anchor id="anchor"/>'} />
        </Card>
        <Card>
          <Header>
            Button
          </Header>
          <SelectInput id="button-color"
            onChange$={(e, element) => store.button.color = element.value as keyof typeof buttonColorClasses}
            values={Object.keys(buttonColorClasses).map((color) => ({ name: color, value: color }))}
            value="gray"
          >
            color
          </SelectInput>
          <SelectInput id="button-size"
            onChange$={(e, element) => store.button.size = element.value as keyof typeof sizeClasses}
            values={Object.keys(sizeClasses).map((size) => ({ name: size, value: size }))}
            value="md"
          >
            size
          </SelectInput>
          <div>
            <Button
              color={store.button.color}
              size={store.button.size}
            >
              Button
            </Button>
          </div>
          <TextAreaRaw output value={`
<Button${(store.button.color && ` color="${store.button.color}"`) ?? ''}${(store.button.size && ` size="${store.button.size}"`) ?? ''}>
  Button
</Button>`} />
        </Card>
        <Card>
          <Header>
            Card (and Header)
          </Header>
          <div class="flex">
            <SelectInput id="card-color"
              onChange$={(e, element) => store.card.color = element.value as keyof typeof cardColorClasses}
              values={Object.keys(cardColorClasses).map((color) => ({ name: color, value: color }))}
              value="darkgray"
            >
              color
            </SelectInput>
          </div>
          <Toggle id="card-hoverable" onChange$={(e, element) => store.card.hover = element.checked}
            checked={store.card.hover == 'clickable' || store.card.hover}
            label="hoverable" />
          <Toggle id="card-clickable" onChange$={(e, element) => store.card.hover = element.checked ? 'clickable' : false}
            checked={store.card.hover == 'clickable'}
            label="clickable" />
          <Toggle id="card-row" onChange$={(e, element) => store.card.row = element.checked}
            label="row" />
          <Toggle id="card-blobs" onChange$={(e, element) => store.card.blobs = element.checked}
            label="blobs" />
          <Toggle id="card-loading" onChange$={(e, element) => store.card.loading = element.checked}
            label="loading" />
          <Toggle id="card-href" onChange$={(e, element) => store.card.href = element.checked}
            label="href" />
          <div>
            <Card
              color={store.card.color}
              hover={store.card.hover}
              row={store.card.row}
              blobs={store.card.blobs}
              href={store.card.href ? 'https://luminescent.dev' : undefined}
            >
              <Header subheader="Subheader" loading={!!store.card.loading}>
                Header
              </Header>
              Content
            </Card>
          </div>
          <TextAreaRaw output value={`
<Card${(store.card.color && ` color="${store.card.color}"`) ?? ''}${store.card.hover ? ' hover' : ''}${store.card.hover == 'clickable' ? '="clickable"' : ''}${store.card.row ? ' row' : ''}${store.card.blobs ? ' blobs' : ''}${store.card.href ? ' href="https://luminescent.dev"' : ''}>
  <Header subheader="Subheader" ${store.card.loading ? 'loading' : ''}/>
    Header
  </Header>
  Content
</Card>`} />
        </Card>
        <Card>
          <Header>
            ColorInput
          </Header>
          <SelectInput id="color-preview"
            onChange$={(e, element) => store.colorinput.preview = element.value as 'left' | 'right' | 'top' | 'bottom' | 'full'}
            values={['left', 'right', 'top', 'bottom', 'full'].map((preview) => ({ name: preview, value: preview }))}
            value="left"
          >
            preview
          </SelectInput>
          <div>
            <ColorInput id="color-input" onInput$={() => {}} preview={store.colorinput.preview}>
              Color Input
            </ColorInput>
          </div>
          <TextAreaRaw output value={`
<ColorInput id="color-input"${store.colorinput.preview ? ` preview="${store.colorinput.preview}"` : ''}>
  Color Input
</ColorInput>`} />
        </Card>
        <Card>
          <Header>
            NumberInput
          </Header>
          <Toggle id="numberinput-input" onChange$={(e, element) => store.numberinput.input = element.checked}
            label='input' />
          <div>
            <NumberInput id="number-input" onDecrement$={() => {}} onIncrement$={() => {}} input={store.numberinput.input}>
              Number Input
            </NumberInput>
          </div>
          <TextAreaRaw output value={`
<NumberInput id="number-input" ${store.numberinput.input ? ' input' : ''}>
  Number Input
</NumberInput`} />
        </Card>
        <Card>
          <Header>
            SelectInput
          </Header>
          <div>
            <SelectInput id="select-input"
              values={[
                { name: 'Option 1', value: '1' },
                { name: 'Option 2', value: '2' },
                { name: 'Option 3', value: '3' },
              ]}
              value="1"
            >
              Select Input
            </SelectInput>
          </div>
          <TextAreaRaw output value={`
<SelectInput id="select-input"
  values={[
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}
  value="1"
>
  Select Input
</SelectInput>`} />
        </Card>
        <Card>
          <Header>
            TextArea
          </Header>
          <Toggle id="textarea-output" onChange$={(e, element) => store.textarea.output = element.checked}
            label='output' />
          <div>
            <TextArea id="textarea" value="Text" output={store.textarea.output}>
              Text Area
            </TextArea>
          </div>
          <TextAreaRaw output value={`
<TextArea id="textarea" value="Text"${store.textarea.output ? ' output' : ''}>
  Text Area
</TextArea>`} />
        </Card>
        <Card>
          <Header>
            TextInput
          </Header>
          <div>
            <TextInput id="text-input" value="Text">
              Text Input
            </TextInput>
          </div>
          <TextAreaRaw output value={`
<TextInput id="text-input" value="Text">
  Text Input
</TextInput>`} />
        </Card>
        <Card>
          <Header>
            Toggle
          </Header>
          <Toggle id="toggle-center" onChange$={(e, element) => store.toggle.center = element.checked}
            label='center'/>
          <div>
            <Toggle id="toggle" label="Toggle" center={store.toggle.center} />
          </div>
          <TextAreaRaw output value={`<Toggle id="toggle" label="Toggle"${store.toggle.center ? ' center' : ''} />`} />
        </Card>
        <Card>
          <Header>
            Icons/Logos
          </Header>
          <Card>
            <div class="flex gap-10 flex-wrap justify-evenly">
              <LogoBirdflop width={40} />
              <LogoDiscord width={40} />
              <LogoFabric width={40} />
              <LogoForge width={40} />
              <LoadingIcon width={40} />
              <LogoLuminescent width={40} />
              <LogoLuminescentFull width={40} />
              <LogoPaper width={40} />
              <LogoPterodactyl width={40} />
              <LogoPurpur width={40} />
              <LogoVelocity width={40} />
              <LogoWaterfall width={40} />
            </div>
          </Card>
        </Card>
      </body>
    </>
  );
});
