import Component from '@ember/component';
import layout from '../templates/components/es-blog-heading';

export default Component.extend({
  layout,
  classNames: ['es-blog-heading'],
  author: null,
  postDate: null,
  postTitle: null,
  postUrl: null,
  isGuestPost: false,  
});
