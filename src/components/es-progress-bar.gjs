import Component from '@glimmer/component';
import * as serviceModule from '@ember/service';

// `service` was added in Ember 4.1; fall back to `inject` on older versions
const service = serviceModule.service ?? serviceModule.inject;

export default class EsProgressBarComponent extends Component {
  @service progress;

  <template>
    {{! template-lint-disable no-invalid-aria-attributes }}
    <div
      class="progress-bar"
      aria-hidden
      style={{this.progress.style}}
      ...attributes
    ></div>
  </template>
}
