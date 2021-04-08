/* eslint-disable prettier/prettier */
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es progress bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<EsProgressBar />`);

    assert.dom('.progress-bar').exists('progress bar exists');
  });
});
