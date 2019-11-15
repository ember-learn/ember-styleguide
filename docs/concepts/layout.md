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

Layout provides a way to arrange different types of content into single or multiple columns. There are currently two types of layouts in the `ember-styleguide` that have different purposes and usecases.

## Layout for general pages

The general layout helper is `layout` that will automatically apply a reasonable layout for most text based pages. Using the layout helper on its own will only apply spacing between elements in the page:

```html
<ul class="layout list-unstyled">
  <EsCard>
    Some of the best development teams in the world have been iterating on their products for years with Ember. With
    scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
    every step of the way.
  </EsCard>
  <EsCard>
    Some of the best development teams in the world have been iterating on their products for years with Ember. With
    scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
    every step of the way.
  </EsCard>
  <EsCard>
    Some of the best development teams in the world have been iterating on their products for years with Ember. With
    scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
    every step of the way.
  </EsCard>
  <EsCard>
    Some of the best development teams in the world have been iterating on their products for years with Ember. With
    scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
    every step of the way.
  </EsCard>
</ul>
```

The true power of the `layout` helper is when you want to have some elements take up different widths:

```html
<ul class="layout list-unstyled">
  <EsCard class="lg:col-3">
    Some of the best development teams in the world have been iterating on their products for years with Ember. With
    scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
    every step of the way.
  </EsCard>
  <EsCard class="lg:col-3">
    Some of the best development teams in the world have been iterating on their products for years with Ember. With
    scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
    every step of the way.
  </EsCard>
  <EsCard class="lg:col-2">
    Some of the best development teams in the world have been iterating on their products for years with Ember. With
    scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
    every step of the way.
  </EsCard>
  <EsCard class="lg:col-3">
    Some of the best development teams in the world have been iterating on their products for years with Ember. With
    scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use
    every step of the way.
  </EsCard>
</ul>
```

The layout is based on a 6-column layout on larger screens and 4-column on smaller screens. Anything that is prefixed with `lg:` will only apply on larger widths, so the example above will fallback to full width when viewed on smaller screens. If you want to apply column rules only on smaller screens you can use the helpers prefixed with `sm:`

Now we will go through a few examples that will hopefully give you some inspiration for what you can achieve with the existing helpers.

### Center-Aligned fixed-width column

Here is an example of a centered element that only takes up 4 (out of the available 6) columns. A column class is used to limit its width and an offset class is used to define where it should start. **Note:** because both of these rules start with `lg:` they will not apply on mobile and it will fallback to being a full-width UI.

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

### Left-Aligned half-width

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

If you look at the DOM for the above example you will see that the order hasn't changed so this is essentially just a visual change. This helps with accessibility, but it also means that when you view this example on mobile the visual order will reflect the DOM order. This is particularly useful for cases where you want to alternate order of things on desktop but want the visual order to be different on mobile. View this next example on mobile to see the effect in action:

```html
<div class="layout">  
  <div class="lg:col-4">
    <h3>A Simple Component</h3>
    <p>
      Ember Components are a superset of HTML – that means is a full-fledged Ember Component! To pass data into
      Components, use the @ symbol along with an argument name.
    </p>
  </div>
  <img height="50px" src="/ember-logo.png" class="lg:col-2">
  <div class="lg:col-4 lg:start-3">
    <h3>A Simple Component</h3>
    <p>
      Ember Components are a superset of HTML – that means is a full-fledged Ember Component! To pass data into
      Components, use the @ symbol along with an argument name.
    </p>
  </div>
  <img height="50px" src="/ember-logo.png" class="lg:col-2 lg:start-1">
  <div class="lg:col-4">
    <h3>A Simple Component</h3>
    <p>
      Ember Components are a superset of HTML – that means is a full-fledged Ember Component! To pass data into
      Components, use the @ symbol along with an argument name.
    </p>
  </div>
  <img height="50px" src="/ember-logo.png" class="lg:col-2">
</div>
```

## Grid

If you have elements that need a regular repeating pattern you should use the `grid` helper instead of the above layout. It is designed specifically to make sure that you can have varying number of elements that are equally spaced on each row and is more convenient to use when you know everything is going to be the same size and distribution.

```html
<ul class="grid lg:grid-3 list-unstyled">
  <EsCard class="text-center">
    <h3>Podcasts</h3>
    <p>Rock n' Roll with EmberJS.</p>
  </EsCard>

  <EsCard class="text-center">
    <h3>Books</h3>
    <p>Rock n' Roll with EmberJS.</p>
  </EsCard>

  <EsCard class="text-center">
    <h3>Videos</h3>
    <p>Rock n' Roll with EmberJS.</p>
  </EsCard>
</ul>
```

You can specify the number of items per row by using anything from `lg:grid-2` to `lg:grid-5` on desktop, and `sm:grid-2` to `sm:grid-4` on mobile.

```html
<ul class="grid lg:grid-2 list-unstyled">
  <EsCard class="text-center">
    <h3>Podcasts</h3>
    <p>Rock n' Roll with EmberJS.</p>
  </EsCard>

  <EsCard class="text-center">
    <h3>Books</h3>
    <p>Rock n' Roll with EmberJS.</p>
  </EsCard>

  <EsCard class="text-center">
    <h3>Videos</h3>
    <p>Rock n' Roll with EmberJS.</p>
  </EsCard>
</ul>
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
