import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

function generateList(number) {
  return new Array(number).fill({
    text: 'Hakubo was here',
    link: 'emberjs.com',
    image: 'https://emberjs.com/images/tomsters/atlanta-zoey-38822a67.png',
  });
}

module('Integration | Component | es ulist', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<EsUlist @listTitle="Zoey by City"/>`);

    assert.dom('.list-title').hasText('Zoey by City');
    assert.dom('.list').exists();
  });

  test('the list is populated', async function(assert) {
    this.set('listItems', generateList(2));

    await render(hbs`
      <EsUlist
        @listItems={{listItems}}
      />
    `);

    assert.dom('.list-item').exists({ count: 2 });
    assert.dom('.list-item:first-child').hasText('Hakubo was here');
  });

  test('a list with images renders the images correctly', async function(assert) {
    this.set('listItems', generateList(1));

    await render(hbs`
      <EsUlist
        @listItems={{listItems}}
        @hasImage={{true}}
      />
    `);

    assert
      .dom('.list-item-image')
      .hasAttribute(
        'src',
        'https://emberjs.com/images/tomsters/atlanta-zoey-38822a67.png',
      );
  });

  test('the id value of the list title matches the value in the aria-describedby property on the list element', async function(assert) {
    await render(hbs`<EsUlist @elementId="test" />`);

    assert.dom('.list').hasAttribute('aria-labelledby', 'list-test')
    assert.dom('.list-title').hasAttribute('id', 'list-test');
  });

  test('when @hasLink is set to true, a link element renders', async function(assert) {
    this.set('listItems', generateList(1));

    await render(hbs`
      <EsUlist
        @listTitle="Zoey by City"
        @listItems={{listItems}}
        @hasLink={{true}}
      />
    `);

    assert.dom('.list-item-link').hasAttribute('href', 'emberjs.com');
  });
});
