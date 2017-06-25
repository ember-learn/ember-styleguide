import Ember from 'ember';
import layout from '../templates/components/es-aside';

export default Ember.Component.extend({
    layout,
    classNames: ['es-aside', 'col-xs-12', 'col-md-3'],
    tagName: 'aside',
    ariaRole: 'complementary'

});