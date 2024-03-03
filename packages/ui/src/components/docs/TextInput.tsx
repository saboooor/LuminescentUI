import { component$ } from '@builder.io/qwik';
import { Card, Header, TextAreaRaw, TextInput } from '../../index';

export default component$(() => {
  return (
    <Card>
      <Header>
        TextInput
      </Header>
      <div>
        <TextInput id="text-input" value="Text">
          Text Input
        </TextInput>
      </div>
      <TextAreaRaw output value={`
<TextInput id="text-input" value="Text">
  Text Input
</TextInput>`} />
    </Card>
  );
});
