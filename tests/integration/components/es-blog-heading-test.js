import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import {
  find,
} from 'ember-native-dom-helpers';
import {
  set,
  setProperties,
} from '@ember/object';
import {
  run,
} from '@ember/runloop';

let author, postDate, postUrl, postTitle, postType;

moduleForComponent('es-blog-heading', 'Integration | Component | es blog heading', {
  integration: true,
  beforeEach() {
    author = 'Sara Poster';
    postDate = '03-20-2018';
    postUrl = 'https://emberjs.com/blog';
    postTitle = 'Pretty Awesome Blog Post';
    postType = null;

    setProperties(this, {
      author,
      postDate,
      postUrl,
      postTitle,
      postType,
    });

    this.render(hbs`
      {{es-blog-heading
        author=author
        postDate=postDate
        postType=postType
        postUrl=postUrl
        postTitle=postTitle
      }}
    `);
  },
  afterEach() {
    author = postDate = postUrl = postTitle = postType = null;
  }
});

test('it renders', function(assert) {
  assert.equal(
    find('.post-title a'),
    postUrl,
    'displays title as link'
  );
  assert.equal(
    find('h2.post-title').textContent.trim(),
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
  assert.notOk(
    find('.post-tag'),
    'does not tag if not set'
  );
});

test('displays proper tag', function(assert) {
  assert.notOk(
    find('.post-tag'),
    'does not tag if not set'
  );

  run(() => {
    set(this, 'postType', 'guest');
  });

  assert.equal(
    find('.post-tag').textContent.trim(),
    'Guest Post',
    'displays guest tag'
  );

  run(() => {
    set(this, 'postType', 'syndicated');
  });

  assert.equal(
    find('.post-tag').textContent.trim(),
    'Syndicated Post',
    'displays syndicated tag'
  );
});

test('renders correct title format', function(assert) {
  assert.equal(
    find('.post-title a'),
    postUrl,
    'displays title as link when url is provided'
  );
  assert.ok(
    find('h2.post-title'),
    'displays title with h2 tag when url provided'
  );

  run(() => {
    set(this, 'postUrl', null);
  });

  assert.notOk(
    find('.post-title a'),
    'does not display title as link when url is not provided'
  );
  assert.ok(
    find('h1.post-title'),
    'displays title with h1 tag when url provided'
  );
});
