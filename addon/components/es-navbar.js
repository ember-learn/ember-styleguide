import Component from "sparkles-component";

import defaultLinks from '../constants/links';

export default class EsNavbar extends Component {
  get navHome() {
    if (this.args.home) {
      return this.args.home;
    }

    return 'https://www.emberjs.com';
  }

  get navLinks() {
    if(this.links) {
      return this.links;
    }

    return defaultLinks;
  }

  toggleMenu() {
    let menu = this.element.querySelector('.navbar-toggler');
    menu.setAttribute('aria-expanded', menu.getAttribute('aria-expanded') !== 'true');
  }
}
