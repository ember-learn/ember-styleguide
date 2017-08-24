import Ember from 'ember';
import layout from '../templates/components/es-heading';

export default Ember.Component.extend({
    layout,
    classNames: ['es-heading'],
    classNameBindings: ['isPageHeading:page-heading', 'isCentered:text-center'],
    attributeBindings: ['ariaLabel:aria-label', 'title'],

    tagName: 'h1', //acceptable values should be h1-h6
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
    isPageHeading: false, //if true, add classname "page-heading"
    isCentered: false, //if true, add classname "text-center"
});