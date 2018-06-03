import Component from '@ember/component';
import layout from '../templates/components/es-image';

export default Component.extend({
  layout,

  tagName: 'img',
  classNames: ['es-image'],
  classNameBindings: ['roundedBorders:es-image--rounded'],
  attributeBindings: ['src'],

  roundedBorders: true,
  src: null,
});
