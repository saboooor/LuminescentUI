<img src="./branding.png" width="400">

To use the Luminescent UI Tailwind Library, you need to install the package from npm.

```bash
pnpm install @luminescent/ui
```

Once installed, include the following to your tailwind config

```javascript
/** @type {import('tailwindcss').Config} */

import tailwindConfig from '@luminescent/ui/config';

export default {
  plugins: [
    require('@luminescent/ui'),
  ],
};
```

Once finished, you can use the classes included, shown in the documentation.