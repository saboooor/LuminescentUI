import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, TextAreaRaw, TextInput } from '../../index';

export default component$(() => {
  const store = useStore({
    color: 'btn-gray-800',
  });
  return (
    <Card>
      <Header id="button" anchor>
        button
      </Header>
      <TextInput id="button-color"
        onInput$={(e, element) => store.color = element.value}
        value="btn-gray-800"
      >
        color
      </TextInput>
      <div>
        <button class={`btn btn-md ${store.color ?? 'btn-gray-800'} rounded-md`}>
          Button
        </button>
      </div>
      <TextAreaRaw output value={`
<button class="btn btn-md ${store.color ?? 'btn-gray-800'} rounded-md">
  Button
</button>`} />
    </Card>
  );
});
