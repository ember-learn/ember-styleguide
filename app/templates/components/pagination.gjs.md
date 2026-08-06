# Pagination

Adds back and forth pagination, using `named blocks`. You insert your previous link into a `<:previous></:previous>` block and the next link into a `<:next></:next>` block. This will add the underline styling to the link and an animated arrow to your link. You will use the `showPrevious` and `showNext` prop to make sure the correct links are visible.

## Usage

Add the following code to the template

```gjs live preview
import EsPagination from 'ember-styleguide/components/es-pagination';

<template>
  <EsPagination @showPrevious={{true}} @showNext={{true}}>
    <:previous>
      <a href="#">
        Newer articles
      </a>
    </:previous>
    <:next>
      <a href="#">
        Older articles
      </a>
    </:next>
  </EsPagination>
</template>
```

To only show the previous you've to pass `false` to the `showNext` prop.

```gjs live preview
import EsPagination from 'ember-styleguide/components/es-pagination';

<template>
  <EsPagination @showPrevious={{true}} @showNext={{false}}>
    <:previous>
      <a href="#">
        Newer articles
      </a>
    </:previous>
    <:next>
      <a href="#">
        Older articles
      </a>
    </:next>
  </EsPagination>
</template>
```

To only show the next you've to pass `false` to the `showPrevious` prop.

```gjs live preview
import EsPagination from 'ember-styleguide/components/es-pagination';

<template>
  <EsPagination @showPrevious={{false}} @showNext={{true}}>
    <:previous>
      <a href="#">
        Newer articles
      </a>
    </:previous>
    <:next>
      <a href="#">
        Older articles
      </a>
    </:next>
  </EsPagination>
</template>
```
