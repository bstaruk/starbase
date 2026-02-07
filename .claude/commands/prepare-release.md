Prepare release notes and a version recommendation for a pull request targeting the given base branch.

Base branch: $ARGUMENTS

If a base branch was provided, use it. Otherwise, default to `main`.

## Step 1: Review

First, review the branch for merge readiness. Read and follow the instructions in `.claude/commands/review.md`, using the base branch from above.

If there are findings, report them and stop — do not generate release notes until the issues are resolved.

If the review passes clean, say so briefly and continue to Step 2.

## Step 2: Release Notes

Read the current version from the root `package.json`. Run `git log --oneline <base>...HEAD` to get all commits on this branch.

Only the `template/` and `dist/` directories ship to end users (see `files` in `package.json`). Exclude commits that only touch root-level tooling (e.g., `.claude/`, root config files, husky, CI) from both the changelog and the version bump calculation. If the only commits are root-only, report that there are no user-facing changes to release.

Output clean, copy-paste-ready markdown in this exact structure:

## Version

Recommend a semver bump based on the conventional commits since the base branch:

- **major** — if any commit contains a BREAKING CHANGE footer or uses a bang after the type/scope (e.g., feat(scope)!: description)
- **minor** — if any `feat` commits are present
- **patch** — if only `fix`, `chore`, `refactor`, `style`, `docs`, `test`, or other non-feature commits

State the current version, the recommended bump type, and the resulting next version. For example:

> **Current:** 5.0.0 → **Next:** 5.1.0 (minor)

## Summary

Write 1-3 sentences describing the overall theme of this release. What does it add, fix, or improve? Write for someone reading a PR description — concise and informative. Do not list every change here; that's what the changelog is for.

## Changelog

Group commits by conventional commit type using these sections (omit any section with no entries):

### Breaking Changes

### Features

### Fixes

### Chores

### Refactors

### Styles

### Docs

### Tests

Within each section, list one bullet per commit:

- **scope:** description

If a commit has no scope, omit the bold prefix and just list the description. Use the commit message as-is — do not editorialize or rewrite. Drop merge commits and any commits that are just version bumps unless they carry meaningful context.

If there is only one commit, skip the Changelog section entirely and just write the summary.

Output only the markdown — no preamble, no explanation, no code fences wrapping the result. The output should be ready to paste directly into a GitHub PR description.
