// @ts-check
import { defineConfig } from 'astro/config';

import analogjsangular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  site: 'https://ElenaMazyrina.github.io',
  base: 'my-portfolio',
  integrations: [analogjsangular({
    vite: {
      inlineStylesExtension: 'scss|sass|less'
    }
  })],
  vite: {
    ssr: {
      // transform these packages during SSR. Globs supported
      noExternal: ['@rx-angular/**'],
    }
  }
});
