// scripts/bin/release.js
import { execSync } from "child_process";

// Usa GITHUB_TOKEN desde .env si está disponible (Node >= 20.6 lo soporta de forma nativa)
const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  console.error(
    "❌ Falta la variable de entorno GITHUB_TOKEN. Añádela a tu archivo .env.",
  );
  process.exit(1);
}

// Ejecuta release-please usando la configuración del monorepo
try {
  console.log("🚀 Generando Pull Request de release con release-please...");
  execSync(
    `release-please release-pr --config packages/dev-tools/release-please/release-please.json --token ${githubToken}`,
    {
      stdio: "inherit",
    },
  );

  console.log("📦 Publicando release si corresponde...");
  execSync(
    `release-please github-release --config packages/dev-tools/release-please/release-please.json --token ${githubToken}`,
    {
      stdio: "inherit",
    },
  );

  console.log("✅ Release process completo.");
} catch (err) {
  console.error("❌ Error ejecutando release-please:", err.message);
  process.exit(1);
}
