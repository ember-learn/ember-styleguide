# Button

## Usage

Simplest use case: a button with text in it, telling the user what to do.

```handlebars
{{es-button label="click me"}}
```

{{es-button label="click me"}}


Also supported- block use:

```handlebars
{{#es-button}}
  click me <span>🐹</span>
{{/es-button}}
```

{{#es-button}}
  click me <span>🐹</span>
{{/es-button}}

To toggle the 'disabled' property, set 'isDisabled' to true

```handlebars
{{es-button label="click me" isDisabled=true}}
```

## Styles

Outline button style:

```handlebars
{{es-button label="click me" isDark=false}}
```

{{es-button label="click me" isDark=false}}

Smaller button:

```handlebars
{{es-button label="click me" isTiny=true}}
```

{{es-button label="click me" isTiny=true}}

Less Padding:

```handlebars
{{es-button label="click me" isDark=true isDense=true}}
```

{{es-button label="click me" isDark=true isDense=true}}

Full-width button:

```handlebars
{{es-button label="click me" isBlock=true}}
```

{{es-button label="click me" isBlock=true}}

## Accessibility

Since we're using the native HTML button element and requiring a label value to be provided, the component itself is accesible as it is.

If you are going to put an icon in the button, then you will need to set an aria-label property on the button:

```handlebars
{{#es-button  ariaLabel="Hamster Secrets" title="Hamster Secrets"}}
  🐹
{{/es-button}}
```

{{#es-button  ariaLabel="Hamster Secrets" title="Hamster Secrets"}}
  🐹
{{/es-button}}

## Other Uses

There are some other ways this component could be used:

- as a link
- as a toggle button (supports the aria-pressed attribute)
