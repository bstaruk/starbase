# Starbase v5

Starbase is a personal, opinionated front-end starter kit built on Vite, TypeScript, React and Tailwind CSS. It's been one of my favorite passion projects for over 8 years now, and v5 is its most ambitious launch yet.

For most of its life, Starbase solved a very specific problem: you don't have to write Webpack configs from scratch. That problem doesn't really exist anymore. Vite handles bundling beautifully, and the value of a boilerplate that just wires up a build tool has dropped to near zero.

So v5 asks a different question: what if the boilerplate encoded _how you build_, not just _what you build with_?

## The mission

The hard part of modern front-end development isn't getting a dev server running. It's maintaining consistency -- naming conventions, component architecture, accessibility standards, file organization -- across a codebase that grows over time, especially when AI tooling is doing a lot of the heavy lifting.

Starbase v5 is built around [Claude Code](https://docs.anthropic.com/en/docs/claude-code). The baseline components aren't throwaway demos. They're reference implementations that Claude pattern-matches against when generating new code. Every atom, molecule, and organism is a teaching artifact. The result is an AI-assisted workflow where generated code actually looks like _your_ code.

## Stack

| Tool                                               | Role                                                           |
| -------------------------------------------------- | -------------------------------------------------------------- |
| [Vite](https://vite.dev/)                          | Build tooling and dev server                                   |
| [TypeScript](https://www.typescriptlang.org/)      | Type safety                                                    |
| [React](https://react.dev/)                        | UI library                                                     |
| [Tailwind CSS](https://tailwindcss.com/)           | Utility-first styling with a semantic `sb-` color token system |
| [TanStack Router](https://tanstack.com/router)     | File-based routing                                             |
| [TanStack React Query](https://tanstack.com/query) | Server state and data fetching                                 |
| [Motion](https://motion.dev/)                      | Animation                                                      |
| [ESLint](https://eslint.org/)                      | Linting (with react-x and react-dom plugins)                   |
| [Prettier](https://prettier.io/)                   | Formatting                                                     |

See [`template/package.json`](template/package.json) for the full dependency list.

## Architecture

Components follow [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/):

- **Atoms** -- Smallest building blocks. HTML-level primitives like buttons, inputs, links, and icons.
- **Molecules** -- Small groups of atoms functioning together as a unit. A dark mode toggle, a page header.
- **Organisms** -- Larger sections composed of molecules and atoms. Full-width layouts, distinct page sections.
- **Templates** -- Page-level layout structures that define where things go and how they relate.

Everything else is organized by concern:

```
src/
  lib/
    queries/    # React Query options, organized by API domain
    theme/      # Tailwind CSS and theme config
    utils/      # Utility functions (cn, darkMode, etc.)
  ui/
    atoms/      # Button, Link, Code, StarbaseLogo
    molecules/  # DarkModeToggle, PageHeader, Stargazers
    organisms/
    templates/
  routes/       # TanStack Router file-based routes
```

Imports use path aliases everywhere -- `from 'atoms/Button'` instead of `from '../../ui/atoms/Button'`. If you find yourself reaching for a relative path, that's a sign a new alias is needed.

## `CLAUDE.md`

This is the north star of the project. It's a living document that maps development preferences directly to codebase patterns -- accessibility standards, import conventions, component architecture, color tokens, writing style, and more.

It's not a personality dump. It's a working contract between you and Claude that says: here's how I like things done, and here are the reference implementations to prove it. When Claude generates code in a Starbase project, it builds on these conventions instead of guessing.

Read it. Evolve it. It's designed to grow with the project.

## Claude Code commands

Starbase ships with custom [Claude Code commands](https://docs.anthropic.com/en/docs/claude-code/tutorials#create-custom-slash-commands) that go beyond what a linter can catch:

- **`/audit`** -- Scans the codebase for drift against CLAUDE.md conventions. Raw color values bypassing the token system, components at the wrong atomic level, accessibility regressions, import violations. Architecture enforcement, automated.
- **`/review`** -- Reviews the current branch's changes against CLAUDE.md. Like a PR review from someone who actually read the style guide.

More commands are on the launchpad. The goal is a suite of tools that handle the mechanical parts of maintaining consistency so you can focus on building.

## Liftoff

Scaffold a new project, install dependencies, and you're in orbit:

```bash
npm create starbase my-project
cd my-project
npm install
npm run dev
```

## History

Starbase is built and maintained by [Brian Staruk](https://brian.staruk.net), a Boston-based web developer with 20+ years of experience who's never quite gotten over the urge to nerd out in public. Go Sox. That impulse is the main reason this project has been actively maintained since 2017 -- through four major versions, each one reflecting whatever felt like the right way to build for the web at the time. PostCSS, Webpack, TypeScript, Tailwind -- it picked up tools as they matured and dropped them when something better came along.

v5 is the biggest shift yet. The build tool problem is solved. The new problem is encoding taste and standards so that AI tooling can extend your work faithfully. That's the mission now.

## License

MIT
