import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {
  Button, ButtonAnchor, Card, ColorInput, Header, LoadingIcon, Nav, NumberInput, SelectInput, TextArea, TextAreaRaw, TextInput, Toggle, buttonColorClasses, cardColorClasses, sizeClasses,
  LogoBirdflop, LogoDiscord, LogoFabric, LogoForge, LogoLuminescent, LogoLuminescentFull, LogoPaper, LogoPterodactyl, LogoPurpur, LogoVelocity, LogoWaterfall,
} from '@luminescent/ui';

interface docsStore {
  button: {
    color?: keyof typeof buttonColorClasses;
    size?: keyof typeof sizeClasses;
    square?: boolean;
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
  nav: {
    fixed?: boolean;
    floating?: boolean;
  };
  numberinput: {
    input?: boolean;
  };
  selectinput: {
    display?: string;
    color?: keyof typeof buttonColorClasses;
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
    nav: {},
    numberinput: {},
    selectinput: {},
    textarea: {},
    toggle: {},
  });
  return (
    <section class="max-w-6xl mx-auto py-32 px-4 flex flex-col gap-4">
      <div class="text-4xl font-extrabold tracking-wide mb-2 flex items-center gap-4">
        Elements
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
        <Toggle id="button-square"
          onChange$={(e, element) => store.button.square = element.checked}
          label="square" />
        <div>
          <Button
            color={store.button.color}
            size={store.button.size}
            square={store.button.square}
          >
            Button
          </Button>
        </div>
        <TextAreaRaw output value={`
<Button${(store.button.color && ` color="${store.button.color}"`) ?? ''}${(store.button.size && ` size="${store.button.size}"`) ?? ''}${store.button.square ? ' square' : ''}>
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
          Nav
        </Header>
        <Toggle id="nav-fixed" onChange$={(e, element) => store.nav.fixed = element.checked}
          label="fixed" />
        <Toggle id="nav-floating" onChange$={(e, element) => store.nav.floating = element.checked}
          label="floating" />
        <div class="relative h-40">
          <Nav floating={store.nav.floating} fixed={store.nav.fixed}>
            <Button q:slot="start" color="transparent" class={{ 'hidden sm:flex': true }}>
              Button 1
            </Button>
            <Button q:slot="center" color="transparent" class={{ 'hidden sm:flex': true }}>
              Button 2
            </Button>
            <Button q:slot="end" color="transparent" class={{ 'hidden sm:flex': true }}>
              Button 3
            </Button>
            <Button q:slot="mobile" color="transparent">
              Button 1
            </Button>
            <Button q:slot="mobile" color="transparent">
              Button 2
            </Button>
            <Button q:slot="mobile" color="transparent">
              Button 3
            </Button>
          </Nav>
        </div>
        <TextAreaRaw output value={`
<Nav${store.nav.floating ? ' floating' : ''}${store.nav.fixed ? ' fixed' : ''}>

<Button q:slot="start" color="transparent" class={{ 'hidden sm:flex': true }}>
  Button 1
</Button>

<Button q:slot="center" color="transparent" class={{ 'hidden sm:flex': true }}>
  Button 2
</Button>

<Button q:slot="end" color="transparent" class={{ 'hidden sm:flex': true }}>
  Button 3
</Button>

<Button q:slot="mobile" color="transparent">
  Button 1
</Button>
<Button q:slot="mobile" color="transparent">
  Button 2
</Button>
<Button q:slot="mobile" color="transparent">
  Button 3
</Button>

</Nav>`} />
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
<NumberInput id="number-input"${store.numberinput.input ? ' input' : ''}>
  Number Input
</NumberInput`} />
      </Card>
      <Card>
        <Header>
          SelectInput
        </Header>
        <TextInput id="select-display" onInput$={(e, el) => {
          store.selectinput.display = el.value;
        }}>
          display
        </TextInput>
        <SelectInput id="select-color"
          onChange$={(e, element) => store.selectinput.color = element.value as keyof typeof buttonColorClasses}
          values={Object.keys(buttonColorClasses).map((color) => ({ name: color, value: color }))}
          value="gray"
        >
          color
        </SelectInput>
        <div>
          <SelectInput id="select-input"
            values={[
              { name: 'Option 1', value: '1' },
              { name: 'Option 2', value: '2' },
              { name: 'Option 3', value: '3' },
            ]}
            value="1"
            display={store.selectinput.display ? <div dangerouslySetInnerHTML={store.selectinput.display}></div> : undefined}
            color={store.selectinput.color}
          >
            Select Input
          </SelectInput>
        </div>
        <TextAreaRaw output value={`
<SelectInput id="select-input"${store.selectinput.display ? ` display={${store.selectinput.display}}` : ''}${store.selectinput.color ? ` color="${store.selectinput.color}"` : ''}
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
