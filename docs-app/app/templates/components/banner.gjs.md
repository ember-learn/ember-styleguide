# Banner

## Usage

A banner will be shown at the top of the page. That can be filled with text.

```gjs live preview
import EsBanner from 'ember-styleguide/components/es-banner';

<template>
  <EsBanner>Some content goes here</EsBanner>
</template>
```

The banner can also contain a link.

```gjs live preview
import EsBanner from 'ember-styleguide/components/es-banner';

<template>
  <EsBanner><a href="#">Visit Website</a></EsBanner>
</template>
```

When you pass multiple links into the component they will be separated by a tiny dot.

```gjs live preview
import EsBanner from 'ember-styleguide/components/es-banner';

<template>
  <EsBanner><a href="#">Visit Website</a><a href="#">Visit Something else</a></EsBanner>
</template>
```
