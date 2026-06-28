# Runtime Policy

Initial maturity: handoff-only with prepared runtime directories.

## Runtime Lookup

Check `runtime/` before attempting CLI execution.

Expected future artifact patterns:

- `miku-xlsx2md-<version>.mjs`
- `miku-docx2md-<version>.mjs`
- `miku-pptx2md-<version>.mjs`
- `miku-md2xlsx-<version>.mjs`
- `miku-md2docx-<version>.mjs`
- `miku-md2pptx-<version>.mjs`
- `miku-xlsx2md-java-<version>.jar`
- `miku-docx2md-java-<version>.jar`
- `miku-pptx2md-java-<version>.jar`
- `miku-md2xlsx-java-<version>.jar`
- `miku-md2docx-java-<version>.jar`
- `miku-md2pptx-java-<version>.jar`

Do not invent runtime artifact names during execution. If a file is absent,
report the missing artifact and stay in handoff-only mode.

## Execution Rules

- `*-only` user requests must not silently fall back to another backend.
- Preserve stdout, stderr, exit code, and output artifact paths in the final
  report.
- Write scratch outputs under `workplace/` unless the user gives an explicit
  output path.
- Do not overwrite input Office or Markdown files unless the user explicitly
  asks for in-place behavior and the upstream tool supports it.

## Handoff Shape

When local execution is not possible, return:

- selected upstream tool
- upstream repository URL
- required input path
- intended output path
- missing runtime artifact or missing CLI contract
- next action needed from the human or upstream project
