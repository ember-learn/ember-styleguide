import Component from '@glimmer/component';

export default class HeaderComponent extends Component {
  links = [
    {
      name: 'Example Links',
      type: 'dropdown',
      items: [
        {
          href: 'https://guides.emberjs.com/release/',
          name: 'Ember.js Guides',
          type: 'link',
        },
        {
          href: 'https://api.emberjs.com',
          name: 'API Reference',
          type: 'link',
        },
        {
          href: 'https://cli.emberjs.com',
          name: 'CLI Guides',
          type: 'link',
        },
        {
          type: 'divider',
        },
        {
          href: 'https://emberjs.com/learn',
          name: 'Learn Ember',
          type: 'link',
        },
      ],
    },
  ];
}
