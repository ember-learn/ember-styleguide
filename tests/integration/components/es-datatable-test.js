import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-datatable', 'Integration | Component | es datatable', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-datatable}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#es-datatable}}
      template block text
    {{/es-datatable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
