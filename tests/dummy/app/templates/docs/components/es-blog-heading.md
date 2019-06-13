# Blog Heading

## Regular Post

{{#docs-demo as |demo|}}
  {{#demo.example name='es-blog-heading.hbs'}}
    <EsBlogHeading
      @author='Sara Poster'
      @postDate='03-20-2018'
      @postUrl='https://emberjs.com/blog'
      @postTitle='Pretty Awesome Blog Post'
    />
  {{/demo.example}}
  {{demo.snippet 'es-blog-heading.hbs'}}
{{/docs-demo}}

## Guest Post

{{#docs-demo as |demo|}}
  {{#demo.example name='es-blog-heading-guest.hbs'}}
    <EsBlogHeading
      @author='Sara Poster'
      @postDate='03-20-2018'
      @postUrl='https://emberjs.com/blog'
      @postTitle='Pretty Awesome Blog Post'
      @isGuestPost=true
    />
  {{/demo.example}}
  {{demo.snippet 'es-blog-heading-guest.hbs'}}
{{/docs-demo}}

{{docs-note}}
