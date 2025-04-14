// scripts/validate-exports.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const pkgPath = path.join(rootDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

const checkFileExists = (relPath) => {
  const fullPath = path.join(rootDir, relPath);
  return fs.existsSync(fullPath);
};

const validateExportPaths = () => {
  let hasError = false;

  for (const [key, value] of Object.entries(pkg.exports || {})) {
    const entries = typeof value === "string" ? { default: value } : value;

    for (const [subKey, relPath] of Object.entries(entries)) {
      const tag = `${key}${subKey === "default" ? "" : ` (${subKey})`}`;
      const exists = checkFileExists(relPath);

      if (!exists) {
        console.error(`❌ Export missing: ${tag} → ${relPath}`);
        hasError = true;
      } else {
        console.log(`✅ OK: ${tag} → ${relPath}`);
      }
    }
  }

  return hasError
    ? process.exit(1)
    : console.log("🎉 Todos los exports están correctos");
};

export default validateExportPaths;
