import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setProperties } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es note', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const testHeading = 'Tomster says... Zoey says...';

    await render(hbs`{{es-note}}`);

    assert.ok(
      testHeading.includes(find('.cta-note-heading').textContent.trim()),
      'displays heading'
    );
    assert.dom('.cta-note-message').hasText('Hello!!! No message provided.');

    await render(hbs`
      {{#es-note}}
        template block text
      {{/es-note}}
    `);

    assert.ok(
      testHeading.includes(find('.cta-note-heading').textContent.trim()),
      'displays heading'
    );

    assert.dom('.cta-note-message').hasText('template block text');
  });

  test('out of 2 mascots randomly selects each at least 1 in 10 renders', async function(assert) {
    const mascots = [
      { image: 'image/tomster', name: 'Tomster' },
      { image: 'image/zoey', name: 'Zoey' },
    ];
    const renderedNames = [];

    setProperties(this, {
      mascots,
    });

    for (let i = 0; i < 10; i++) {
      let name;

      await render(hbs`{{es-note mascots=mascots}}`);
      name = find('.cta-note-heading').textContent.trim().split(' ')[0];

      renderedNames.push(name);
    }

    assert.ok(
      renderedNames.includes('Tomster'),
      'Tomster rendered'
    );

    assert.ok(
      renderedNames.includes('Zoey'),
      'Zoey rendered'
    );

  });
});
