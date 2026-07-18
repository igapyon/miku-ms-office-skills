# Development Notes

Checked on 2026-07-18.

## Current State

- Package version: `0.6.2`
- Runtime maturity: bundled-runtime execution for documented artifacts, with
  handoff behavior for unsupported or missing runtime paths.
- Release zip: `bundle/igapyon-miku-ms-office-skills-0.6.2.zip`
- Release status: regenerated with the 2026-07-18 runtime refresh; desktop Word
  Compatibility Mode confirmation remains before final release handling.

## Initial Shape

- Repository: `miku-ms-office-skills`
- Installable skill: `igapyon-miku-ms-office`
- First delivery surface: Agent Skill package
- Initial maturity: handoff-only routing guidance with prepared runtime
  directory

## Sister Reference

No local `workplace/` sister checkout was available during initial creation.
Public `miku-indexgen-skills` and `miku-readfile-skills` repository shapes were
used as the closest references.

Adopted decisions:

- Keep repository/package/release zip name as `miku-ms-office-skills`.
- Keep installed skill directory and frontmatter name as
  `igapyon-miku-ms-office`.
- Keep `SKILL.md` lean and route detailed workflow material through references.
- Add bundle scripts, bundle zip tests, isolated bundle smoke test, and release
  asset workflow from the miku-soft Agent Skills starter.

## Upstream Anchors

Runtime artifacts are now bundled from the release anchors recorded in
`skills/igapyon-miku-ms-office/references/upstreams.md`.

On 2026-07-02, bundled runtime artifacts were refreshed for updated
Office-to-Markdown Node.js and Java converters, plus `miku-md2pptx-java`.

On 2026-07-18, the latest Markdown-to-Office releases were checked:

- `miku-md2xlsx` and `miku-md2xlsx-java`: `v0.9.5`
- `miku-md2docx` and `miku-md2docx-java`: `v1.0.1`
- `miku-md2pptx` and `miku-md2pptx-java`: `v0.6.0`

These six artifacts are bundled. Their published SHA-256 values and
`--version` output were verified before intake. The runtime policy, upstream
anchors, generated index, bundle tests, smoke tests, and repository state
documents were synchronized, and the 0.6.2 release zip was regenerated.

The earlier note that corrective Java DOCX/XLSX releases were required was not
supported by current upstream records. DOCX Java `v1.0.1` records a successful
Node comparison and Markdown-DOCX-Markdown round trip. XLSX Java `v0.9.5`
records no open bounded CLI, parser, workbook, package, fixture, or round-trip
parity item. Remaining parity verification belongs to this repository's
runtime intake checks rather than an upstream release blocker.

Representative local Node/Java intake comparison used the same Markdown input
for all six runtimes:

- All six conversions succeeded and produced valid Office ZIP packages.
- Node and Java package entry sets matched for XLSX, DOCX, and PPTX.
- DOCX `word/document.xml`, `word/styles.xml`, and `word/settings.xml` matched
  byte-for-byte.
- XLSX `xl/workbook.xml` matched, while worksheet row placement, rich-text
  representation, and styles retained Node/Java implementation differences.
- PPTX slide content was structurally aligned, while XML whitespace and the
  presentation default-text-style representation retained implementation
  differences.

These differences did not prevent runtime intake or smoke verification. Keep
them visible when broadening semantic parity fixtures.

Six `--help` improvement Issues for these Markdown-to-Office runtimes were
opened on 2026-07-18 and are linked from `TODO.md`.

Source artifacts are intentionally not bundled. The skill packages only CLI
execution artifacts for the selected converter releases.

## Verification

Checked on 2026-06-28:

- `npm test`: passed
- `npm run build`: passed
- `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`: passed

Checked on 2026-07-02:

- `npm test`: passed after runtime refresh
- `npm run build`: passed after runtime refresh
- `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`: passed after runtime refresh

Checked on 2026-07-18:

- Confirmed the repository was clean before this documentation update.
- Confirmed commit `babe65e` already contains the 0.6.2 version changes to
  `README.md`, `docs/development.md`, and `package.json`.
- Confirmed the branch is one commit ahead of `origin/devel`.
- Confirmed the latest Markdown-to-Office release versions and six open
  `--help` improvement Issues through the GitHub API.
- Verified all six Release SHA-256 values and `--version` outputs.
- Ran representative Node/Java conversions and inspected ZIP entry sets and key
  XML as recorded above.
- `npm test`: passed, including isolated conversion smoke for all six refreshed
  runtimes.
- `npm run build`: passed and regenerated
  `bundle/igapyon-miku-ms-office-skills-0.6.2.zip`.
- `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`: passed.
- Word desktop Compatibility Mode confirmation remains pending.
