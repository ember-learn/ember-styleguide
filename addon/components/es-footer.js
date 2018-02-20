import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/es-footer';

export default Component.extend({
  layout,
  attributeBindings: ['ariaLabel:aria-label'],
  classNames: ['es-footer'],
  tagName: 'footer',
  currentYear: computed(function () {
    return new Date().getUTCFullYear();
  }),

  //accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: 'contentinfo',
  title: null
});
