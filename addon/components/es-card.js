import Component from '@ember/component';
import layout from '../templates/components/es-card';
import { computed, get } from '@ember/object';

export default Component.extend({
  layout,

  classNames: ['es-card'],
  classNameBindings: [
    'isImageLeft:es-card--image-left',
    'isImageRight:es-card--image-right'
  ],
  attributeBindings: ['borderColorCSS:style'],

  // accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: null,
  title: null,

  // passed in attrs
  heading: null,
  text: null,
  imageSrc: null,
  buttonLabel: null,
  borderColor: null,
  isImageLeft: false,
  isImageRight: false,
  isHeadingAbove: false,

  borderColorCSS: computed({
    get() {
      return `border-color: ${get(this, 'borderColor')}`;
    }
  })
});
