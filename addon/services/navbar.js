import Service from '@ember/service';

export default class NavbarService extends Service {
  items = [];

  register(item) {
    this.items.push(item);
  }

  closePopupMenu(menu) {
    this.items.forEach((item) => {
      if (item !== menu) {
        item.closeDropdown();
      }
    });
  }
}
