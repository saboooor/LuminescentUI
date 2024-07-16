import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import { LogoDiscord, LogoLuminescentFull } from '@luminescent/ui-qwik';
import { CubeOutline, LogoGithub } from 'qwik-ionicons';

export default component$(() => {
  return <>
    <section class="flex mx-auto max-w-7xl px-4 items-center justify-center min-h-[calc(100svh)] pt-24">
      <div class="text-center justify-center flex relative align-center w-full">
        <div class="flex flex-col items-center gap-4 sm:gap-6 w-full px-4">
          <h1 class="relative text-gray-100 text-3xl sm:text-6xl font-bold animate-in fade-in slide-in-from-top-8 anim-duration-1000">
            <div style="filter: drop-shadow(0 0 3rem #CB6CE6);">
              <div class="font-semibold flex items-center gap-2 sm:gap-5 text-[#f0ccfb] fill-[#f0ccfb] select-none" style="filter: drop-shadow(0 0 5rem #CB6CE6);">
                <LogoLuminescentFull width={400} class="mt-2 hidden sm:flex" />
                <LogoLuminescentFull width={200} class="mt-1 flex sm:hidden" /> / ui
              </div>
            </div>
          </h1>
          <h2 class="text-gray-300 text-lg sm:text-2xl animate-in fade-in slide-in-from-top-16 anim-duration-1000 mb-12">
            Another component library for Qwik built with Tailwind CSS
          </h2>
          <div class="flex flex-col gap-2 animate-in fade-in slide-in-from-top-24 anim-duration-1000">
            <div class="flex flex-col sm:flex-row gap-2 justify-center">
              <Link class={'lum-btn lum-pad-md text-base lum-bg-transparent hover:lum-bg-gray-800 rounded-md'} href="/docs">
                <button color="blue" size="xl" class={{ 'w-full': true }}>
                  <CubeOutline width={30} class="text-3xl" /> Docs
                </button>
              </Link>
              <a class={'lum-btn lum-pad-md text-base lum-bg-transparent hover:lum-bg-gray-800 rounded-md'} href="https://luminescent.dev" color="pink" size="xl" class={{ 'w-full py-5': true }}>
                <LogoLuminescentFull width={120} />
              </a>
            </div>
            <div class="flex gap-2 justify-center">
              <a class={'lum-btn lum-pad-md text-base lum-bg-transparent hover:lum-bg-gray-800 rounded-md'} href="https://luminescent.dev/discord" size="xl" transparent>
                <LogoGithub width={30} />
              </a>
              <a class={'lum-btn lum-pad-md text-base lum-bg-transparent hover:lum-bg-gray-800 rounded-md'} href="https://github.com/luminescentDev/ui" size="xl" transparent color="indigo">
                <LogoDiscord width={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
});

export const head: DocumentHead = {
  title: 'Luminescent / ui',
  meta: [
    {
      name: 'description',
      content: 'Another component library for Qwik built with Tailwind CSS by Luminescent',
    },
    {
      name: 'og:description',
      content: 'Another component library for Qwik built with Tailwind CSS by Luminescent',
    },
  ],
};
