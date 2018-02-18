# starbase

starbase is a webpack 3, ES6 & PostCSS boilerplate that utilizes some of the juiciest open source tools around:

* [Node.js](https://github.com/nodejs/node) & [Yarn](https://github.com/yarnpkg)
* [webpack 3](https://github.com/webpack/webpack) & [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [Babel](https://github.com/babel/babel) (ES6) w/ [ESLint](https://github.com/eslint/eslint)
* [PostCSS](https://github.com/postcss/postcss) w/
  * [cssnano](https://github.com/ben-eb/cssnano)
  * [cssnext](https://github.com/MoOx/postcss-cssnext)
  * [PostCSS Nested](https://github.com/postcss/postcss-nested)
  * [PostCSS Responsive Type](https://github.com/seaneking/postcss-responsive-type)
  * [stylelint](https://github.com/stylelint/stylelint)
  * [MQPacker](https://github.com/hail2u/node-css-mqpacker)
* ...and more!

This boilerplate is intended to be small in scope so that it may be easily extended and customized, or used as a learning tool for folks who are trying to become familiar with webpack 3, PostCSS and/or ES6.

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

### build-time cleanup

starbase is setup to clear all contents of `/dist` (where compiled assets are piped into) during each `npm run build`. If you'd like to remove this part of the build process, perform the following steps:

1. remove `CleanWebpackPlugin` from the plugins array in `/webpack/webpack.config.prod.js`
2. remove `CleanWebpackPlugin` as a requirement at the top of `/webpack/webpack.config.prod.js`
3. remove the `CleanWebpackPlugin` dependency from `/package.json`

Removing the cleanup process means that deleted assets in `/src` will not be deleted in `/dist` until you manually do so. I recommend keeping the cleanup process intact unless you have a specific reason not to, such as having un-managed assets in `/dist`.

### fetch & promise polyfills

Because starbase was built to accommodate ES6 & CommonJS (and not JQuery) it is assumed that you'll be using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for asynchronous requests.

Fetch is supported in all modern browsers, but some old dogs still don't support it and that's what we need the [es6-promise](https://github.com/stefanpenner/es6-promise) & [whatwg-fetch](https://github.com/github/fetch) polyfills for.

If you want to remove these for any reason, perform the following steps:

1. run `yarn remove es6-promise whatwg-fetch` in the project root to remove the dependencies
2. remove the first few lines of `/src/bundle.js` (it'll be obvious which ones)

_Note: if you think you might use fetch in the future, comment-out the includes instead of deleting them. Commented-out code is not included in production builds._

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

## features you may want to know about

### global css variables

starbase supports global CSS variables via the [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) pseudo-element, which can be found in `/src/variables/variables.css`. You can split your variables into multiple files, and just import them into `/src/variables/variables.css` if you'd like them to be more granular.

These variables automatically injected into any CSS in the `/src/components` and `/src/app` directories, so they are always available for use in your app & component stylesheets.

Each component that comes with Starbase uses at least one variable to demonstrate the functionality.

All variables are cleaned up in your production code and only the values will remain, so there is no bloat or downside to using these variables. Go nuts!
