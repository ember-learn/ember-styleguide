import Component from '@glimmer/component';
import { action, set } from '@ember/object';

import defaultLinks from '../constants/links';

const defautHomePage = 'https://www.emberjs.com';

export default class EsHeaderComponent extends Component {
  expanded = false;

  get navHome() {
    return this.args.home ?? defautHomePage;
  }

  get navLinks() {
    return this.args.links ?? defaultLinks;
  }

  @action
  onTogglerClick() {
    set(this, 'expanded', !this.expanded);
  }
}

{{! template-lint-disable no-redundant-role }}
<header class="es-header" role="banner" ...attributes>
  <nav
    class="es-navbar {{if this.expanded 'navbar-expanded'}}"
    aria-label="Primary site navigation"
  >
    <a class="navbar-brand-wrapper" href={{this.navHome}}>
      <img
        class="navbar-brand"
        src="/images/ember-logo.svg"
        alt="home"
        width="83"
        height="40"
      />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      aria-expanded={{if this.expanded "true" "false"}}
      {{on "click" this.onTogglerClick}}
    >
      {{if this.expanded "Hide" "Show"}}
      Site Navigation
    </button>

    <ul class="navbar-list">
      {{#each this.navLinks as |link|}}
        <EsHeaderNavbarLink @link={{link}} />
      {{/each}}
    </ul>

    {{#if (has-block)}}
      <div class="navbar-end">
        {{yield}}
      </div>
    {{/if}}
  </nav>
</header>