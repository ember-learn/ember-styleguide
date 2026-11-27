import EsIcon from './es-icon.gjs';
const emberLogo = new URL('../assets/images/ember-logo.svg', import.meta.url)
  .href;

<template>
  {{! template-lint-disable no-redundant-role }}
  <div class="footer-info container">
    <div class="footer-info-links">

      <img
        src={{emberLogo}}
        height="40px"
        width="83px"
        alt=""
        role="presentation"
        class="footer-logo"
      />

      <div class="spacer"></div>

      {{#each @infoLinks as |link|}}
        <a href={{link.href}} class="info-link">{{link.name}}</a>
      {{/each}}
    </div>
    <div class="footer-social hide-on-mobile">
      {{#each @socialLinks as |link|}}
        <a
          href={{link.href}}
          title={{link.title}}
          aria-label={{link.label}}
          rel="me"
        >
          <EsIcon @icon={{link.class}} />
          {{link.title}}
        </a>
      {{/each}}
    </div>
  </div>
</template>
