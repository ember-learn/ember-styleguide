import Route from '@ember/routing/route';
import { setupKolay } from 'kolay/setup';
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import { createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

export default class ApplicationRoute extends Route {
  async model() {
    const highlighter = await createHighlighterCore({
      themes: [
        import('shiki/themes/github-dark.mjs'),
        import('shiki/themes/github-light.mjs'),
      ],
      langs: [
        import('shiki/langs/javascript.mjs'),
        import('shiki/langs/typescript.mjs'),
        import('shiki/langs/bash.mjs'),
        import('shiki/langs/css.mjs'),
        import('shiki/langs/html.mjs'),
        import('shiki/langs/handlebars.mjs'),
        import('shiki/langs/glimmer-js.mjs'),
        import('shiki/langs/glimmer-ts.mjs'),
      ],
      engine: createOnigurumaEngine(() => import('shiki/wasm')),
    });

    const manifest = await setupKolay(this, {
      rehypePlugins: [
        [
          rehypeShikiFromHighlighter,
          highlighter,
          {
            themes: {
              light: 'github-light',
              dark: 'github-dark',
            },
            defaultColor: 'light-dark()',
          },
        ],
      ],
    });

    return { manifest };
  }
}
