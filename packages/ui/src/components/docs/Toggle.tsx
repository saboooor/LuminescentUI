import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, TextAreaRaw, Toggle } from '../../index';

interface toggleOptions {
  center?: boolean;
}

export default component$(() => {
  const store = useStore<toggleOptions>({});
  return (
    <Card>
      <Header>
        Toggle
      </Header>
      <Toggle id="toggle-center" onChange$={(e, element) => store.center = element.checked}
        label='center'/>
      <div>
        <Toggle id="toggle" label="Toggle" center={store.center} />
      </div>
      <TextAreaRaw output value={`<Toggle id="toggle" label="Toggle"${store.center ? ' center' : ''} />`} />
    </Card>
  );
});
