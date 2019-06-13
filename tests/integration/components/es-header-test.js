import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es header', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await render(hbs `{{es-header}}`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs `
      {{#es-header}}
        template block text
      {{/es-header}}
    `);

      assert.dom(this.element).hasText('template block text');
  });

  test('it uses the header html element', async function(assert) {
      await render(hbs `{{es-header}}`);
      assert.dom('header').exists({ count: 1 }, "the header uses the header html element!");
  });

  test('it has the role of banner', async function(assert) {
      await render(hbs `{{es-header}}`);
      assert.dom('header').hasAttribute('role', 'banner', 'header has the role of banner');
  });

  //the class matches the component name
  //but how do I make it so it just checks for the one of them?
  test('it has the className es-header', async function(assert) {
      await render(hbs `{{es-header}}`);
      assert.dom('header').hasAttribute('class', 'es-header ember-view', 'header has the class of es-header');
  });
});
