# ember-styleguide

[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/ember-styleguide/workflows/CI/badge.svg)](https://github.com/ember-learn/ember-styleguide/actions?query=workflow%3ACI)
[![This project uses Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Ember/ember-styleguide)
[![Latest NPM release](https://img.shields.io/npm/v/ember-styleguide.svg)](https://www.npmjs.com/package/ember-styleguide.svg)


This addon is intended to provide basic components for easier style coordination among the Ember family of websites, although the original intent is to support the emberjs.com website. We are committed to the goal of meeting WCAG 2.0 AA conformance standards.

## Compatibility

* Ember.js v4.12 or above
* Node.js v20 or above

<details>
<summary>Ember.js 3.28 to 4.11</summary>

Apps on Ember.js 3.28 to 4.11 must use `ember-styleguide@11`:

```bash
pnpm add ember-styleguide@11
```

Ember.js deprecates `inject` from `@ember/service`. If your app or its other addons still use `inject`, add [`babel-plugin-undeprecate-inject-from-at-ember-service`](https://github.com/NullVoxPopuli/undeprecate-inject-from-at-ember-service). It rewrites `inject` to `service` at build time.

</details>

## Installation

```bash
pnpm add ember-styleguide
```

## Usage

### CSS

Import the addon's styles in your app's CSS (e.g., `app/styles/app.css`):

```css
@import 'ember-styleguide/styles.css';
```

### Components

The addon provides components like `<EsHeader>`, `<EsFooter>`, `<EsCard>`, `<EsNote>`, etc. See the demo app for usage examples.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
