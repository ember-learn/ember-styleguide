import Controller from '@ember/controller';
import listItems from 'dummy/data/list-data';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('listItems', listItems);
  }
});