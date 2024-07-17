import { component$, useStore } from '@builder.io/qwik';
import { Header } from '../../index';

import { defaultClasses } from '../../../../ui/src/components/btn';

export default component$(() => {
  const store = useStore({
    class: 'lum-btn',
  });
  return (
    <div class="lum-card">
      <Header id="button" anchor>
        Button
      </Header>
      <div>
        <label for="button-class">class</label>
        <input id="button-class" class="w-full lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md"
          onInput$={(e, el) => store.class = el.value}
          value={store.class}
        />
        <p class="text-gray-500">
          warning: only lum- classes are safelisted and other classes that aren't loaded in tailwind and arbitrary values will not work
        </p>
        <p class="text-gray-500">
          default associated classes: {defaultClasses}
        </p>
      </div>
      <div class="lum-card">
        <div>
          <button class={store.class}>
            Button
          </button>
        </div>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<button class="${store.class}">
  Button
</button>`} />
    </div>
  );
});
