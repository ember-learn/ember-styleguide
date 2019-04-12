import Component from 'sparkles-component';
import { set } from '@ember/object';
import { computed } from '@ember-decorators/object';

export default class EsTabs extends Component {
  tabs = []

  @computed()
  get wormholeId() {
    return `tab-wormhole-${Math.random().toString(36).substring(2)}`;
  }

  register(tab){
    if(this.tabs.length === 0) {
      set(tab, 'active', true);
    }
    this.tabs.push(tab);
  }

  setActive(activeTab) {
    this.tabs.forEach((tab) => {
      if(tab === activeTab) {
        set(tab, 'active', true);
      } else {
        set(tab, 'active', false);
      }
    })
  }
}
