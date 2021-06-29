# Banner

## Usage

A banner with text in it, telling the user an important message.

```handlebars
<EsBanner @message='Hamsters!' />
```

Also supported- block use:

```handlebars
<EsBanner>
  Click Me <span>🐹</span>
</EsBanner>
```

## Accessibility

Since we're using the native HTML anchor element, the component itself is accessible as it is.

If you are going to put an icon in the banner message, then you will need to set an aria-label property on the banner:

```handlebars
<EsBanner aria-label="Hamster Secrets">
  🐹
</EsBanner>
```
