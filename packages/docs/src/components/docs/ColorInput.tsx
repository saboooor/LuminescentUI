import { component$, useStore } from '@builder.io/qwik';
import { Card, ColorInput, Header, Dropdown, TextAreaRaw } from '@luminescent/ui';

interface colorInputOptions {
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
}

export default component$(() => {
  const store = useStore<colorInputOptions>({});
  return (
    <Card>
      <Header>
        ColorInput
      </Header>
      <Dropdown id="color-preview"
        onChange$={(e, element) => store.preview = element.value as 'left' | 'right' | 'top' | 'bottom' | 'full'}
        values={['left', 'right', 'top', 'bottom', 'full'].map((preview) => ({ name: preview, value: preview }))}
        value="left"
      >
        preview
      </Dropdown>
      <div>
        <ColorInput id="color-input" onInput$={() => {}} preview={store.preview}>
          Color Input
        </ColorInput>
      </div>
      <TextAreaRaw output value={`
<ColorInput id="color-input"${store.preview ? ` preview="${store.preview}"` : ''}>
Color Input
</ColorInput>`} />
    </Card>
  );
});
