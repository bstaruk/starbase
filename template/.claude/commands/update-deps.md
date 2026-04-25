Update project dependencies safely and methodically.

Focus: $ARGUMENTS

If a focus was provided, narrow the update to matching packages. Otherwise, evaluate all dependencies.

## Step 1: Inventory

Run `npm outdated` and list every package with an available update. For each, note the current version, wanted version, and latest version.

## Step 2: Categorize

Sort every outdated package into one of three tiers:

### Safe

Patch and minor bumps with no breaking changes. These can be bumped immediately.

### Hold — Vite alignment

Packages that `create-vite` pins to a specific major version in its `react-ts` template. To check the current Vite-aligned versions, scaffold a throwaway project:

```
npm create vite@latest /tmp/vite-check -- --template react-ts
cat /tmp/vite-check/package.json
rm -rf /tmp/vite-check
```

Compare the major versions of shared packages — at minimum check these:

- `vite`
- `typescript`
- `eslint`
- `@eslint/js`
- `globals`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `@vitejs/plugin-react`
- `@types/react`
- `@types/react-dom`

If a package's latest version jumps to a higher major than what `create-vite` ships, **hold it** and note the Vite-aligned version. If `create-vite` has moved to a newer major and this project hasn't yet, flag it as a potential upgrade to investigate.

### Hold — major/breaking

Any remaining major version bump not covered by Vite alignment. These require investigation before bumping. Do a quick web search to check the changelog or migration guide and note what changed.

### Special case: `@types/node`

`@types/node` should match the major version in the `engines` field of `package.json` (currently `>=24`, so `@types/node` major should be `24`). Do not bump it to a higher major just because one exists.

### Forks — adopted because upstream is incompatible

Some packages in `package.json` are intentional forks of an upstream we'd rather be on. They're tracked in **Step 4: Fork revert checks** below. Don't flag them as outdated relative to the upstream they replace — flag them when upstream becomes compatible again.

## Step 3: Apply safe updates

For all packages in the **Safe** tier:

1. Update the version ranges in `package.json`
2. Run `nvm use` (`.nvmrc` exists in this directory)
3. Run `npm install`
4. Run `npm run build`
5. Run `npm run lint`

If build or lint fails, investigate and fix. If the failure is caused by a dependency update, move that package to the Hold tier and revert its bump.

## Step 4: Fork revert checks

For each tracked fork below, run the listed check. If upstream is now compatible, propose the revert in the final report as a separate, reviewable change — do not bundle it with the safe updates above. If upstream is still incompatible, note the current upstream status in the report so the holdback stays visible.

When new forks are adopted in the future, add them to this list with the same fields: replaces, why, revert check, revert procedure, tracking link.

### `eslint-plugin-import-x` (replaces `eslint-plugin-import`)

- **Why**: latest `eslint-plugin-import` declares `peerDependencies: { eslint: '^... || ^9' }` — no ESLint 10 support. The upstream maintainer has historically been slow to adopt new ESLint majors. `import-x` is the maintained `un-ts` org fork with ESLint 10 support and identical rule semantics under the `import-x/` namespace.
- **Revert check**:
  ```
  npm view eslint-plugin-import@latest peerDependencies
  ```
  Upstream is ready when the `eslint` range includes the major version of `eslint` we currently use (check `package.json`).
- **Revert procedure** (only when upstream is ready):
  1. In `package.json`, replace `eslint-plugin-import-x` with `eslint-plugin-import` at the latest version
  2. In `eslint.config.js`:
     - Change the import: `import importPlugin from 'eslint-plugin-import'`
     - Change the `plugins` key: `'import-x'` → `'import'`
     - Change the `settings` key: `'import-x/resolver'` → `'import/resolver'`
     - Rename rule references: `import-x/order` → `import/order`, `import-x/no-duplicates` → `import/no-duplicates`
  3. Run `npm install`, then `npm run lint` to confirm rules still resolve
- **Tracking**: https://github.com/import-js/eslint-plugin-import — watch for an ESLint-10-supporting release

## Step 5: Report

Output a summary with these sections:

**Bumped** — what was updated and to which version

**Held — Vite alignment** — what was held and the Vite-aligned version vs. latest

**Held — major/breaking** — what was held and why (brief note on what the major change involves)

**Forks** — for each tracked fork: revert-eligible (with proposed change) or still-on-fork (with current upstream status)

If everything is already up to date and no fork is revert-eligible, say so.
