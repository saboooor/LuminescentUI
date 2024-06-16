import { component$ } from '@builder.io/qwik';
import { Card, Header } from '../../index';

export default component$(() => {
  return (
    <Card>
      <Header>
        Playground (Button v2)
      </Header>
      <div>
        <button class="btn btn-xs btn-square btn-gray-800 rounded-md">
          Hello World
        </button>
      </div>
    </Card>
  );
});
