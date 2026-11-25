# Typography

### Usage

#### Legibility

Text legibility is primarily affected by color. All text on the website should comply with the Web Content Accessibility Guidelines (WCAG 2.0) Level AA requirements.

Please refer to the <a href="colors">Colors</a> section for more information on color contrast and accessibility.

### Sizes

Disclaimer: Use these helpers when you need to modify the look of an element in cases where using a different element would lead to the wrong semantic meaning. A good example is the Ember.js home page, where a hero element exists which contains the `<h1>` for that page and therefore requires all subsequent headlines to shift down one level. The design does not know about this semantic shift, so all `<h2>` on that page need `.text-xl` to look like `<h1>` and so on.

Use `.text-sm` for small headings or notice paragraphs.

```gjs live preview
<template>
  <div class="text-sm">
    Build with the teams that never stop shipping.
  </div>
</template>
```

Use `.text-base` for body text, navigation items or links.

```gjs live preview
<template>
  <div class="text-base">
    Build with the teams that never stop shipping.
  </div>
</template>
```

`.text-base` is also the default paragraph size.

```gjs live preview
<template>
  <div>
    Build with the teams that never stop shipping.
  </div>
</template>
```

Use `.text-md` for section headings. This is also the default size for the `h3` element.

```gjs live preview
<template>
  <div class="text-md">
    Build with the teams that never stop shipping.
  </div>
</template>
```

Use `.text-lg` for content page headings. This is also the default size for the `h2` element.

```gjs live preview
<template>
  <div class="text-lg">
    Build with the teams that never stop shipping.
  </div>
</template>
```

Use `.text-xl` for landing page headlines. This is also the default size for the `h1` element.

```gjs live preview
<template>
  <div class="text-xl">
    Build with the teams that never stop shipping.
  </div>
</template>
```

Use `.text-hero-xl` for headlines in page headers (heros).

```gjs live preview
<template>
  <h1 class="text-hero-xl">
    Build with the teams that never stop shipping.
  </h1>
</template>
```

Use `.text-hero-base` for plain text in page headers (heros).

```gjs live preview
<template>
  <p class="text-hero-base">
    Ember.js is a productive, battle-tested JavaScript framework for building
    modern web applications. It includes everything you need to build rich UIs
    that work on any device.
  </p>
</template>
```

## Weights

Use `.regular`

```gjs live preview
<template>
  <div class="text-md regular">
    Build with the teams that never stop shipping.
  </div>
</template>
```

Use `.bold` if you must style something as bold and no semantic information needs to be carried. Prefer using `<strong>`.

```gjs live preview
<template>
  <div class="text-md bold">
    Build with the teams that never stop shipping.
  </div>
</template>
```
