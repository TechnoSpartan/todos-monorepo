// packages/dev-tools/git-hooks/setup.js

import { execSync } from "node:child_process";
import fs from "node:fs";

const HUSKY_DIR = ".husky";
const HOOKS = {
  "pre-commit": `npx lint-staged`,
  "commit-msg": `npx --no -- commitlint --edit "$1"`,
};

console.log("⚙️  Setting up Husky hooks...");

if (!fs.existsSync(HUSKY_DIR)) {
  execSync("pnpm husky install", { stdio: "inherit" });
}

Object.entries(HOOKS).forEach(([hook, command]) => {
  const hookPath = `${HUSKY_DIR}/${hook}`;

  if (!fs.existsSync(hookPath)) {
    execSync(`pnpm husky add ${hookPath} "${command}"`, { stdio: "inherit" });
  } else {
    console.log(`✅ Hook already exists: ${hook}`);
  }
});

console.log("✅ Husky hooks configured.");
