import { component$ } from '@builder.io/qwik';
import { Header } from '../../index';

export default component$(() => {
  return (
    <div class="lum-card lum-bg-gray-900 lum-pad-4xl lum-pad-equal rounded-lg">
      <Header>
        Playground (v2)
      </Header>
      <div>
        <div class="lum-card lum-bg-gray-800 lum-pad-4xl lum-pad-equal rounded-lg">
          <Header subheader="Hello Luminescent v2">
            This is a card
          </Header>
        </div>
      </div>
    </div>
  );
});
