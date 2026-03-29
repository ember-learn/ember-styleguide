import { defineConfig } from 'vite';
import { extensions, ember, hbs } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { kolay } from 'kolay/vite';
import rehypeShiki from '@shikijs/rehype';

export default defineConfig({
  resolve: {
    // NOTE: only the demo app is allowed to use this
    alias: {
      'ember-styleguide/*': './src/*',
    },
  },
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
  build: {
    outDir: 'dist-demo',
  },
  optimizeDeps: {
    exclude: ['kolay'],
  },
});
