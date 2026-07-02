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
  `miku-pptx2md` gained a runtime asset on release `v0.4.1`, and
  `miku-md2pptx-java` gained release `v0.2.2`; both were later refreshed by
  subsequent runtime updates.

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

- [x] Update bundled runtime artifacts to latest checked releases from
  2026-07-02 for changed Node.js and Java converters:
  `miku-xlsx2md` `v1.3.0`, `miku-docx2md` `v1.2.1`,
  `miku-pptx2md` `v0.5.1`, `miku-xlsx2md-java` `v1.3.0`,
  `miku-docx2md-java` `v1.2.1`, `miku-pptx2md-java` `v0.5.1`, and
  `miku-md2pptx-java` `v0.2.3`.
- [x] After replacing runtime artifacts, update `runtime-policy.md`,
  `upstreams.md`, `index.json`, tests, development notes, and run
  `npm test`, `npm run build`, and skill validation.
- [x] Upstream CLI release asset gap for `miku-xlsx2md` was resolved by
  bundling CLI artifact `miku-xlsx2md-1.2.3.mjs`; this artifact was later
  superseded by the 2026-07-02 runtime refresh.
- [x] Upstream CLI release asset gap for `miku-pptx2md` was resolved by
  bundling CLI artifact `miku-pptx2md-0.4.3.mjs`; this artifact was later
  superseded by the 2026-07-02 runtime refresh.
- [x] Ask the upstream projects to publish CLI `.mjs` release assets for
  `miku-xlsx2md` and `miku-pptx2md`, matching the existing `miku-docx2md`
  split between `*-runtime-<version>.mjs` and `<tool>-<version>.mjs`.
- [x] After upstream CLI assets are published, add the two CLI `.mjs` files to
  `skills/igapyon-miku-ms-office/runtime/`, update
  `references/runtime-policy.md`, `references/upstreams.md`, `index.json`, and
  the bundle content tests.
- [ ] Upstream CLI behavior request: when no output option is specified, write a
  normal output file instead of requiring stdout-oriented usage. Define the
  default output path consistently for `miku-xlsx2md`, `miku-docx2md`, and
  `miku-pptx2md`.
- [ ] Upstream CLI behavior request: keep the ordinary conversion interface to a
  single output-file option only. Do not require or default to metadata-style
  outputs such as summary files, manifests, or diagnostics files for normal
  conversion.
- [ ] Upstream CLI behavior request: make image/asset file export opt-in.
  Default behavior should not emit image files unless the user explicitly asks
  for an assets/images output option.
- [ ] Upstream CLI behavior request: standardize `--version` output across
  Node.js and Java CLI artifacts. Checked after the 2026-07-02 runtime refresh:
  `miku-docx2md` and `miku-pptx2md` print `<tool> <version>`, while
  `miku-xlsx2md`, `miku-md2xlsx`, `miku-md2docx`, and `miku-md2pptx` print only
  the version number. Ask upstream tool teams to decide and apply one
  consistent format.
- [ ] Upstream CLI help request: standardize `--help` usage examples so bundled
  single-file artifacts do not show source-tree commands such as
  `node scripts/...`, `npm run cli -- ...`, or `java -jar target/...` when they
  are executed from an Agent Skill runtime directory.
- [ ] Upstream documentation request: describe Office-to-Markdown converters as
  quick text-extraction tools. Make clear that images, shapes, charts, and other
  visual content are unsupported or extremely limited, and that visual/layout
  fidelity is not the intended use case.
- [ ] Upstream CLI behavior request: support automatic converter selection from
  the input file extension for Office-to-Markdown inputs. Treat `.xlsx`,
  `.docx`, and `.pptx` as unambiguous sources for Markdown output, and derive
  the default output path as `<input-basename>.md` when no output path is
  specified. Do not apply automatic target selection to Markdown input; require
  the user to specify the output format explicitly with an output extension or
  target option for Markdown-to-Office conversions.

### Blockers

- なし

### Retry Log

Use this section only when the same task or error is repeated.
If the same failure appears 3 times, stop and ask the user.

- なし
