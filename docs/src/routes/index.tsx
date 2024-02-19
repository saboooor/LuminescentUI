import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Card, TextInput } from '@luminescent/ui';

export default component$(() => {
  return (
    <section class="max-w-6xl mx-auto py-20 flex flex-col gap-4">
      <Card color="red" blobs>
        <TextInput label="test" id="test" />
      </Card>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Luminescent UI Docs',
  meta: [
    {
      name: 'description',
      content: 'Luminescent UI components documentation',
    },
  ],
};
