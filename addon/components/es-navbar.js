import Component from '@ember/component';
import layout from '../templates/components/es-navbar';

export default Component.extend({
  layout,
  attributeBindings: ['ariaLabel:aria-label'],
  classNames: ['es-navbar'],
  tagName: 'nav',

  //accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: 'navigation',
  title: null
});
