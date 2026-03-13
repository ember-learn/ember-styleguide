import Component from '@glimmer/component';
import EsFooterContributions from './es-footer-contributions';
import EsFooterHelp from './es-footer-help';
import EsFooterInfo from './es-footer-info';
import EsFooterStatement from './es-footer-statement';

import {
  socialLinks,
  infoLinks,
  contributorLinks,
  tagline,
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
    return new Date().getUTCFullYear();
  }

  get infoLinks() {
    if (this.args && this.args.infoLinks) {
      return this.args.infoLinks;
    }

    return infoLinks;
  }

  <template>
    <footer class="es-footer" ...attributes>
      {{!--
        Pass footer properties to support
        <EsFooter @infoLinks={{someOtherLinks}} />
      --}}
      <EsFooterInfo
        @infoLinks={{this.infoLinks}}
        @socialLinks={{this.socialLinks}}
      />

      <EsFooterHelp @contributeLink={{@contributeLink}} />
      <EsFooterStatement
        @tagline={{this.tagline}}
        @contributeLink={{@contributeLink}}
      />

      <hr class="footer-spacer container py-0 my-3" />

      <EsFooterContributions @contributorLinks={{this.contributorLinks}} />
    </footer>
  </template>
}
