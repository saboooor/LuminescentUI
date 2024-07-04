import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, Dropdown, TextInput, buttonColorClasses, sizeClasses, Toggle } from '@luminescent/ui';

interface DropdownOptions {
  display?: string;
  color?: keyof typeof buttonColorClasses;
  transparent?: boolean;
  size?: keyof typeof sizeClasses;
  round?: boolean;
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
      <Dropdown id="dropdown-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof buttonColorClasses}
        values={Object.keys(buttonColorClasses).map((color) => ({ name: color, value: color }))}
        value="gray"
      >
        color
      </Dropdown>
      <Toggle id="dropdown-transparent"
        onChange$={(e, element) => store.transparent = element.checked}
        label="transparent" />
      <Dropdown id="dropdown-size"
        onChange$={(e, element) => store.size = element.value as keyof typeof sizeClasses}
        values={Object.keys(sizeClasses).map((size) => ({ name: size, value: size }))}
        value="sm"
      >
        size
      </Dropdown>
      <Toggle id="dropdown-hover" label="hover"
        onInput$={(e, el) => store.hover = el.checked}>
        hover
      </Toggle>
      <Toggle id="dropdown-round" label="round"
        onInput$={(e, el) => store.round = el.checked}>
        round
      </Toggle>
      <div>
        <Dropdown id="dropdown-input"
          values={[
            { name: <div class="bg-red-500">Any element you want</div>, value: '1' },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3', color: 'blue' },
          ]}
          value="1"
          display={store.display ? <div dangerouslySetInnerHTML={store.display}></div> : undefined}
          color={store.color}
          transparent={store.transparent}
          size={store.size}
          hover={store.hover}
          round={store.round}
        >
          Select Input
        </Dropdown>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<Dropdown id="dropdown-input"${store.display ? ` display={${store.display}}` : ''}${store.color ? ` color="${store.color}"` : ''}${store.transparent ? ' transparent' : ''}${store.size ? ` size="${store.size}"` : ''}${store.hover ? ' hover' : ''}${store.round ? ' round' : ''}>
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
