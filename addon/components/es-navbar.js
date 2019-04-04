import Component from "sparkles-component";
import { action, computed } from '@ember-decorators/object';

import defaultLinks from '../constants/links';

export default class EsNavbar extends Component {
  @computed('home')
  get navHome() {
    if (this.home) {
      return this.home;
    }

    return 'https://www.emberjs.com';
  }

  @computed('links.[]')
  get navLinks() {
    if(this.links) {
      return this.links;
    }

    return defaultLinks;
  }

  @action
  toggleMenu() {
    let menu = this.element.querySelector('ul[role="menubar"]');

    menu.setAttribute('aria-expanded', menu.getAttribute('aria-expanded') !== 'true');
  }
}
