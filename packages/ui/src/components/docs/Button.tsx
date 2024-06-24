import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, TextAreaRaw, TextInput } from '../../index';

export default component$(() => {
  const store = useStore({
    class: 'btn btn-md lum-bg-gray-800 hover:lum-bg-gray-800 rounded-md',
  });
  return (
    <Card>
      <Header id="button" anchor subheader={
        'classes: btn btn-xs btn-sm btn-md btn-lg btn-xl btn-icon'
      }>
        Button
      </Header>
      <div>
        <TextInput id="button-class"
          onInput$={(e, el) => store.class = el.value}
          value={store.class}
        >
          class
        </TextInput>
        <p class="text-gray-500">warning: only btn classes are safelisted and other classes that aren't loaded in tailwind and arbitrary values will not work</p>
      </div>
      <Card>
        <div>
          <button class={store.class}>
            Button
          </button>
        </div>
      </Card>
      <TextAreaRaw output value={`
<button class="${store.class}">
  Button
</button>`} />
    </Card>
  );
});
