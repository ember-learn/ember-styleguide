# Icons

Icons are used to enhance the communication of concepts and to increase the discoverability of navigational paths.

## Accesibility Guidelines for Icons

1. Don't use icons by themselves, always pair an icon with text on the screen.
2. Don't use the same icon to represent a different concept. Icons should have unambiguous meaning.
3. All image-based icons should have an appropriate alt text attribute.

### Using icons

Icons are used inside an icon-wrapper that defines it's size and styling options such a circle background.

```html
<div class="icon-wrapper margin-small">
  <img class="icon" src="../images/icons/bubble-icon.svg">
</div>
<div class="icon-wrapper circle bg-orange margin-small">
  <img class="icon" src="../images/icons/mic-icon.svg">
</div>
```

### Applying sizing to icons

```html
<div class="icon-wrapper xsmall margin-xsmall">
  <img class="icon" alt="speech bubble" src="../images/icons/bubble-icon.svg">
</div>
<div class="icon-wrapper small margin-xsmall">
  <img class="icon" alt="speech bubble" src="../images/icons/bubble-icon.svg">
</div>
<div class="icon-wrapper medium margin-xsmall">
  <img class="icon" alt="speech bubble" src="../images/icons/bubble-icon.svg">
</div>
<div class="icon-wrapper large margin-xsmall">
  <img class="icon" alt="speech bubble" src="../images/icons/bubble-icon.svg">
</div>
<div class="icon-wrapper xlarge margin-xsmall">
  <img class="icon" alt="speech bubble" src="../images/icons/bubble-icon.svg">
</div>
```

### Using icons within components
#### Button
#### Card
#### Notification