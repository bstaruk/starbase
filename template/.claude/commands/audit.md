Perform an audit of this codebase. Read CLAUDE.md first — it is the source of truth for all conventions, standards, and architectural decisions. Every finding should be measured against what's documented there.

Focus: $ARGUMENTS

If a focus was provided, narrow the audit to those areas. Otherwise, audit broadly across all conventions in CLAUDE.md — accessibility, component patterns, import conventions, color tokens, etc.

For each finding, report:

- What the issue is
- Which CLAUDE.md convention it violates (or which WCAG criterion, if accessibility-related)
- Where in the code it occurs (file and line)
- A recommended fix

Group findings by severity: critical, moderate, minor. If everything passes, say so.
