6.0.0 / 2021-04-01
==================

  * Enable prettier for links file #377 from @ijlee2
  * Remove ember-on-modifier #376 from @bertdeblock
  * Update the link to the guides to include release #373 from @jenweber
  * Use has-block helper instead of deprecated hasBlock #375 from @bertdeblock
  * add es-sidebar component & sidebar-container styles #369 from @nickschot
  * [BREAKING] Upgrade to latest Ember and make 3.16 the lowest supported version #370 from @mansona
  * Upgrade field-guide to v1.4.0 #366 from @nickschot
  * Upgrade ember-svg-jar to v2 #367 from @nickschot
  * Remove RFC tracking link #365 from @locks
  * Fix typo in email address / subject line for footer template #358 from @fozy81
  * Migrated from Travis to GitHub Actions #355 from @ijlee2

5.1.0 / 2020-10-22
==================

  * Update CSS class name in `button` documentation #352 from @neojp
  * fix broken import from unused file #350 from @ef4
  * Drop jobs.emberjs.com from the community menu #347 from @mixonic
  * using a spacing variable for hr margin #349 from @mansona
  * contact details in footer #337 from @fozy81

5.0.0 / 2020-09-17
==================

This is a major release because it changes the default behaviour of Header
styles. The previous styles were more optomised for landing pages rather than a
sensible default for all page types. Any site that was depending on the previous
default behaviour should implement the necessary specific styles in their own
CSS

  * only preload variable font #345 from @mansona
  * adds missing italic font faces #340 from @jaredgalanis
  * fix image constraints #341 from @jaredgalanis
  * fix header spacing #338 from @jaredgalanis
  * BREAKING: h4 and h5 style fixes #339 from @jaredgalanis
  * update field-guide-default-template #344 from @mansona
  * adds markdown concept to show current state of markdown to html #335 from @jaredgalanis
  * adds block quotes for markdown #342 from @jaredgalanis
  * Add styling for &lt;hr/&gt; #334 from @Mikek2252

4.2.1 / 2020-07-09
==================

  * fix issue with building addons #333 from @mansona

4.2.0 / 2020-06-25
==================

  * Add "Contribute to this page" link to footer #325 from @HarikumarG

4.1.0 / 2020-06-25
==================

  * Secondary colors #305 from @mansona
  * Add README link #332 from @amyrlam
  * Remove Github parenthetical from Help Wanted contributing link #308 from @locks
  * Introduce static-post-css-addon-tree #331 from @jaredgalanis
  * Add an aria-label to the primary nav element #327 from @nickschot
  * fix the build #326 from @mansona
  * Add fontawesome edit pencil needed for the Guides #322 from @jenweber
  * Simplify `EsHeaderComponent` implementation. #319 from @alexeykostevich
  * Update spelling to use American English #315 from @alexeykostevich
  * Fix the "tag line" #317 from @mansona

4.0.1 / 2020-04-27
==================

  * make sure @glimmer/component is a dependency to support older Ember versions #316 from @mansona
  * Update @ember/render-modifiers to 1.0.2 to fix beta and canary build #312 from @rwjblue

4.0.0 / 2020-04-23
==================

  This is a major release 🎉 a lot of work has been done over the last year to get
  this project to 4.0. Most of the contributors have been mentioned as a reference
  beside the changes below.

  To see any of the individual changes please look at the pre-release versions
  below but here are a few of the major changes:

  * remove ember-cli-addon docs in favour of field-guide for better SEO
  * remove components that are not actively being used in any project
  * implement base styles that are common across all of the Ember websites
  * implement common CSS helpers for things that don't need a dedicated component
  * upgrade most of the remaining components to Glimmer components
  * streamline the CSS build pipeline to remove duplicate CSS and improve lighthouse score

4.0.0-x / 2020-03-04 (unreleased)
==================

  * update es-note #306 from @mansona
  * update some comopnents to glimmer components #288 from @mansona
  * update using ember-cli-update and npm-check #288 from @mansona
  * delete non-doumented components missing implementations #301 from @mansona

4.0.0-14 / 2020-03-04
==================

  * manually run postcss and add it to vendor #297 from @mansona
  * fix bg-none css helper #298 from @mansona

4.0.0-13 / 2020-02-24
==================

  * Remove isDevelopingAddon config #296 from @sivakumar

4.0.0-12 / 2020-02-21
==================

  * implement new footer design #295 from @mansona

4.0.0-11 / 2020-02-17
==================

  * Add bg-none CSS helper to reset background #293 from @melsumner
  * remove EsPageHeader component #287 from @mansona
  * Update EsButton CSS to fix border radius #282 from @melsumner

4.0.0-10 / 2020-02-04
==================

  * Add docs for the new Cards API #280 from @mansona
  * Improve the ESCard API #279 from @pichfl
  * use high-contrast brand colour for secondary button text #278 from @mansona

4.0.0-9 / 2020-01-30
==================

  * make the footer look more like the design #275 from @mansona
  * add netlify as a sponsor #275 from @mansona
  * move css helpers so that they have higher precidence than `container` and `list-unstyled` #274 from @mansona
  * add "dotted texture" to the background svg for the bg-shape-swipe-top #274 from @mansona
  * stop including all svgs in svg-jar #274 from @mansona
  * lighten border color of card when on a dark background #274 from @mansona

4.0.0-8 / 2020-01-17
==================

  * Small SVG fixes for homepage background shapes #269 from @mansona
  * Fix hover state on cards in a dark background #267 from @mansona

4.0.0-7 / 2020-01-16
==================

  * Add styling for secondary buttons and links #260 from @pichfl
  * Fix dropdown caret for navbar #260 from @pichfl

4.0.0-6 / 2020-01-11
==================

  * fix Heroku logo breaking survey pages #263 from @mansona
  * make hide-on-mobile !important #262 from @mansona

4.0.0-5 / 2020-01-10
==================

  * add hide-on-mobile helper #261 from @mansona

4.0.0-4 / 2020-01-07
==================

  * Fix nav-links and footer infoLinks overrides #259 from @mansona
  * Add custom property for mono font stack #258 from @pichfl

4.0.0-3 / 2019-11-25
==================

  * Scope link styling to main element #257 from @pichfl

4.0.0-2 / 2019-11-22
==================

  * Fix inline link styling #252 from @pichfl
  * Implemented `.well` css helper and added documentation #251 from @pichfl
  * Significant font/spacing/padding/margin rework to align with the design #249 from @pichfl

4.0.0-1 / 2019-11-15
==================

  * Helper for responsive video embeds #246 from @pichfl
  * Overhaul Sizes, Layout and Grids #245 from @pichfl
  * Add presentation role to image in es-card if its alternate text is empty string #243 from @ijlee2
  * Add link underlines back #240 from @ghislaineguerin
  * Update and cleanup CSS variables and related helpers #239 from @pichfl
  * Add outside spacing for containers on mobile #238 from @pichfl

4.0.0-0 / 2019-10-28
==================

  * Implement new Card Component #218 from @ghislaineguerin and @mansona
  * Remove unused documentation #230 from @mansona
  * Add more Css Helpers #221 from @ghislaineguerin
  * Update global navigation to match latest design #227 from @pichfl
  * Fixes to Inter font use #226 from @pichfl
  * Introduce Inter font #225 from @pichfl
  * fix background shape `swipe-top` #223 from @mansona
  * small navbar fixes #220 from @mansona
  * Fix initial navbar implementation #219 from @mansona
  * Set body and text color #213 from @ghislaineguerin
  * improve typography and color docs #214 from @ghislaineguerin
  * implementing background shapes #204 from @mansona
  * optimising ember-logo.svg with svgo #206 from @mansona
  * Initial work on navbar redesign #202 from @MelSumner
  * Remove es-ulist #203 from @mansona
  * removing tabs implemenation #201 from @mansona
  * Use CSS grid for layout classes #199 from @ghislaineguerin
  * implementing new footer #197 from @mansona
  * add icon classes #196 from @ghislaineguerin
  * adding the ability to style links as buttons #195 from @mansona
  * Fixing colour documentation on smaller screens #194 from @mansona
  * Add offsets and spacing helper classes #193 from @ghislaineguerin
  * Fixing tests, travis and turning on Percy #192 from @mansona
  * finalising es-page-header #190 from @mansona
  * Adding colour contrast test to colour pallet component #189 from @mansona
  * Create accessibility docs from @MelSumner
  * add primary and secondary palettes #181 from @ghislaineguerin
  * Layout classes #177 from @ghislaineguerin
  * Add typography styles #176 from @ghislaineguerin
  * adding color pallet implementation #174 from @mansona
  * Add styling for new nav component #162 from @ghislaineguerin
  * documenting page-header and css helper `dark` #161 from @mansona
  * using field-guide instead of ember-cli-addon-docs #156, #160, #186 from @ghislaineguerin and @mansona
  * Starting typeography implementation #155 from @mansona
  * Convert Button to sparkles component #154 from @mansona
  * moving over to postcss
  * starting out with a blank slate

v3.1.1 / 2019-06-24
==================

  * Fix navbar formatting #185 from @jenweber

v3.1.0 / 2018-06-22
==================

  * add es-section component #175 from @MelSumner
  * [Doc] Update the Help Wanted link in nav bar #178 from @vasind
  * Updated dnsimple target link in es-footer component from @sivakumar-kailasam

v3.0.0 / 2018-05-23
==================

  * Updated ember-cli-addon-docs
  * Update nav links to refer to new subdomains #173 from @sivakumar-kailasam
  * removing node 6, bumping LTS versions for ember-try #172 from @melsumner
  * Bump ember-bootstrap to get rid of ember.copy deprecation #170 from @sivakumar-kailasam
  * Convert es-footer to be an angle bracket component #125 from @esbanarango & @hakilebara
  * Add ember-angle-bracket-invocation-polyfill #163 from @amyrlam
  * Update legal and releases links #159 from @j-brennan
  * fixing accessibility bugs on navbar toggle button and footer links #149 from @alexpark90
  * Comply with axe-core 2.2 #150 from @wycats
  * Update `_es-navbar.scss` #147 from @melsumner
  * Navbar tweaks #146 from @mansona
  * Update `_es-note.scss` #144 from @melsumner
  * fixing z-index of dropdown #143 from @aklkv
  * Add closePopupMenu function to navbar service #142 from @patocallaghan
  * es-navbar: hide menu items when navbar is closed #140 from @mansona
  * Fixing default links #139 from @mansona
  * Fixing issue with element not being available when setting tabIndex #136 from @mansona
  * replacing &rarr; with → #137 from @mansona
  * Fully Accessible and Bootstrap-Free navbar #77 from @mansona
  * update `links.js` #132 from @locks
  * extract docs-note to a separate component #131 from @sivakumar-kailasam
  * use angle-bracket syntax for es-blog-heading component #128 from @jbailey4
  * use angle-bracket syntax for es-buttonbar component #127 from @jbailey4
  * use angle-bracket syntax for es-note component #126 from @jbailey4

v2.5.0 / 2018-12-06
==================

  * Using ember-fontawesome #104 from @prasannavijayan
  * Add CLI Guides to the default navbar links #115 from @jenweber

v2.4.0 / 2018-11-08
==================

  * Implementing default links for the Navbar #114 from @mansona

v2.3.3 / 2018-11-01
===================

  * prevent crash when addon depends on ember-styleguide #112 from @mansona
  * Turn on template linting #108 from @aklkv

v2.3.2 / 2018-10-26
===================

  * Comment out isDevelopingAddon #111 from @toddjordan

2.3.1 / 2018-10-23
==================

  * Fixing sass error in consuming applications #110 @mansona

2.3.0 / 2018-10-23
==================

  * Fix display of section tags #102 @mansona
  * Update Testing Setup #107 @aklkv
  * Upgrade Ember #105 @aklkv
  * Fixing Mascot Image on es-note component #90 @mansona
  * Include trademark symbol on the Ember logo #96 @BradenLawrence
  * Fix line height of headers #97 @underoot
  * Export `sass` modules on `ember-styleguide` namespace #88 @ppcano
  * Footer: separate data from the component #89 @ppcano

2.2.0 / 2018-09-12
==================

  * Remove need for consuming app to configure `ember-cli-bootstrap` addon #87 @ppcano
  * Refer to Discord vs. Slack Fixes #85 @sivakumar-kailasam
  * updated the blog header component to remove unnecessary complexity #81 @MelSumner
  * list component refactor, added contributor invite #80 @MelSumner
  * updated the button component and supporting documentation #79 @MelSumner
  * Use ember-cli-addon-docs for dummy app #76 @hakilebara
