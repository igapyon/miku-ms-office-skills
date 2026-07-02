# AI Agent Overview

`miku-ms-office-skills` is an Agent Skills package for converting Microsoft
Office files into Markdown so generative AI and AI agents can understand the
text quickly.

## Purpose

Use this repository when an AI agent needs a lightweight Markdown
representation of Office document content.

Primary direction:

- Word `.docx` to Markdown `.md`
- Excel `.xlsx` to Markdown `.md`
- PowerPoint `.pptx` to Markdown `.md`

Experimental reverse direction:

- Markdown `.md` to Word `.docx`
- Markdown `.md` to Excel `.xlsx`
- Markdown `.md` to PowerPoint `.pptx`

## Key Properties

- AI-oriented, but not AI-dependent.
- Conversion does not call an LLM or AI API.
- Runtime execution is local.
- Runtime execution does not require network access.
- Node.js or Java is required, depending on the selected bundled runtime.
- Runtime artifacts are bundled under `skills/igapyon-miku-ms-office/runtime/`.
- The skill is a workflow adapter over upstream miku-soft CLI converters.
- Conversion semantics belong to the upstream converter artifacts, not this
  skill package.

## Content Model

Office-to-Markdown conversion is optimized for quick text extraction.

The normal output is one primary Markdown file. Layout fidelity, styling,
charts, shapes, diagrams, embedded media, and visual reconstruction are not the
goal.

Some upstream converters may support limited image or asset output when
explicitly requested. Agents should not request image, asset, summary,
manifest, diagnostics, or debug outputs unless the user explicitly asks for
those artifacts.

## Agent Behavior

When using this skill:

1. Select the converter from the input and output formats.
2. Prefer Office-to-Markdown when the goal is AI understanding of an Office
   document.
3. Require an explicit target format for Markdown-to-Office conversion.
4. Use local bundled runtime artifacts when present.
5. Use `workplace/` for scratch outputs when the user does not provide an
   output path.
6. Preserve stdout, stderr, exit code, and output artifact paths in the final
   report.

## Non-Goals

Do not use this skill for:

- layout-faithful Office conversion
- Office document editing
- OCR or image understanding
- AI-based document interpretation during conversion
- preserving charts, drawings, shapes, or complex visual content
- guessing a Markdown-to-Office target format from `.md` alone
