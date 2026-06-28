# TODO

This file tracks the work needed to complete `miku-ms-office-skills` as a
distributable Agent Skills package.

## Completion Plan

### 1. Pin Upstream Compatibility

- [x] Confirm the upstream repository list in
  `skills/igapyon-miku-ms-office/references/upstreams.md`.
- [x] Confirm the candidate release tag or commit for each Node.js converter:
  `miku-xlsx2md`, `miku-docx2md`, `miku-pptx2md`, `miku-md2xlsx`,
  `miku-md2docx`, and `miku-md2pptx`.
- [x] Confirm the candidate release tag or commit for each Java converter:
  `miku-xlsx2md-java`, `miku-docx2md-java`, `miku-pptx2md-java`,
  `miku-md2xlsx-java`, `miku-md2docx-java`, and `miku-md2pptx-java`.
- [x] Record candidate versions and artifact names in
  `skills/igapyon-miku-ms-office/references/upstreams.md`.
- [x] Resolve deferred runtime artifacts:
  `miku-pptx2md` now has a runtime asset on release `v0.4.1`, and
  `miku-md2pptx-java` now has release `v0.2.2`.

### 2. Collect Runtime Artifacts

- [x] Download or receive each selected Node.js `.mjs` runtime artifact.
- [x] Download or receive each selected Java `.jar` runtime artifact.
- [x] Place runtime artifacts under
  `skills/igapyon-miku-ms-office/runtime/`.
- [x] Remove or keep `.gitkeep` according to whether runtime files are present.
- [x] Verify file names match the documented runtime lookup policy.

### 3. Implement Runtime-Aware Skill Behavior

- [x] Update `references/runtime-policy.md` from handoff-only to bundled-runtime
  execution policy where artifacts exist.
- [x] Add or update helper code under `skills/igapyon-miku-ms-office/lib/` only
  if deterministic runtime selection needs it.
- [x] Keep converter semantics in upstream runtimes, not in skill helper code.
- [x] Define strict behavior for `java-only`, `node-only`, and missing-runtime
  cases.

### 4. Update Tests and Bundle Verification

- [x] Update isolated bundle smoke tests to check each bundled runtime category.
- [x] Ensure release bundle tests require `SKILL.md`, `index.json`, references,
  and expected runtime artifacts.
- [x] Run `npm test`.
- [x] Run `npm run build`.
- [x] Validate the skill with `quick_validate.py`.

### 5. Regenerate Discovery and Documentation

- [x] Regenerate `skills/igapyon-miku-ms-office/index.json` with `miku-indexgen`
  or the repository's documented equivalent.
- [x] Update `README.md` with final runtime artifact and quick-start details.
- [x] Update `docs/development.md` with checked upstream versions and final
  verification results.
- [x] Update `DECISIONS.md` for any durable design or harness decisions.
- [x] Update `HANDOFF.md` with final completion state.

## AI Agent Current Tasks

This section tracks active work items for AI agents.
Update this section while working. Do not rewrite unrelated TODO items.

### Tasks

- なし

### Blockers

- なし

### Retry Log

Use this section only when the same task or error is repeated.
If the same failure appears 3 times, stop and ask the user.

- なし
