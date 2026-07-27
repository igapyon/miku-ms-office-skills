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
  "miku-docx2md-1.2.1.jar",
  "miku-docx2md-1.2.1.mjs",
  "miku-md2docx-1.1.0.mjs",
  "miku-md2docx-java-1.1.0.jar",
  "miku-md2pptx-0.7.0.mjs",
  "miku-md2pptx-java-0.7.0.jar",
  "miku-md2xlsx-0.10.0.mjs",
  "miku-md2xlsx-java-0.10.0.jar",
  "miku-pptx2md-0.5.1.jar",
  "miku-pptx2md-0.5.1.mjs",
  "miku-xlsx2md-1.3.0.jar",
  "miku-xlsx2md-1.3.0.mjs"
];
const cliMjsFiles = new Set([
  "miku-xlsx2md-1.3.0.mjs",
  "miku-docx2md-1.2.1.mjs",
  "miku-pptx2md-0.5.1.mjs",
  "miku-md2docx-1.1.0.mjs",
  "miku-md2pptx-0.7.0.mjs",
  "miku-md2xlsx-0.10.0.mjs"
]);

const conversionExtensions = new Map([
  ["miku-md2xlsx-0.10.0.mjs", "xlsx"],
  ["miku-md2xlsx-java-0.10.0.jar", "xlsx"],
  ["miku-md2docx-1.1.0.mjs", "docx"],
  ["miku-md2docx-java-1.1.0.jar", "docx"],
  ["miku-md2pptx-0.7.0.mjs", "pptx"],
  ["miku-md2pptx-java-0.7.0.jar", "pptx"]
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

  const conversionInput = path.resolve(isolatedRoot, "runtime-smoke.md");
  fs.writeFileSync(
    conversionInput,
    "# Runtime Smoke\n\n| Name | Value |\n| --- | ---: |\n| Alpha | 1 |\n",
    "utf8"
  );

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

    const outputExtension = conversionExtensions.get(runtimeFile);
    if (outputExtension) {
      const outputPath = path.resolve(
        isolatedRoot,
        `${runtimeFile}.${outputExtension}`
      );
      const command = runtimeFile.endsWith(".jar") ? "java" : "node";
      const args = runtimeFile.endsWith(".jar")
        ? ["-jar", runtimePath, conversionInput, "--out", outputPath]
        : [runtimePath, conversionInput, "--out", outputPath];
      execFileSync(command, args, {
        cwd: isolatedRoot,
        encoding: "utf8"
      });
      assert.equal(fs.existsSync(outputPath), true);
      assert.deepEqual(
        fs.readFileSync(outputPath).subarray(0, 2),
        Buffer.from("PK"),
        `${runtimeFile} did not produce an Office ZIP package`
      );
    }
  }
});
