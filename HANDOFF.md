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

- `miku-ms-office-skills` has an initial Agent Skills skeleton.
- The installable skill is `skills/igapyon-miku-ms-office/`.
- Runtime artifact directory exists, but only contains `.gitkeep`.
- `bundle/igapyon-miku-ms-office-skills-0.1.0.zip` was generated.
- The project goal has been updated to completing a distributable runtime-aware
  Agent Skills package, not just the initial skeleton.

## Next Action

- Begin `TODO.md` Completion Plan section 1: confirm upstream repositories and
  pin compatible release versions for Node.js and Java converter runtimes.

## Relevant Files

- `skills/igapyon-miku-ms-office/SKILL.md`: main skill trigger and workflow.
- `skills/igapyon-miku-ms-office/references/runtime-policy.md`: runtime and handoff policy.
- `skills/igapyon-miku-ms-office/references/upstreams.md`: upstream repository list.
- `TODO.md`: active follow-up tasks.

## Watch Outs

- Do not imply runtime artifacts are bundled until `.mjs` or `.jar` files are
  actually present under `skills/igapyon-miku-ms-office/runtime/`.
- `miku-indexgen` was not available in PATH during initial setup, so
  `index.json` is a minimal manual initial file.

## Last Verification

- `npm test`: passed.
- `npm run build`: passed.
- `python3 /Users/igapyon/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/igapyon-miku-ms-office`: passed.
