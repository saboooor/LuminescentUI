import { component$ } from '@builder.io/qwik';
import { Header } from '../../index';

export default component$(() => {
  return (
    <div class="lum-card">
      <Header id="classes" anchor>
        Classes
      </Header>
      <p>Background Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg whitespace-pre-wrap">
        lum-bg-{'<color>/[opacity]'}
      </p>
      <p>Element Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg whitespace-pre-wrap">
        lum-btn lum-card lum-input
      </p>
      <p>Padding Classes</p>
      <p class="flex lum-bg-gray-800 py-2 px-3 rounded-lg whitespace-pre-wrap">
        lum-pad-xs lum-pad-sm text-sm lum-pad-md text-base lum-pad-lg lum-pad-xl lum-pad-2xl lum-pad-3xl lum-pad-4xl lum-pad-5xl
        lum-pad-equal-xs lum-pad-equal-sm lum-pad-equal-md lum-pad-equal-lg lum-pad-equal-xl lum-pad-equal-2xl lum-pad-equal-3xl lum-pad-equal-4xl lum-pad-equal-5xl
      </p>
    </div>
  );
});
