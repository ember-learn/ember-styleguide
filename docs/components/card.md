# Card

A card component that serves as a content container for images, text and links. When used within grid layouts cards are expected to share the same content structure and matching height.

Here is an example of a card

```html
<EsCard>
  This is a card
</EsCard>
```

You can also add an image to the card using the `@image` parameter:


```html
<EsCard @image="/ember-logo.png">
  This is a card
</EsCard>
```

By default the card will have the image to the left of the content. If you want to make the card a **vertical** card you can apply the `vertical` attribute;

```html
<EsCard @image="/ember-logo.png" vertical>
  This is a card
</EsCard>
```

It is unlikely that you will be using this vertical display of a card with a full width container so you might want to use a layout grid to contain the card:


```html
<div class="layout-grid">
  <EsCard @image="/ember-logo.png" vertical class="col-2-large">
    this is a card
  </EsCard>
  <EsCard @image="/ember-logo.png" vertical class="col-2-large">
    this is another card
  </EsCard>
</div>
```

If you want the image to take up the full available width of the card you can apply the `full-image` attribute:

```html
<div class="layout-grid">
  <EsCard @image="/ember-logo.png" vertical full-image class="col-2-large">
    this is a card
  </EsCard>
  <EsCard @image="/ember-logo.png" vertical full-image class="col-2-large">
    this is another card
  </EsCard>
</div>
```

And here is a fuller example of a vertical, full-image card that has more structure in the card body

```html
<div class="layout-grid">
  <EsCard @image="/ember-logo.png" vertical full-image class="col-2-large">
    <h3>Ember.js</h3>
    <p>A framework for ambitious web developers. Try it out!</p>
    <div class="flex-row justify-content-between">
      <div><a href="#">Visit Website</a></div>
      <div class="xsmall text-muted">COPYRIGHT 2019 TILDE INC.</div>
    </div>
  </EsCard>
</div>
```

And here is a full card based page layout that might be useful when building sites using this component:

```html
<div class="layout-grid">
  <EsCard class="col-3-large" @image="/images/icons/discuss-logo.svg">
    <h3>Discussion Forum</h3>
    <p>Post and search longer-form questions in our public forum.</p>
  </EsCard>
  <EsCard class="col-3-large" @image="/images/icons/discord-logo.svg">
    <h3>Discord community chat</h3>
    <p>Join our real-time chat server to connect with other developers and get answers.</p>
  </EsCard>

  <p class="col-6-large">Beyond our core online channels, you can dig deeper with these learning resources from the community members</p>

  <EsCard class="col-2-large text-center" vertical @image="/images/icons/mic-icon.svg">
    <h3>Podcasts</h3>
    <ul class="list-unstyled">
      <li><a href="embermap somewhere">Ember Weekly</a></li>
      <li><a href="embermap somewhere">Ember Map Podcast</a></li>
    </ul>
  </EsCard>
  <EsCard class="col-2-large text-center" vertical @image="/images/icons/book-icon.svg">
    <h3>Books</h3>
    <ul class="list-unstyled">
      <li><a href="embermap somewhere">Rock and Roll with Ember.js</a></li>
    </ul>
  </EsCard>
  <EsCard class="col-2-large text-center" vertical @image="/images/icons/tv-icon.svg">
    <h3>Videos</h3>
    <ul class="list-unstyled">
      <li><a href="embermap somewhere">Ember Map</a></li>
    </ul>
  </EsCard>
</div>
```
