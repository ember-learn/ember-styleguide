import Controller from '@ember/controller';

let customLinks = [{
  name: 'Documentation',
  type: 'dropdown',
  items: [{
    href: 'https://guides.emberjs.com',
    name: 'The Marvelous Ember Guides!',
    type: 'link'
  }]
}, {
  name: 'Main Sites',
  type: 'dropdown',
  items: [{
    href: 'https://emberjs.com',
    name: 'Homepage',
    type: 'link'
  }, {
    href: 'https://emberjs.com/api',
    name: 'API Documentation',
    type: 'link'
  }, {
    href: 'https://emberjs.com/builds',
    name: 'Builds',
    type: 'link'
  }]
}];

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('customLinks', customLinks);
  }
});
