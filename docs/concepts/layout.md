# Layout
The layout clases exist to maintain a consistent structure across all pages, with built-in responsive support. 

## Container

The container is a box that wraps all content area components in a page. The main width of content is defined by using a `.container` CSS class. This will automatically centre content and make sure that it stays within the defined "max width" of the container. Here is an example of a dark background with some content in the middle:

```html
<div class="bg-dark">
  <section class="container">
    <h1>Hi there</h1>
    <p>Some content</p>
  </section>
</div>
```

This container should be used on most pages to keep content aligned with headers and footers (and other content).

## Layout
Layout provides a way to arrange different types of content into single or multiple columns.

## Common Layout Patterns

### Center Aligned fixed width column
Example of a centered half column. A column class is used to limit its width.

```html
<div class="layout">
  <div class="lg:col-4 lg:start-2 text-center">
    <h2>Build with the teams that never stop shipping.</h2>
    <p>
      Some of the best development teams in the world have been iterating on their products for years with Ember. With
      scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
      every step of the way.
    </p>
  </div>
</div>
```

### Left Aligned fixed width

```html
<div class="layout">
  <div class="lg:col-3">
    <h3>A Simple Component</h3>
    <p>
      Ember Components are a superset of HTML – that means is a full-fledged Ember Component! To pass data into
      Components, use the @ symbol along with an argument name.
    </p>
  </div>
</div>
```

#### Column Order
Columns can be reordered by specifying a start column for two elements, making them start in switched places.

```html
<div class="layout">
  <div class="lg:col-4 lg:start-3">
    <h3>A Simple Component</h3>
    <p>
      Ember Components are a superset of HTML – that means is a full-fledged Ember Component! To pass data into
      Components, use the @ symbol along with an argument name.
    </p>
  </div>
  <div class="lg:col-2 lg:start-1 bg-brand"></div>
</div>
```


### Equally Distributed Columns

```html
<div class="layout">
  <div class="lg:col-2 card text-center">
    <div class="card-content">
      <h3>Podcasts</h3>
      <p>Rock n' Roll with EmberJS.</p>
    </div>
  </div>
  <div class="lg:col-2 card text-center">
    <div class="card-content">
      <h3>Books</h3>
      <p>Rock n' Roll with EmberJS.</p>
    </div>
  </div>
  <div class="lg:col-2 card text-center">
    <div class="card-content">
      <h3>Videos</h3>
      <p>Rock n' Roll with EmberJS.</p>
    </div>
  </div>
</div>
```

```html
<div class="layout">
  <div class="lg:col-3 card">
    <div class="card-content">
      <h3>Guides</h3>
      <p>
        If you're familiar with JavaScript and web application development, our Guides will teach you everything you
        need to know to get started building with Ember.
      </p>
    </div>
  </div>
  <div class="lg:col-3 card">
    <div class="card-content">
      <h3>Read Our Blog</h3>
      <p>
        Find out about the newest releases and latest work happening in the ecosystem by visiting the official Ember
        Blog.
      </p>
    </div>
  </div>
</div>
```

### Photo Grid

```html
<div class="layout">
  <div class="lg:col-2">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/400x500/000/fff" />
  </div>
  <div class="lg:col-2">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/500x300/000/fff" />
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/600x400/000/fff" />
  </div>
  <div class="lg:col-2">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/400x500/000/fff" />
  </div>
</div>
```

## Spacing Scale

The spacing scale is used to manage spacing a white-space within layouts and components.
The spacing scale can be applied to both margin and padding properties.

<div class="layout">
  <div class="card lg:col-1">
    <div class="spacer-xsmall bg-brand">
    </div>
    <div class="card-content">
      <h4>Extra Small Offset</h4>
    </div>
  </div>
  <div class="card lg:col-1">
    <div class="spacer-small bg-brand">
    </div>
    <div class="card-content">
      <h4>Small Offset</h4>
    </div>
  </div>
  <div class="card lg:col-1">
    <div class="spacer-medium bg-brand">
    </div>
    <div class="card-content">
      <h4>Medium Offset</h4>
    </div>
  </div>
  <div class="card lg:col-1">
    <div class="spacer-large bg-brand">
    </div>
    <div class="card-content">
      <h4>Large Offset</h4>
    </div>
  </div>
  <div class="card lg:col-1">
    <div class="spacer-xlarge bg-brand">
    </div>
    <div class="card-content">
      <h4>Extra Large Offset</h4>
    </div>
  </div>
</div><!--row-->

## Applying Spacing with Helpers

In order to apply the spacing scale on pages, a set of predefined helper classes exist for both margins and paddings.

Check out [Spacing Helpers](/css/helpers#spacinghelpers) for more information
