import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es search', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{es-search}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#es-search}}
        template block text
      {{/es-search}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
