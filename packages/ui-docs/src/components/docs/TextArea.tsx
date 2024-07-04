import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, TextArea, Toggle, InputColorClasses, Dropdown } from '@luminescent/ui';

interface textAreaOptions {
  output?: boolean;
  color?: keyof typeof InputColorClasses;
}

export default component$(() => {
  const store = useStore<textAreaOptions>({});
  return (
    <Card>
      <Header id="textarea" anchor>
        TextArea
      </Header>
      <Dropdown id="textarea-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof InputColorClasses}
        values={Object.keys(InputColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Toggle id="textarea-output" onChange$={(e, element) => store.output = element.checked}
        label='output' />
      <div>
        <TextArea id="textarea" color={store.color} value="Text" output={store.output}>
          Text Area
        </TextArea>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<TextArea id="textarea"${store.color ? ` color="${store.color}"` : ''}${store.output ? ' output' : ''} value="Text">
  Text Area
</TextArea>`} />
    </Card>
  );
});