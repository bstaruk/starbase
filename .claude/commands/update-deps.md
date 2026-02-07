Update dependencies across the entire project — template first, then root.

Focus: $ARGUMENTS

If a focus was provided, pass it through to both stages. Otherwise, evaluate all dependencies.

## Stage 1: Template dependencies

Change to the `template/` directory and follow the instructions in `template/.claude/commands/update-deps.md`. Apply all safe updates there first and report findings before moving on.

## Stage 2: Root dependencies

After the template stage is complete, return to the project root and apply the same tiered approach to root-level `devDependencies`.

Run `npm outdated` at the root and categorize each package:

### Safe

Patch and minor bumps — apply immediately. The root has a smaller surface (husky, commitlint, lint-staged, prettier, typescript, `@types/node`, etc.) so this is typically straightforward.

### Hold — major/breaking

Major version bumps requiring investigation. Do a quick web search for the changelog or migration guide and note what changed.

### Special case: `@types/node`

`@types/node` should match the major version in the root `engines` field, same rule as the template. Do not bump it to a higher major just because one exists.

### Apply safe updates

1. Update version ranges in the root `package.json`
2. Run `nvm use` (`.nvmrc` exists at the root)
3. Run `npm install`
4. Run `npm run build` (compiles the `create-starbase` CLI)

If the build fails, investigate and fix or revert.

## Stage 3: Final report

Combine findings from both stages into a single summary:

**Template — Bumped** / **Template — Held**

**Root — Bumped** / **Root — Held**

If everything is already up to date, say so.
