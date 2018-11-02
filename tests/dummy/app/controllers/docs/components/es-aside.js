
import Controller from '@ember/controller';

const content = [
  {title: 'EmberJS', link: 'https://www.emberjs.com/',
    options: [
      { title: 'Homepage', link: 'https://www.emberjs.com/'},
      { title: 'About', link: 'https://www.emberjs.com/'}
    ]
  },
  {title: 'Guides', link: 'https://www.emberjs.com/',
    options: [
      { title: 'EmberJS', link: 'https://www.emberjs.com/'},
      { title: 'Ember Data', link: 'https://www.emberjs.com/'},
      { title: 'Ember CLI', link: 'https://www.emberjs.com/'}
    ]
  }
];


export default Controller.extend({
  content: content
});
