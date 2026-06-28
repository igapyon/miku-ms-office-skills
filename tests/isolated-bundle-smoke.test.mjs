import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import test from "node:test";

const ROOT = process.cwd();
const repoName = "miku-ms-office-skills";
const skillName = "igapyon-miku-ms-office";
const expectedRuntimeFiles = [
  "miku-docx2md-1.0.0.1.jar",
  "miku-docx2md-1.1.0.mjs",
  "miku-md2docx-0.9.2.mjs",
  "miku-md2docx-java-0.9.1.jar",
  "miku-md2pptx-0.2.2.mjs",
  "miku-md2pptx-java-0.2.2.jar",
  "miku-md2xlsx-0.6.6.mjs",
  "miku-md2xlsx-java-0.6.5.jar",
  "miku-pptx2md-0.4.1.jar",
  "miku-pptx2md-0.4.3.mjs",
  "miku-xlsx2md-1.2.0.jar",
  "miku-xlsx2md-1.2.3.mjs"
];
const cliMjsFiles = new Set([
  "miku-xlsx2md-1.2.3.mjs",
  "miku-docx2md-1.1.0.mjs",
  "miku-pptx2md-0.4.3.mjs",
  "miku-md2docx-0.9.2.mjs",
  "miku-md2pptx-0.2.2.mjs",
  "miku-md2xlsx-0.6.6.mjs"
]);

test("generated bundle works from an isolated install shape", () => {
  execFileSync("npm", ["run", "build:bundle"], {
    cwd: ROOT,
    encoding: "utf8"
  });

  const sourceBundle = path.resolve(ROOT, "bundle", repoName);
  const isolatedParent = fs.mkdtempSync(path.join(os.tmpdir(), `${repoName}-bundle-`));
  const isolatedRoot = path.resolve(isolatedParent, "skill-home");
  fs.mkdirSync(isolatedRoot, { recursive: true });
  fs.cpSync(sourceBundle, isolatedRoot, { recursive: true });

  const installedSkillRoot = path.resolve(isolatedRoot, "skills", skillName);
  assert.equal(fs.existsSync(path.resolve(installedSkillRoot, "SKILL.md")), true);
  assert.equal(fs.existsSync(path.resolve(installedSkillRoot, "index.json")), true);

  const runtimeRoot = path.resolve(installedSkillRoot, "runtime");
  assert.equal(fs.existsSync(runtimeRoot), true);

  const runtimeFiles = fs.readdirSync(runtimeRoot).sort();
  assert.deepEqual(runtimeFiles, expectedRuntimeFiles);

  for (const runtimeFile of runtimeFiles) {
    const runtimePath = path.resolve(runtimeRoot, runtimeFile);
    if (runtimeFile.endsWith(".jar")) {
      const output = execFileSync("java", ["-jar", runtimePath, "--version"], {
        cwd: isolatedRoot,
        encoding: "utf8"
      });
      assert.notEqual(output.trim(), "", `${runtimeFile} --version produced no output`);
    }
    if (cliMjsFiles.has(runtimeFile)) {
      const output = execFileSync("node", [runtimePath, "--version"], {
        cwd: isolatedRoot,
        encoding: "utf8"
      });
      assert.notEqual(output.trim(), "", `${runtimeFile} --version produced no output`);
    }
    if (runtimeFile.endsWith(".json")) {
      JSON.parse(fs.readFileSync(runtimePath, "utf8"));
    }
  }
});
