import { component$ } from '@builder.io/qwik';
import { Header } from '../../index';

export default component$(() => {
  return (
    <div class="lum-card">
      <Header>
        Playground (v2)
      </Header>
      <div>
        <div class="lum-card lum-bg-red-500/50">
          <Header subheader="Hello Luminescent v2">
            This is a card
          </Header>
        </div>
      </div>
    </div>
  );
});
