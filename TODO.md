# TODO

This file tracks the work needed to complete `miku-ms-office-skills` as a
distributable Agent Skills package.

## Completion Plan

### 1. Pin Upstream Compatibility

- [ ] Confirm the upstream repository list in
  `skills/igapyon-miku-ms-office/references/upstreams.md`.
- [ ] Pin the compatible release tag or commit for each Node.js converter:
  `miku-xlsx2md`, `miku-docx2md`, `miku-pptx2md`, `miku-md2xlsx`,
  `miku-md2docx`, and `miku-md2pptx`.
- [ ] Pin the compatible release tag or commit for each Java converter:
  `miku-xlsx2md-java`, `miku-docx2md-java`, `miku-pptx2md-java`,
  `miku-md2xlsx-java`, `miku-md2docx-java`, and `miku-md2pptx-java`.
- [ ] Record pinned versions and artifact names in
  `skills/igapyon-miku-ms-office/references/upstreams.md`.

### 2. Collect Runtime Artifacts

- [ ] Download or receive each selected Node.js `.mjs` runtime artifact.
- [ ] Download or receive each selected Java `.jar` runtime artifact.
- [ ] Place runtime artifacts under
  `skills/igapyon-miku-ms-office/runtime/`.
- [ ] Remove or keep `.gitkeep` according to whether runtime files are present.
- [ ] Verify file names match the documented runtime lookup policy.

### 3. Implement Runtime-Aware Skill Behavior

- [ ] Update `references/runtime-policy.md` from handoff-only to bundled-runtime
  execution policy where artifacts exist.
- [ ] Add or update helper code under `skills/igapyon-miku-ms-office/lib/` only
  if deterministic runtime selection needs it.
- [ ] Keep converter semantics in upstream runtimes, not in skill helper code.
- [ ] Define strict behavior for `java-only`, `node-only`, and missing-runtime
  cases.

### 4. Update Tests and Bundle Verification

- [ ] Update isolated bundle smoke tests to check each bundled runtime category.
- [ ] Ensure release bundle tests require `SKILL.md`, `index.json`, references,
  and expected runtime artifacts.
- [ ] Run `npm test`.
- [ ] Run `npm run build`.
- [ ] Validate the skill with `quick_validate.py`.

### 5. Regenerate Discovery and Documentation

- [ ] Regenerate `skills/igapyon-miku-ms-office/index.json` with `miku-indexgen`
  or the repository's documented equivalent.
- [ ] Update `README.md` with final runtime artifact and quick-start details.
- [ ] Update `docs/development.md` with checked upstream versions and final
  verification results.
- [ ] Update `DECISIONS.md` for any durable design or harness decisions.
- [ ] Update `HANDOFF.md` with final completion state.

## AI Agent Current Tasks

This section tracks active work items for AI agents.
Update this section while working. Do not rewrite unrelated TODO items.

### Tasks

- [ ] Start with Completion Plan section 1: pin upstream compatibility.
- [ ] Then collect runtime artifacts for the pinned versions.
- [ ] Then update runtime policy, helper code if needed, tests, and docs.

### Blockers

- Runtime artifact versions and download sources need user or upstream release
  confirmation.

### Retry Log

Use this section only when the same task or error is repeated.
If the same failure appears 3 times, stop and ask the user.

- なし
