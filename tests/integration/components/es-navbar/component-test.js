import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-navbar', 'Integration | Component | es navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-navbar/component}}`);

  assert.equal(this.$('label').text().trim(), 'Search');

  // Template block usage:
  this.render(hbs`
    {{#es-navbar/component}}
      <div class="block-text">template block text</div>
    {{/es-navbar/component}}
  `);

  assert.equal(this.$('.block-text').text().trim(), 'template block text');
});
