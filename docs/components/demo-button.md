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

To toggle the 'disabled' property, set 'isDisabled' to true

```handlebars
<EsButton @label="click me" disabled=true />
```

## Styles

Outline button style:

```handlebars
<EsButton @label="click me" @isDark=false />
```

Smaller button:

```handlebars
<EsButton @label="click me" @isTiny=true />
```

Less Padding:

```handlebars
<EsButton @label="click me" @isDark=true @isDense=true />
```

Full-width button:

```handlebars
<EsButton @label="click me" @isBlock=true />
```

## Accessibility

Since we're using the native HTML button element and requiring a label value to be provided, the component itself is accesible as it is.

If you are going to put an icon in the button, then you will need to set an aria-label property on the button:

```handlebars
<EsButton @ariaLabel="Hamster Secrets" @title="Hamster Secrets">
  🐹
</EsButton>
```

## Other Uses

There are some other ways this component could be used:

- as a link
- as a toggle button (supports the aria-pressed attribute)
