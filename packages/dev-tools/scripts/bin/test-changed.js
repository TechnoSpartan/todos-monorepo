// scripts/bin/test-changed.js
import { execSync } from "child_process";
import fs from "fs";

// Detecta archivos de test modificados
const changedFiles = execSync(
  "git diff --name-only --diff-filter=ACMRTUXB HEAD",
)
  .toString()
  .split("\n")
  .filter(
    (file) =>
      file.match(/\.(test|spec)\.(js|ts|jsx|tsx)$/) && fs.existsSync(file),
  );

if (changedFiles.length === 0) {
  console.log("✅ No hay test modificados.");
  process.exit(0);
}

// Ejecuta tests con Vitest
execSync(`vitest run ${changedFiles.join(" ")}`, { stdio: "inherit" });
