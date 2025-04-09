// packages/dev-tools/git-hooks/bin/codespartan-hooks.js
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const HUSKY_DIR = path.resolve(process.cwd(), ".husky");
const ROOT = process.cwd();
const DEV_TOOLS_DIR = path.resolve("packages", "dev-tools");

const HOOKS = {
  "pre-commit": `npx lint-staged`,
  "commit-msg": `npx --no -- commitlint --edit "$1"`,
  "prepare-commit-msg": `echo "prepare-commit-msg hook ready 🚧"`,
  "pre-push": `pnpm lint && pnpm test`,
  "post-merge": `pnpm install --frozen-lockfile || true`,
  "post-checkout": `echo "post-checkout hook ready 🔄"`,
  "pre-rebase": `echo "pre-rebase hook active! 🚧"`,
};

const SYMLINKS = [
  {
    source: path.join(DEV_TOOLS_DIR, "commitlint", "index.js"),
    target: path.join(ROOT, "commitlint.config.js"),
  },
  {
    source: path.join(DEV_TOOLS_DIR, "lint-staged", "index.js"),
    target: path.join(ROOT, "lint-staged.config.js"),
  },
  {
    source: path.join(DEV_TOOLS_DIR, "commitizen", "index.js"),
    target: path.join(ROOT, ".czrc"),
  },
];

console.log("⚙️  Setting up Husky hooks...");

if (!fs.existsSync(HUSKY_DIR)) {
  execSync("pnpm husky install", { stdio: "inherit" });
}

Object.entries(HOOKS).forEach(([hook, command]) => {
  const hookPath = path.join(HUSKY_DIR, hook);

  if (!fs.existsSync(hookPath)) {
    execSync(`pnpm husky add ${hookPath} "${command}"`, { stdio: "inherit" });
  } else {
    console.log(`✅ Hook already exists: ${hook}`);
  }
});

console.log("\n🔗 Vinculando archivos de configuración...");

SYMLINKS.forEach(({ source, target }) => {
  try {
    if (!fs.existsSync(target)) {
      fs.symlinkSync(source, target);
      console.log(`✅ Vinculado ${path.basename(target)} desde dev-tools`);
    } else {
      console.log(`🟡 ${path.basename(target)} ya existe, no se sobrescribe.`);
    }
  } catch (err) {
    console.error(`❌ Error creando symlink para ${target}:`, err.message);
  }
});

console.log("\n✅ Husky y configuraciones listas para usar 🧰");
