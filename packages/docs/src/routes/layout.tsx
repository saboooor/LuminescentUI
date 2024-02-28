import { component$, Slot } from '@builder.io/qwik';
import { Link, type RequestHandler } from '@builder.io/qwik-city';
import { Button, LogoLuminescentFull, Nav } from '@luminescent/ui';
import { CubeOutline } from 'qwik-ionicons';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <Nav floating fixed>
        <Link q:slot="start" href="/">
          <Button color="transparent" class={{
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
          <Button color="transparent">
            <CubeOutline width="24" /> Docs
          </Button>
        </Link>
        <Link q:slot="mobile" href="/docs">
          <Button color="transparent">
            <CubeOutline width="24" /> Docs
          </Button>
        </Link>
      </Nav>
      <main>
        <Slot />
      </main>
    </>
  );
});
