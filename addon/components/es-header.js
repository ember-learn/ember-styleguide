import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['ariaLabel:aria-label'],
  classNames: ['es-header'],
  tagName: 'header',

  //accessibility support
  ariaDescribedby: null,

  ariaLabel: null,
  ariaRole: 'banner',
  title: null
});
