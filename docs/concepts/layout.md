# Layout

## Grid

### Grid Usage
A grid can be formed with fixed boxes by arranging tiles in an inline block, icons in toolbars, etc. Column count grows with browser width. Tiles wrap to the next line, or are sometimes truncated with an overflow scroll. The column width is defined by the column classes, if no width is defined the columns will resize to fit the row.

#### Center Aligned fixed width column
Example of a centered half column. A column class is used to limit its width.
```html
<div class="row justify-center">
  <div class="col-one-half text-center">
    <h2>Build with the teams that never stop shipping.</h2>
    <p>Some of the best development teams in the world have been iterating on their products for years with Ember. With scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use every step of the way.</p>
  </div>
</div>
```

### Left Aligned fixed width

```html
<div class="row">
  <div class="col-one-half">
    <h3>A Simple Component</h3>
    <p>Ember Components are a superset of HTML – that means is a full-fledged Ember Component! To pass data into Components, use the @ symbol along with an argument name.</p>
  </div>
</div>
```


### Equally Distributed Columns

```html
<div class="row">
  <div class="col">
    <div class="card text-center">
      <div class="card-content">
        <h3>Podcasts</h3>
        <p>Rock n' Roll with EmberJS.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card text-center">
      <div class="card-content">
        <h3>Books</h3>
        <p>Rock n' Roll with EmberJS.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card text-center">
      <div class="card-content">
        <h3>Videos</h3>
        <p>Rock n' Roll with EmberJS.</p>
      </div>
    </div>
  </div>
</div>
```

```html
<div class="row">
  <div class="col">
    <div class="card">
      <div class="card-content">
        <h3>Guides</h3>
        <p>If you're familiar with JavaScript and web application development, our Guides will teach you everything you need to know to get started building with Ember.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-content">
        <h3>Read Our Blog</h3>
        <p>Find out about the newest releases and latest work happening in the ecosystem by visiting the official Ember Blog.</p>
      </div>
    </div>
  </div>
</div>
```

### Photo Grid

```html
<div class="row align-end">
  <div class="col">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/400x500/000/fff">
  </div>
  <div class="col">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/500x300/000/fff">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/600x400/000/fff">
  </div>
  <div class="col">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/400x500/000/fff">
  </div>
</div>
```
## Spacing Scale
The spacing scale is used to manage spacing a white-space within layouts and components.
The spacing scale can be applied to both margin and padding properties.

<div class="row">
  <div class="card col">
    <div class="spacer-xsmall bg-info">
    </div>
    <div class="card-content">
      <h4>Extra Small Offset</h4>
    </div>
  </div>
  <div class="card col">
    <div class="spacer-small bg-info">
    </div>
    <div class="card-content">
      <h4>Small Offset</h4>
    </div>
  </div>
  <div class="card col">
    <div class="spacer-medium bg-info">
    </div>
    <div class="card-content">
      <h4>Medium Offset</h4>
    </div>
  </div>
  <div class="card col">
    <div class="spacer-large bg-info">
    </div>
    <div class="card-content">
      <h4>Large Offset</h4>
    </div>
  </div>
  <div class="card col">
    <div class="spacer-xlarge bg-info">
    </div>
    <div class="card-content">
      <h4>Extra Large Offset</h4>
    </div>
  </div>
</div><!--row-->


### Applying Spacing
In order to apply the spacing scale on pages, a set of predefined classes exist for both margins and paddings. 