# Blog Heading

## Regular Post

<DocsDemo as |demo|>
  <demo.example @name="es-blog-heading.hbs">
    <EsBlogHeading
      @author='Sara Poster'
      @postDate='03-20-2018'
      @postUrl='https://emberjs.com/blog'
      @postTitle='Pretty Awesome Blog Post'
    />
  </demo.example>
  <demo.snippet @name="es-blog-heading.hbs" />
</DocsDemo>

## Guest Post

<DocsDemo as |demo|>
  <demo.example @name="es-blog-heading-guest.hbs">
    <EsBlogHeading
      @author='Sara Poster'
      @postDate='03-20-2018'
      @postUrl='https://emberjs.com/blog'
      @postTitle='Pretty Awesome Blog Post'
      @isGuestPost=true
    />
  </demo.example>
  <demo.snippet @name="es-blog-heading-guest.hbs" />
</DocsDemo>

<DocsNote />
