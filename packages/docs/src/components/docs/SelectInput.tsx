import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, SelectInput, TextAreaRaw, TextInput, buttonColorClasses, sizeClasses } from '@luminescent/ui';

interface selectInputOptions {
  display?: string;
  color?: keyof typeof buttonColorClasses;
  size?: keyof typeof sizeClasses;
}

export default component$(() => {
  const store = useStore<selectInputOptions>({});
  return (
    <Card>
      <Header>
        SelectInput
      </Header>
      <TextInput id="select-display" onInput$={(e, el) => {
        store.display = el.value;
      }}>
        display
      </TextInput>
      <SelectInput id="select-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof buttonColorClasses}
        values={Object.keys(buttonColorClasses).map((color) => ({ name: color, value: color }))}
        value="gray"
      >
        color
      </SelectInput>
      <SelectInput id="select-size"
        onChange$={(e, element) => store.size = element.value as keyof typeof sizeClasses}
        values={Object.keys(sizeClasses).map((size) => ({ name: size, value: size }))}
        value="sm"
      >
        size
      </SelectInput>
      <div>
        <SelectInput id="select-input"
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
        </SelectInput>
      </div>
      <TextAreaRaw output value={`
<SelectInput id="select-input"${store.display ? ` display={${store.display}}` : ''}${store.color ? ` color="${store.color}"` : ''}${store.size ? ` size="${store.size}"` : ''}>
  values={[
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}
  value="1"
>
  Select Input
</SelectInput>`} />
    </Card>
  );
});
