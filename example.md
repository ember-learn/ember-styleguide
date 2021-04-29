# Test

This is *testing* several features of ember templates

## Just html

<div>Something</div>

## Simple angle brackets components

<MyComponent>This is my component</MyComponent>

## Complex components

<MyForm as |form|>
  <form.Input />

  <form.Button type="submit">Submit</form.Button>
</MyForm>

<OtherComponent @arg={{this.testing}} />

<ComponentWithHtml>
  <div class="testing">testing</div>
</ComponentWithHtml>

## Curry components

{{my-component isTesting=true}}

{{#other-component as |test|}}
  {{test}}
{{/other-component}}

## Curry values & helpers

{{this.myValue}}
{{value}}
{{array isTesting=true isCool=true}}
{{#each this.items as |item|}}
  {{item}}
{{/each}}
{{#if this.isConditional}}
  Yep
{{else}}
  Nope
{{/if}}

## Modifiers

<MyComponent {{did-insert this.coolStuff}} />

<div {{did-insert this.coolStuff}}>
  testing
</div>


## Multi-line components

<FormRadioGroup
  @label="Grouped radio buttons"
  @errors={{array "Nope"}}
  as |Radio|>
  <Radio
    @value={{true}}
    @label="Yes" />
  <Radio
    @value={{false}}
    @label="No" />
  <Radio
    @value="maybe"
    @label="Maybe" />
</FormRadioGroup>


## Inline Code & Code Block with HBS

`{{this.something}`

```hbs
<FormRadioGroup
  @label="Grouped radio buttons"
  @errors={{array "1"}}
  as |Radio|
>
  <Radio @value={{true}} @label="Yes" />
  <Radio @value={{false}} @label="No" />
  <Radio @value="maybe" @label="Maybe" />
</FormRadioGroup>
```

# Component inline with text

some text
<Link @href="a url">click me</Link>
more text
