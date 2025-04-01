// scripts/bin/build-changed.js
import { execSync } from "child_process";

// Detecta qué paquetes dentro de "packages/" tienen cambios
const changedPackages = execSync(
  "git diff --name-only --diff-filter=ACMRTUXB HEAD",
)
  .toString()
  .split("\n")
  .filter((f) => f.startsWith("packages/") && f.split("/").length > 2)
  .map((f) => f.split("/")[1])
  .filter((v, i, a) => a.indexOf(v) === i);

if (changedPackages.length === 0) {
  console.log("✅ No hay paquetes con cambios para build.");
  process.exit(0);
}

// Ejecuta build solo en los paquetes modificados
changedPackages.forEach((pkg) => {
  console.log(`📦 Build para paquete: ${pkg}`);
  execSync(`pnpm --filter ${pkg} build`, { stdio: "inherit" });
});
