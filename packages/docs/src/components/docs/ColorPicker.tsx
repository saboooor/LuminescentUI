import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, Dropdown, InputColorClasses, Toggle, ColorPicker } from '@luminescent/ui';

interface colorPickerOptions {
  color?: keyof typeof InputColorClasses;
  preview?: 'left' | 'right' | 'top' | 'bottom' | 'full';
  horizontal?: boolean;
  showInput?: boolean;
}

export default component$(() => {
  const store = useStore<colorPickerOptions>({});
  return (
    <Card>
      <Header id="colorpicker" anchor>
        ColorPicker
      </Header>
      <Dropdown id="colorpicker-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof InputColorClasses}
        values={Object.keys(InputColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Dropdown id="colorpicker-preview"
        onChange$={(e, element) => store.preview = element.value as 'left' | 'right' | 'top' | 'bottom' | 'full'}
        values={['left', 'right', 'top', 'bottom', 'full'].map((preview) => ({ name: preview, value: preview }))}
        value="left"
      >
        preview
      </Dropdown>
      <Toggle id="colorpicker-horizontal" label="horizontal"
        onInput$={(e, element) => store.horizontal = element.checked}/>
      <Toggle id="colorpicker-showinput" label="showInput"
        onInput$={(e, element) => store.showInput = element.checked}/>
      <div class="flex">
        <ColorPicker id="color-picker" color={store.color} preview={store.preview} horizontal={store.horizontal} showInput={store.showInput} onInput$={() => {}}/>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`<ColorPicker id="color-picker"${store.color ? ` color="${store.color}"` : ''}${store.preview ? ` preview="${store.preview}"` : ''}${store.horizontal ? ' horizontal' : ''}${store.showInput == false ? ' showInput="false"' : ''}/>`} />
    </Card>
  );
});
