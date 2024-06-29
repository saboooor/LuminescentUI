import { component$ } from '@builder.io/qwik';
import { Card, Header, TextAreaRaw } from '../../index';

export default component$(() => {
  return (
    <Card>
      <Header id="anchor">
        Anchor
      </Header>
      <div class="flex">
        <a href="#anchor" class={'lum-btn lum-pad-md lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md'}>
          Scroll to anchor
        </a>
      </div>
      <TextAreaRaw output value={'<Anchor id="anchor"/>'} />
    </Card>
  );
});
