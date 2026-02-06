# CLAUDE.md

> _"Simplicity is the ultimate sophistication."_

Starbase is a personal, opinionated boilerplate — it reflects deliberately chosen tools, patterns, and workflows. Decisions should favor informed preference over broad appeal. When in doubt, optimize for productivity and consistency with the existing stack, not generality. That said, preference never trumps code quality — clean, correct, well-structured code wins every time. Opinion only applies when the choice is genuinely a matter of taste.

This file captures conventions, patterns, and lessons learned from working on this project. It is meant to evolve — when we discover a useful pattern or convention worth preserving, suggest adding it here.

## Accessibility

Inclusivity and accessibility are more important than any other aspect of the user experience. Unstyled, semantic HTML that works for everyone is better than a polished UI that excludes people.

- Target **WCAG 2.2 AA** compliance as the baseline for all work
- Use semantic HTML elements — prefer native behavior over custom JS (e.g., `<button>` over `<div onClick>`, `<nav>` over `<div class="nav">`)
- All interactive elements must be keyboard-accessible and have visible focus indicators
- Images need meaningful `alt` text (or `alt=""` for purely decorative images)
- Color alone must never be the only way to convey information — pair it with text, icons, or patterns
- Ensure sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Test with screen readers when building new interactive patterns
- When in doubt between a flashy feature and an accessible one, choose accessible

## Import Conventions

- **Always use aliased paths** — never relative imports
  - `from 'utils'` not `from '../../lib/utils/darkMode'`
  - `from 'atoms/Button'` not `from '../ui/atoms/Button'`
- If a relative path seems necessary, that means a new alias is needed — update both `tsconfig.app.json` `paths` and `vite.config.ts` `resolve.alias`
- See `tsconfig.app.json` `paths` for the current list of aliases

## Utils Organization

- All utils live in `src/lib/utils/` as individual files (e.g., `cn.ts`, `darkMode.ts`)
- Every util must be re-exported from `src/lib/utils/index.ts` so consumers import from `'utils'`
- Single-export utils use `export * from './cn'` (flat import: `import { cn } from 'utils'`)
- Multi-function utils use `export * as darkMode from './darkMode'` (namespaced import: `import { darkMode } from 'utils'`, then `darkMode.applyTheme()`)
- Pattern: create the file, add the re-export to `index.ts`, import via `'utils'`

## Queries Organization

All query/mutation options live in `src/lib/queries/`, organized by API domain — one file per domain (e.g., `github.ts`, `users.ts`, `products.ts`).

- Every domain file must be re-exported from `src/lib/queries/index.ts` as a namespace: `export * as github from './github'`
- Consumers import via the `'queries'` alias: `import { github } from 'queries'`, then `github.repoQueryOptions()`
- Domain files group all related concerns: query options, mutation options, and associated types
- One file per API domain/data source, not one file per query — this is what keeps the structure scalable
- Pattern: create the domain file, add the namespaced re-export to `index.ts`, import via `'queries'`

### Barrel Export Rules (applies to both utils and queries)

The re-export pattern depends on the content of the file:

- **Single-export files** → flat: `export * from './cn'` (import as `{ cn }`)
- **Multi-export domain files** → namespaced: `export * as github from './github'` (import as `{ github }`, then `github.thing()`)

Query domain files are always multi-export, so they always use namespaced re-exports.

## Component Patterns

Components follow [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) and live in `src/ui/`:

- **Atoms** (`atoms/`) — Smallest building blocks that can't be broken down further without losing meaning. HTML-level primitives: buttons, inputs, labels, links, icons. Each has its own distinct properties (size variants, color, font) but no dependency on other custom components.
- **Molecules** (`molecules/`) — Small groups of atoms functioning together as a single unit. A search form (label + input + button), a labeled toggle, a stat with an icon. Each molecule does one thing well — single responsibility.
- **Organisms** (`organisms/`) — Larger, distinct sections composed of molecules, atoms, or other organisms. A site header (logo + nav + search), a product grid, a comment thread. Organisms provide context — they show how smaller pieces work together in a meaningful section.
- **Templates** (`templates/`) — Page-level layout structures that arrange organisms and molecules into a content hierarchy. Focus is on spatial arrangement and content slots, not final content. Defines where things go and how they relate.

Reference: [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/table-of-contents/)

- Theme prefix: `sb-` (starbase) for all color tokens

## Libraries

Preferred libraries already in the project — reach for these before writing custom solutions or adding alternatives:

- **js-cookie** — Cookie read/write
- **usehooks-ts** — Common React hooks (prefer over writing custom hooks when a suitable one exists)
- **clsx** + **tailwind-merge** (via `cn()`) — Conditional/merged class names
- **react-icons** — Icon sets (currently using `react-icons/lu` for Lucide icons)
- **@tanstack/react-query** — Server state / data fetching
- **@tanstack/react-router** — Routing
- **motion** — Animation (import from `motion/react`)

See `package.json` for the full dependency list.

When adding a new library, always do a fresh web search for the latest docs, changelog, and community status. Do not rely on cached or training data — APIs change, packages get deprecated, and better alternatives emerge.

## Color Token System

- CSS variables defined in `src/lib/theme/tailwind.css`
- Dark mode: `.dark` class on `<html>`, with flash-prevention script in `index.html`
- Cookie: `theme-preference` with values `light`, `dark`, or absent (system default)

## Writing Style

- Never reference conversations, past edits, or memories in code comments, commit messages, or documentation
- Keep everything matter-of-fact and readable for any future developer
- No "as we discussed", "per our earlier change", or similar phrasing

## Git

- **Never commit, push, or run destructive git commands** — read-only git operations (diff, status, log, etc.) are fine
- After every code change, provide a [Conventional Commit](https://www.conventionalcommits.org/) message ready to copy+paste
  - Format: `type(scope): description` — e.g., `feat(ui): add dark mode toggle atom`
  - Common types: `feat`, `fix`, `chore`, `style`, `refactor`, `docs`, `test`
  - Keep the description concise and lowercase

## Working Together

- This file is a living document — suggest additions when we land on a convention worth preserving
- Goal is to fine-tune how we collaborate over time so good patterns stick
