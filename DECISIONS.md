---
purpose: ai-agent-decisions
read_when:
  - before_starting_work
  - when_making_decision
  - when_looping_or_repeating_work
update_when:
  - important_decision_is_made
  - option_is_rejected
  - work_is_deferred
---

# Decisions

This file records important decisions for the AI agent.
Read this before making or revisiting decisions, especially when the work seems to loop.

## 2026-06-28: Aggregate skill over Office converter family

理由:
This repository is not a single-product `-skills` companion. It is an aggregate
Agent Skill for selecting among the miku Microsoft Office and Markdown converter
family.

影響:
`SKILL.md` stays lean and routes to reference files such as `tool-map.md`,
`runtime-policy.md`, and `upstreams.md`. Conversion behavior remains owned by
the upstream miku converter repositories.

## 2026-06-28: Runtime artifacts are not bundled yet

理由:
The initial skeleton created only `skills/igapyon-miku-ms-office/runtime/` with
`.gitkeep`. No `.mjs` or `.jar` runtime artifacts have been placed yet.

影響:
The current skill must remain handoff-only for execution until upstream release
versions are pinned and runtime artifacts are added.

## Harness Operations Decisions

Use this section for reusable decisions about build/test/package/comparison/roundtrip harness execution. Do not paste full failure logs here.

### 2026-06-28: Build bundle after tests

- Context: The release bundle tests generate and inspect bundle contents.
- Decision: Use `npm test` first for fast validation, then `npm run build` to regenerate and verify the release zip.
- Reason: This keeps installable bundle shape and zip contents aligned with current skill files.
- Next time: Run `npm test`, then `npm run build` after changing skill files, tests, or bundle scripts.
