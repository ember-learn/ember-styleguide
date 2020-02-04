# Link Card

An `<EsLinkCard />` is a card that allows a link to an external resource.

```html
<ul class="list-unstyled layout">
  <EsLinkCard class="lg:col-3" @href="http://discuss.emberjs.com" @title="Discussion Forum">
    <p>Post and search longer-form questions in our public forum.</p>
  </EsLinkCard>
</ul>
```

You can add an icon to the card with `@icon`

```html
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
```

Here is what that looks like on a dark background

```html
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
```
