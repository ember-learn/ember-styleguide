import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import defaultLinks from '../constants/links';

const defautHomePage = 'https://www.emberjs.com';

export default class EsHeaderComponent extends Component {
  @tracked expanded = false;

  get navHome() {
    return this.args.home ?? defautHomePage;
  }

  get navLinks() {
    return this.args.links ?? defaultLinks;
  }

  @action
  onTogglerClick() {
    this.expanded = !this.expanded;
  }
}
