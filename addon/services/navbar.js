import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);

    this.items = [];
  },

  register(item) {
    this.items.push(item);
  },

  closePopupMenu(menu) {
    this.items.forEach(item => {
      if(item !== menu) {
        item.closeDropdown()
      }
    });
  },
});
