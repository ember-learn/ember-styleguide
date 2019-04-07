import Component from 'sparkles-component';

import {
  socialLinks,
  infoLinks,
  contributorLinks,
  tagline
} from '../constants/es-footer';

export default class EsPageHeader extends Component {
  currentYear = null

  constructor() {
    super();
    this.currentYear = new Date().getUTCFullYear();
  }

  socialLinks = socialLinks

  tagline = tagline
  contributorLinks = contributorLinks
  infoLinks = infoLinks
}
