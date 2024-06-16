import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, Dropdown, TextAreaRaw, TextInput, Toggle } from '../../index';

interface DropdownOptions {
  display?: string;
  hover?: boolean;
}

export default component$(() => {
  const store = useStore<DropdownOptions>({});
  return (
    <Card>
      <Header id="dropdown" anchor>
        Dropdown
      </Header>
      <TextInput id="dropdown-display" onInput$={(e, el) => {
        store.display = el.value;
      }}>
        display
      </TextInput>
      <Toggle id="dropdown-hover" label="hover"
        onInput$={(e, el) => store.hover = el.checked}>
        hover
      </Toggle>
      <div>
        <Dropdown id="dropdown-input"
          values={[
            { name: <div class="bg-red-500">Any element you want</div>, value: '1' },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' },
          ]}
          value="1"
          display={store.display ? <div dangerouslySetInnerHTML={store.display}></div> : undefined}
          hover={store.hover}
        >
          Select Input
        </Dropdown>
      </div>
      <TextAreaRaw output value={`
<Dropdown id="dropdown-input"${store.display ? ` display={${store.display}}` : ''}${store.hover ? ' hover' : ''}>
  values={[
    { name: <div class="bg-red-500">Any element you want</div>, value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3', color: 'blue' },
  ]}
  value="1"
>
  Select Input
</Dropdown>`} />
    </Card>
  );
});
