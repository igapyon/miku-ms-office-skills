import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import test from "node:test";

const ROOT = process.cwd();
const repoName = "miku-ms-office-skills";
const skillName = "igapyon-miku-ms-office";

test("generated bundle works from an isolated install shape", () => {
  execFileSync("npm", ["run", "build:bundle"], {
    cwd: ROOT,
    encoding: "utf8"
  });

  const sourceBundle = path.resolve(ROOT, "bundle", repoName);
  const isolatedRoot = fs.mkdtempSync(path.join(os.tmpdir(), `${repoName}-bundle-`));
  fs.cpSync(sourceBundle, isolatedRoot, { recursive: true });

  const installedSkillRoot = path.resolve(isolatedRoot, "skills", skillName);
  assert.equal(fs.existsSync(path.resolve(installedSkillRoot, "SKILL.md")), true);
  assert.equal(fs.existsSync(path.resolve(installedSkillRoot, "index.json")), true);

  const runtimeRoot = path.resolve(installedSkillRoot, "runtime");
  if (!fs.existsSync(runtimeRoot)) {
    return;
  }

  const runtimeFiles = fs.readdirSync(runtimeRoot);
  const jar = runtimeFiles.find((name) => /^miku-.+-(?!sources-).+\.jar$/.test(name));
  const mjs = runtimeFiles.find((name) => /^miku-.+-.+\.mjs$/.test(name));

  if (jar) {
    execFileSync("java", ["-jar", path.resolve(runtimeRoot, jar), "--version"], {
      cwd: isolatedRoot,
      encoding: "utf8"
    });
  }

  if (mjs) {
    execFileSync("node", [path.resolve(runtimeRoot, mjs), "--version"], {
      cwd: isolatedRoot,
      encoding: "utf8"
    });
  }
});
