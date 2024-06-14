import { component$, useStore } from '@builder.io/qwik';
import { Card, ColorInput, Header, Dropdown, TextAreaRaw, InputColorClasses, ColorPicker, Toggle } from '../../index';

interface colorInputOptions {
  color?: keyof typeof InputColorClasses;
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  horizontal?: boolean;
  showInput?: boolean;
}

export default component$(() => {
  const store = useStore<colorInputOptions>({});
  return (
    <Card>
      <Header id="colorinput" anchor>
        ColorInput & ColorPicker
      </Header>
      <Dropdown id="colorinput-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof InputColorClasses}
        values={Object.keys(InputColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Dropdown id="colorinput-preview"
        onChange$={(e, element) => store.preview = element.value as 'left' | 'right' | 'top' | 'bottom' | 'full'}
        values={['left', 'right', 'top', 'bottom', 'full'].map((preview) => ({ name: preview, value: preview }))}
        value="left"
      >
        preview
      </Dropdown>
      <Toggle id="colorinput-horizontal" label="horizontal"
        onInput$={(e, element) => store.horizontal = element.checked}/>
      <Toggle id="colorinput-showinput" label="showInput"
        onInput$={(e, element) => store.showInput = element.checked}/>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-4">
          <div class="flex">
            <ColorPicker id="color-picker" preview={store.preview} horizontal={store.horizontal} showInput={store.showInput} onInput$={() => {}}/>
          </div>
          <TextAreaRaw output value={`<ColorPicker id="color-picker"${store.color ? ` color="${store.color}"` : ''}${store.preview ? ` preview="${store.preview}"` : ''}${store.horizontal ? ' horizontal' : ''}${store.showInput == false ? ' showInput="false"' : ''}/>`} />
        </div>
        <div class="flex flex-col justify-end gap-4">
          <ColorInput id="color-input" color={store.color} preview={store.preview} horizontal={store.horizontal} showInput={store.showInput} onInput$={() => {}}>
            Color Input
          </ColorInput>
          <TextAreaRaw output value={`
<ColorInput id="color-input"${store.color ? ` color="${store.color}"` : ''}${store.preview ? ` preview="${store.preview}"` : ''}${store.horizontal ? ' horizontal' : ''}${store.showInput ? ' showInput' : ''}>
Color Input
</ColorInput>`} />
        </div>
      </div>
    </Card>
  );
});
