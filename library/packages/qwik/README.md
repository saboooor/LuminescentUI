<img src="./branding.png" width="400">

To use the Luminescent UI Qwik Library, you need to set up tailwind and then install the package from npm.

```bash
pnpm install @anuragroy/tailwindcss-animate @luminescent/ui
```

Once installed, since this is a tailwind based library, you need to include the following to your tailwind config

The theme and plugins properties are optional if you don't want to use the Blobs component.
The luminescent color palette is also exported, you can access it from tailwindConfig.theme.extend.colors.luminescent.

```javascript
/** @type {import('tailwindcss').Config} */

import tailwindConfig from '@luminescent/ui-config';

export default {
  // required
  content: [
    // ...
    ...tailwindConfig.content,
  ],
  // only for blobs in the Card component
  theme: {
    extend: {
      animation: {
        // ...
        ...tailwindConfig.theme.extend.animation,
      },
      keyframes: {
        // ...
        ...tailwindConfig.theme.extend.keyframes,
      },
    },
  },
  plugins: [
    // ...
    require('@anuragroy/tailwindcss-animate'),
  ],
};
```

Once finished, you can import the components you need from the package.

```javascript
import { Button } from '@luminescent/ui';
```

All components respect the theme and color palette that is set in your project.
e.g. if your tailwind gray is a different color, the components will reflect that.