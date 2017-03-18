# starbase
Starbase is a Webpack 2, ES6 & PostCSS boilerplate that utilizes some of the juiciest open source tools around such as:

* [Node.js](https://github.com/nodejs/node) & [Yarn](https://github.com/yarnpkg)
* [Webpack 2](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel) (ES6) transpiling w/ linting by [ESLint](https://github.com/eslint/eslint)
* [PostCSS](https://github.com/postcss/postcss) w/ [cssnext](https://github.com/MoOx/postcss-cssnext)
* ...and more!

This boilerplate is intended to be small in scope so that it can be easily extended and customized, or used as a learning tool for folks who are trying to become familiar with Webpack 2.

## license
Starbase is fully open source and public domain, so you are free to do whatever you wish with it -- commercially or personally. You can buy me a beer next time you're in Boston, give me credit in a [Konami code easter egg](http://konamicodesites.com/), or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!

## getting started
After completing the steps below, you will be ready to begin using Starbase:

1. Install [Node.js](https://nodejs.org)
2. Install [Yarn](https://yarnpkg.com)
3. Clone Starbase into your project root directory
4. Install dependencies by running `yarn` in your project root directory

_Note: if you hate Yarn for some reason, you can skip Step 2 and use `npm install` instead  of `yarn` in Step 4._

## building, watching & developing

### local development
Starbase uses `webpack-dev-server` to serve up your project at [http://localhost:8080](http://localhost:8080) for streamlined and convenient development.

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
Starbase is setup to clear all contents of `/dist` (where compiled assets are piped into) during each `npm run build`. If you'd like to remove this part of the build process, perform the following steps:

1. remove `CleanWebpackPlugin` from the plugins array in `/webpack/webpack.config.prod.js`
2. remove `CleanWebpackPlugin` as a requirement at the top of `/webpack/webpack.config.prod.js`
3. remove the `CleanWebpackPlugin` dependency from `package.json`

Removing the cleanup process means that deleted assets in `/src` will not be deleted in `/dist` until you manually do so. I recommend keeping the cleanup process intact unless you have a specific reason not to, such as having un-managed assets in `/dist`.

## features you may want to customize

### js linting

Starbase uses [ESLint](http://eslint.org/) for JS code linting. The config (`/.eslintrc`) included by default is very basic and does not contain many rules. I recommend modifying this to your liking. Check out [the official docs](http://eslint.org/docs/2.0.0/rules/) for more information.
