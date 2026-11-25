import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { extensions, ember, hbs } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { kolay } from 'kolay/vite';
import rehypeShiki from '@shikijs/rehype';

export default defineConfig({
  resolve: {
    /**
     * The docs show the addon source as it is, without a build of the addon.
     */
    alias: {
      'ember-styleguide': resolve(import.meta.dirname, '../src'),
    },
  },
  publicDir: '../public',
  plugins: [
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
  optimizeDeps: {
    exclude: ['kolay'],
  },
});
