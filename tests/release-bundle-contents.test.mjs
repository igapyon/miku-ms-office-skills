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

  assert.equal(entries.some((entry) => entry.includes(".DS_Store")), false);
  assert.equal(entries.some((entry) => entry.startsWith("tests/")), false);
  assert.equal(entries.some((entry) => entry.startsWith("docs/")), false);
  assert.equal(entries.some((entry) => entry.startsWith("bundle/")), false);
  assert.equal(entries.some((entry) => entry.includes("node_modules/")), false);
  assert.equal(entries.some((entry) => entry.startsWith("workplace/")), false);
});

function assertIncludes(entries, expected) {
  assert.ok(entries.includes(expected), `missing zip entry: ${expected}`);
}
