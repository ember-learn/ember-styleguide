import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-heading', 'Integration | Component | es heading', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs `{{es-heading}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs `
    {{#es-heading}}
      template block text
    {{/es-heading}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});

// test('it is a heading element', function(assert) {
//
// });
// test('it has the role of heading', function(assert) {
//
// });
//test that it has the class name that is equal to the component name
