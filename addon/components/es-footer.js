import Ember from 'ember';
import layout from '../templates/components/es-footer';

export default Ember.Component.extend({
    layout,
    attributeBindings: ['ariaLabel:aria-label'],
    classNames: ['es-footer'],
    tagName: 'footer',


    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaRole: 'contentinfo',
    title: null,

});