import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LogoDiscord, LogoLuminescent, LogoLuminescentFull, Nav } from '@luminescent/ui-qwik';
import { CubeOutline, LogoGithub } from 'qwik-ionicons';

export default component$(() => {
  return (
    <Nav floating fixed>
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent text-[#f0ccfb] fill-[#f0ccfb]">
        <div class="font-semibold flex items-center gap-1 text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 1rem #CB6CE6);">
          <LogoLuminescentFull width={100} class="mt-1" /> / ui
        </div>
      </Link>

      <Link q:slot="end" href="/docs" class="lum-btn lum-bg-transparent hidden sm:flex">
        <CubeOutline width={24} /> Docs
      </Link>
      <a q:slot="end" href="https://github.com/luminescentDev/ui" class="lum-btn lum-bg-transparent lum-pad-equal-md hidden sm:flex">
        <LogoGithub width={24} class="fill-current" />
      </a>
      <a q:slot="end" href="https://luminescent.dev/discord" class="lum-btn lum-bg-transparent lum-pad-equal-md hidden sm:flex">
        <LogoDiscord width={24} />
      </a>
      <a q:slot="end" href="https://luminescent.dev" class="lum-btn lum-bg-transparent lum-pad-equal-md hidden sm:flex">
        <LogoLuminescent width={24} />
      </a>

      <Link q:slot="mobile" href="/docs" class="lum-btn lum-bg-transparent w-full">
        <CubeOutline width={24} /> Docs
      </Link>
      <div q:slot='mobile' class="flex justify-evenly">
        <a q:slot="" href="https://github.com/luminescentDev/ui">
          <LogoGithub width={24} />
        </a>
        <a q:slot="end" href="https://luminescent.dev/discord">
          <LogoDiscord width={24} />
        </a>
        <a q:slot="end" href="https://luminescent.dev">
          <LogoLuminescent width={24} />
        </a>
      </div>
    </Nav>
  );
});
