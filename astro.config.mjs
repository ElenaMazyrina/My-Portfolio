// @ts-check
import {defineConfig, fontProviders} from 'astro/config';

import analogjsangular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  site: 'https://ElenaMazyrina.github.io',
  base: '/My-Portfolio', //path to my site inside domain
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
