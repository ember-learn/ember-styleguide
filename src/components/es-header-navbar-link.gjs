/* eslint-disable ember/no-tracked-properties-from-args, ember/no-at-ember-render-modifiers */
import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';

function isLink(item) {
  return item.type === 'link';
}

function isDivider(item) {
  return item.type === 'divider';
}

function isDropdown(item) {
  return item.type === 'dropdown';
}

export default class EsHeaderNavbarLink extends Component {
  @service navbar;

  @tracked element = null;
  @tracked isDropdownOpen = false;
  #keydownHandler = null;

  get isDropdown() {
    return this.args.link?.type === 'dropdown';
  }

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
    // move focus to the first item only when opened with keyboard
    // ref https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
    // detail=0 means keyboard activation
    let firstFocusable = element.querySelector('li:first-of-type a');
    firstFocusable?.focus();

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
  toggleDropdown(event) {
    this.navbar.closePopupMenu(this);
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @action
  handleFocusOut(event) {
    // Defer check so that click-triggered focus changes settle first
    requestAnimationFrame(() => {
      if (!this.isDropdownOpen) return;
      // Only close if focus is now outside the entire list item (button + dropdown)
      if (this.element?.contains(document.activeElement)) return;
      this.closeDropdown();
    });
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  get isLink() {
    return this.args.type === 'link';
  }

  get isDropdown() {
    return this.args.type === 'dropdown';
  }

  <template>
    {{! template-lint-disable no-at-ember-render-modifiers }}
    <li
      class="navbar-list-item {{if this.isDropdown 'dropdown'}}"
      {{this.setElement}}
      {{on "focusout" this.handleFocusOut}}
    >
      {{#if this.isLink}}
        <a class="navbar-list-item-link" href={{@link.href}}>
          {{@link.name}}
        </a>
      {{/if}}
      {{#if this.isDropdown}}
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
              {{#if (isLink item)}}
                <li class="navbar-dropdown-list-item">
                  <a class="navbar-dropdown-list-item-link" href={{item.href}}>
                    {{item.name}}
                  </a>
                </li>
              {{/if}}
              {{#if (isDivider item)}}
                <li role="separator" class="separator"></li>
              {{/if}}
            {{/each}}
          </ul>
        {{/if}}
      {{/if}}
    </li>
  </template>
}
