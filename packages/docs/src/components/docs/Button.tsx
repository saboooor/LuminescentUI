import { component$, useStore } from '@builder.io/qwik';
import { Button, Card, Header, Dropdown, TextAreaRaw, Toggle, buttonColorClasses, sizeClasses } from '@luminescent/ui';

interface buttonOptions {
  color?: keyof typeof buttonColorClasses;
  transparent?: boolean;
  size?: keyof typeof sizeClasses;
  square?: boolean;
}

export default component$(() => {
  const store = useStore<buttonOptions>({});
  return (
    <Card>
      <Header>
        Button
      </Header>
      <Dropdown id="button-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof buttonColorClasses}
        values={Object.keys(buttonColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Toggle id="button-transparent"
        onChange$={(e, element) => store.transparent = element.checked}
        label="transparent" />
      <Dropdown id="button-size"
        onChange$={(e, element) => store.size = element.value as keyof typeof sizeClasses}
        values={Object.keys(sizeClasses).map((size) => ({ name: size, value: size }))}
        value="md"
      >
        size
      </Dropdown>
      <Toggle id="button-square"
        onChange$={(e, element) => store.square = element.checked}
        label="square" />
      <div>
        <Button
          color={store.color}
          transparent={store.transparent}
          size={store.size}
          square={store.square}
        >
          Button
        </Button>
      </div>
      <TextAreaRaw output value={`
<Button${(store.color && ` color="${store.color}"`) ?? ''}${store.transparent ? ' transparent' : ''}${store.size ? ` size="${store.size}"` : ''}${store.square ? ' square' : ''}>
  Button
</Button>`} />
    </Card>
  );
});
