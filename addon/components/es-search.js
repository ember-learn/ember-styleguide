import Ember from 'ember';
import layout from '../templates/components/es-search';

export default Ember.Component.extend({
    layout,
    classNames: ['es-search'],
    ariaRole: 'search',
});