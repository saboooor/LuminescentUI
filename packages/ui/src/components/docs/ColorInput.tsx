import { component$, useStore } from '@builder.io/qwik';
import { Card, ColorInput, Header, Dropdown, TextAreaRaw, InputColorClasses } from '../../index';

interface colorInputOptions {
  color?: keyof typeof InputColorClasses;
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
}

export default component$(() => {
  const store = useStore<colorInputOptions>({});
  return (
    <Card>
      <Header id="colorinput" anchor>
        ColorInput
      </Header>
      <Dropdown id="color-input-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof InputColorClasses}
        values={Object.keys(InputColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Dropdown id="color-input-preview"
        onChange$={(e, element) => store.preview = element.value as 'left' | 'right' | 'top' | 'bottom' | 'full'}
        values={['left', 'right', 'top', 'bottom', 'full'].map((preview) => ({ name: preview, value: preview }))}
        value="left"
      >
        preview
      </Dropdown>
      <div>
        <ColorInput id="color-input" color={store.color} onInput$={() => {}} preview={store.preview}>
          Color Input
        </ColorInput>
      </div>
      <TextAreaRaw output value={`
<ColorInput id="color-input"${store.color ? ` color="${store.color}"` : ''}${store.preview ? ` preview="${store.preview}"` : ''}>
Color Input
</ColorInput>`} />
    </Card>
  );
});
