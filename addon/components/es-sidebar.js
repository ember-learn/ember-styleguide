import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SidebarComponent extends Component {
  @service router;

  @tracked isOpen = false;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', this.close);
  }

  willDestroy() {
    this.router.off('routeDidChange', this.close);

    super.willDestroy(...arguments);
  }

  @action
  toggle() {
    this.isOpen = !this.isOpen;
  }

  @action
  close() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }
}
