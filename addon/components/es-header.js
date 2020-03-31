import { set } from '@ember/object';
import Component from '@glimmer/component';

import defaultLinks from '../constants/links';

export default class EsHeaderComponent extends Component {
  expanded = false;

  get navHome() {
    if (this.args.home) {
      return this.args.home;
    }

    return 'https://www.emberjs.com';
  }

  get navLinks() {
    if (this.args.links) {
      return this.args.links;
    }

    return defaultLinks;
  }

  toggleMenu() {
    set(this, 'expanded', !this.expanded);
  }

  trackExpanded() {
    // Ensure menu is marked as expanded if there is enough screen estate
    // TODO: Dynamically calculate necessary horizontal space and collapse based on that
    if (typeof FastBoot === 'undefined') {
      const mq = matchMedia('(min-width: 992px)');

      mq.addListener(event => {
        if (event.matches) {
          set(this, 'expanded', false);
        }
      });
    }
  }
}
