import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const ROOT = process.cwd();
const skillRoot = path.resolve(ROOT, "skills/igapyon-miku-ms-office");

test("tool map routes every supported Office and Markdown conversion", () => {
  const toolMap = fs.readFileSync(
    path.resolve(skillRoot, "references/tool-map.md"),
    "utf8"
  );

  for (const expected of [
    "| `.xlsx` | Markdown | `miku-xlsx2md` | `miku-xlsx2md-java` |",
    "| `.docx` | Markdown | `miku-docx2md` | `miku-docx2md-java` |",
    "| `.pptx` | Markdown | `miku-pptx2md` | `miku-pptx2md-java` |",
    "| Markdown | `.xlsx` | `miku-md2xlsx` | `miku-md2xlsx-java` |",
    "| Markdown | `.docx` | `miku-md2docx` | `miku-md2docx-java` |",
    "| Markdown | `.pptx` | `miku-md2pptx` | `miku-md2pptx-java` |"
  ]) {
    assert.ok(toolMap.includes(expected), `missing route: ${expected}`);
  }
});

test("runtime policy documents backend selection and failure behavior", () => {
  const runtimePolicy = fs.readFileSync(
    path.resolve(skillRoot, "references/runtime-policy.md"),
    "utf8"
  );

  for (const expected of [
    "## Backend Selection",
    "## Handoff Shape",
    "`*-only` user requests must not silently fall back",
    "If the requested `*-only` backend is missing",
    "Do not invent runtime artifact names",
    "Node.js CLI artifacts",
    "Do not use `*-runtime-*.mjs` files as CLI commands",
    "## Normal Conversion Output Policy",
    "This policy applies to both bundled Node.js CLI artifacts and bundled Java CLI",
    "artifacts. Backend choice must not change whether extra output artifacts are",
    "opt-in."
  ]) {
    assert.ok(runtimePolicy.includes(expected), `missing runtime policy: ${expected}`);
  }
});

test("skill rules keep normal conversion to the primary output only", () => {
  const skillMarkdown = fs.readFileSync(path.resolve(skillRoot, "SKILL.md"), "utf8");

  for (const expected of [
    "For normal conversion, request only the primary output file.",
    "Do not add",
    "summary, summary JSON, manifest, diagnostics, debug, asset, or intermediate",
    "unless the user explicitly asks for them"
  ]) {
    assert.ok(skillMarkdown.includes(expected), `missing primary-output rule: ${expected}`);
  }
});

test("runtime policy documents primary-only output for every conversion direction", () => {
  const runtimePolicy = fs.readFileSync(
    path.resolve(skillRoot, "references/runtime-policy.md"),
    "utf8"
  );

  for (const expected of [
    "| `.xlsx` to Markdown | `--out <file>.md` | `--zip`, `--summary`, Java directory conversion options, shape-detail/debug-style exports |",
    "| `.docx` to Markdown | `--out <file>.md` | `--summary`, `--summary-out`, `--assets-dir`, `--debug`, Java batch/directory conversion options, verbose diagnostics |",
    "| `.pptx` to Markdown | `--out <file>.md` | `--summary`, `--summary-out`, `--summary-json-out`, `--assets-dir`, `--debug`, verbose diagnostics |",
    "| Markdown to `.xlsx` | `--out <file>.xlsx` | no separate artifact output by default |",
    "| Markdown to `.docx` | `--out <file>.docx` | `--summary`, `--summary-out`, verbose diagnostics |",
    "| Markdown to `.pptx` | `--out <file>.pptx` | no separate artifact output by default |"
  ]) {
    assert.ok(runtimePolicy.includes(expected), `missing primary-only direction rule: ${expected}`);
  }
});

test("discovery index lists bundled runtime artifacts", () => {
  const indexJson = JSON.parse(
    fs.readFileSync(path.resolve(skillRoot, "index.json"), "utf8")
  );
  const indexedPaths = new Set(indexJson.files.map((file) => file.path));

  for (const runtimeFile of fs.readdirSync(path.resolve(skillRoot, "runtime"))) {
    assert.ok(
      indexedPaths.has(`runtime/${runtimeFile}`),
      `runtime artifact missing from index.json: ${runtimeFile}`
    );
  }
});
