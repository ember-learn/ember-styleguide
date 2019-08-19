# ember-styleguide [![Build Status](https://travis-ci.org/ember-learn/ember-styleguide.svg?branch=master)](https://travis-ci.org/ember-learn/ember-styleguide) [![Latest NPM release](https://img.shields.io/npm/v/ember-styleguide.svg)](https://www.npmjs.com/package/ember-styleguide.svg)

This addon is intended to provide basic components for easier style coordination among the Ember family of websites, although the original intent is to support the emberjs.com website. We are committed to the goal of meeting WCAG 2.0 AA conformance standards. 

Contributions are encouraged! You'll notice that the issues in this repository have been labeled to help you find the issue that is just right for you! 

[See the visual design](https://codepen.io/melsumner/pen/9d551738a81e319a773395a2cfa1a82e) as a work in progress & feel free to submit ideas of your own! 



## Installation

* `git clone <repository-url>` this repository
* `cd ember-styleguide`
* `yarn install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `yarn test:all` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## WIP Notes

* Each component must have the component name attached to the component as a CSS class.
* It may feel as though there is duplicated code throughout these components; during the WIP process, we are favoring duplication over abstraction. 
* Font icons through [ember-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/ember) - it is supported by the font awesome team and they render to SVG. 
* In this addon, the `section` element is used as a container and is intended to span the full width of the viewport. 
