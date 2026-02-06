# Starbase

Welcome aboard. Here's what you need to know.

## Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm run format`  | Run Prettier                         |

## Project structure

```
src/
  lib/
    queries/    # React Query options, organized by API domain
    theme/      # Tailwind CSS and theme config
    utils/      # Utility functions (cn, darkMode, etc.)
  ui/
    atoms/      # Smallest building blocks (Button, Link, Code)
    molecules/  # Functional groups of atoms (DarkModeToggle, PageHeader)
    organisms/  # Larger composed sections
    templates/  # Page-level layout structures
  routes/       # TanStack Router file-based routes
```

Components follow [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/). Imports use path aliases -- `from 'atoms/Button'`, not relative paths.

## CLAUDE.md

Start here. It's the source of truth for all conventions, patterns, and architectural decisions. It's also what makes [Claude Code](https://docs.anthropic.com/en/docs/claude-code) work well with this project -- read it, build on it, evolve it.

## Claude Code commands

- **`/audit`** -- Scan the codebase for drift against CLAUDE.md conventions
- **`/review`** -- Review current branch changes against CLAUDE.md

## Learn more

- [Starbase on GitHub](https://github.com/bstaruk/starbase) -- full docs, history, and mission
- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) -- the component methodology
- [Claude Code docs](https://docs.anthropic.com/en/docs/claude-code) -- getting the most out of the AI workflow
