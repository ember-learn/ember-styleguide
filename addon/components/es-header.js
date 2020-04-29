import Component from '@glimmer/component';
import { action, set } from '@ember/object';

import defaultLinks from '../constants/links';

const defautHomePage = 'https://www.emberjs.com';

export default class EsHeaderComponent extends Component {
  expanded = false;

  get navHome() {
    return this.args.home ?? defautHomePage;
  }

  get navLinks() {
    return this.args.links ?? defaultLinks;
  }

  @action
  onTogglerClick() {
    set(this, 'expanded', !this.expanded);
  }
}
