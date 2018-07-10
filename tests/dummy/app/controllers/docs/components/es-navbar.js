import Controller from '@ember/controller';
import navbarLinks from 'dummy/data/navbar-links';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('links', navbarLinks);
  }
});

