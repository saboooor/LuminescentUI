import { component$, useStore } from '@builder.io/qwik';
import { Card, Dropdown, Header, InputColorClasses, TextAreaRaw, TextInput } from '../../index';

interface textInputOptions {
  color?: keyof typeof InputColorClasses;
}

export default component$(() => {
  const store = useStore<textInputOptions>({});
  return (
    <Card>
      <Header>
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
      <TextAreaRaw output value={`
<TextInput id="text-input"${store.color ? ` color="${store.color}"` : ''} value="Text">
  Text Input
</TextInput>`} />
    </Card>
  );
});
