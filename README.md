# Starbase v4

Starbase is a production-ready static website boilerplate featuring Webpack 5, TypeScript, PostCSS & Tailwind CSS that has been designed to integrate with modern Jamstack hosting providers including Vercel, Netlify and AWS Amplify.

Begin developing in minutes with some of the most powerful front-end technologies available in 2024, powered by a delightfully simple and fully featured developer experience.

The primary mission of Starbase is to be simple -- easy to configure, extend and integrate. This also happens to make it a great platform for web developers to become more familiar with bare-metal Webpack configs, TypeScript and/or Tailwind CSS.

> "Simplicity is the ultimate sophistication."<br>_\- Leonardo da Vinci_

Starbase has been a [work in progress](https://github.com/bstaruk/starbase/releases) by [Brian Staruk](https://brian.staruk.net) since [March 18, 2017](https://github.com/bstaruk/starbase/pull/1).

---

## Installation

This project was built and tested on [Node.js](https://nodejs.org) v20 LTS. It will most likely work with earlier versions as well, but I always stick to the latest LTS whenever possible and suggest you do as well!

To get started, run the command below, which will guide you through the installation process:

```bash
npx starbase@next
```

## Usage

### Developing Locally

Starbase utilizes [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to monitor changes and serve your project locally.

After running `npm run dev` in the project root, `src` will be served at [http://localhost:8080](http://localhost:8080). Any changes made to code in `src` will trigger recompilation of the project, refreshing your browser to display the latest updates.

```
cd /path/to/starbase
npm run dev
```

### Building for Production

Use `npm run build` in your project root to run a production build.

Production builds compile & minify your assets into `/dist` for distribution and/or integration into whatever codebase you'll be using these assets in.

```
cd /path/to/starbase
npm run build
```

---

## Notes & Considerations

### Deploying to Hosting Environment

Starbase is setup to run with assets referenced via relative paths, so compiled `.html` files can be distributed and opened in a web browser without requiring a deployment to a hosting environment.

If you will be deploying your project to a hosting environment (Netlify, Vercel, etc), you will likely want to switch to absolute paths. To do this, you can set the `publicPath` in `webpack/webpack.config.base.js`.

This variable should be set to `/` if the app will run at the root of a (sub)domain, or to `/folder-name` if it'll be deployed to a subfolder.

---

## License

Starbase is free, open source software. Please build awesome things with it. You can buy me a beer next time you're in Boston, star the project and tell a friend, or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!
