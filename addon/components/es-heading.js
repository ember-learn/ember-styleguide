import Ember from 'ember';
import layout from '../templates/components/es-heading';

export default Ember.Component.extend({
    layout,
    classNames: ['es-heading'],
    classNameBindings: ['isPageHeading:page-heading'],
    attributeBindings: ['ariaLabel:aria-label', 'title'],
    tagName: 'h1', //acceptable values should be h1-h6
    ariaRole: 'heading',
    isPageHeading: false, //if true, add classname "page-heading"
    headingText: null,
    ariaLabel: null,
    title: Ember.computed('ariaLabel', 'headingText', function() { //is there a more concise way to write this?
        if (this.get('ariaLabel') === null) {
            return this.get('headingText');
        } else {
            return this.get('ariaLabel');
        }
    }),

});