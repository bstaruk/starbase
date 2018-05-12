# starbase

[![npm version](https://badge.fury.io/js/starbase.svg)](https://badge.fury.io/js/starbase)
[![build status](https://travis-ci.org/bstaruk/starbase.svg?branch=master)](https://travis-ci.org/bstaruk/starbase)
[![dependencies status](https://david-dm.org/bstaruk/starbase/status.svg)](https://david-dm.org/bstaruk/starbase)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbstaruk%2Fstarbase.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbstaruk%2Fstarbase?ref=badge_shield)

starbase is a webpack 4, ES6 & PostCSS boilerplate that utilizes some of the juiciest open source tools around:

* [Node.js](https://github.com/nodejs/node) & [Yarn](https://github.com/yarnpkg)
* [webpack 4](https://github.com/webpack/webpack) & [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [Babel](https://github.com/babel/babel) (ES6) w/ [ESLint](https://github.com/eslint/eslint)
* [PostCSS](https://github.com/postcss/postcss) w/
  * [cssnano](https://github.com/ben-eb/cssnano)
  * [cssnext](https://github.com/MoOx/postcss-cssnext)
  * [PostCSS Nested](https://github.com/postcss/postcss-nested)
  * [PostCSS Responsive Type](https://github.com/seaneking/postcss-responsive-type)
  * [postcss-extend](https://github.com/travco/postcss-extend)
  * [stylelint](https://github.com/stylelint/stylelint)
  * [MQPacker](https://github.com/hail2u/node-css-mqpacker)
* ...and more!

This boilerplate is intended to be small in scope so that it may be easily extended and customized, or used as a learning tool for folks who are trying to become familiar with webpack 4, PostCSS and/or ES6.

## license

starbase is open source and free software, so you may to do whatever you wish with it -- commercially or personally. You can buy me a beer next time you're in Boston, star the project and tell a friend, or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!

## getting started

After completing the steps below, you will be ready to begin using starbase:

1. Install [Node.js](https://nodejs.org) (latest LTS recommended)
2. Install [Yarn](https://yarnpkg.com)
3. Clone starbase into your project root directory
4. Install dependencies by running `yarn` in your project root directory

_Note: if you hate Yarn for some reason, you can skip Step 2 and use `npm install` instead  of `yarn` in Step 4._

## building, watching & developing

### local development

starbase uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve up your project at [http://localhost:8080](http://localhost:8080) for streamlined and convenient development.

After running `npm run watch` in the project root, your `/src` code will be served at the url above and watched for changes. As you modify code in `/src`, the project will be recompiled and your browser will refresh to show the latest changes.

```
cd /path/to/starbase
npm run watch
```

### building for production
Use `npm run build` in your project root to run a production build.

Production builds compile & minify your assets into `/dist` for distribution and/or integration into whatever codebase you'll be using these assets in.

```
cd /path/to/starbase
npm run build
```

## features you may want to remove

### asset hashing
The assets generated by starbase are [hashed](https://webpack.js.org/guides/caching/) (strings injected into the filenames) as a cache-busting mechanism. JS and CSS assets will receive a new filename for each production build, but other assets (fonts, images, etc) will only be updated when they are modified.

This feature ships with webpack (and the loaders we use), so removing it is pretty straightforward. Simply open up the webpack config files and remove the hashes from the filenames, which should look something like this: `.[hash:8]`.

Removing hashing for production builds is not recommended.

### build-time cleanup

starbase is setup to clear all contents of `/dist` (where compiled assets are piped into) during each `npm run build`. If you'd like to remove this part of the build process, perform the following steps:

1. remove `CleanWebpackPlugin` from the plugins array in `/webpack/webpack.config.prod.js`
2. remove `CleanWebpackPlugin` as a requirement at the top of `/webpack/webpack.config.prod.js`
3. remove the `CleanWebpackPlugin` dependency from `/package.json`

Removing the cleanup process means that deleted assets in `/src` will not be deleted in `/dist` until you manually do so. I recommend keeping the cleanup process intact unless you have a specific reason not to, such as having un-managed assets in `/dist`.

### fetch & promise polyfills

Because starbase was built to accommodate ES6 & CommonJS (and not jQuery) it is assumed that you'll be using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for asynchronous requests.

Fetch is supported in all modern browsers, but some old dogs still don't support it and that's what we need the [es6-promise](https://github.com/stefanpenner/es6-promise) & [whatwg-fetch](https://github.com/github/fetch) polyfills for.

If you want to remove these for any reason, perform the following steps:

1. run `yarn remove es6-promise whatwg-fetch` in the project root to remove the dependencies
2. remove the lines in `/src/app.js` that fall under the "fetch & promise polyfills" comment (it'll be obvious which ones)

_Note: if you think you might use fetch in the future, comment-out the requires instead of deleting them. Commented-out code is not included in production builds._

## features you may want to customize

### javascript & css linting

starbase uses [ESLint](http://eslint.org/) for Javascript (ES6) linting and [stylelint](https://github.com/stylelint/stylelint) for CSS linting. The configs (`/.eslintrc` and `/.stylelintrc` respectively) included out of the box contain some basic common rules. Modify them to your liking to encourage consistent code throughout your project.

#### airbnb eslint config

starbase enforces the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with ESLint via [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). These rules are basically the industry standard in 2017 so I'd recommend adhering to them, but you can override individual rules via the project `/.eslintrc` file. I've included a couple basic overrides (in `/.eslintrc`) to demonstrate usage.

##### to remove the airbnb eslint config:

1. in `/.eslintrc`, remove the line that says `extends`
2. in `/package.json`, remove the `eslint-config-airbnb` dependency
3. run `yarn` (or `npm update` if you hate yarn)

After completing the steps above, the only rules that eslint will enforce are the ones you define in the `rules` object in `/.eslintrc`.

### service worker caching

starbase uses [offline-plugin](https://github.com/NekR/offline-plugin/) to cache your project assets for offline use. This means that if someone visits your website on [a device that supports service workers](https://caniuse.com/#feat=serviceworkers), they will be able to view your project again, even if their device is offline.

Out of the box, starbase caches everything, because the project is less than 50kb total. If you will be making a larger app, be considerate of your users and limit what you cache-- perhaps avoid caching large images, custom fonts, etc. Check out the [options docs for offline-plugin](https://github.com/NekR/offline-plugin/blob/master/docs/options.md) to learn more.

[Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers), by design, only function on secure (https) environments. There is no issue with running starbase on an http environment-- the service worker will simply not be utilized.

You may see an info log entry in your console from `offline-plugin` while using the `watch` command, feel free to ignore this. `offline-plugin` is not utilized on the dev server because it doesn't always play nice with `webpack-dev-server`. It is intentionally only utilized in production builds.

#### to remove offline-plugin:

1. in `/package.json`, remove the `offline-plugin` dependency
2. in `/webpack/webpack.config.base.js`, remove all references to `OfflinePlugin` and/or `offline-plugin`
3. in `/src/app.js`, remove the `import` statement that references `offline-plugin`
4. delete `/src/app/lib/offline-plugin.js`

_There is no consequence to removing this feature, besides limiting offline access to your project._

#### to disable (but not delete) offline-plugin:

You can disable `offline-plugin` without deleting it from your codebase, so that it's not included in your production code (reduces filesize) but is ready to be re-enabled if you ever want it back.

1. in `/src/app.js`, comment-out the `import` statement that references `offline-plugin`

## features you may want to know about

### global css variables

starbase supports global CSS variables via the [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) pseudo-element, which can be found in `/src/variables/variables.css`. You can split your variables into multiple files, and just import them into `/src/variables/variables.css` if you'd like them to be more granular.

These variables automatically injected into any CSS in the `/src/components` and `/src/app` directories, so they are always available for use in your app & component stylesheets.

Each component that comes with Starbase uses at least one variable to demonstrate the functionality.

All variables are cleaned up in your production code and only the values will remain, so there is no bloat or downside to using these variables. Go nuts!

### html webpack plugin

starbase uses [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin) to generate HTML assets. The reason for this is to allow webpack to manage other assets, such as favicons and embedded images, as part of the build process. Adding new templates (pages) is very easy, but you'll need to read the official plugin docs for the latest info.
