# Runtime Policy

Current maturity: bundled-runtime execution for the listed runtime artifacts,
with handoff behavior for missing or unsupported execution paths.

Bundled runtime anchors are recorded in [upstreams.md](upstreams.md). Treat a
runtime as executable only when the corresponding `.mjs` or `.jar` file is
actually present under `runtime/`.

## Runtime Lookup

Check `runtime/` before attempting CLI execution.

Bundled artifact patterns:

- `miku-xlsx2md-runtime-<version>.mjs`
- `miku-docx2md-runtime-<version>.mjs`
- `miku-pptx2md-runtime-<version>.mjs`
- `miku-md2xlsx-<version>.mjs`
- `miku-md2docx-<version>.mjs`
- `miku-md2pptx-<version>.mjs`
- `miku-xlsx2md-<version>.jar`
- `miku-docx2md-<version>.jar`
- `miku-pptx2md-<version>.jar`
- `miku-md2xlsx-java-<version>.jar`
- `miku-md2docx-java-<version>.jar`
- `miku-md2pptx-java-<version>.jar`

Do not invent runtime artifact names during execution. If a file is absent,
report the missing artifact and stay in handoff-only mode.

## Bundled Runtime Set

Node.js runtimes:

- `miku-xlsx2md-runtime-1.2.0.mjs`
- `miku-docx2md-runtime-1.1.0.mjs`
- `miku-docx2md-1.1.0.mjs`
- `miku-pptx2md-runtime-0.4.1.mjs`
- `miku-md2xlsx-0.6.5.mjs`
- `miku-md2docx-0.9.1.1.mjs`
- `miku-md2pptx-0.2.1.mjs`

Java runtimes:

- `miku-xlsx2md-1.2.0.jar`
- `miku-docx2md-1.0.0.1.jar`
- `miku-pptx2md-0.4.1.jar`
- `miku-md2xlsx-java-0.6.5.jar`
- `miku-md2docx-java-0.9.1.jar`
- `miku-md2pptx-java-0.2.2.jar`

Runtime metadata:

- `miku-xlsx2md-runtime-1.2.0.json`

## Backend Selection

- Use `tool-map.md` to select the converter direction before selecting a
  backend.
- If the user asks for Java, jar, Maven, or a Java-only environment, use the
  Java runtime for the selected converter.
- If the user asks for Node.js, JavaScript, browser-compatible runtime behavior,
  or `.mjs`, use the Node.js runtime for the selected converter.
- If the user does not specify a backend, prefer Node.js for converter families
  whose Node.js runtime is bundled, because the current skill helper surface is
  JavaScript-oriented.
- For `miku-docx2md`, prefer `miku-docx2md-runtime-1.1.0.mjs` for the bundled
  runtime path. Keep `miku-docx2md-1.1.0.mjs` available as the upstream CLI
  artifact.

## Execution Rules

- `*-only` user requests must not silently fall back to another backend.
- If the requested `*-only` backend is missing, stop and report the missing
  runtime instead of trying the other backend.
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
