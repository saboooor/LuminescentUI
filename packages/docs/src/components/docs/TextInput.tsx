import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, TextInput, InputColorClasses, Dropdown } from '@luminescent/ui';

interface textInputOptions {
  color?: keyof typeof InputColorClasses;
}

export default component$(() => {
  const store = useStore<textInputOptions>({});
  return (
    <Card>
      <Header id="textinput" anchor>
        TextInput
      </Header>
      <Dropdown id="text-input-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof InputColorClasses}
        values={Object.keys(InputColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <div>
        <TextInput id="text-input" color={store.color} value="Text">
          Text Input
        </TextInput>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<TextInput id="text-input"${store.color ? ` color="${store.color}"` : ''} value="Text">
  Text Input
</TextInput>`} />
    </Card>
  );
});
