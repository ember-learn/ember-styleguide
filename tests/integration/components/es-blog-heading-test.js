import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { set, setProperties } from '@ember/object';
import { run } from '@ember/runloop';

let author, postDate, postUrl, postTitle;

module('Integration | Component | es blog heading', function(hooks) {
  setupRenderingTest(hooks);

  hooks.before(async () => {
    author = 'Sara Poster';
    postDate = '03-20-2018';
    postUrl = 'https://emberjs.com/blog';
    postTitle = 'Pretty Awesome Blog Post';
  });

  test('it renders', async function(assert) {
    setProperties(this, {
      author,
      postDate,
      postUrl,
      postTitle,
    });

    await render(hbs`
      <EsBlogHeading
        @author={{this.author}}
        @postDate={{this.postDate}}
        @postUrl={{this.postUrl}}
        @postTitle={{this.postTitle}}
      />
    `);

    assert.dom('.post-title.list-view a').hasAttribute('href', postUrl, 'displays title as link');
    assert.dom('.post-title.list-view').hasText(postTitle, 'displays title');
    assert.dom('.post-author').hasText(`By ${author}`, 'displays author');
  });

  test('renders correct title format', async function(assert) {
    setProperties(this, {
      author,
      postDate,
      postUrl,
      postTitle,
    });

    await render(hbs`
      <EsBlogHeading
        @author={{this.author}}
        @postDate={{this.postDate}}
        @postUrl={{this.postUrl}}
        @postTitle={{this.postTitle}}
      />
    `);

    assert.dom('.post-title.list-view a').hasAttribute('href', postUrl, 'displays title as link when url is provided');
    assert.dom('.post-title.list-view').exists('displays list view title when a url is provided');

    run(() => {
      set(this, 'postUrl', null);
    });

    assert.dom('.post-title.list-view a').doesNotExist('does not display title as link when a url is not provided');
    assert.dom('.post-title.page-view').exists('displays page view title when a url is provided');
  });
});
