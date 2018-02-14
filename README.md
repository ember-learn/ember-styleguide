# ember-styleguide [![Build Status](https://travis-ci.org/ember-learn/ember-styleguide.svg?branch=master)](https://travis-ci.org/ember-learn/ember-styleguide)

This addon is intended to provide basic components for easier style coordination among the Ember family of websites, although the original intent is to support the emberjs.com website. 
Contributions are encouraged.

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

## Current Issues

* White on Ember orange. it's not passing accessibility color contrast tests. 
* the Interface font isn't consistent enough, but it was a cool idea.

## Design Notes
* Fonts: Roboto from Google Fonts. Tried Interface but it's too inconsistent to recommend use at this time. Still unsure about what to do about Apple, because they're currently rendering Google Fonts like total crap. 
* Design boldness: it currently looks rather bold, but these decisions cascaded from the buttons, and the planned css interactions on hover will be interesting. 
* Animation: "energetic and approachable" until I hear otherwise.
* Underlying CSS approach: mix of Flexbox and Grid
* Accessibility: currently the color contrast on the navbar is a struggle but otherwise it should be fine, and will remain a central theme of this UI addon. 

## CSS Rules
* need to set up a linter for this
* mobile-first CSS, i.e., 
```
  .my-component {
     padding: 0 0.25em;
     @media screen and (min-width: 992px) {
       padding: 0.5em 1em;
     }
   }
```
* scope the CSS inside each component but keep it DRY
* lowercase class names
* don't use IDs
* keep specificity reasonably low
* alpha-order the properties for the element (usually just have to hightlight the group and press F9)

## Styleguide Notes
* one h1 per page
* heading elements should never require extra classes or CSS treatments
* valid HTML should be used

