import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import { helper } from '@ember/component/helper';

/** Plain function helpers need Ember 4.5. */
const isType = helper(([item, type]) => item.type === type);

export default class EsHeaderNavbarLink extends Component {
  @service navbar;

  @tracked isDropdownOpen = false;

  element = null;
  openedWithKeyboard = false;

  get isDropdown() {
    return this.args.link.type === 'dropdown';
  }

  // because aria-expanded requires a string value instead of a boolean
  get isExpanded() {
    return this.isDropdownOpen ? 'true' : 'false';
  }

  constructor() {
    super(...arguments);
    this.navbar.register(this);
  }

  setup = modifier((element) => {
    this.element = element;
  });

  /**
   * A keyboard click has `detail` 0.
   * https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
   */
  focusFirstItem = modifier((list) => {
    if (this.openedWithKeyboard) {
      list.querySelector('li:first-of-type a')?.focus();
    }
  });

  @action
  toggleDropdown(event) {
    this.navbar.closePopupMenu(this);
    this.openedWithKeyboard = event.detail === 0;
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @action
  closeOnEscape(event) {
    if (event.key !== 'Escape') {
      return;
    }

    this.closeDropdown();
    this.element.querySelector('.navbar-list-item-dropdown-toggle').focus();
  }

  @action
  closeOnFocusLeave(event) {
    if (!this.element.contains(event.relatedTarget)) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  <template>
    <li
      class="navbar-list-item {{if this.isDropdown 'dropdown'}}"
      {{this.setup}}
      {{on "focusout" this.closeOnFocusLeave}}
    >
      {{#if (isType @link "link")}}
        <a class="navbar-list-item-link" href={{@link.href}}>
          {{@link.name}}
        </a>
      {{/if}}
      {{#if (isType @link "dropdown")}}
        <button
          type="button"
          class="navbar-list-item-dropdown-toggle
            {{if this.isDropdownOpen 'active'}}"
          aria-expanded={{this.isExpanded}}
          {{on "click" this.toggleDropdown}}
        >
          {{@link.name}}
        </button>
        {{#if this.isDropdownOpen}}
          <ul class="navbar-dropdown-list" {{this.focusFirstItem}}>
            {{#each @link.items as |item|}}
              {{#if (isType item "link")}}
                <li class="navbar-dropdown-list-item">
                  <a
                    class="navbar-dropdown-list-item-link"
                    href={{item.href}}
                    {{on "keydown" this.closeOnEscape}}
                  >
                    {{item.name}}
                  </a>
                </li>
              {{/if}}
              {{#if (isType item "divider")}}
                <li role="separator" class="separator"></li>
              {{/if}}
            {{/each}}
          </ul>
        {{/if}}
      {{/if}}
    </li>
  </template>
}
