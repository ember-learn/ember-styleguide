# Heading

{{#docs-demo as |demo|}}
  {{#demo.example name='es-heading'}}
    {{es-heading headingText='This is a heading text'}}
  {{/demo.example}}
  {{demo.snippet 'es-heading'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-heading-block'}}
    {{#es-heading}}
      This is a heading text <span>🐹</span>
    {{/es-heading}}
  {{/demo.example}}
  {{demo.snippet 'es-heading-block'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-heading-centered'}}
    {{es-heading headingText='This is a heading text' isCentered=true}}
  {{/demo.example}}
  {{demo.snippet 'es-heading-centered'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-heading-page-heading'}}
    {{es-heading headingText='This is a heading text' isPageHeading=true}}
  {{/demo.example}}
  {{demo.snippet 'es-heading-page-heading'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-heading-page-heading-h2'}}
    {{es-heading headingText='This is heading text in an H2' tagName='h2'}}
  {{/demo.example}}
  {{demo.snippet 'es-heading-page-heading-h2'}}
{{/docs-demo}}

<aside role="note">

Have ideas for this component? Submit an issue or a PR at [https://github.com/ember-learn/ember-styleguide](https://github.com/ember-learn/ember-styleguide).

</aside>