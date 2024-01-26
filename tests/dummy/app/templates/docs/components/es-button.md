# Button

## Usage

Simplest use case: a button with text in it, telling the user what to do.

<DocsDemo as |demo|>
  <demo.example @name="es-button.hbs">
    <EsButton @label="click me" />
  </demo.example>
  <demo.snippet @name="es-button.hbs" />
</DocsDemo>


Also supported- block use:
<DocsDemo as |demo|>
  <demo.example @name="es-button-has-block.hbs">
    <EsButton>
      click me <span>🐹</span>
    </EsButton>
  </demo.example>
  <demo.snippet @name="es-button-has-block.hbs" />
</DocsDemo>

To toggle the 'disabled' property, set 'isDisabled' to true
<DocsDemo as |demo|>
  <demo.example @name="es-button-disabled.hbs">
    <EsButton @label="click me" @isDisabled={{true}} />
  </demo.example>
  <demo.snippet @name="es-button-disabled.hbs" />
</DocsDemo>

## Styles

Outline button style:
<DocsDemo as |demo|>
  <demo.example @name="es-button-light.hbs">
    <EsButton @label="click me" @isDark={{false}} />
  </demo.example>
  <demo.snippet @name="es-button-light.hbs" />
</DocsDemo>

Smaller button:
<DocsDemo as |demo|>
  <demo.example @name="es-button-tiny.hbs">
    <EsButton @label="click me" @isTiny={{true}} />
  </demo.example>
  <demo.snippet @name="es-button-tiny.hbs" />
</DocsDemo>

Less Padding:
<DocsDemo as |demo|>
  <demo.example @name="es-button-dense.hbs">
    <EsButton @label="click me" @isDark={{true}} @isDense={{true}} />
  </demo.example>
  <demo.snippet @name="es-button-dense.hbs" />
</DocsDemo>

Full-width button:
<DocsDemo as |demo|>
  <demo.example @name="es-button-block.hbs">
    <EsButton @label="click me" @isBlock={{true}} />
  </demo.example>
  <demo.snippet @name="es-button-block.hbs" />
</DocsDemo>

## Accessibility

Since we're using the native HTML button element and requiring a label value to be provided, the component itself is accesible as it is.

If you are going to put an icon in the button, then you will need to set an aria-label property on the button:
<DocsDemo as |demo|>
  <demo.example @name="es-button-icon.hbs">
    <EsButton @ariaLabel="Hamster Secrets" @title="Hamster Secrets">
      🐹
    </EsButton>
  </demo.example>
  <demo.snippet @name="es-button-icon.hbs" />
</DocsDemo>

## Other Uses

There are some other ways this component could be used:

- as a link
- as a toggle button (supports the aria-pressed attribute)

<DocsNote />
