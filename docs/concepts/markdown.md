# Markdown

A lot of the ember websites use markdown to render all or part of the page which means that we can use standard styles to render. This page is intended to be a reference implementation of all the styles that would apply to standard markdown and are supported by the Ember styleguide.

``` handlebars
  {{markdown-to-html "
# Header 1

This is my initial paragraph, but an introduction

## Header 2

Here I will go into more detail... and may repeat myself a few times but please don't hold that against me. Here I will go into more detail... and may repeat myself a few times but please don't hold that against me. Here I will go into more detail... and may repeat myself a few times but please don't hold that against me. Here I will go into more detail... and may repeat myself a few times but please don't hold that against me. Here I will go into more detail... and may repeat myself a few times but please don't hold that against me. 

### Header 3

This section won't have much text, but it will have some other examples! 

- list item 1
- list item 2
- list item 3

> You can also add some block quotes if you like.

#### Header 4

You thought you got away with 3 headers, well you haven't seen nothin yet!

1. order 1
1. order 2 
1. order 3

##### Header 5

Will the headers never stop!? 

Sometimes you just want to be **bold with your words**! But other times _you might feel a bit off center_. And if you're really bad you might feel **both at the _same_ time**

[Ember is the best framework](https://emberjs.com)

##### Inline code

Let's refer to some libraries like `ember-cli` and make sure the inline code styles are applied.

--- 

![Zoey Mascot](/images/mascots/zoey.png)

![Big Emberconf Photo](/emberconf.jpg)

  "}}
```
