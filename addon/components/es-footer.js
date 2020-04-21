import Component from '@glimmer/component';

import {
  socialLinks,
  infoLinks,
  contributorLinks,
  tagline
} from '../constants/es-footer';

export default class EsFooterComponent extends Component {
  get socialLinks() {
    if (this.args.socialLinks) {
      return this.args.socialLinks;
    }

    return socialLinks;
  }

  get contributorLinks() {
    if (this.args.contributorLinks) {
      return this.args.contributorLinks;
    }

    return contributorLinks;
  }

  get tagline() {
    if (this.args.tagline) {
      return this.args.tagline;
    }

    return tagline;
  }

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
