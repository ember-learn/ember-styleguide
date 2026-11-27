# Global Header

Shows the side wide header with the global navigation.

```gjs live preview
import EsHeader from 'ember-styleguide/components/es-header';

<template>
  <EsHeader />
</template>
```

If you would like to override the default links you can pass a json object to update the links in the navbar.

```gjs live preview
import Component from '@glimmer/component';
import EsHeader from 'ember-styleguide/components/es-header';

export default class HeaderDemo extends Component {
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

  <template>
    <EsHeader @links={{this.links}} />
  </template>
}
```

You can also use the block form of the component to add extra HTML to the navigation bar

```gjs live preview
import EsHeader from 'ember-styleguide/components/es-header';

<template>
  <EsHeader>
    <div>Hello World</div>
  </EsHeader>
</template>
```
