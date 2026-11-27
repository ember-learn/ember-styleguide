const arrowIcon = new URL('../assets/images/arrow-icon.svg', import.meta.url)
  .href;

<template>
  <div class="pagination-wrapper">
    {{#if (has-block "previous")}}
      {{#if @showPrevious}}
        <div class="previous-wrapper">
          <img alt="left arrow" src={{arrowIcon}} />
          <div>{{yield to="previous"}}</div>
        </div>
      {{/if}}
    {{/if}}

    {{#if (has-block "next")}}
      {{#if @showNext}}
        <div class="next-wrapper">
          <div>{{yield to="next"}}</div>
          <img alt="right arrow" src={{arrowIcon}} />
        </div>
      {{/if}}
    {{/if}}
  </div>
</template>
