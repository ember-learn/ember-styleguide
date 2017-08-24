import Ember from 'ember';
import layout from '../templates/components/es-navbar';

export default Ember.Component.extend({
    layout,
    attributeBindings: ['ariaLabel:aria-label'],
    classNames: ['es-navbar'],
    tagName: 'nav',

    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaRole: 'navigation',
    title: null,

});