# Runtime Policy

Current maturity: bundled-runtime execution for the listed runtime artifacts,
with handoff behavior for missing or unsupported execution paths.

This skill is AI-oriented but not AI-dependent. The normal use case is to
produce Markdown that generative AI or an AI agent can consume quickly, but the
conversion step itself is a local CLI operation and must not call an LLM, AI
API, or network service.

Office-to-Markdown execution is text-focused. Treat images, shapes, charts, and
other visual content as unsupported or extremely limited unless the selected
upstream runtime explicitly documents support for that content type.

Bundled runtime anchors are recorded in [upstreams.md](upstreams.md). Treat an
artifact as CLI-executable only when it is listed as a CLI artifact below and
is actually present under `runtime/`. Do not use `*-runtime-*.mjs` files as CLI
commands.

## Runtime Lookup

Check `runtime/` before attempting CLI execution.

Runtime execution requires a local Node.js or Java runtime depending on the
selected artifact. Once the artifact is bundled locally, do not require network
access for normal conversion.

Bundled CLI artifact patterns:

- `miku-xlsx2md-<version>.mjs`
- `miku-docx2md-<version>.mjs`
- `miku-pptx2md-<version>.mjs`
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

Node.js CLI artifacts:

- `miku-xlsx2md-1.3.0.mjs`
- `miku-docx2md-1.2.1.mjs`
- `miku-pptx2md-0.5.1.mjs`
- `miku-md2xlsx-0.6.6.mjs`
- `miku-md2docx-0.9.2.mjs`
- `miku-md2pptx-0.2.2.mjs`

Java CLI artifacts:

- `miku-xlsx2md-1.3.0.jar`
- `miku-docx2md-1.2.1.jar`
- `miku-pptx2md-0.5.1.jar`
- `miku-md2xlsx-java-0.6.5.jar`
- `miku-md2docx-java-0.9.1.jar`
- `miku-md2pptx-java-0.2.3.jar`

## Backend Selection

- Use `tool-map.md` to select the converter direction before selecting a
  backend.
- If the user asks for Java, jar, Maven, or a Java-only environment, use the
  Java runtime for the selected converter.
- If the user asks for Node.js, JavaScript, browser-compatible runtime behavior,
  or `.mjs`, use a Node.js CLI artifact when one is bundled for the selected
  converter. Do not use `*-runtime-*.mjs` files as CLI commands.
- If the user does not specify a backend, prefer the bundled Node.js CLI
  artifact for the selected converter. Use Java only when the user requests it
  or when a Node.js CLI artifact is unavailable.

## Execution Rules

- `*-only` user requests must not silently fall back to another backend.
- If the requested `*-only` backend is missing, stop and report the missing
  runtime instead of trying the other backend.
- Office-to-Markdown converters may use `.xlsx`, `.docx`, and `.pptx` input
  extensions to select the Markdown converter direction.
- Markdown input must not be used to infer a Markdown-to-Office target. Require
  an explicit output extension or target option such as `.xlsx`, `.docx`, or
  `.pptx`.
- Treat Markdown-to-Office conversion as experimental generation support. Do
  not present it as layout-faithful Office authoring.
- Prefer a single ordinary output file for normal conversion. Metadata outputs,
  summaries, manifests, diagnostics files, and image/asset exports should be
  opt-in when the upstream CLI supports them.
- For normal conversion, pass only the input path plus the primary `--out`
  option when that converter uses `--out`. Do not add optional extra-output
  flags unless the user explicitly asks for those artifacts.
- Preserve stdout, stderr, exit code, and output artifact paths in the final
  report.
- Write scratch outputs under `workplace/` unless the user gives an explicit
  output path.
- Do not overwrite input Office or Markdown files unless the user explicitly
  asks for in-place behavior and the upstream tool supports it.

## Normal Conversion Output Policy

Normal conversion means the user asked only to convert between Office and
Markdown, without asking for diagnostic, summary, archive, batch/directory, or
extracted asset artifacts.

This policy applies to both bundled Node.js CLI artifacts and bundled Java CLI
artifacts. Backend choice must not change whether extra output artifacts are
opt-in.

Use only the primary output for these normal conversions:

| Direction | Primary output | Extra outputs that require explicit user request |
| --- | --- | --- |
| `.xlsx` to Markdown | `--out <file>.md` | `--zip`, `--summary`, Java directory conversion options, shape-detail/debug-style exports |
| `.docx` to Markdown | `--out <file>.md` | `--summary`, `--summary-out`, `--assets-dir`, `--debug`, Java batch/directory conversion options, verbose diagnostics |
| `.pptx` to Markdown | `--out <file>.md` | `--summary`, `--summary-out`, `--summary-json-out`, `--assets-dir`, `--debug`, verbose diagnostics |
| Markdown to `.xlsx` | `--out <file>.xlsx` | no separate artifact output by default |
| Markdown to `.docx` | `--out <file>.docx` | `--summary`, `--summary-out`, verbose diagnostics |
| Markdown to `.pptx` | `--out <file>.pptx` | no separate artifact output by default |

Formatting and content-shaping options such as sheet mode, title, notes, table
style, or encoding may be used only when they are needed to satisfy the user's
requested output. They are not separate artifact outputs.

## Handoff Shape

When local execution is not possible, return:

- selected upstream tool
- upstream repository URL
- required input path
- intended output path
- missing runtime artifact or missing CLI contract
- next action needed from the human or upstream project
