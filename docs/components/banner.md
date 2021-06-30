# Banner

## Usage

A banner with text in it, telling the user an important message.

```handlebars
<EsBanner @message='Hamsters!' @link='https://en.wikipedia.org/wiki/Hamster' />
```
This would normally be addded to the application template so that it appears on all routes within the website.
If the url matches the `@link` url, the banner won't be displayed. Therefore, if the user clicks the link in the banner,
the banner will disappear.


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
