/* eslint-disable ember/no-empty-glimmer-component-classes */
import Component from '@glimmer/component';

export default class EsFooterContributionsComponent extends Component {}

<div class="footer-contributions-wrapper container pt-0 pb-3">
  <div class="footer-contributions">
    <span>Ember is generously supported by</span>
    <div class="sponsor-icons">
      {{#each @contributorLinks as |link|}}
        <a
          href={{link.href}}
          title={{link.title}}
          aria-label={{link.title}}
          class="mr-2"
        >
          <EsIcon @icon={{link.class}} @class="footer-contributor-logo" />
        </a>
      {{/each}}
    </div>
  </div>
</div>