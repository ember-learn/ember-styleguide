'use strict';
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const path = require('path');
const resolve = require('resolve');
const StaticSiteJson = require('broccoli-static-site-json');

const CssImport = require('postcss-import')
const PresetEnv = require('postcss-preset-env');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  options: {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: CssImport },
          {
            module: PresetEnv,
            options: {
              stage: 3,
              features: { 'nesting-rules': true }
            }
          }
        ]
      }
    },

    svgJar: {
      sourceDirs: [
        'public',
        'node_modules/ember-styleguide/public',
        'tests/dummy/public'
      ]
    },
  },

  treeForPublic: function() {
    const publicTree = new Funnel(path.join(this.root, 'public'));

    const contentsJson = new StaticSiteJson('docs', {
      contentFolder: 'docs',
      collate: true,
    });

    return new MergeTrees([publicTree, contentsJson]);
  },

  contentFor: function(type) {
    if (type === 'head') {
      // preload the most common fonts for modern browsers
      return `<link rel="preload" as="font" type="font/woff2" href="/fonts/open-sans-v16-latin-regular.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/open-sans-v16-latin-300.woff2" crossorigin>`;
    }

    return '';
  },

  treeForVendor(vendor) {
    let templateCompilerTree = new Funnel(
      path.dirname(resolve.sync('ember-source/package.json'), { basedir: this.project.root }),
      {
        srcDir: 'dist',
        destDir: 'ember'
      }
    );
    return new MergeTrees([
      vendor,
      templateCompilerTree,
    ].filter(Boolean));
  },

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/ember/ember-template-compiler.js');
  },
};
