# Icons

Icons are used to enhance the communication of concepts and to increase the discoverability of navigational paths.

## Accesibility Guidelines for Icons

1. Don't use icons by themselves, always pair an icon with text on the screen.
2. Don't use the same icon to represent a different concept. Icons should have unambiguous meaning.
3. All image-based icons should have an appropriate alt text attribute.

### Using icons

Icons are used inside an icon-wrapper that defines it's size and styling options such a circle background.

```html
<div class="icon-wrapper m-2">
  <img class="icon" src="/images/icons/bubble-icon.svg" />
</div>
<div class="icon-wrapper circle bg-brand m-2">
  <img class="icon" src="/images/icons/mic-icon.svg" />
</div>
```

### Applying sizing to icons

```html
<div class="icon-wrapper small m-1">
  <img class="icon" alt="speech bubble" src="/images/icons/bubble-icon.svg" />
</div>
<div class="icon-wrapper base m-1">
  <img class="icon" alt="speech bubble" src="/images/icons/bubble-icon.svg" />
</div>
<div class="icon-wrapper medium m-1">
  <img class="icon" alt="speech bubble" src="/images/icons/bubble-icon.svg" />
</div>
<div class="icon-wrapper large m-1">
  <img class="icon" alt="speech bubble" src="/images/icons/bubble-icon.svg" />
</div>
<div class="icon-wrapper xlarge m-1">
  <img class="icon" alt="speech bubble" src="/images/icons/bubble-icon.svg" />
</div>
```

### Using icons within components

#### Button

```html
<button class="es-button small margin-bottom-small">
  <img class="icon icon-left" src="/images/icons/mic-icon.svg" /> Click Me
</button>

<button class="es-button small margin-bottom-small">
  Click Me <img class="icon icon-right" src="/images/icons/mic-icon.svg" />
</button>
```

#### Card

```html
<div class="card text-center m-2">
  <div class="card-content">
    <div class="icon-wrapper medium circle bg-brand m-2">
      <img class="icon" src="/images/icons/mic-icon.svg" />
    </div>
    <h3>Podcasts</h3>
    <p>Rock n' Roll with EmberJS.</p>
  </div>
</div>
```
