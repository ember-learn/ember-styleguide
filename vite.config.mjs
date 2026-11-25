import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { extensions, ember, hbs, classicEmberSupport } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { kolay } from 'kolay/vite';
import rehypeShiki from '@shikijs/rehype';

/**
 * The try scenarios for Ember.js below 6.1 set ENABLE_COMPAT_BUILD.
 */
const isCompat = Boolean(process.env.ENABLE_COMPAT_BUILD);

export default defineConfig(({ mode }) => ({
  resolve: {
    // NOTE: only the demo app is allowed to use this
    alias: {
      'ember-styleguide/*': './src/*',
      'ember-styleguide': resolve('src'),
    },
  },
  plugins: [
    ...(isCompat ? [classicEmberSupport()] : []),
    hbs(),
    ember(),
    kolay({
      rehypePlugins: [
        [
          rehypeShiki,
          {
            themes: {
              light: 'github-light',
              dark: 'github-dark',
            },
            defaultColor: 'light-dark()',
          },
        ],
      ],
    }),
    babel({
      babelHelpers: 'inline',
      extensions,
    }),
  ],
  build: {
    outDir: 'dist-demo',
    /**
     * `pnpm test` builds in development mode. The tests do not use the docs
     * app, and the docs app needs a newer Ember.js than the try scenarios.
     */
    rollupOptions:
      mode === 'development'
        ? { input: { tests: 'tests/index.html' } }
        : undefined,
  },
  optimizeDeps: {
    exclude: ['kolay'],
  },
}));
