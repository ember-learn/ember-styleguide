import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es ulist', function(hooks){
  setupRenderingTest(hooks);

  test('it renders with border', async function(assert) {

    await render(hbs`{{es-ulist hasBorder=true}}`);

    assert.dom('.es-ulist').hasClass('bordered');

  });

  module('Title', function () {
    test('it renders the title with correct id', async function(assert) {
      assert.expect(2);

      await render(hbs`{{es-ulist elementId="mylist" listTitle="My List Title"}}`);

      assert.dom('#mylist').hasText('My List Title');
      assert.dom('.es-ulist').doesNotHaveClass('bordered');
    });

    test('it renders the title with sr-only class when isTitleVisible is true', async function(assert) {
      assert.expect(2);

      await render(hbs`{{es-ulist isTitleVisible=true sr-only="srClass" elementId="mylist" listTitle="My List Title"}}`);

      assert.dom('#list-mylist').hasClass('list-title');
      assert.dom('#list-mylist').hasClass('srClass');
    });

    test('it renders the title without sr-only class when isTitleVisible is false', async function(assert) {
      assert.expect(2);

      await render(hbs`{{es-ulist isTitleVisible=false sr-only="srClass" elementId="mylist" listTitle="My List Title"}}`);

      assert.dom('#list-mylist').hasClass('list-title');
      assert.dom('#list-mylist').doesNotHaveClass('srClass');
    });

  });

  module('List', function () {
    module('Ordered List', function () {

      test('the list does not have unorderded items', async function(assert){
        assert.expect(1);

        await render(hbs`{{es-ulist isUnorderedList=false}}`);

        assert.dom('.es-ulist ul').doesNotExist();
      });

    });
    module('Unordered List', function () {

      test('the id value of the list title matches the value in the aria-describedby property on the list element', async function(assert){
        assert.expect(2);

        await render(hbs`{{es-ulist elementId='mylist' isUnorderedList=true}}`);

        assert.dom('.es-ulist ul').hasAttribute('aria-describedby', 'list-mylist');
        assert.dom('.list-title').hasAttribute('id', 'list-mylist');

      });

      test('the list does not have ordered items', async function(assert){
        assert.expect(1);

        await render(hbs`{{es-ulist isUnorderedList=false}}`);

        assert.dom('.es-ulist ol').doesNotExist();
      });

      module('With items', function (hooks) {
        let listItems;
        hooks.beforeEach(function () {
          listItems = [
            {
              text: 'item 1',
              image: '/images/tomsters/columbus.png',
              alt: 'Columbus'
            },
            {
              text: 'item 2',
              link: 'http://emberjs.com'
            },
            {
              text: 'item 3',
              link: 'http://guides.emberjs.com',
              image: '/images/tomsters/chicago.png',
              alt: 'Chicago'
            },
          ]
          this.set('listItems', listItems);
        });

        test('the list has correct aria label and classes', async function(assert){
          assert.expect(3);

          await render(hbs`{{es-ulist elementId='mylist' isUnorderedList=true}}`);

          assert.dom('.es-ulist ul').hasAttribute('aria-labelledby', 'list-mylist');
          assert.dom('.es-ulist ul').hasClass('list');
          assert.dom('.es-ulist ul').hasClass('list-default');

        });

        test('the list is populated', async function(assert){
          assert.expect(14);

          await render(hbs`{{es-ulist isUnorderedList=true listItems=listItems}}`);

          assert.dom('.es-ulist ul li').exists({count: 3});
          assert.dom('.es-ulist ul li:nth-child(1) img').hasAttribute('src', '/images/tomsters/columbus.png');
          assert.dom('.es-ulist ul li:nth-child(1) img').hasAttribute('alt', 'Columbus');
          assert.dom('.es-ulist ul li:nth-child(1) img').hasClass('list-item-image');
          assert.dom('.es-ulist ul li:nth-child(1)').hasText('item 1');

          assert.dom('.es-ulist ul li:nth-child(2) a').hasAttribute('href', 'http://emberjs.com');
          assert.dom('.es-ulist ul li:nth-child(2) a').hasClass('list-item-link');
          assert.dom('.es-ulist ul li:nth-child(2)').hasText('item 2');

          assert.dom('.es-ulist ul li:nth-child(3) a').hasAttribute('href', 'http://guides.emberjs.com');
          assert.dom('.es-ulist ul li:nth-child(3) img').hasAttribute('src', '/images/tomsters/chicago.png');
          assert.dom('.es-ulist ul li:nth-child(3) img').hasAttribute('alt', 'Chicago');
          assert.dom('.es-ulist ul li:nth-child(3) img').hasClass('list-item-image');
          assert.dom('.es-ulist ul li:nth-child(3) a').hasClass('list-item-link');
          assert.dom('.es-ulist ul li:nth-child(3)').hasText('item 3');

        });
      });

    });
  })
});
