import { click, render } from '@ember/test-helpers';
import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setProperties, set } from '@ember/object';
import EsButton from '#src/components/es-button.gjs';

module('Integration | Component | es button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><EsButton /></template>);

    assert.dom('button').hasText('');

    await render(
      <template>
        <EsButton>
          template block text
        </EsButton>
      </template>,
    );

    assert.dom('button').hasText('template block text');
  });

  test('has html button tag and base class', async function (assert) {
    await render(<template><EsButton /></template>);
    assert.dom('button').exists('has button tag');
    assert.ok(document.querySelector('.es-button'), 'has base es-button class');
  });

  test('can display set label', async function (assert) {
    const label = 'Button Label';

    await render(<template><EsButton @label={{label}} /></template>);

    assert.dom('button').hasText(label, 'displays button label');
  });

  test('calls closure function when clicked', async function (assert) {
    const onClicked = () => assert.step('clicked');

    await render(<template><EsButton @onClicked={{onClicked}} /></template>);
    await click('button');

    assert.verifySteps(['clicked'], 'onClicked called once');
  });

  skip('can disable button', async function (assert) {
    const disabled = false;

    setProperties(this, { disabled });

    await render(<template><EsButton @isDisabled={{true}} /></template>);

    assert.dom('.es-button').hasAttribute('disabled');
  });

  skip('displays set data-role', async function (assert) {
    const dataRole = 'some-data-role';

    setProperties(this, { dataRole });

    await render(<template><EsButton /></template>);

    assert.dom('.es-button').hasAttribute('data-role');
  });

  test('does not render aria-pressed unless set', async function (assert) {
    const ariaPressed = 'false';

    setProperties(this, { ariaPressed });

    await render(<template><EsButton /></template>);

    assert.dom('.es-button').doesNotHaveAttribute('aria-pressed');

    set(this, 'ariaPressed', null);

    await render(<template><EsButton aria-pressed="true" /></template>);

    assert.dom('.es-button').hasAttribute('aria-pressed', 'true');
  });
});
