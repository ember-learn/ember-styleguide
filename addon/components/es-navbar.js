import Ember from 'ember';
import layout from '../templates/components/es-navbar';

export default Ember.Component.extend({
    layout,
    attributeBindings: ['ariaLabel:aria-label'],
    classNames: ['es-navbar'],
    ariaRole: 'navigation',
    ariaLabel: null

});