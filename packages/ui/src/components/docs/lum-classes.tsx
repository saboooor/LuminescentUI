import { component$ } from '@builder.io/qwik';
import { Header } from '../../index';

export default component$(() => {
  return (
    <div class="lum-card lum-bg-gray-900 lum-pad-4xl lum-pad-equal rounded-lg">
      <Header id="classes" anchor loading>
        Classes
      </Header>
      <div class="lum-loading w-6 h-6" />
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
        lum-pad-equal lum-pad-xs lum-pad-sm text-sm lum-pad-md text-base lum-pad-lg lum-pad-xl lum-pad-2xl lum-pad-3xl lum-pad-4xl lum-pad-5xl
      </p>
    </div>
  );
});
