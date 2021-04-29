// this is a hack to make porting much eaiser. you need to convert this to a glimmer component
import Controller from '@ember/component';
import listItems from 'dummy/data/list-data';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('listItems', listItems);
  }
});