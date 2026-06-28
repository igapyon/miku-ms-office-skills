---
purpose: ai-agent-goal
read_when:
  - before_starting_work
  - before_finishing_work
  - when_scope_is_unclear
update_when:
  - goal_changes
  - done_conditions_change
  - stop_conditions_change
---

# Goal

This file defines what the AI agent is trying to accomplish.
Read this before starting work, before deciding that work is complete, and whenever scope becomes unclear.

## Objective

Complete `miku-ms-office-skills` as a distributable miku-soft Agent Skills
package for Microsoft Office and Markdown conversion workflows across the
Node.js and Java miku converter family.

The finished repository should let an AI agent explicitly activate
`igapyon-miku-ms-office`, choose the correct converter for `.xlsx`, `.docx`,
`.pptx`, or Markdown conversion, run the bundled runtime when available, and
report outputs and diagnostics without reimplementing upstream conversion
logic.

## Done

- The repository contains a valid installable Agent Skill source under
  `skills/igapyon-miku-ms-office/`.
- The skill routes `.xlsx`, `.docx`, `.pptx`, and Markdown conversion requests
  to the correct upstream miku tool family.
- Compatible upstream release versions are pinned for all supported Node.js and
  Java converter runtimes.
- Required runtime artifacts are bundled under
  `skills/igapyon-miku-ms-office/runtime/` or explicitly documented as deferred
  with a reason accepted by the user.
- Runtime lookup, backend selection, failure behavior, and handoff behavior are
  documented and tested.
- Smoke tests cover installable bundle shape and any bundled runtime artifacts.
- `skills/igapyon-miku-ms-office/index.json` is regenerated from current skill
  contents.
- `npm test`, `npm run build`, and skill validation pass.
- README, TODO, DECISIONS, and HANDOFF describe the final state accurately.

## Stop

- The next step requires choosing exact upstream release versions or binary
  runtime artifacts without user confirmation.
- A requested runtime artifact is unavailable from the expected upstream release
  location.
- A converter upstream has no compatible release artifact and completing the
  aggregate skill requires changing upstream product scope.
- `TODO.md` の `Retry Log` に同じ原因の失敗が3回記録された
