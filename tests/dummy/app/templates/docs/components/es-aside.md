# Aside

{{#docs-demo as |demo|}}
  {{#demo.example name='aside-demo1'}}
    {{#es-aside as |f|}}
      {{#f.category open=true as |category|}}
        {{#category.toggle}}
          Getting Started
        {{/category.toggle}}
        {{#category.body as |body|}}
          {{#body.option}}
            <a href="https://emberjs.com">
              Quick Start
            </a>
          {{/body.option}}
          {{#body.option}}
            <a href="https://emberjs.com">
              Installing
            </a>
          {{/body.option}}
          {{#body.option}}
            <a href="https://emberjs.com">
              Core Concepts
            </a>
          {{/body.option}}
        {{/category.body}}
      {{/f.category}}
      {{#f.category as |category|}}
        {{#category.toggle}}
          Components
        {{/category.toggle}}
        {{#category.body as |body|}}
          {{#body.option}}
            <a href="https://emberjs.com">
              Intro
            </a>
          {{/body.option}}
        {{/category.body}}
      {{/f.category}}
    {{/es-aside}}
  {{/demo.example}}
  {{demo.snippet 'aside-demo1'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='aside-demo2'}}
    {{#es-aside as |f|}}
      {{#each content as |result|}}
        {{#f.category as |category|}}

          {{#category.toggle href=result.link}}
            {{result.title}}
          {{/category.toggle}}

          {{#category.body as |body|}}
            {{#each result.options as |item|}}
              {{#body.option}}
                <a href="{{item.link}}">
                  {{item.title}}
                </a>
              {{/body.option}}
            {{/each}}
          {{/category.body}}
        {{/f.category}}
      {{/each}}
    {{/es-aside}}
  {{/demo.example}}
  {{demo.snippet 'aside-demo2'}}
{{/docs-demo}}

<aside role="note">

Have ideas for this component? Submit an issue or a PR at [https://github.com/ember-learn/ember-styleguide](https://github.com/ember-learn/ember-styleguide).

</aside>
