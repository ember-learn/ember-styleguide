import Component from '@ember/component';
import layout from '../templates/components/es-ulist';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['es-ulist'],

  //accessibility support
  ariaDescribedby: computed.alias('list.id'),
  ariaLabel: computed.alias('list.name'),
  listItems: computed.alias('list.items'),
  ariaRole: 'group',
  title: computed.alias('list.name'),

  itemUrl: null, //think about this, there has to be something better to name it.
  imageUrl: null,
  altText: null //for a11y, this is required if the link is an image.
});
