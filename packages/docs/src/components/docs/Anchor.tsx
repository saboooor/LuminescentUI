import { component$ } from '@builder.io/qwik';
import { ButtonAnchor, Card, Header } from '@luminescent/ui';

export default component$(() => {
  return (
    <Card>
      <Header id="anchor">
        Anchor
      </Header>
      <div class="flex">
        <ButtonAnchor href="#anchor">
          Scroll to anchor
        </ButtonAnchor>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={'<Anchor id="anchor"/>'} />
    </Card>
  );
});
