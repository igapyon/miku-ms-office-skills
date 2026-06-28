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
- The installable skill is `skills/igapyon-miku-ms-office/`.
- Runtime artifacts are bundled under `skills/igapyon-miku-ms-office/runtime/`.
- `bundle/igapyon-miku-ms-office-skills-0.1.0.zip` was generated with bundled
  runtime artifacts.
- The project goal has been updated to completing a distributable runtime-aware
  Agent Skills package, not just the initial skeleton.
- Candidate upstream release versions and artifact names were recorded in
  `skills/igapyon-miku-ms-office/references/upstreams.md` on 2026-06-28.
- Runtime artifacts have been downloaded under
  `skills/igapyon-miku-ms-office/runtime/`.

## Next Action

- Review the final diff and commit when ready.

## Relevant Files

- `skills/igapyon-miku-ms-office/SKILL.md`: main skill trigger and workflow.
- `skills/igapyon-miku-ms-office/references/runtime-policy.md`: runtime and handoff policy.
- `skills/igapyon-miku-ms-office/references/upstreams.md`: upstream repository list.
- `skills/igapyon-miku-ms-office/runtime/`: bundled runtime artifacts.
- `TODO.md`: active follow-up tasks.

## Watch Outs

- `miku-indexgen` was not available in PATH during setup, so `index.json` is a
  manually maintained generated-equivalent discovery file.
- Source artifacts are not bundled.

## Last Verification

- 2026-06-28: `npm run build`: passed after bundling runtime artifacts and adding contract tests.
- 2026-06-28: `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`: passed after bundling runtime artifacts and adding contract tests.
