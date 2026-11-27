# How To Contribute

## Installation

- `git clone <repository-url>`
- `cd ember-styleguide`
- `pnpm install`

## Linting

- `pnpm lint`
- `pnpm lint:fix`

## Running tests

- `pnpm test` runs the test suite on the current Ember.js version.
- `pnpm dlx @embroider/try list` lists the scenarios for other Ember.js versions. CI runs each one.

## Running the docs app

The docs app is in `docs-app/`. It uses the addon source in `src/` directly.

- `pnpm start`
- Open the URL that Vite prints.
