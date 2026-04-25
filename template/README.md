# Starbase

**A Claude-first front-end launchpad.**

Welcome aboard. Here's everything you need to fly.

## Liftoff

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm run format`  | Run Prettier                         |

Open [http://localhost:3000](http://localhost:3000) and start building.

## Star Chart

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

Components follow [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/). Imports use path aliases and barrel files (`from 'atoms'`, not relative paths). See `CLAUDE.md` for the full convention guide.

## Mission Control

`CLAUDE.md` is the source of truth for all conventions, patterns, and architectural decisions. It's also what makes this a Claude-first project: [Claude Code](https://docs.anthropic.com/en/docs/claude-code) reads it, learns your preferences, and generates code that matches your style.

Start here. Read it. Build on it. Evolve it.

## Comms

Starbase ships with custom [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/tutorials#create-custom-slash-commands):

- **`/audit`**: Scan the codebase for drift against CLAUDE.md conventions
- **`/review`**: Review current branch changes against CLAUDE.md
- **`/update-deps`**: Update dependencies safely with Vite-alignment awareness

## Learn More

- [Starbase on GitHub](https://github.com/bstaruk/starbase): full docs, architecture, and mission briefing
- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/): the component methodology
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code): your AI co-pilot
