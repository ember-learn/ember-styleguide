import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-accordion/es-panel', 'Integration | Component | es accordion/es panel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-accordion/es-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#es-accordion/es-panel}}
      template block text
    {{/es-accordion/es-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
