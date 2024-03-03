import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, Dropdown, TextAreaRaw, TextInput, buttonColorClasses, sizeClasses } from '../../index';

interface DropdownOptions {
  display?: string;
  color?: keyof typeof buttonColorClasses;
  size?: keyof typeof sizeClasses;
}

export default component$(() => {
  const store = useStore<DropdownOptions>({});
  return (
    <Card>
      <Header>
        Dropdown
      </Header>
      <TextInput id="select-display" onInput$={(e, el) => {
        store.display = el.value;
      }}>
        display
      </TextInput>
      <Dropdown id="select-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof buttonColorClasses}
        values={Object.keys(buttonColorClasses).map((color) => ({ name: color, value: color }))}
        value="gray"
      >
        color
      </Dropdown>
      <Dropdown id="select-size"
        onChange$={(e, element) => store.size = element.value as keyof typeof sizeClasses}
        values={Object.keys(sizeClasses).map((size) => ({ name: size, value: size }))}
        value="sm"
      >
        size
      </Dropdown>
      <div>
        <Dropdown id="select-input"
          values={[
            { name: <div class="bg-red-500">Any element you want</div>, value: '1' },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3', color: 'blue' },
          ]}
          value="1"
          display={store.display ? <div dangerouslySetInnerHTML={store.display}></div> : undefined}
          color={store.color}
          size={store.size}
        >
          Select Input
        </Dropdown>
      </div>
      <TextAreaRaw output value={`
<Dropdown id="select-input"${store.display ? ` display={${store.display}}` : ''}${store.color ? ` color="${store.color}"` : ''}${store.size ? ` size="${store.size}"` : ''}>
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
