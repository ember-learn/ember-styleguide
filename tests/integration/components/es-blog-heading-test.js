import { find, render } from '@ember/test-helpers';
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
      {{es-blog-heading
        author=author
        postDate=postDate
        postUrl=postUrl
        postTitle=postTitle
      }}
    `);

    assert.equal(find('.post-title.list-view a').getAttribute('href'), postUrl, 'displays title as link');
    assert.equal(find('.post-title.list-view').textContent.trim(), postTitle, 'displays title');
    assert.equal(find('.post-date').textContent.trim(), 'Mar 20, 2018', 'displays formatted date');
    assert.equal(find('.post-author').textContent.trim(), `By ${author}`, 'displays author');
  });

  test('renders correct title format', async function(assert) {
    setProperties(this, {
      author,
      postDate,
      postUrl,
      postTitle,
    });
    
    await render(hbs`
      {{es-blog-heading
        author=author
        postDate=postDate
        postUrl=postUrl
        postTitle=postTitle
      }}
    `);

    assert.equal(find('.post-title.list-view a').getAttribute('href'), postUrl, 'displays title as link when url is provided');
    assert.ok(find('.post-title.list-view'), 'displays list view title when a url is provided');

    run(() => {
      set(this, 'postUrl', null);
    });

    assert.notOk(find('.post-title.list-view a'), 'does not display title as link when a url is not provided');
    assert.ok(find('.post-title.page-view'), 'displays page view title when a url is provided');
  });
});
