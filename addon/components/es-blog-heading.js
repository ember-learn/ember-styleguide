import Component from '@ember/component';

export default Component.extend({
  classNames: ['es-blog-heading'],
  author: null,
  postDate: null,
  postTitle: null,
  postUrl: null,
  isGuestPost: false
});
