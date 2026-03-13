/* eslint-disable ember/no-runloop, ember/no-tracked-properties-from-args, ember/no-at-ember-render-modifiers */
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { schedule, next } from '@ember/runloop';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';
import didInsert from '@ember/render-modifiers/modifiers/did-insert';
import willDestroy from '@ember/render-modifiers/modifiers/will-destroy';
import eq from 'ember-truth-helpers/helpers/eq';

export default class EsHeaderNavbarLink extends Component {
  @service navbar;

  @tracked element = null;
  @tracked linkType = this.args.link.type;
  @tracked isDropdownOpen = false;

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

  setupLinkBlurs() {
    if (this.linkBlursActive) {
      return;
    }

    this.linkBlursActive = true;
    let links = Array.from(
      this.element.querySelectorAll('.navbar-dropdown-list-item-link'),
    );

    links.forEach((anchor) => {
      anchor.addEventListener('blur', () => this.processBlur());
    });
  }

  @action
  setElement(element) {
    this.element = element;
  }

  @action
  toggleDropdown(event) {
    this.navbar.closePopupMenu(this);
    this.isDropdownOpen = !this.isDropdownOpen;

    if (this.isDropdownOpen) {
      // if it's open, let's make sure it can do some things
      schedule('afterRender', this, function () {
        this.setupLinkBlurs();

        // move focus to the first item in the dropdown only when opened with keyboard
        // ref https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
        if (event.detail === 0) {
          this.processFirstElementFocus();
        }

        this.processKeyPress();
      });
    }
  }

  @action
  processBlur() {
    next(this, function () {
      let subItems = Array.from(
        this.element.querySelectorAll('.navbar-dropdown-list li'),
      );
      let focused = subItems.find(
        (item) => document.activeElement === item.querySelector('a'),
      );

      //if the dropdown isn't focused, close it
      if (!focused) {
        this.closeDropdown();
      }
    });
  }

  @action
  unregisterListener(element) {
    element.removeEventListener('keydown', this.triggerDropdown);
    element.removeEventListener('click', this.triggerDropdown);
  }

  closeDropdown() {
    // set the isDropdownOpen to false, which will make the dropdown go away
    this.isDropdownOpen = false;
  }

  openDropdown() {
    //might not need this
    // open the dropdown and set the focus to the first item inside
    this.isDropdownOpen = true;
    this.processFirstElementFocus();
  }

  processClick() {
    // TODO handle mouseclick outside the current dropdown
  }

  processFirstElementFocus() {
    // Identify the first item in the dropdown list & set focus on it
    let firstFocusable = this.element.querySelector(
      '.navbar-dropdown-list li:first-of-type a',
    );
    firstFocusable.focus();
  }

  processKeyPress() {
    // add event listeners
    let dropdownList = this.element.querySelector('.navbar-dropdown-list');

    //...for certain keypress events
    dropdownList.addEventListener('keydown', (event) => {
      // ESC key should close the dropdown and return focus to the toggle
      if (event.keyCode === 27 && this.isDropdownOpen) {
        this.closeDropdown();
        this.returnFocus();

        // if focus leaves the open dropdown via keypress, close it (without trying to otherwise control focus)
      } else if (this.isDropdownOpen) {
        this.processBlur();
      } else {
        return;
      }
    });
  }

  returnFocus() {
    // after that rendering bit happens, we need to return the focus to the trigger
    schedule('afterRender', this, function () {
      let dropdownTrigger = this.element.querySelector(
        '.navbar-list-item-dropdown-toggle',
      );
      dropdownTrigger.focus();
    });
  }

  <template>
    {{! template-lint-disable no-at-ember-render-modifiers }}
    <li
      class="navbar-list-item {{if this.isDropdown 'dropdown'}}"
      {{didInsert this.setElement}}
      {{willDestroy this.unregisterListener}}
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
          {{on "blur" this.processBlur}}
        >
          {{@link.name}}
        </button>
        {{#if this.isDropdownOpen}}
          <ul class="navbar-dropdown-list">
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
