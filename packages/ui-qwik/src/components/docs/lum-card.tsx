import { component$, useStore } from '@builder.io/qwik';
import { Blobs, Header, Toggle } from '../../index';

import { defaultClasses } from '../../../../ui/src/components/card';

export default component$(() => {
  const store = useStore({
    class: 'lum-card',
    blur: false,
    blobs: false,
  });

  return (
    <div class="lum-card">
      <Header id="card" anchor>
        Card
      </Header>
      <div>
        <label for="card-class">class</label>
        <input id="card-class" class="w-full lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md"
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
      <Toggle id="card-blur" onChange$={(e, element) => store.blur = element.checked}
        label="blur" />
      <Toggle id="card-blobs" onChange$={(e, element) => store.blobs = element.checked}
        label="blobs" />
      <div class="lum-card">
        <div>
          <div class={{
            [store.class]: true,
            'relative': true,
          }}>
            {store.blur &&
              <div class="lum-card lum-bg-transparent absolute inset-0 w-full h-full z-10 backdrop-blur-xl opacity-0 hover:opacity-100">
                <Header subheader="Hello Luminescent v2">
                  Blur Content
                </Header>
              </div>
            }
            <Header subheader="Hello Luminescent v2">
              This is a card
            </Header>
            {store.blobs &&
              <Blobs color='red' class={{ 'overflow-clip rounded-lg': true }}/>
            }
          </div>
        </div>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<div class="${store.blur || store.blobs ? 'relative ' : ''}${store.class}">
  ${store.blur ? `
  <div class="lum-card lum-pad-4xl lum-pad-equal transition-all absolute flex inset-0 w-full h-full z-10 backdrop-blur-xl rounded-lg opacity-0 hover:opacity-100">
    <Header subheader="Hello Luminescent v2">
      Blur Content
    </Header>
  </div>
  ` : ''}
  <Header subheader="Hello Luminescent v2">
    This is a card
  </Header>
  ${store.blobs ? `
  <Blobs color='red' class={{ "overflow-clip rounded-lg": true }}/>
  ` : ''}
</div>`} />
    </div>
  );
});
