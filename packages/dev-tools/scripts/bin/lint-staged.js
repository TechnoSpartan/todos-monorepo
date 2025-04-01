#!/usr/bin/env node
import { execSync } from "node:child_process";

const changedFiles = execSync(
  "git diff --name-only --cached --diff-filter=ACMRTUXB HEAD",
  { encoding: "utf8" },
)
  .split("\n")
  .filter((f) => /\.(ts|js|tsx|jsx|vue)$/.test(f));

if (changedFiles.length === 0) {
  console.log("✅ No JS/TS/Vue files changed. Skipping lint.");
  process.exit(0);
}

console.log(`🔍 Linting changed files:\n${changedFiles.join("\n")}\n`);
execSync(`eslint ${changedFiles.join(" ")}`, { stdio: "inherit" });
