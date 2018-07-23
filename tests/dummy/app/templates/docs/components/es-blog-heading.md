# Blog Heading

{{#docs-demo as |demo|}}
  {{#demo.example name='es-blog-heading.hbs'}}
    {{es-blog-heading
      author = 'Sara Poster'
      postDate = '03-20-2018'
      postUrl = 'https://emberjs.com/blog'
      postTitle = 'Pretty Awesome Blog Post'
      postType = nul
    }}
  {{/demo.example}}
  {{demo.snippet 'es-blog-heading.hbs'}}
{{/docs-demo}}

