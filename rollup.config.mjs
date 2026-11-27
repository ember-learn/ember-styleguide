import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import { globSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = dirname(fileURLToPath(import.meta.url));
const babelPublishConfig = resolve(rootDirectory, './babel.publish.config.cjs');

const sourceDirectory = resolve(rootDirectory, 'src');

/**
 * Copies each file of src/assets to the same place in dist. The components refer to images with
 * `new URL('../assets/...', import.meta.url)`, which webpack 5 and Vite resolve without a loader.
 */
function copyAssets() {
  return {
    name: 'copy-assets',
    buildStart() {
      /**
       * Apps link some files by URL, such as ember-logo.png, so each file of src/assets is in dist.
       */
      for (let file of globSync('assets/**/*.*', { cwd: sourceDirectory })) {
        this.emitFile({
          type: 'asset',
          fileName: file,
          source: readFileSync(resolve(sourceDirectory, file)),
        });
      }
    },
  };
}

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  output: addon.output(),
  plugins: [
    addon.publicEntrypoints(['**/*.js']),
    addon.appReexports(['components/**/*.js', 'services/**/*.js']),
    addon.dependencies(),
    addon.gjs(),
    babel({
      extensions: ['.js', '.gjs'],
      babelHelpers: 'inline',
      configFile: babelPublishConfig,
    }),
    addon.keepAssets(['**/*.css']),
    copyAssets(),
    addon.clean(),
  ],
};
