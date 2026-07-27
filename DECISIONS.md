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

## 2026-06-28: Initial runtime state was handoff-only

理由:
The initial skeleton created only `skills/igapyon-miku-ms-office/runtime/` with
`.gitkeep`. No `.mjs` or `.jar` runtime artifacts have been placed yet.

影響:
Superseded later on 2026-06-28 after runtime artifacts were pinned and bundled.
Do not treat this as the current execution state.

## 2026-06-28: Candidate pins required human confirmation

理由:
Latest upstream release and artifact candidates were discovered from GitHub,
but `GOAL.md` says to stop before choosing exact upstream release versions or
binary runtime artifacts without user confirmation.

影響:
Superseded later on 2026-06-28 after the selected artifacts were bundled.
`upstreams.md` now records the bundled anchors and artifact names.

## 2026-06-28: Bundle runtime artifacts only, not source artifacts

理由:
GitHub Releases include both runtime artifacts and source artifacts. The Agent
Skill needs local execution runtimes, while source artifacts are not required
for normal skill operation.

影響:
`runtime/` includes Node.js `.mjs`, Java `.jar`, and the
`miku-xlsx2md` runtime metadata JSON. It does not include `*-sources-*`
artifacts.

## Harness Operations Decisions

Use this section for reusable decisions about build/test/package/comparison/roundtrip harness execution. Do not paste full failure logs here.

### 2026-06-28: Build bundle after tests

- Context: The release bundle tests generate and inspect bundle contents.
- Decision: Use `npm test` first for fast validation, then `npm run build` to regenerate and verify the release zip.
- Reason: This keeps installable bundle shape and zip contents aligned with current skill files.
- Next time: Run `npm test`, then `npm run build` after changing skill files, tests, or bundle scripts.

### 2026-06-28: Run skill validation through python3

- Context: Executing `quick_validate.py` directly failed because the script did not have executable permission in this environment.
- Decision: Run the validator through `python3` instead of invoking the script path directly.
- Reason: The Python entrypoint validates the same skill folder without depending on the executable bit.
- Next time: Use `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`.

### 2026-06-28: Read GitHub release JSON from saved files

- Context: Direct `curl | jq` and a multi-repository shell loop produced empty or partial release extraction results while individual `curl -o` requests and later `jq` reads succeeded.
- Decision: For upstream release pinning checks, save each GitHub release JSON response to a temporary file first, then run `jq` against the saved file.
- Reason: This separates network retrieval from JSON extraction and avoids losing evidence when a pipeline or loop behaves unexpectedly.
- Next time: Use `curl -s <release-api-url> -o /tmp/<repo>-release.json`, then extract tag, published date, and asset names with `jq`.

### 2026-06-28: Scope .gitkeep bundle assertions to runtime

- Context: After runtime artifacts were bundled, `npm test` failed because the release bundle test rejected every `.gitkeep`, including intentional placeholders under `assets/` and `lib/`.
- Decision: Assert only that `runtime/.gitkeep` is absent when runtime artifacts are bundled.
- Reason: Placeholder files outside `runtime/` are part of the current starter bundle shape, while `runtime/.gitkeep` should disappear once real runtime artifacts exist.
- Next time: Keep bundle exclusion assertions scoped to the directory whose lifecycle changed.

### 2026-07-27: Refresh Markdown-to-Office Node and Java runtimes together

- Context: All six Markdown-to-Office upstreams published coordinated releases
  with DEFLATE packaging and aligned CLI-contract changes.
- Decision: Replace the Node and Java runtime pairs in one intake and keep the
  Office-to-Markdown runtime set unchanged.
- Reason: Pairwise intake preserves backend expectations and lets the isolated
  bundle smoke test exercise the same upstream generation contract.
- Version decision: Use package version `0.7.0` for this coordinated runtime
  refresh, as explicitly selected on 2026-07-27.

### 2026-07-27: Treat bounded Java parity differences as upstream bugs

- Context: Current Node/Java comparison found XLSX blank-row placement and
  PPTX theme/default-text-style differences.
- Decision: Keep the Node products as the semantic baseline and request Java
  parity fixes instead of changing the Node behavior or accepting the
  differences for the final baseline.
- Tracking:
  `miku-md2xlsx-java` Issue #9 and `miku-md2pptx-java` Issue #9, both labeled
  `bug`.

### 2026-07-27: Standardize `--version` as a bare version number

- Context: Eight bundled runtimes print only the version number, while the
  `miku-docx2md` and `miku-pptx2md` Node/Java runtimes prefix it with the tool
  name.
- Decision: The canonical `--version` output for this converter family is one
  bare version number such as `1.2.1`, without a tool or module name.
- Reason: A stable value-only form is simple to compare and matches the
  majority of the bundled runtime family.
- Follow-up: Keep the existing Node Issues `miku-docx2md` #27 and
  `miku-pptx2md` #10 and the registered Java Issues `miku-docx2md-java` #10
  and `miku-pptx2md-java` #8, then update exact-version tests after corrected
  releases are bundled.
