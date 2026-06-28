# Upstreams

This file records upstream anchors for the Microsoft Office and Markdown
converter family.

Compatibility source status:

- Checked on: 2026-06-29
- Source: GitHub Releases API, plus repository `devel` commit for repositories
  without a latest release
- State: runtime artifacts are bundled for the listed release candidates

## Candidate Compatibility Pins

| Tool | Bundled anchor | Bundled runtime artifacts | Status |
| --- | --- | --- | --- |
| `miku-xlsx2md` | release `v1.2.2`, published 2026-06-28 | `miku-xlsx2md-1.2.2.mjs` | bundled |
| `miku-docx2md` | release `v1.1.0`, published 2026-06-24 | `miku-docx2md-1.1.0.mjs` | bundled |
| `miku-pptx2md` | release `v0.4.3`, published 2026-06-28 | `miku-pptx2md-0.4.3.mjs` | bundled |
| `miku-md2xlsx` | release `v0.6.6`, published 2026-06-28 | `miku-md2xlsx-0.6.6.mjs` | bundled |
| `miku-md2docx` | release `v0.9.2`, published 2026-06-28 | `miku-md2docx-0.9.2.mjs` | bundled |
| `miku-md2pptx` | release `v0.2.2`, published 2026-06-28 | `miku-md2pptx-0.2.2.mjs` | bundled |
| `miku-xlsx2md-java` | release `v1.2.0`, published 2026-06-27 | `miku-xlsx2md-1.2.0.jar` | bundled |
| `miku-docx2md-java` | release `v1.0.0.1`, published 2026-05-14 | `miku-docx2md-1.0.0.1.jar` | bundled |
| `miku-pptx2md-java` | release `v0.4.1`, published 2026-06-27 | `miku-pptx2md-0.4.1.jar` | bundled |
| `miku-md2xlsx-java` | release `v0.6.5`, published 2026-06-27 | `miku-md2xlsx-java-0.6.5.jar` | bundled |
| `miku-md2docx-java` | release `v0.9.1`, published 2026-06-27 | `miku-md2docx-java-0.9.1.jar` | bundled |
| `miku-md2pptx-java` | release `v0.2.2`, published 2026-06-28 | `miku-md2pptx-java-0.2.2.jar` | bundled |

## Repository URLs

| Tool | Repository |
| --- | --- |
| `miku-xlsx2md` | <https://github.com/igapyon/miku-xlsx2md> |
| `miku-docx2md` | <https://github.com/igapyon/miku-docx2md> |
| `miku-pptx2md` | <https://github.com/igapyon/miku-pptx2md> |
| `miku-md2xlsx` | <https://github.com/igapyon/miku-md2xlsx> |
| `miku-md2docx` | <https://github.com/igapyon/miku-md2docx> |
| `miku-md2pptx` | <https://github.com/igapyon/miku-md2pptx> |
| `miku-xlsx2md-java` | <https://github.com/igapyon/miku-xlsx2md-java> |
| `miku-docx2md-java` | <https://github.com/igapyon/miku-docx2md-java> |
| `miku-pptx2md-java` | <https://github.com/igapyon/miku-pptx2md-java> |
| `miku-md2xlsx-java` | <https://github.com/igapyon/miku-md2xlsx-java> |
| `miku-md2docx-java` | <https://github.com/igapyon/miku-md2docx-java> |
| `miku-md2pptx-java` | <https://github.com/igapyon/miku-md2pptx-java> |

## Notes

- Treat these repositories as product owners for conversion semantics.
- Keep this skill focused on routing, runtime discovery, handoff, diagnostics,
  and packaging.
- Update this file when a new Office/Markdown converter joins the family.
- Source artifacts are not bundled. Only CLI execution artifacts are bundled
  for the selected converter releases.
