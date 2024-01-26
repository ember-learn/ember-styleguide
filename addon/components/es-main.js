import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['ariaLabel:aria-label'],
  classNames: ['es-main'],
  tagName: 'main',

  //accessibility support
  ariaDescribedby: null,

  ariaLabel: null,
  ariaRole: 'main',
  title: null
});
