[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/ember-styleguide/workflows/CI/badge.svg)](https://github.com/ember-learn/ember-styleguide/actions?query=workflow%3ACI)
[![This project uses Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Ember/ember-styleguide)
[![Latest NPM release](https://img.shields.io/npm/v/ember-styleguide.svg)](https://www.npmjs.com/package/ember-styleguide.svg)

ember-styleguide
==============================================================================

This addon is intended to provide basic components for easier style coordination among the Ember family of websites, although the original intent is to support the emberjs.com website. We are committed to the goal of meeting WCAG 2.0 AA conformance standards.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above


Installation
------------------------------------------------------------------------------

[See the visual design](https://codepen.io/melsumner/pen/9d551738a81e319a773395a2cfa1a82e) as a work in progress & feel free to submit ideas of your own!

## Installation

* `git clone <repository-url>` this repository
* `cd ember-styleguide`
* `pnpm install`

## Running

See the [Contributing](CONTRIBUTING.md) guide for details.


## WIP Notes

* Each component must have the component name attached to the component as a CSS class.
* It may feel as though there is duplicated code throughout these components; during the WIP process, we are favoring duplication over abstraction.
* Font icons through [ember-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/ember) - it is supported by the font awesome team and they render to SVG.
* In this addon, the `section` element is used as a container and is intended to span the full width of the viewport.
