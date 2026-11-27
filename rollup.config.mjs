import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import { globSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = dirname(fileURLToPath(import.meta.url));
const babelPublishConfig = resolve(rootDirectory, './babel.publish.config.cjs');

const sourceDirectory = resolve(rootDirectory, 'src');
const ASSET = /\.(svg|png|jpg|woff2?)$/;

/**
 * Keeps each import of an image or font as a relative import, and copies the file to the same place in dist.
 * The app's bundler then resolves the file, as it does for any other import.
 */
function keepAssetImports() {
  return {
    name: 'keep-asset-imports',
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
    resolveId(source, importer) {
      if (!ASSET.test(source) || !importer) return null;

      return { id: source, external: 'relative' };
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
    keepAssetImports(),
    addon.clean(),
  ],
};
