import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['ariaLabel:aria-label'],
  classNames: ['es-aside'],
  tagName: 'aside',

  //accessibility support
  ariaDescribedby: null,

  ariaLabel: null,
  ariaRole: 'complementary',
  title: null
});
