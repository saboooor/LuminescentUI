import { component$ } from '@builder.io/qwik';
import { Card, Header } from '../../index';

export default component$(() => {
  return (
    <Card>
      <Header>
        Playground (v2)
      </Header>
      <div>
        <input class="lum-input lum-bg-gray-800 hover:lum-bg-gray-700 lum-pad-sm rounded-lg">
        </input>
      </div>
    </Card>
  );
});
