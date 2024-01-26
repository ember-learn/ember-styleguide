import Component from '@ember/component';

export default Component.extend({
  classNames: ['es-heading'],
  classNameBindings: ['isPageHeading:page-heading', 'isCentered:text-center'],
  attributeBindings: ['ariaLabel:aria-label', 'title'],

  //acceptable values should be h1-h6
  tagName: 'h1',

  headingText: null,

  //accessibility support
  ariaDescribedby: null,

  ariaLabel: null,
  ariaRole: 'heading',
  title: null,

  //this allows for an icon in the heading element, which can be positioned to the left or right
  hasIcon: false,

  iconUrl: null,
  iconLeft: false,

  //other styling
  //if true, add classname "page-heading"
  isPageHeading: false,

  //if true, add classname "text-center"
  isCentered: false
});
