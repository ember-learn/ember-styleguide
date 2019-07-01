# Navbar

The EsNavbar component is designed to be the same component used in all Ember websites that use the styleguide. It comes with the default links that are common to all sites. In most cases you will want to make sure the Navbar is inside an EsHeader which will make sure that it is properly centred.

```handlebars
<EsHeader class="dark">
  <EsNavbar />
</EsHeader>
```

## Custom Links

If you would like to override the default links you can pass a json object to update the links in the navbar.

```handlebars
<EsHeader class="dark">
  <EsNavbar @links={{customLinks}} />
</EsHeader>
```
