import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);

    this.items = [];
    this.firstChars = [];
  },

  register(item) {
    this.items.push(item);
    this.firstChars.push(item.element.querySelector('a').text.trim()[0].toLowerCase());
  },

  setFocusToNextItem(item) {
    const items = this.get('items');

    const index = items.indexOf(item);
    let nextItem;

    if(index + 1 >= items.length) {
      nextItem = items[0];
    } else {
      nextItem = items[index + 1];
    }

    nextItem.get('element').querySelector('a').focus();

    if(item.get('expanded')) {
      item.closePopupMenu();
      nextItem.openPopupMenu();
    }
  },

  setFocusToPreviousItem(item) {
    const items = this.get('items');

    const index = items.indexOf(item);
    let nextItem;

    if(index - 1 < 0) {
      nextItem = items[items.length - 1];
    } else {
      nextItem = items[index - 1];
    }

    nextItem.get('element').querySelector('a').focus();

    if(item.get('expanded')) {
      item.closePopupMenu();
      nextItem.openPopupMenu();
    }
  },

  setFocusByFirstCharacter (inputCharacter) {
    let character = inputCharacter.toLowerCase();

    // let subItems = Array.from(this.element.querySelectorAll('ul[role="menu"] li'));
    let focused = this.items.find(item => document.activeElement === item.element.querySelector('a'));
    let start = this.items.indexOf(focused) + 1;

    if (start === this.items.length) {
      start = 0;
    }

    // Check remaining slots in the menu
    let index = this.getIndexFirstChars(start, character);

    // If not found in remaining slots, check from beginning
    if (index === -1) {
      index = this.getIndexFirstChars(0, character);
    }

    // If match was found...
    if (index > -1) {
      this.items[ index ].element.querySelector('a').focus();
    }
  },

  getIndexFirstChars (startIndex, char) {
    for (var i = startIndex; i < this.firstChars.length; i++) {
      if (char === this.firstChars[ i ]) {
        return i;
      }
    }
    return -1;
  },
});
