# Button

## Usage
{{#docs-demo as |demo|}}
  {{#demo.example name='es-button'}}
    {{es-button label="click me"}}
  {{/demo.example}}
  {{demo.snippet 'es-button'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-has-block'}}
    {{#es-button}} 
      click me <span>🐹</span>
    {{/es-button}}
  {{/demo.example}}
  {{demo.snippet 'es-button-has-block'}}
{{/docs-demo}}

## Styles

{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-dark'}}
    {{es-button label="click me" isDark=true}} 
  {{/demo.example}}
  {{demo.snippet 'es-button-dark'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-light'}}
    {{es-button label="click me" isLight=true}} 
  {{/demo.example}}
  {{demo.snippet 'es-button-light'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-disabled'}}
    {{es-button label="click me" disabled=true}} 
  {{/demo.example}}
  {{demo.snippet 'es-button-disabled'}}
{{/docs-demo}}

## Sizes

{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-tiny'}}
    {{es-button label="click me" isDark=true isTiny=true}} 
  {{/demo.example}}
  {{demo.snippet 'es-button-tiny'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-link'}}
    {{es-button label="click me" isDark=true isLink=true}} 
  {{/demo.example}}
  {{demo.snippet 'es-button-link'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-dense'}}
    {{es-button label="click me" isDark=true isDense=true}} 
  {{/demo.example}}
  {{demo.snippet 'es-button-dense'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-button-block'}}
    {{es-button label="click me" isDark=true isBlock=true}} 
  {{/demo.example}}
  {{demo.snippet 'es-button-block'}}
{{/docs-demo}}
