import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-ulist/image', 'Integration | Component | es ulist/image', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-ulist/image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#es-ulist/image}}
      template block text
    {{/es-ulist/image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
