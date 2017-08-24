import Ember from 'ember';
import layout from '../templates/components/es-ulist';

export default Ember.Component.extend({
    layout,
    classNames: ['es-ulist'],

    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaRole: 'group',
    title: null,

    itemUrl: null, //think about this, there has to be something better to name it. 
    imageUrl: null,
    altText: null, //for a11y, this is required if the link is an image. 
});