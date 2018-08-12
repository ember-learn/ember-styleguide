import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';
import { set, setProperties } from '@ember/object';
import { run } from '@ember/runloop';

let author, postDate, postUrl, postTitle;

moduleForComponent('es-blog-heading', 'Integration | Component | es blog heading', {
  integration: true,
  beforeEach() {
    author = 'Sara Poster';
    postDate = '03-20-2018';
    postUrl = 'https://emberjs.com/blog';
    postTitle = 'Pretty Awesome Blog Post';

    setProperties(this, {
      author,
      postDate,
      postUrl,
      postTitle
    });

    this.render(hbs`
      {{es-blog-heading
        author=author
        postDate=postDate
        postUrl=postUrl
        postTitle=postTitle
      }}
    `);
  },
  afterEach() {
    author = postDate = postUrl = postTitle = null;
  }
});

test('it renders', function(assert) {
  assert.equal(
    find('.post-title.list-view a'),
    postUrl,
    'displays title as link'
  );
  assert.equal(
    find('.post-title.list-view').textContent.trim(),
    postTitle,
    'displays title'
  );
  assert.equal(
    find('.post-date').textContent.trim(),
    'Mar 20, 2018',
    'displays formatted date'
  );
  assert.equal(
    find('.post-author').textContent.trim(),
    `By ${author}`,
    'displays author'
  );
});

test('renders correct title format', function(assert) {
  assert.equal(
    find('.post-title.list-view a'),
    postUrl,
    'displays title as link when url is provided'
  );
  assert.ok(
    find('.post-title.list-view'),
    'displays list view title when a url is provided'
  );

  run(() => {
    set(this, 'postUrl', null);
  });

  assert.notOk(
    find('.post-title.list-view a'),
    'does not display title as link when a url is not provided'
  );
  assert.ok(
    find('.post-title.page-view'),
    'displays page view title when a url is provided'
  );
});
