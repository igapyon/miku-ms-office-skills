import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import test from "node:test";

const ROOT = process.cwd();
const repoName = "miku-ms-office-skills";
const skillName = "igapyon-miku-ms-office";
const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(ROOT, "package.json"), "utf8")
);
const zipPath = path.resolve(ROOT, `bundle/igapyon-${repoName}-${packageJson.version}.zip`);
const expectedRuntimeFiles = [
  "miku-docx2md-1.0.0.1.jar",
  "miku-docx2md-1.1.0.mjs",
  "miku-docx2md-runtime-1.1.0.mjs",
  "miku-md2docx-0.9.1.1.mjs",
  "miku-md2docx-java-0.9.1.jar",
  "miku-md2pptx-0.2.1.mjs",
  "miku-md2pptx-java-0.2.2.jar",
  "miku-md2xlsx-0.6.5.mjs",
  "miku-md2xlsx-java-0.6.5.jar",
  "miku-pptx2md-0.4.1.jar",
  "miku-pptx2md-runtime-0.4.1.mjs",
  "miku-xlsx2md-1.2.0.jar",
  "miku-xlsx2md-runtime-1.2.0.json",
  "miku-xlsx2md-runtime-1.2.0.mjs"
];

test("release zip contains installable skill files and excludes development-only files", () => {
  execFileSync("npm", ["run", "build:bundle:zip"], {
    cwd: ROOT,
    encoding: "utf8"
  });

  assert.equal(fs.existsSync(zipPath), true);

  const entries = execFileSync("unzip", ["-Z1", zipPath], {
    cwd: ROOT,
    encoding: "utf8"
  }).trim().split(/\n/).filter(Boolean);

  assertIncludes(entries, `skills/${skillName}/SKILL.md`);
  assertIncludes(entries, `skills/${skillName}/index.json`);
  assertIncludes(entries, `skills/${skillName}/references/INDEX.md`);
  for (const runtimeFile of expectedRuntimeFiles) {
    assertIncludes(entries, `skills/${skillName}/runtime/${runtimeFile}`);
  }

  assert.equal(entries.some((entry) => entry.includes(".DS_Store")), false);
  assert.equal(entries.includes(`skills/${skillName}/runtime/.gitkeep`), false);
  assert.equal(entries.some((entry) => entry.startsWith("tests/")), false);
  assert.equal(entries.some((entry) => entry.startsWith("docs/")), false);
  assert.equal(entries.some((entry) => entry.startsWith("bundle/")), false);
  assert.equal(entries.some((entry) => entry.includes("node_modules/")), false);
  assert.equal(entries.some((entry) => entry.startsWith("workplace/")), false);
});

function assertIncludes(entries, expected) {
  assert.ok(entries.includes(expected), `missing zip entry: ${expected}`);
}
