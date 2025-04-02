// scripts/bin/lint-changed.js
import { execSync } from "child_process";
import path from "path";

// Detecta archivos modificados compatibles con ESLint
const changedFiles = execSync(
  "git diff --name-only --diff-filter=ACMRTUXB HEAD",
)
  .toString()
  .split("\n")
  .filter((file) => file.match(/\.(js|ts|jsx|tsx|vue)$/));

if (changedFiles.length === 0) {
  console.log("✅ No hay archivos modificados para lint.");
  process.exit(0);
}

// Ejecuta ESLint con fix
execSync(`eslint ${changedFiles.join(" ")} --fix`, { stdio: "inherit" });
