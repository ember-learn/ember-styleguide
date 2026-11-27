import { globSync } from 'node:fs';

/**
 * One snapshot per docs page.
 * Pages are the `.gjs.md` files in `app/templates`, served without the extension.
 */
const pages = globSync('app/templates/**/*.gjs.md', {
  cwd: import.meta.dirname,
})
  .map((file) => file.replace(/^app\/templates/, '').replace(/\.gjs\.md$/, ''))
  .sort();

export default ['/'].concat(pages).map((url) => ({
  name: url,
  url,
  waitForSelector: '.docs-page',
}));
