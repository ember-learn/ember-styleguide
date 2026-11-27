import Component from '@glimmer/component';
import { service } from '@ember/service';

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
