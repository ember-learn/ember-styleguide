import Ember from 'ember';
import layout from '../templates/components/es-footer';

export default Ember.Component.extend({
    layout,
    className: 'es-footer',
    tagName: 'footer',
    ariaRole: 'contentinfo',

});