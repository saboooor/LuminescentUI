import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import { Button, LogoLuminescentFull } from '@luminescent/ui';
import { CubeOutline } from 'qwik-ionicons';

export default component$(() => {
  return <>
    <section class="flex mx-auto max-w-7xl px-4 items-center justify-center min-h-[calc(100svh)] pt-24">
      <div class="text-center justify-center flex relative align-center w-full">
        <div class="flex flex-col items-center gap-4 sm:gap-6 w-full px-4">
          <h1 class="text-gray-100 text-3xl sm:text-6xl font-bold animate-in fade-in slide-in-from-top-8 anim-duration-1000">
            <div class={{
              'text-[#f0ccfb] fill-[#f0ccfb]': true,
            }}>
              <div class="font-semibold flex items-center gap-2 sm:gap-5 text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 1rem #CB6CE6);">
                <LogoLuminescentFull width={400} class="mt-2 hidden sm:flex" />
                <LogoLuminescentFull width={200} class="mt-1 flex sm:hidden" /> / ui
              </div>
            </div>
          </h1>
          <h2 class="text-gray-300 text-lg sm:text-2xl animate-in fade-in slide-in-from-top-16 anim-duration-1000">
            Another component library for Qwik.
          </h2>
          <div class="flex flex-col gap-2 mt-6 animate-in fade-in slide-in-from-top-24 anim-duration-1000">
            <div class="flex flex-col sm:flex-row gap-2 justify-center">
              <Link href="/docs">
                <Button color="purple" size="xl" class={{ 'w-full': true }}>
                  <CubeOutline width="30" class="text-3xl" /> Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
});

export const head: DocumentHead = {
  title: 'Birdflop - Minecraft Hosting & Resources',
  meta: [
    {
      name: 'description',
      content: 'Birdflop is a registered 501(c)(3) nonprofit Minecraft host aiming to provide affordable and accessible hosting and resources. Check out our plans starting at $1.88/GB RAM for some of the industry\'s fastest and cheapest servers, or use our free public resources.',
    },
    {
      name: 'og:description',
      content: 'Birdflop is a registered 501(c)(3) nonprofit Minecraft host aiming to provide affordable and accessible hosting and resources. Check out our plans starting at $1.88/GB RAM for some of the industry\'s fastest and cheapest servers, or use our free public resources.',
    },
    {
      name: 'og:image',
      content: '/branding/icon.png',
    },
  ],
};
