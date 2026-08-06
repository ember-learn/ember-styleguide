/* eslint-disable ember/no-tracked-properties-from-args */
import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import eq from 'ember-truth-helpers/helpers/eq';

export default class EsHeaderNavbarLink extends Component {
  @service navbar;

  @tracked element = null;
  @tracked linkType = this.args.link.type;
  @tracked isDropdownOpen = false;

  #keydownHandler = null;

  get isDropdown() {
    return this.linkType === 'dropdown';
  }

  // because aria-expanded requires a string value instead of a boolean
  get isExpanded() {
    return this.isDropdownOpen ? 'true' : 'false';
  }

  constructor() {
    super(...arguments);
    this.navbar.register(this);
  }

  setElement = modifier((element) => {
    this.element = element;
  });

  setupDropdown = modifier((element) => {
    // move focus to the first item in the dropdown
    let firstFocusable = element.querySelector('li:first-of-type a');
    firstFocusable?.focus();

    // ESC closes the dropdown and returns focus to the toggle
    this.#keydownHandler = (event) => {
      if (event.key === 'Escape' && this.isDropdownOpen) {
        this.closeDropdown();
        this.element
          ?.querySelector('.navbar-list-item-dropdown-toggle')
          ?.focus();
      }
    };
    element.addEventListener('keydown', this.#keydownHandler);

    return () => {
      if (this.#keydownHandler) {
        element.removeEventListener('keydown', this.#keydownHandler);
        this.#keydownHandler = null;
      }
    };
  });

  @action
  toggleDropdown() {
    this.navbar.closePopupMenu(this);
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @action
  handleFocusOut() {
    // Defer the check so that click-triggered focus changes settle first
    requestAnimationFrame(() => {
      if (!this.isDropdownOpen) return;
      // Only close if focus left the entire list item (toggle + dropdown)
      if (this.element?.contains(document.activeElement)) return;
      this.closeDropdown();
    });
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  <template>
    <li
      class="navbar-list-item {{if this.isDropdown 'dropdown'}}"
      {{this.setElement}}
      {{on "focusout" this.handleFocusOut}}
    >
      {{#if (eq @link.type "link")}}
        <a class="navbar-list-item-link" href={{@link.href}}>
          {{@link.name}}
        </a>
      {{/if}}
      {{#if (eq @link.type "dropdown")}}
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
          <ul class="navbar-dropdown-list" {{this.setupDropdown}}>
            {{#each @link.items as |item|}}
              {{#if (eq item.type "link")}}
                <li class="navbar-dropdown-list-item">
                  <a class="navbar-dropdown-list-item-link" href={{item.href}}>
                    {{item.name}}
                  </a>
                </li>
              {{/if}}
              {{#if (eq item.type "divider")}}
                <li role="separator" class="separator"></li>
              {{/if}}
            {{/each}}
          </ul>
        {{/if}}
      {{/if}}
    </li>
  </template>
}
