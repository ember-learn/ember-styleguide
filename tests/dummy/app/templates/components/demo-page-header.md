# Page Header

At the top of some pages we need a "hero" section, which will comprise of a
title, subtitle and potentially some call to action. For this use case you
should use the `<EsPageHeader />` component:

```handlebars
<EsPageHeader
  @headline="A framework for ambitious web developers"
  @detail="Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device."
  class="dark"
>
  <EsButton>Go</EsButton>
</EsPageHeader>
```

<EsPageHeader
  @headline="A framework for ambitious web developers"
  @detail="Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device."
  class="dark">
  <EsButton>Go</EsButton>
</EsPageHeader>

This example is making use of the [`dark` css helper](/css/helpers#dark)
which will most likely be required for the header section of the page.

If you do for some reason need an `EsPageHeader` with a light background you can
remove the `class="dark"` css helper.

```handlebars
<EsPageHeader
  @headline="Some other message"
  @detail="This isn't really a design motif but we'll try it any for a demo"
>
  <EsButton>Go</EsButton>
</EsPageHeader>
```

<EsPageHeader
  @headline="Some other message"
  @detail="This isn't really a design motif but we'll try it any for a demo">
  <EsButton>Go</EsButton>
</EsPageHeader>

You will notice that the text color automatically adjusts to fit its use case
