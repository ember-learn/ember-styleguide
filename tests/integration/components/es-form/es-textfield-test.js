import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-form/es-textfield', 'Integration | Component | es form/es textfield', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-form/es-textfield}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#es-form/es-textfield}}
      template block text
    {{/es-form/es-textfield}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
