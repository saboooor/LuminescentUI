import { component$ } from '@builder.io/qwik';
import { Header } from '../../index';

export default component$(() => {
  return (
    <div class="lum-card">
      <Header id="anchor">
        Anchor
      </Header>
      <div class="flex">
        <a href="#anchor" class={'lum-btn'}>
          Scroll to anchor
        </a>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={'<Anchor id="anchor"/>'} />
    </div>
  );
});
