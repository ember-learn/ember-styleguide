import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = dirname(fileURLToPath(import.meta.url));
const babelPublishConfig = resolve(rootDirectory, './babel.publish.config.cjs');

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  output: addon.output(),
  plugins: [
    addon.publicEntrypoints(['**/*.js']),
    addon.appReexports([
      'components/**/*.js',
      'services/**/*.js',
    ]),
    addon.dependencies(),
    addon.gjs(),
    babel({
      extensions: ['.js', '.gjs'],
      babelHelpers: 'inline',
      configFile: babelPublishConfig,
    }),
    addon.keepAssets(['**/*.css']),
    addon.clean(),
  ],
};
