import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, NumberInput, Toggle, InputColorClasses, Dropdown } from '@luminescent/ui';

interface numberInputOptions {
  color?: keyof typeof InputColorClasses;
  input?: boolean;
}

export default component$(() => {
  const store = useStore<numberInputOptions>({});
  return (
    <Card>
      <Header id="numberinput" anchor>
        NumberInput
      </Header>
      <Dropdown id="numberinput-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof InputColorClasses}
        values={Object.keys(InputColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Toggle id="numberinput-input" onChange$={(e, element) => store.input = element.checked}
        label='input' />
      <div>
        <NumberInput id="number-input" color={store.color} onDecrement$={() => {}} onIncrement$={() => {}} input={store.input}>
          Number Input
        </NumberInput>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<NumberInput id="number-input"${store.color ? ` color="${store.color}"` : ''}${store.input ? ' input' : ''}>
  Number Input
</NumberInput`} />
    </Card>
  );
});