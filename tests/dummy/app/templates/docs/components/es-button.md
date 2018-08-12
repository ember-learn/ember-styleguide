# Button

## Usage

Simplest use case: a button with text in it, telling the user what to do.

{{#docs-demo as |demo|}}
  {{#demo.example name="es-button.hbs"}}
    {{es-button label="click me"}}
  {{/demo.example}}
  {{demo.snippet 'es-button.hbs'}}
{{/docs-demo}}


Also supported- block use:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-has-block.hbs'}}
    {{#es-button}}
      click me <span>🐹</span>
    {{/es-button}}
  {{/demo.example}}
  {{demo.snippet 'es-button-has-block.hbs'}}
{{/docs-demo}}

To toggle the 'disabled' property, set 'isDisabled' to true
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-disabled.hbs'}}
    {{es-button label="click me" isDisabled=true}}
  {{/demo.example}}
  {{demo.snippet 'es-button-disabled.hbs'}}
{{/docs-demo}}

## Styles

Outline button style:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-light.hbs'}}
    {{es-button label="click me" isDark=false}}
  {{/demo.example}}
  {{demo.snippet 'es-button-light.hbs'}}
{{/docs-demo}}

Smaller button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-tiny.hbs'}}
    {{es-button label="click me" isTiny=true}}
  {{/demo.example}}
  {{demo.snippet 'es-button-tiny.hbs'}}
{{/docs-demo}}

Less Padding:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-dense.hbs'}}
    {{es-button label="click me" isDark=true isDense=true}}
  {{/demo.example}}
  {{demo.snippet 'es-button-dense.hbs'}}
{{/docs-demo}}

Full-width button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-block.hbs'}}
    {{es-button label="click me" isBlock=true}}
  {{/demo.example}}
  {{demo.snippet 'es-button-block.hbs'}}
{{/docs-demo}}

## Accessibility

Since we're using the native HTML button element and requiring a label value to be provided, the component itself is accesible as it is.

If you are going to put an icon in the button, then you will need to set an aria-label property on the button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-icon.hbs'}}
    {{#es-button  ariaLabel="Hamster Secrets" title="Hamster Secrets"}}
      🐹
    {{/es-button}}
  {{/demo.example}}
  {{demo.snippet 'es-button-icon.hbs'}}
{{/docs-demo}}

## Other Uses

There are some other ways this component could be used:

- as a link
- as a toggle button (supports the aria-pressed attribute)

<aside>

Have ideas for this component? Submit an issue or a PR at [https://github.com/ember-learn/ember-styleguide](https://github.com/ember-learn/ember-styleguide).

</aside>