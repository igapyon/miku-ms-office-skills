# Development Notes

Checked on 2026-06-28.

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

The initial upstream compatibility anchor is each repository's `devel` branch.
Precise release tags and runtime artifact versions still need to be pinned.
