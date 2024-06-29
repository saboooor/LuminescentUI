import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, TextAreaRaw, TextInput } from '../../index';

export default component$(() => {
  const store = useStore({
    class: 'lum-input lum-pad-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md',
  });
  return (
    <Card>
      <Header id="input" anchor>
        Input
      </Header>
      <div>
        <TextInput id="input-class"
          onInput$={(e, el) => store.class = el.value}
          value={store.class}
        >
          class
        </TextInput>
        <p class="text-gray-500">warning: only lum- classes are safelisted and other classes that aren't loaded in tailwind and arbitrary values will not work</p>
      </div>
      <Card>
        <div>
          <input class={store.class}/>
        </div>
      </Card>
      <TextAreaRaw output value={`
<input class="${store.class}"/>`} />
    </Card>
  );
});
