import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-form/es-textarea', 'Integration | Component | es form/es textarea', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-form/es-textarea}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#es-form/es-textarea}}
      template block text
    {{/es-form/es-textarea}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
