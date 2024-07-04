import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Button, ButtonAnchor, LogoDiscord, LogoLuminescent, LogoLuminescentFull, Nav } from '@luminescent/ui';
import { CubeOutline, LogoGithub } from 'qwik-ionicons';

export default component$(() => {
  return (
    <Nav floating fixed>
      <Link q:slot="start" href="/">
        <Button transparent class={{
          'text-[#f0ccfb] fill-[#f0ccfb]': true,
        }}>
          <div class="font-semibold flex items-center gap-1 text-[#f0ccfb] fill-[#f0ccfb]" style="filter: drop-shadow(0 0 1rem #CB6CE6);">
            <LogoLuminescentFull width={100} class="mt-1" /> / ui
          </div>
        </Button>
      </Link>

      <Link q:slot="end" href="/docs" class={{
        'hidden sm:flex': true,
      }}>
        <Button transparent>
          <CubeOutline width="24" /> Docs
        </Button>
      </Link>
      <ButtonAnchor q:slot="end" square href="https://github.com/luminescentDev/ui" transparent class={{
        'hidden sm:flex': true,
      }}>
        <LogoGithub width={24} />
      </ButtonAnchor>
      <ButtonAnchor q:slot="end" square href="https://luminescent.dev/discord" transparent class={{
        'hidden sm:flex': true,
      }}>
        <LogoDiscord width={24} />
      </ButtonAnchor>
      <ButtonAnchor q:slot="end" square href="https://luminescent.dev" transparent class={{
        'hidden sm:flex': true,
      }}>
        <LogoLuminescent width={24} />
      </ButtonAnchor>

      <Link q:slot="mobile" href="/docs" >
        <Button transparent class={{ 'w-full': true }}>
          <CubeOutline width="24" /> Docs
        </Button>
      </Link>
      <div q:slot='mobile' class="flex justify-evenly">
        <ButtonAnchor q:slot="" square href="https://github.com/luminescentDev/ui" transparent>
          <LogoGithub width={24} />
        </ButtonAnchor>
        <ButtonAnchor q:slot="end" square href="https://luminescent.dev/discord" transparent>
          <LogoDiscord width={24} />
        </ButtonAnchor>
        <ButtonAnchor q:slot="end" square href="https://luminescent.dev" transparent>
          <LogoLuminescent width={24} />
        </ButtonAnchor>
      </div>
    </Nav>
  );
});
