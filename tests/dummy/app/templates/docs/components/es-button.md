# Button

## Usage

Simplest use case: a button with text in it, telling the user what to do.

{{#docs-demo as |demo|}}
  {{#demo.example name="es-button.hbs"}}
    <EsButton @label="click me" />
  {{/demo.example}}
  {{demo.snippet 'es-button.hbs'}}
{{/docs-demo}}


Also supported- block use:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-has-block.hbs'}}
    <EsButton>
      click me <span>🐹</span>
    </EsButton>
  {{/demo.example}}
  {{demo.snippet 'es-button-has-block.hbs'}}
{{/docs-demo}}

To toggle the 'disabled' property, set 'isDisabled' to true
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-disabled.hbs'}}
    <EsButton @label="click me" disabled=true />
  {{/demo.example}}
  {{demo.snippet 'es-button-disabled.hbs'}}
{{/docs-demo}}

## Styles

Outline button style:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-light.hbs'}}
    <EsButton @label="click me" @isLight=true />
  {{/demo.example}}
  {{demo.snippet 'es-button-light.hbs'}}
{{/docs-demo}}

Smaller button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-tiny.hbs'}}
    <EsButton @label="click me" @isTiny={{true}} />
  {{/demo.example}}
  {{demo.snippet 'es-button-tiny.hbs'}}
{{/docs-demo}}

Full-width button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-block.hbs'}}
    <EsButton @label="click me" @isBlock=true />
  {{/demo.example}}
  {{demo.snippet 'es-button-block.hbs'}}
{{/docs-demo}}

## Accessibility

Since we're using the native HTML button element and requiring a label value to be provided, the component itself is accesible as it is.

If you are going to put an icon in the button, then you will need to set an aria-label property on the button:
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-icon.hbs'}}
    <EsButton aria-label="Hamster Secrets" title="Hamster Secrets">
      🐹
    </EsButton>
  {{/demo.example}}
  {{demo.snippet 'es-button-icon.hbs'}}
{{/docs-demo}}

## Other Uses

There are some other ways this component could be used:

- as a link
- as a toggle button (supports the aria-pressed attribute)

{{docs-note}}
