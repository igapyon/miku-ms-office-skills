# Development Notes

Checked on 2026-06-29.

## Current State

- Package version: `0.4.2`
- Runtime maturity: bundled-runtime execution for documented artifacts, with
  handoff behavior for unsupported or missing runtime paths.
- Release zip: `bundle/igapyon-miku-ms-office-skills-0.4.2.zip`

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

Source artifacts are intentionally not bundled. The skill packages only CLI
execution artifacts for the selected converter releases.

## Verification

Checked on 2026-06-28:

- `npm test`: passed
- `npm run build`: passed
- `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`: passed
