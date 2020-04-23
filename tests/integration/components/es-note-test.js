import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es note', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<EsNote @mascot="tomster" />`);

    assert.dom('[data-test-es-note-heading]').hasText('Tomster says...');

    await render(hbs`
      <EsNote>
        template block text
      </EsNote>
    `);

    assert.dom('.cta-note-message').hasText('template block text');
  });

  test('out of 2 mascots randomly selects each at least 1 in 15 renders', async function(assert) {
    const renderedNames = [];

    for (let i = 0; i < 15; i++) {
      let name;

      await render(hbs`<EsNote />`);
      name = find('[data-test-es-note-heading]').textContent.trim().split(' ')[0];

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
