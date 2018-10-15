import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es navbar', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{es-navbar/component}}`);

    assert.equal(find('label').textContent.trim(), 'Search');

    // Template block usage:
    await render(hbs`
      {{#es-navbar/component}}
        <div class="block-text">template block text</div>
      {{/es-navbar/component}}
    `);

    assert.equal(find('.block-text').textContent.trim(), 'template block text');
  });

});
