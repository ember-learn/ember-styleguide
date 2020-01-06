import Component from 'sparkles-component';

import {
  socialLinks,
  infoLinks,
  contributorLinks,
  tagline
} from '../constants/es-footer';

export default class EsPageHeader extends Component {
  socialLinks = socialLinks

  tagline = tagline
  contributorLinks = contributorLinks

  get currentYear() {
    return new Date().getUTCFullYear()
  }

  get infoLinks() {
    if (this.args && this.args.infoLinks) {
      return this.args.infoLinks;
    }

    return infoLinks;
  }
}
