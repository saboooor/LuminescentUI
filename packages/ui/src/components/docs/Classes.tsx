import { component$ } from '@builder.io/qwik';
import {
  Card, Header,
} from '../../index';

export default component$(() => {
  return (
    <Card>
      <Header id="classes" anchor>
        Classes
      </Header>
      <p>Background Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg">
        lum-bg-[color]
      </p>
      <p>Element Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg">
        lum-btn lum-input
      </p>
      <p>Padding Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg">
        lum-pad-xs lum-pad-sm lum-pad-md lum-pad-lg lum-pad-xl lum-pad-equal
      </p>
    </Card>
  );
});
