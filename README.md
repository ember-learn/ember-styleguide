# ember-styleguide [![Build Status](https://travis-ci.org/ember-learn/ember-styleguide.svg?branch=master)](https://travis-ci.org/ember-learn/ember-styleguide)

This addon is intended to provide basic components for easier style coordination among the Ember family of websites, although the original intent is to support the emberjs.com website. We are committed to the goal of meeting WCAG 2.0 AA conformance standards. 

Contributions are encouraged! 

## Installation

* `git clone <repository-url>` this repository
* `cd ember-styleguide`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## WIP Notes

* Permanent: each component has the component name attached as a CSS class. This makes it a little easier to scope styling. 
* WIP: it may feel as though there is duplicated code throughout these components; during the WIP process, we are favoring duplication over abstraction. 
* Now: ember-font-awesome for the font icons
* The `es-pagewrapper` component has a property to indicate if there will be a sidebar or not. There might be a better way to do this.
* In this addon, the `section` element is used as a container and is intended to span the full width of the viewport. 

## Styleguide Notes
* one h1 per page
* heading elements should never require extra classes or CSS treatments
* valid HTML should be used
