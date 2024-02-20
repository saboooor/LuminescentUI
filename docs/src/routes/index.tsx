import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {
  Button, ButtonAnchor, Card, CardHeader, ColorInput, NumberInput, SelectInput, TextArea, TextAreaRaw, TextInput, Toggle, buttonColorClasses, cardColorClasses, sizeClasses,
  LogoBirdflop, LogoDiscord, LogoFabric, LogoForge, LogoLuminescent, LogoLuminescentFull, LogoPaper, LogoPterodactyl, LogoPurpur, LogoVelocity, LogoWaterfall, LoadingIcon,
} from '@luminescent/ui';

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
        <TextAreaRaw output value={'<Anchor id="anchor"/>'} />
      </Card>
      <Card>
        <CardHeader>
          Button
        </CardHeader>
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
        <CardHeader>
          Card
        </CardHeader>
        <div class="flex">
          <SelectInput id="card-color"
            onChange$={(e, element) => store.card.color = element.value as keyof typeof cardColorClasses}
            values={Object.keys(cardColorClasses).map((color) => ({ name: color, value: color }))}
            value="darkgray"
          >
            color
          </SelectInput>
        </div>
        <Toggle id="card-hoverable" checked={store.card.hover == 'clickable' || store.card.hover} onChange$={(e, element) => store.card.hover = element.checked}>
          hoverable
        </Toggle>
        <Toggle id="card-clickable" checked={store.card.hover == 'clickable'} onChange$={(e, element) => store.card.hover = element.checked ? 'clickable' : false}>
          clickable
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
            hover={store.card.hover}
            row={store.card.row}
            blobs={store.card.blobs}
          >
            <CardHeader loading={store.card.loading}>
              Header
            </CardHeader>
            Description
          </Card>
        </div>
        <TextAreaRaw output value={`
<Card${(store.card.color && ` color="${store.card.color}"`) ?? ''}${store.card.hover ? ' hover' : ''}${store.card.hover == 'clickable' ? '="clickable"' : ''}${store.card.row ? ' row' : ''}${store.card.blobs ? ' blobs' : ''}>
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
        <TextAreaRaw output value={`
<NumberInput id="number-input" ${store.numberinput.input ? ' input' : ''}>
  Number Input
</NumberInput`} />
      </Card>
      <Card>
        <CardHeader>
          SelectInput
        </CardHeader>
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
        <CardHeader>
          TextArea
        </CardHeader>
        <Toggle id="textarea-output" onChange$={(e, element) => store.textarea.output = element.checked}>
          output
        </Toggle>
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
        <CardHeader>
          TextInput
        </CardHeader>
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
        <TextAreaRaw output value={`
<Toggle id="toggle"${store.toggle.center ? ' center' : ''}>
  Toggle
</Toggle>`} />
      </Card>
      <Card>
        <CardHeader>
          Icons/Logos
        </CardHeader>
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
