import Component from '@ember/component';
import layout from '../../templates/components/es-footer/es-contributions';
import { contributorLinks } from '../../constants/es-footer';

export default Component.extend({
  classNames: ['footer-contributions'],
  layout,
  contributorLinks
});
