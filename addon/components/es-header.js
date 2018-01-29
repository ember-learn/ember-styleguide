import Component from '@ember/component';
import layout from '../templates/components/es-header';

export default Component.extend({
  layout,
  attributeBindings: ['ariaLabel:aria-label'],
  classNames: ['es-header'],
  tagName: 'header',

  //accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: 'banner',
  title: null
});
