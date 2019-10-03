# Card

A card component that serves as a content container for images, text and links. When used within grid layouts cards are expected to share the same content structure and matching height.


<div class="layout-grid">
  <div class="card col-2">
    <img class="img-fluid" src="/ember-logo.png">
    <div class="card-content">
      <h3>Ember.js</h3>
      <p>A framework for ambitious web developers. Try it out!</p>
      <div class="flex-row justify-content-between">
        <div><a href="#">Visit Website</a></div>
        <div class="xsmall text-muted">COPYRIGHT 2019 TILDE INC.</div>
      </div>
    </div>
  </div> 
</div>


```handlebars
{{#es-card}}
  This is a card
{{/es-card}}
```

```handlebars
{{#es-card hasBorder=true}}
  This is a card
{{/es-card}}
```
