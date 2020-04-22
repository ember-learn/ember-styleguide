# Note

Sometimes in our documentation we might want to bring someone's attention to something, either as a warning or a quick suggestion. We have a qwirky component that can be used for exactly this

## Usage

```handlebars
<EsNote>You should try out this cool note component</EsNote>
```

If you don't pass in a specific mascot (either `tomster` or `zoey`) then it will randomly pick between them. Try refreshing the page now and see them change!

You might notice on this page that they flicker a little bit and seem to swap between a Tomster and a Zoey sometimes just after rendering. This is related to how we are pre-rendering this page and then when the page is loaded Ember will re-run the code that picks the mascot that is displayed.

In **all** cases where we are pre-rendering a page using fastboot or prember, we **must** pass in the `@mascot` argument to the component.

```handlebars
<EsNote @mascot="tomster">I am a Tomster, and I approve this message</EsNote>
```

```handlebars
<EsNote @mascot="zoey">I am a Zoey, and I approve this message</EsNote>
```
