import { component$ } from '@builder.io/qwik';
import { ButtonAnchor, Card, Header, TextAreaRaw } from '@luminescent/ui';

export default component$(() => {
  return (
    <Card>
      <Header id="anchor">
        Anchor
      </Header>
      <ButtonAnchor href="#anchor">
        Scroll to anchor
      </ButtonAnchor>
      <TextAreaRaw output value={'<Anchor id="anchor"/>'} />
    </Card>
  );
});
