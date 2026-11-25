# Wells

Wells provide a box to wrap images that should be presented on a background, most likely because they have transparency.

```gjs live preview
<template>
  <!-- Note: p-2 and m-2 are spacer helpers and not relevant to the example -->
  <div class="well p-2 m-2">
    Hello World
  </div>
</template>
```

They also come in multiple ratios and ensure that a contained image is resized to fill the space appropriatly.

```gjs live preview
<template>
  <div class="layout">
    <div class="sm:col-2 lg:col-2 p-2">
      <h3>Ratio 1:1</h3>
      <div class="well well-1/1">
        <img src="/ember-logo.png" alt="Ember.js" />
      </div>
    </div>
    <div class="sm:col-2 lg:col-2 p-2">
      <h3>Ratio 4:3</h3>
      <div class="well well-4/3">
        <img src="/ember-logo.png" alt="Ember.js" />
      </div>
    </div>
    <div class="sm:col-2 lg:col-2 p-2">
      <h3>Ratio 16:9</h3>
      <div class="well well-16/9">
        <img src="/ember-logo.png" alt="Ember.js" />
      </div>
    </div>
  </div>
</template>
```

Wells can be applied to anchors and work well with HTML `<figure>` elements.

```gjs live preview
<template>
  <div class="layout">
    <div class="sm:col-2 lg:col-2 p-2">
      <figure>
        <div class="well well-16/9">
          <img src="/ember-logo.png" alt="Ember.js" />
        </div>
        <figcaption>
          A well thought out caption to add more information to the image above
        </figcaption>
      </figure>
    </div>
    <div class="sm:col-2 lg:col-2 p-2">
      <figure>
        <a href="#" class="well well-16/9">
          <img src="/ember-logo.png" alt="Ember.js" />
        </a>
        <figcaption>
          Using an anchor for the well works, too. You may want to add an additional link to the text
          and or make sure this becomes clear from the context.
        </figcaption>
      </figure>
    </div>
  </div>
</template>
```
