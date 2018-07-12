import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);

    this.items = [];
  },

  register(item) {
    this.get('items').pushObject(item);
  },

  setFocusToNextItem(item) {
    const items = this.get('items');

    const index = items.indexOf(item);
    let nextItem;

    // debugger

    if(index + 1 >= items.length) {
      nextItem = items[0];
    } else {
      nextItem = items[index + 1];
    }

    nextItem.get('element').querySelector('a').focus();
  },

  setFocusToPreviousItem(item) {
    const items = this.get('items');

    const index = items.indexOf(item);
    let nextItem;

    // debugger

    if(index - 1 < items.length) {
      nextItem = items[0];
    } else {
      nextItem = items[index + 1];
    }

    nextItem.get('element').querySelector('a').focus();
  }
});
