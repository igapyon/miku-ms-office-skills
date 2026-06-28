---
name: igapyon-miku-ms-office
description: Use only when the user explicitly names `igapyon-miku-ms-office`, `miku-ms-office`, `miku-ms-office-skills`, or one of the supported miku Office conversion tools (`miku-xlsx2md`, `miku-docx2md`, `miku-pptx2md`, `miku-md2xlsx`, `miku-md2docx`, `miku-md2pptx`, including `-java` variants) for miku-soft Microsoft Office and Markdown conversion workflows. Do not activate for generic Office, Word, Excel, PowerPoint, Markdown, document editing, or file conversion requests unless a supported miku tool is explicitly named.
---

# igapyon-miku-ms-office

Use this skill to select and run the appropriate miku-soft upstream CLI tool
for Microsoft Office and Markdown conversion work.

This skill is an agent workflow adapter for existing CLI commands. It does not
implement conversion logic. Use upstream runtime artifacts, documented CLIs, or
handoff instructions, and preserve upstream diagnostics and limitations.

Office-to-Markdown conversion is primarily for quick text extraction. Images,
shapes, charts, and other visual content are unsupported or only supported in
very limited ways unless the selected upstream tool explicitly documents a
specific capability.

Use this skill when the user wants miku-soft Office/Markdown conversion through
the supported converter family. Do not use it for layout-faithful conversion,
visual asset extraction, or generic Office document editing.

## Required First Checks

1. Read [index.json](index.json) first when it exists.
2. Read [references/tool-map.md](references/tool-map.md) to choose the upstream
   tool for the requested conversion.
3. Read [references/runtime-policy.md](references/runtime-policy.md) before
   attempting local execution.
4. Open only the additional reference needed for the current request.

## Core Rules

- Keep product behavior in the upstream miku tools.
- Set expectations that Office-to-Markdown output is text-focused and not a
  layout-preserving or visual-content-preserving conversion.
- Select the converter from the requested source and target formats before
  selecting a backend.
- For Office-to-Markdown input extensions `.xlsx`, `.docx`, and `.pptx`, the
  Markdown target is unambiguous.
- For Markdown input, do not infer the target Office format from `.md` alone;
  require an explicit output extension or target option.
- Prefer declared runtime artifacts under `runtime/` when CLI-backed execution
  is documented and the artifact is present.
- If runtime artifacts are absent, use handoff-only guidance and tell the user
  what artifact or upstream command is needed.
- Do not silently substitute a different converter family.
- Preserve generated Office files, Markdown outputs, extracted media,
  diagnostics, and intermediate artifacts in explicit paths.
- Use `workplace/` for scratch outputs when the user does not specify an output
  location.

## Supported Tool Families

- `miku-xlsx2md` / `miku-xlsx2md-java`
- `miku-docx2md` / `miku-docx2md-java`
- `miku-pptx2md` / `miku-pptx2md-java`
- `miku-md2xlsx` / `miku-md2xlsx-java`
- `miku-md2docx` / `miku-md2docx-java`
- `miku-md2pptx` / `miku-md2pptx-java`

## References

Read these only when needed:

- [references/tool-map.md](references/tool-map.md) for conversion routing
- [references/runtime-policy.md](references/runtime-policy.md) for runtime and
  backend behavior
- [references/upstreams.md](references/upstreams.md) for upstream anchors
- [references/INDEX.md](references/INDEX.md) for bundled reference overview
