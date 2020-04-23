# Button

## Usage

Simplest use case: a button with text in it, telling the user what to do.

```handlebars
<EsButton @label="click me" />
```

Also supported- block use:

```handlebars
<EsButton>
  click me <span>🐹</span>
</EsButton>
```

To add interactivity you can pass an action to `onClicked`

```handlebars
<EsButton @onClicked={{action (mut value) (increment value)}}>
  Increment Value
</EsButton>

{{value}}
```

## Secondary Buttons

```handlebars
<EsButton @label="click me" @secondary={{true}} />
```

## Styling Links
It is also possible to style a link to look like a button using the `something` class

```html
<a href="https://emberjs.com" class="es-button">Go to Ember homepage</a>
<a href="https://guides.emberjs.com" class="es-button-secondary">Go to the Guides</a>
```

## Accessibility

Since we're using the native HTML button element and requiring a label value to be provided, the component itself is accesible as it is.

If you are going to put an icon in the button, then you will need to set an aria-label property on the button:

```handlebars
<EsButton aria-label="Hamster Secrets" title="Hamster Secrets">
  🐹
</EsButton>
```
