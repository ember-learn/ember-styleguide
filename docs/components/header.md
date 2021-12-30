# Global Header

Shows the side wide header with the global navigation.

```handlebars
<EsHeader />
```

If you would like to override the default links you can pass a json object to update the links in the navbar.

```handlebars
<EsHeader @links={{this.links}} />
```

You can also use the block form of the component to add extra HTML to the navigation bar

```handlebars
<EsHeader>
  <div>Hello World</div>
</EsHeader>
```
