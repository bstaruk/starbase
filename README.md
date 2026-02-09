# Starbase

**A Claude-first front-end launchpad.**

Starbase is an opinionated front-end starter kit built on Vite, TypeScript, React, and Tailwind CSS. Claude Code sits in the co-pilot seat by design. Every convention, component, and architectural decision is shaped to make Claude generate code that actually looks like yours.

## Liftoff

```bash
npm create starbase@latest my-project
cd my-project
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You're in orbit.

## The Mission

Getting a dev server running is the easy part. Maintaining consistency as your codebase grows? That's where things get interesting, especially when AI tooling is writing a significant chunk of your code.

Starbase puts `CLAUDE.md` at the center of everything. It encodes your preferences, conventions, and architectural decisions into a format that Claude Code can pattern-match against. The baseline components double as reference implementations. Teaching artifacts. When Claude generates new code in a Starbase project, it reads the flight manual and follows the plan.

The result: an accelerator, not an autopilot. AI-assisted development where the output actually feels like _your_ codebase, not a generic suggestion from the void of space.

## Payload

| Tool                                               | Role                                                           |
| -------------------------------------------------- | -------------------------------------------------------------- |
| [Vite](https://vite.dev/)                          | Build tooling and dev server                                   |
| [TypeScript](https://www.typescriptlang.org/)      | Type safety                                                    |
| [React](https://react.dev/)                        | UI library                                                     |
| [Tailwind CSS](https://tailwindcss.com/)           | Utility-first styling with a semantic `sb-` color token system |
| [TanStack Router](https://tanstack.com/router)     | File-based routing                                             |
| [TanStack React Query](https://tanstack.com/query) | Server state and data fetching                                 |
| [Motion](https://motion.dev/)                      | Animation                                                      |
| [ESLint](https://eslint.org/)                      | Linting (with react-x, react-dom, and jsx-a11y plugins)        |
| [Prettier](https://prettier.io/)                   | Formatting                                                     |

See [`template/package.json`](template/package.json) for the full manifest.

The value lives in how these tools are wired together. `CLAUDE.md` documents the conventions. The reference components demonstrate them. ESLint enforces them mechanically. The `/audit` and `/review` skills catch the architectural stuff a linter can't reach. It's a closed loop: Claude reads the conventions, generates code that follows them, and the toolchain validates the output.

The ESLint setup is a good example of this philosophy in action. The config goes well beyond recommended defaults, pulling in nine plugins: React best practices ([react-x](https://github.com/niconiahi/eslint-plugin-react-x), [react-dom](https://github.com/niconiahi/eslint-plugin-react-dom), [react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)), accessibility ([jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)), TanStack [Router](https://tanstack.com/router) and [Query](https://tanstack.com/query) patterns, [Vite-aware refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) boundaries, and [import ordering](https://github.com/import-js/eslint-plugin-import) that understands the project's path alias structure. Atoms sort before molecules. External deps sort before internal ones. React always floats to the top. The linter knows the architecture, so it can enforce it without you thinking about it.

## Star Chart

Components follow [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/):

- **Atoms**: The smallest building blocks. Buttons, inputs, links, icons.
- **Molecules**: Small groups of atoms functioning as a unit. A dark mode toggle, a page header.
- **Organisms**: Larger sections composed of molecules and atoms. Full-width layouts, distinct page sections.
- **Templates**: Page-level layout structures that define where things go and how they relate.

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

Imports use path aliases everywhere: `from 'atoms/Button'` instead of `from '../../ui/atoms/Button'`. If you're reaching for a relative path, that's a sign a new alias is needed.

## Mission Control

`CLAUDE.md` is the north star of this project. It's a living document that maps your development preferences directly to codebase patterns: accessibility standards, import conventions, component architecture, color tokens, writing style, and more.

Think of it as a working contract between you and Claude. Here's how I like things done, and here are the reference implementations to prove it. When Claude generates code in a Starbase project, it builds on these conventions instead of guessing.

Read it. Evolve it. It's designed to grow with your project.

## Comms

Starbase ships with custom [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/tutorials#create-custom-slash-commands) that go beyond what a linter can catch:

- **`/audit`**: Scans the codebase for drift against CLAUDE.md conventions. Raw color values, misleveled components, accessibility gaps, import violations. Architecture enforcement, automated.
- **`/review`**: Reviews the current branch's changes against CLAUDE.md. Like a code review from someone who actually read the style guide.
- **`/update-deps`**: Categorizes dependency updates into safe, Vite-aligned, and major-breaking tiers. Bumps what's safe, holds what isn't, and verifies with build + lint.

The goal: a suite of tools that handle the mechanical parts of consistency so you can focus on building cool stuff.

## Learn More

- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/): the component methodology
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code): your AI co-pilot
- [Vite](https://vite.dev/guide/): the build engine
- [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview): file-based routing
- [TanStack React Query](https://tanstack.com/query/latest/docs/framework/react/overview): server state management

## History

Starbase is built and maintained by [Brian Staruk](https://brian.staruk.net), a Boston-based web developer who's been nerding out in public for over 20 years. Go Sox.

This project has been actively maintained since 2017, through four major versions. Each one reflected whatever felt like the right way to build for the web at the time. PostCSS, Webpack, TypeScript, Tailwind: tools got picked up as they matured and dropped when something better came along.

v5 is the biggest shift yet. The build tool era is over. The new frontier is encoding taste and standards so that AI tooling can extend your work faithfully. That's the mission now.

## License

MIT
