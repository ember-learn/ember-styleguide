import { click, render } from '@ember/test-helpers';
import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setProperties, set } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | es button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<EsButton />`);

    assert.dom('button').hasText('');

    await render(hbs`
      <EsButton>
        template block text
      </EsButton>
    `);

    assert.dom('button').hasText('template block text');
  });

  test('has html button tag and base class', async function (assert) {
    await render(hbs`<EsButton />`);
    assert.dom('button').exists('has button tag');
    assert.ok(document.querySelector('.es-button'), 'has base es-button class');
  });

  test('can display set label', async function (assert) {
    const label = 'Button Label';

    setProperties(this, { label });

    await render(hbs`
      <EsButton @label={{this.label}} />
    `);

    assert.dom('button').hasText(label, 'displays button label');
  });

  test('calls closure function when clicked', async function (assert) {
    const onClicked = sinon.spy();

    setProperties(this, { onClicked });

    await render(hbs`<EsButton @onClicked={{this.onClicked}} />`);
    await click('button');

    assert.ok(onClicked.calledOnce, 'onClicked called');
  });

  skip('can disable button', async function (assert) {
    const disabled = false;

    setProperties(this, { disabled });

    await render(hbs`<EsButton @isDisabled={{true}} />`);

    assert.dom('.es-button').hasAttribute('disabled');
  });

  skip('displays set data-role', async function (assert) {
    const dataRole = 'some-data-role';

    setProperties(this, { dataRole });

    await render(hbs`<EsButton />`);

    assert.dom('.es-button').hasAttribute('data-role');
  });

  test('does not render aria-pressed unless set', async function (assert) {
    const ariaPressed = 'false';

    setProperties(this, { ariaPressed });

    await render(hbs`<EsButton />`);

    assert.dom('.es-button').doesNotHaveAttribute('aria-pressed');

    set(this, 'ariaPressed', null);

    await render(hbs`<EsButton aria-pressed="true" />`);

    assert.dom('.es-button').hasAttribute('aria-pressed', 'true');
  });
});
