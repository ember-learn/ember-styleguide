# Card

A card component that serves as a content container for images, text and links. When used within grid layouts cards are expected to share the same content structure and matching height. For accessibility reasons cards should always be implemented as lists, and for this reason the `<EsCard>` component's root element is a `<li>` so it should always be wrapped in a `<ul>`.

Here is an example of a card

```html
<ul class="list-unstyled">
  <EsCard>
    This is a card
  </EsCard>
</ul>
```

You can also add an image to the card using the `@image` parameter:


```html
<ul class="list-unstyled">
  <EsCard @image="/ember-logo.png">
    This is a card
  </EsCard>
</ul>
```

By default the card will have the image to the left of the content. If you want to make the card a **vertical** card you can apply the `vertical` attribute;

```html
<ul class="list-unstyled">
  <EsCard @image="/ember-logo.png" vertical>
    This is a card
  </EsCard>
</ul>
```

It is unlikely that you will be using this vertical display of a card with a full width container so you might want to use a layout grid to contain the card:


```html
<ul class="list-unstyled layout-grid">
  <EsCard @image="/ember-logo.png" vertical class="col-2-large">
    this is a card
  </EsCard>
  <EsCard @image="/ember-logo.png" vertical class="col-2-large">
    this is another card
  </EsCard>
</ul>
```

If you want the image to take up the full available width of the card you can apply the `full-image` attribute:

```html
<ul class="list-unstyled layout-grid">
  <EsCard @image="/ember-logo.png" vertical full-image class="col-2-large">
    this is a card
  </EsCard>
  <EsCard @image="/ember-logo.png" vertical full-image class="col-2-large">
    this is another card
  </EsCard>
</ul>
```

And here is a fuller example of a vertical, full-image card that has more structure in the card body

```html
<ul class="list-unstyled layout-grid">
  <EsCard @image="/ember-logo.png" vertical full-image class="col-2-large">
    <h3>Ember.js</h3>
    <p>A framework for ambitious web developers. Try it out!</p>
    <div class="flex-row justify-content-between">
      <div><a href="#">Visit Website</a></div>
      <div class="xsmall text-muted">COPYRIGHT 2019 TILDE INC.</div>
    </div>
  </EsCard>
</ul>
```

You can also create a card that allows a link to an external resource using `<a href=""></a>` somewhere in the card body, most likely in the header:


```html
<ul class="list-unstyled">
  <EsCard @image="/images/icons/discuss-logo.svg">
    <h3>
      <a href="http://discuss.emberjs.com">Discussion Forum</a>
    </h3>
    <p>Post and search longer-form questions in our public forum.</p>
  </EsCard>
</ul>
```

But if you would like the whole card to become interactive and act as a link you can add the `card-link` attribute. This will stretch the link to be the full area of the card:

```html
<ul class="list-unstyled">
  <EsCard @image="/images/icons/discuss-logo.svg" card-link>
    <h3>
      <a href="http://discuss.emberjs.com">Discussion Forum</a>
    </h3>
    <p>Post and search longer-form questions in our public forum.</p>
  </EsCard>
</ul>
```

And here is a full card based page layout that might be useful when building sites using this component:

```html
<ul class="list-unstyled layout-grid">
  <EsCard class="col-3-large" @image="/images/icons/discuss-logo.svg" card-link>
    <h3>
      <a href="http://discuss.emberjs.com">Discussion Forum</a>
    </h3>
    <p>Post and search longer-form questions in our public forum.</p>
  </EsCard>
  <EsCard class="col-3-large" @image="/images/icons/discord-logo.svg" card-link>
    <h3>
      <a href="https://discord.gg/emberjs">Discord community chat</a>
    </h3>
    <p>Join our real-time chat server to connect with other developers and get answers.</p>
  </EsCard>
</ul>

<p class="col-6-large">Beyond our core online channels, you can dig deeper with these learning resources from the community members</p>

<ul class="list-unstyled layout-grid">
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
</ul>
```
