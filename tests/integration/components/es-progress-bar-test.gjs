import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import EsProgressBar from '#src/components/es-progress-bar.gjs';

module('Integration | Component | es progress bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><EsProgressBar /></template>);

    assert.dom('.progress-bar').exists('progress bar exists');
  });
});
