import Component from 'sparkles-component';
import { action } from '@ember-decorators/object';

export default class EsTab extends Component {
  constructor(args) {
    super();
    this.tabs = args.tabs;
    args.tabs.register(this);
  }

  @action
  click() {
    this.tabs.setActive(this);
  }
}
