import Component from '@ember/component';
import layout from '../templates/components/es-blog-heading';
import {
  BlogPostType,
} from '../constants/es-blog-heading';
import {
  computed,
} from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['es-blog-heading'],

  author: null,
  postDate: null,
  postTitle: null,
  postType: null,
  postUrl: null,

  isGuestPost: computed.equal('postType', BlogPostType.GUEST),
  isNonStandardPost: computed.readOnly('postType'),
});
