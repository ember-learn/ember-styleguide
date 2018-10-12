import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es heading', function(hooks){
    setupRenderingTest(hooks);

  test('it renders', async function(assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await render(hbs `{{es-heading}}`);

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs `
      {{#es-heading}}
        template block text
      {{/es-heading}}
    `);

      assert.equal(this.element.textContent.trim(), 'template block text');
  });

  // test('it is a heading element', function(assert) {
  //
  // });
  // test('it has the role of heading', function(assert) {
  //
  // });
  //test that it has the class name that is equal to the component name
});
