Review the changes on the current branch compared to the base branch.

Base branch: $ARGUMENTS

If a base branch was provided, use it. Otherwise, default to `develop`.

Start by reading CLAUDE.md — it is the source of truth for all conventions and standards. Then run `git diff <base>...HEAD` to get the full diff of this branch.

Review every change against the conventions in CLAUDE.md. Check for:

- Violations of documented patterns (imports, component structure, utils organization, etc.)
- Accessibility regressions (WCAG 2.2 AA)
- Correctness and potential bugs
- Anything that contradicts the project's stated opinions

For each finding, report:

- What the issue is
- Which convention or standard it violates
- The file and line
- A recommended fix

If everything looks good, say so. Keep the review focused on what actually changed — don't audit the entire codebase, just the diff.
