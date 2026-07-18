---
purpose: ai-agent-handoff
read_when:
  - before_resuming_work
  - before_handing_off_work
  - when_context_is_missing
update_when:
  - work_is_paused
  - handoff_summary_changes
  - verification_status_changes
---

# Handoff

This file summarizes the current working state for the next human or AI agent.
Keep it concise. Do not use this as a full work log or a replacement for `TODO.md` and `DECISIONS.md`.

## Current State

- `miku-ms-office-skills` has a runtime-aware Agent Skills package.
- Current package version is `0.6.2`.
- The installable skill is `skills/igapyon-miku-ms-office/`.
- Runtime artifacts are bundled under `skills/igapyon-miku-ms-office/runtime/`.
- Runtime artifacts were refreshed on 2026-07-18 for the latest checked
  Markdown-to-Office Node.js and Java converter releases recorded in
  `skills/igapyon-miku-ms-office/references/upstreams.md`.
- `bundle/igapyon-miku-ms-office-skills-0.6.2.zip` was regenerated with the
  refreshed runtime artifacts.
- The project goal has been updated to completing a distributable runtime-aware
  Agent Skills package, not just the initial skeleton.
- Candidate upstream release versions and artifact names were recorded in
  `skills/igapyon-miku-ms-office/references/upstreams.md` on 2026-06-28.
- Runtime artifacts have been downloaded under
  `skills/igapyon-miku-ms-office/runtime/`.

## Next Action

- Confirm with desktop Word that generated DOCX files no longer open in
  Compatibility Mode.
- Review the final diff and commit when ready.

## Relevant Files

- `skills/igapyon-miku-ms-office/SKILL.md`: main skill trigger and workflow.
- `skills/igapyon-miku-ms-office/references/runtime-policy.md`: runtime and handoff policy.
- `skills/igapyon-miku-ms-office/references/upstreams.md`: upstream repository list.
- `skills/igapyon-miku-ms-office/runtime/`: bundled runtime artifacts.
- `TODO.md`: active follow-up tasks.

## Watch Outs

- `miku-indexgen` is not available in PATH, but `index.json` was refreshed with
  the installed `miku-indexgen` 1.6.2 runtime on 2026-07-18.
- Source artifacts are not bundled.
- Latest releases checked on 2026-07-18 are `miku-md2xlsx` Node/Java `v0.9.5`,
  `miku-md2docx` Node/Java `v1.0.1`, and `miku-md2pptx` Node/Java `v0.6.0`.
  All six artifacts are now bundled.
- No public upstream Issue or current upstream maintenance record identifies a
  required corrective Java DOCX/XLSX release. DOCX Java `v1.0.1` records a
  successful Node comparison and round-trip check, while XLSX Java `v0.9.5`
  records no open bounded parity item.
- Six upstream Markdown-to-Office `--help` improvement Issues were opened on
  2026-07-18 and are linked from `TODO.md`.
- Branch `devel-tiga0702xdd` contains local commit `babe65e` for the 0.6.2
  version bump and is one commit ahead of `origin/devel`; the three version
  files are not uncommitted changes.
- Representative local comparison produced valid Node and Java Office ZIP
  packages with identical entry sets. DOCX key XML matched exactly. XLSX
  worksheet blank-row/rich-text representation and PPTX default-style/XML
  formatting differences remain visible and are recorded in
  `docs/development.md`.

## Last Verification

- 2026-06-28: `npm run build`: passed after bundling runtime artifacts and adding contract tests.
- 2026-06-28: `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`: passed after bundling runtime artifacts and adding contract tests.
- 2026-07-02: `npm test`: passed after runtime artifact refresh.
- 2026-07-02: `npm run build`: passed after runtime artifact refresh.
- 2026-07-02: `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`: passed after runtime artifact refresh.
- 2026-07-18: repository state and latest Markdown-to-Office releases checked;
  six runtime Release SHA-256 values and versions matched the published assets.
- 2026-07-18: `npm test`: passed, including isolated conversions by all six
  refreshed Markdown-to-Office runtimes.
- 2026-07-18: `npm run build`: passed and regenerated the 0.6.2 release zip.
- 2026-07-18: `quick_validate.py`: passed.
