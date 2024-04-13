# starbase

This project was bootstrapped by [Starbase v4](https://github.com/bstaruk/starbase). The details below are unbranded so you can quickly swap out the title & intro.

---

## Installation

To get started, ensure you are using a compatible version of Node, then install the project dependencies:

```bash
nvm use
npm install
```

Reference `.nvmrc` (used by [nvm](https://github.com/nvm-sh/nvm)) for the suggested version of Node.

## Usage

### Developing Locally

We use [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to monitor changes and serve the project locally.

After running `npm run dev` in the project root, `src` will be served at [http://localhost:3000](http://localhost:3000). Any changes made to code in `src` will trigger recompilation of the project, refreshing your browser to display the latest updates.

```bash
npm run dev
```

### Building for Production

Use `npm run build` in the project root to run a production build.

Production builds compile & minify project assets into `/dist` for deployment.

```bash
npm run build
```

