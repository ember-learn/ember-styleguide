# Button

## Usage

Simplest use case: a button with text in it, telling the user what to do.
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button'}}
    {{es-button label="click me"}}
  {{/demo.example}}
  {{demo.snippet 'es-button'}}
{{/docs-demo}}

Also supported- block use:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-has-block'}}
    {{#es-button}}
      click me <span>🐹</span>
    {{/es-button}}
  {{/demo.example}}
  {{demo.snippet 'es-button-has-block'}}
{{/docs-demo}}

To toggle the 'disabled' property, set 'isDisabled' to true
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-disabled'}}
    {{es-button label="click me" isDisabled=true}}
  {{/demo.example}}
  {{demo.snippet 'es-button-disabled'}}
{{/docs-demo}}

## Styles

Outline button style:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-dark'}}
    {{es-button label="click me" isDark=false}}
  {{/demo.example}}
  {{demo.snippet 'es-button-dark'}}
{{/docs-demo}}

Smaller button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-tiny'}}
    {{es-button label="click me" isTiny=true}}
  {{/demo.example}}
  {{demo.snippet 'es-button-tiny'}}
{{/docs-demo}}

Less Padding:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-dense'}}
    {{es-button label="click me" isDark=true isDense=true}}
  {{/demo.example}}
  {{demo.snippet 'es-button-dense'}}
{{/docs-demo}}

Full-width button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-block'}}
    {{es-button label="click me" isBlock=true}}
  {{/demo.example}}
  {{demo.snippet 'es-button-block'}}
{{/docs-demo}}

## Accessibility

Since we're using the native HTML button element and requiring a label value to be provided, the component itself is accesible as it is.

If you are going to put an icon in the button, then you will need to set an aria-label property on the button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-icon'}}
    {{#es-button  ariaLabel="Hamster Secrets"}}
      🐹
    {{/es-button}}
  {{/demo.example}}
  {{demo.snippet 'es-button-icon'}}
{{/docs-demo}}

## Other Uses

There are some other ways this component could be used:

- as a link
- as a toggle button (supports the aria-pressed attribute)



<hr/>

Have ideas for this component? Submit an issue or a PR at [https://github.com/ember-learn/ember-styleguide](https://github.com/ember-learn/ember-styleguide).
