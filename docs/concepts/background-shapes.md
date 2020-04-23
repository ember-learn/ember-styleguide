# Background Shapes

In the new design we have a number of background shapes that can be used to spruce up the design of sections of the website if necessary.

## Background boxes

To use the "background boxes" shape then you need to use the `bg-shape-boxes` css helper as follows

```html
<div class="layout bg-shape-boxes bg-dark py-5">
  <div class="lg:col-4 lg:start-2 text-center">
    <h1>Build with the teams that never stop shipping.</h1>
    <p>
      Some of the best development teams in the world have been iterating on their products for
      years with Ember. With scalable UI architecture baked-in from the start, you’ll be working
      with the same patterns these organizations use every step of the way.
    </p>
  </div>
  <div class="m-4 text-center">
    <h2>More stuff to show location of boxes</h2>
  </div>
  <div class="m-4 text-center">
    <h2>Even more stuff to show location of boxes</h2>
  </div>
</div>
```

There is an alternative "background boxes" shape that you can use with `bg-shape-boxes-bottom` that will automatically continue into the following dom node (e.g. the next div)

```html
<div class="layout bg-shape-boxes-bottom bg-dark py-5">
  <div class="lg:col-4 lg:start-2 text-center py-5">
    <h1>Build with the teams that never stop shipping.</h1>
    <p>
      Some of the best development teams in the world have been iterating on their products for
      years with Ember. With scalable UI architecture baked-in from the start, you’ll be working
      with the same patterns these organizations use every step of the way.
    </p>
  </div>
</div>
<div class="layout py-5">
  <div class="lg:col-4 lg:start-2 text-center">
    <h2>More content to show off the shapes</h2>
    <p>
      Some of the best development teams in the world have been iterating on their products for
      years with Ember. With scalable UI architecture baked-in from the start, you’ll be working
      with the same patterns these organizations use every step of the way.
    </p>
  </div>
</div>
```

## Swipes

The other type of background shape is a "swipe" that can either be a swipe across the top of the section using `bg-shape-swipe-top` or a rectangle from the bottom of the section using `bg-shape-swipe-bottom`.

```html
<div class="layout bg-shape-swipe-top py-5">
  <div class="lg:col-4 lg:start-2 text-center text-light my-4">
    <h2>Build with the teams that never stop shipping.</h2>
    <p>
      Some of the best development teams in the world have been iterating on their products for
      years with Ember. With scalable UI architecture baked-in from the start, you’ll be working
      with the same patterns these organizations use every step of the way.
    </p>
  </div>
  <div class="text-center my-4">
    <h2>More stuff to show location of swipe</h2>
  </div>

  <div class="text-center my-4">
    <h2>Even more stuff to show location of swipe</h2>
  </div>
</div>
```

and then using the `bg-shape-swipe-bottom` we can get a shape for the bottom of a section:

```html
<div class="layout bg-dark bg-shape-swipe-bottom py-5">
  <div class="lg:col-4 lg:start-2 text-center my-4">
    <h2>Build with the teams that never stop shipping.</h2>
    <p>
      Some of the best development teams in the world have been iterating on their products for
      years with Ember. With scalable UI architecture baked-in from the start, you’ll be working
      with the same patterns these organizations use every step of the way.
    </p>
  </div>
  <div class="text-center my-4">
    <h2>More stuff to show location of swipe</h2>
  </div>
  <div class="text-center my-4">
    <h2>Even more stuff to show location of swipe</h2>
  </div>
  <div class="text-center my-4">
    <h2>yes this needs quite a large section</h2>
  </div>
</div>
```
