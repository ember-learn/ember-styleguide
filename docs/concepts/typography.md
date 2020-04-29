# Typography

### Usage

#### Legibility

Text legibility is primarily affected by color. All text on the website should comply with the Web Content Accessibility Guidelines (WCAG 2.0) Level AA requirements.

Please refer to the <a href="colors">Colors</a> section for more information on color contrast and accessibility.

### Sizes

Disclaimer: Use these helpers when you need to modify the look of an element in cases where using a different element would lead to the wrong semantic meaning. A good example is the Ember.js home page, where a hero element exists which contains the `<h1>` for that page and therefore requires all subsequent headlines to shift down one level. The design does not know about this semantic shift, so all `<h2>` on that page need `.text-xl` to look like `<h1>` and so on.

Use `.text-sm` for small headings or notice paragraphs.

```html
<div class="text-sm">
  Build with the teams that never stop shipping.
</div>
```

Use `.text-base` for body text, navigation items or links.

```html
<div class="text-base">
  Build with the teams that never stop shipping.
</div>
```

`.text-base` is also the default paragraph size.

```html
<div>
  Build with the teams that never stop shipping.
</div>
```

Use `.text-md` for section headings. This is also the default size for the `h3` element.

```html
<div class="text-md">
  Build with the teams that never stop shipping.
</div>
```

Use `.text-lg` for content page headings. This is also the default size for the `h2` element.

```html
<div class="text-lg">
  Build with the teams that never stop shipping.
</div>
```

Use `.text-xl` for landing page headlines. This is also the default size for the `h1` element.

```html
<div class="text-xl">
  Build with the teams that never stop shipping.
</div>
```

Use `.text-hero-xl` for headlines in page headers (heros).

```html
<h1 class="text-hero-xl">
  Build with the teams that never stop shipping.
</h1>
```

Use `.text-hero-base` for plain text in page headers (heros).

```html
<p class="text-hero-base">
  Ember.js is a productive, battle-tested JavaScript framework for building
  modern web applications. It includes everything you need to build rich UIs
  that work on any device.
</p>
```

## Weights

Use `.regular`

```html
<div class="text-md regular">
  Build with the teams that never stop shipping.
</div>
```

Use `.bold` if you must style something as bold and no semantic information needs to be carried. Prefer using `<strong>`.

```html
<div class="text-md bold">
  Build with the teams that never stop shipping.
</div>
```
