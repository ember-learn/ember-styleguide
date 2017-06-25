import Ember from 'ember';
import layout from '../templates/components/es-heading';

export default Ember.Component.extend({
    layout,
    className: ['es-heading'],
    attributeBindings: ['ariaLabel:aria-label'],
    tagName: 'h1', //acceptable values are h1-h6
    ariaLabel: 'descriptive text',
    ariaRole: 'heading',
    isPageHeading: false, //if true, add classname "page-heading"


});