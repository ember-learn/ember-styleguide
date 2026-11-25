# Link Card

An `<EsLinkCard />` is a card that allows a link to an external resource.

```gjs live preview
import EsLinkCard from 'ember-styleguide/components/es-link-card';

<template>
  <ul class="list-unstyled layout">
    <EsLinkCard class="lg:col-3" @href="http://discuss.emberjs.com" @title="Discussion Forum">
      <p>Post and search longer-form questions in our public forum.</p>
    </EsLinkCard>
  </ul>
</template>
```

You can add an icon to the card with `@icon`

```gjs live preview
import EsLinkCard from 'ember-styleguide/components/es-link-card';

<template>
  <ul class="list-unstyled layout">
    <EsLinkCard
      class="lg:col-3"
      @href="http://discuss.emberjs.com"
      @title="Discussion Forum"
      @icon="discuss-logo"
    >
      <p>Post and search longer-form questions in our public forum.</p>
    </EsLinkCard>
  </ul>
</template>
```

Here is what that looks like on a dark background

```gjs live preview
import EsLinkCard from 'ember-styleguide/components/es-link-card';

<template>
  <div class="bg-dark">
    <ul class="list-unstyled layout">
      <EsLinkCard
        class="lg:col-3"
        @href="http://discuss.emberjs.com"
        @title="Discussion Forum"
      >
        <p>Post and search longer-form questions in our public forum.</p>
      </EsLinkCard>
    </ul>
  </div>
</template>
```
