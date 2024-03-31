# Starbase v4

Starbase is a production-ready static website boilerplate featuring Webpack 5, TypeScript, PostCSS & Tailwind CSS. It has been steadily maintained since [March 18, 2017](https://github.com/bstaruk/starbase/pull/1) by [Brian Staruk](https://brian.staruk.net).

Begin developing in minutes with some of the most powerful front-end technologies available in 2024, powered by a delightfully simple and fully featured developer experience.

The primary mission of Starbase is to be simple -- easily configured, extended and integrated. This also happens to make it a great platform for web developers to become more familiar with bare-metal Webpack configs, TypeScript and/or Tailwind CSS.

> "Simplicity is the ultimate sophistication."<br>_\- Leonardo da Vinci_

---

## Installation

This project was built and tested on [Node.js](https://nodejs.org) v20 LTS. It will most likely work with earlier versions as well, but I always stick to the latest LTS whenever possible and suggest you do as well!

To get started, run the command below, which will guide you through the installation process:

```bash
npx starbase@next
```

## Usage

### Developing Locally

starbase uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve up your project at [http://localhost:8080](http://localhost:8080) for streamlined and convenient development.

After running `npm run dev` in the project root, your `/src` code will be served at the url above and watched for changes. As you modify code in `/src`, the project will be recompiled and your browser will refresh to show the latest changes.

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

### Root Path

Starbase is setup to run with assets referenced via relative paths, so generated `.html` files can be opened without needing a deployment. If you would like to switch to absolute paths, you can set the `publicPath` in `/webpack/webpack.config.base.js`.

This variable should be set to `/` if the app will run at the root of a (sub)domain, or to `/folder-name` if it'll be deployed to a subfolder.

---

## License

Starbase is open source and free software. Please build awesome things with it -- commercially or personally. You can buy me a beer next time you're in Boston, star the project and tell a friend, or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!
