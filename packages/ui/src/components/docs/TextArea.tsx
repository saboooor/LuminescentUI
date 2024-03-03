import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, TextArea, TextAreaRaw, Toggle } from '../../index';

interface textAreaOptions {
  output?: boolean;
}

export default component$(() => {
  const store = useStore<textAreaOptions>({});
  return (
    <Card>
      <Header>
        TextArea
      </Header>
      <Toggle id="textarea-output" onChange$={(e, element) => store.output = element.checked}
        label='output' />
      <div>
        <TextArea id="textarea" value="Text" output={store.output}>
          Text Area
        </TextArea>
      </div>
      <TextAreaRaw output value={`
<TextArea id="textarea" value="Text"${store.output ? ' output' : ''}>
  Text Area
</TextArea>`} />
    </Card>
  );
});
