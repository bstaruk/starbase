# starbase

This project was bootstrapped by [Starbase v4](https://github.com/bstaruk/starbase). The details below are unbranded so you can quickly swap out the title & intro.

---

## Usage

It is recommended to use [nvm](https://github.com/nvm-sh/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows)) to manage your Node version installations. If won't use nvm, you'll need to refer to the `/.nvmrc` file to verify your version of Node is compatible with the recommended version.

### Getting Started

Start by ensuring you are running the recommended version of Node, and installing the project dependencies:

```bash
nvm use
npm install
```

---

### Developing Locally

The `dev` command will serve the project source at [http://localhost:3000](http://localhost:3000). Any changes made within `/src` will recompile the source and refresh your web browser.

```bash
npm run dev
```

### Building for Production

The `build` command will compile and minify the project source into `/dist` for integration or deployment.

```bash
npm run build
```
