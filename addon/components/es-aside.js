import Component from '@ember/component';
import layout from '../templates/components/es-aside';

export default Component.extend({
  layout,
  attributeBindings: ['ariaLabel:aria-label'],
  classNames: ['es-aside'],
  tagName: 'aside',

  //accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: 'complementary',
  title: null
});
