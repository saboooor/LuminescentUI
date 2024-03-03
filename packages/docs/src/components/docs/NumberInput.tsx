import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, NumberInput, TextAreaRaw, Toggle } from '@luminescent/ui';

interface numberInputOptions {
  input?: boolean;
}

export default component$(() => {
  const store = useStore<numberInputOptions>({});
  return (
    <Card>
      <Header>
        NumberInput
      </Header>
      <Toggle id="numberinput-input" onChange$={(e, element) => store.input = element.checked}
        label='input' />
      <div>
        <NumberInput id="number-input" onDecrement$={() => {}} onIncrement$={() => {}} input={store.input}>
          Number Input
        </NumberInput>
      </div>
      <TextAreaRaw output value={`
<NumberInput id="number-input"${store.input ? ' input' : ''}>
  Number Input
</NumberInput`} />
    </Card>
  );
});
