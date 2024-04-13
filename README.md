# Starbase v4

Starbase is a production-ready static website boilerplate featuring Webpack 5, TypeScript, PostCSS & Tailwind CSS that was designed to integrate with modern Jamstack hosting providers such as Vercel, Netlify and AWS Amplify. Start building in minutes with some of the most powerful front-end technologies available in 2024, powered by a delightfully simple and fully featured developer experience.

## History & Use Case

Starbase was created by [Brian Staruk](https://brian.staruk.net) as a personal code styleguide and flexible project boilerplate. It is a perpetual work in progress that has been consistently maintained [since early 2017](https://github.com/bstaruk/starbase/pull/1) with a focus on implementing the latest industry standards and keeping all dependencies up to date.

> "Simplicity is the ultimate sophistication."<br>_\- Leonardo da Vinci_

The primary mission of Starbase is to be sophisticatedly simple; easy to configure, extend and integrate. This also happens to make it a great platform for web developers to enhance their knowledge of bare-metal Webpack configs, TypeScript and/or Tailwind CSS.

---

## Installation

To get started, run the command below, which will guide you through the installation process:

```bash
npx starbase@next
```

---

## Usage

If you have [nvm](https://github.com/nvm-sh/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows)) installed, run `nvm use` in the project root to detect and use the recommended version of [Node.js](https://nodejs.org).

If you do not have nvm installed, you'll need to refer to the `.nvmrc` file to verify your version of Node is compatible with the recommended version.

### Getting Started

Start by running `npm install` in the project root to install dependencies.

---

### Developing Locally

After running `npm run dev` in the project root, `src` will be served at [http://localhost:3000](http://localhost:3000). Any changes made within `src` will trigger the source to recompile and refresh the page in your web browser.

```bash
npm run dev
```

### Building for Production

Run `npm run build` in the project root to compile and minify the source into `/dist` for integration or deployment.

```bash
npm run build
```

---

## Notes & Considerations

### Deploying to Hosting Environment

Starbase is setup to be deployed to the root of a web server on a hosting environment like Vercel, Netlify, etc. As such, all assets (js, css, fonts, images, etc) are referenced with absolute paths.

If you would like to instead reference assets via relative paths, so compiled `.html` files can be distributed and opened in a web browser without requiring a deployment to a hosting environment, you will need to remove (or comment-out) the `publicPath` in `webpack/webpack.config.base.ts`.

If you would like to keep the absolute paths, but set it to a subdirectory instead of the root, you can change the value instead of removing it.

---

## License

Starbase is free, open source software. Please build awesome things with it. You can buy me a beer next time you're in Boston, star the project and tell a friend, or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!
