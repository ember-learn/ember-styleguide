# Button

## Usage

Simplest use case: a button with text in it, telling the user what to do.

```gjs live preview
import EsButton from 'ember-styleguide/components/es-button';

<template>
  <EsButton @label="click me" />
</template>
```

Also supported- block use:

```gjs live preview
import EsButton from 'ember-styleguide/components/es-button';

<template>
  <EsButton>
    click me <span>&#x1f439;</span>
  </EsButton>
</template>
```

To add interactivity you can pass an action to `onClicked`

```gjs live preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import EsButton from 'ember-styleguide/components/es-button';

export default class ButtonDemo extends Component {
  @tracked value = 0;

  @action
  incrementValue() {
    this.value++;
  }

  <template>
    <EsButton @onClicked={{this.incrementValue}}>
      Increment Value
    </EsButton>

    {{this.value}}
  </template>
}
```

## Secondary Buttons

```gjs live preview
import EsButton from 'ember-styleguide/components/es-button';

<template>
  <EsButton @label="click me" @secondary={{true}} />
</template>
```

## Styling Links

It is also possible to style a link to look like a button using the `es-button` or `es-button-secondary` class.

```gjs live preview
<template>
  <a href="https://emberjs.com" class="es-button">Go to Ember homepage</a>
  <a href="https://guides.emberjs.com" class="es-button-secondary">Go to the Guides</a>
</template>
```

## Accessibility

Since we're using the native HTML button element and requiring a label value to be provided, the component itself is accesible as it is.

If you are going to put an icon in the button, then you will need to set an aria-label property on the button:

```gjs live preview
import EsButton from 'ember-styleguide/components/es-button';

<template>
  <EsButton aria-label="Hamster Secrets" title="Hamster Secrets">
    &#x1f439;
  </EsButton>
</template>
```
