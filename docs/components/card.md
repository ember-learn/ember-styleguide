# Card

A card component that serves as a content container for images, text and links. When used within grid layouts cards are expected to share the same content structure and matching height. For accessibility reasons cards should always be implemented as lists, and for this reason the `<EsCard>` component's root element is a `<li>` so it should always be wrapped in a `<ul>`.

Here is an example of a card

```html
<ul class="list-unstyled layout">
  <EsCard class="lg:col-2">
    This is a card
  </EsCard>
</ul>
```

You can also add an image to the card using the `@image` parameter:

```html
<ul class="list-unstyled layout">
  <EsCard @image={{hash src="/ember-logo.png"}} class="lg:col-2">
    This is a card
  </EsCard>
</ul>
```

By default images will be considered decorative and ignored by screen readers, but if you want to provide an alt text for the image you can provide it with the `alt` key in the `@image` hash:

```html
<ul class="list-unstyled layout">
  <EsCard @image={{hash src="/ember-logo.png" alt="Ember Logo"}} class="lg:col-2">
    This is a card
  </EsCard>
</ul>
```

Here is a fuller example of a card that has more structure in the card body

```html
<ul class="list-unstyled layout">
  <EsCard @image={{hash src="/ember-logo.png"}} class="lg:col-2">
    <h3>Ember.js</h3>
    <p>A framework for ambitious web developers. Try it out!</p>
    <div class="flex-horizontal-between">
      <div><a href="#">Visit Website</a></div>
      <div class="text-sm text-muted">COPYRIGHT 2019 TILDE INC.</div>
    </div>
  </EsCard>
</ul>
```

And here is a full card based page layout (which also makes use of the [ESLinkCard](/components/link-card) component) that might be useful when building sites using this component:

```html
<ul class="list-unstyled layout my-3">
  <EsLinkCard
    class="lg:col-3"
    @href="http://discuss.emberjs.com"
    @title="Discussion Forum"
    @icon="discuss-logo"
  >
    <p>Post and search longer-form questions in our public forum.</p>
  </EsLinkCard>
  <EsLinkCard
    class="lg:col-3"
    @href="https://discord.gg/emberjs"
    @title="Discord community chat"
    @icon="discord-logo"
  >
    <p>Join our real-time chat server to connect with other developers and get answers.</p>
  </EsLinkCard>
</ul>

<p>
  Beyond our core online channels, you can dig deeper with these learning resources from the
  community members
</p>

<ul class="list-unstyled layout my-3">
  <EsCard class="lg:col-2 text-center" @icon="mic-icon">
    <h3>Podcasts</h3>
    <ul class="list-unstyled">
      <li><a href="embermap somewhere">Ember Weekly</a></li>
      <li><a href="embermap somewhere">Ember Map Podcast</a></li>
    </ul>
  </EsCard>
  <EsCard class="lg:col-2 text-center" @icon="book-icon">
    <h3>Books</h3>
    <ul class="list-unstyled">
      <li><a href="embermap somewhere">Rock and Roll with Ember.js</a></li>
    </ul>
  </EsCard>
  <EsCard class="lg:col-2 text-center" @icon="tv-icon">
    <h3>Videos</h3>
    <ul class="list-unstyled">
      <li><a href="embermap somewhere">Ember Map</a></li>
    </ul>
  </EsCard>
</ul>
```
