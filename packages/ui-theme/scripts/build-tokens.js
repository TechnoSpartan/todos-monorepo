// scripts/build-tokens.js
import fs from "fs";
import path from "path";
import tokensRaw from "../src/tokens.raw.js";

/**
 * 🎨 Generador de tokens de diseño
 * Transforma `src/tokens.raw.js` en `styles/colors.css` para exponer variables CSS
 *
 * Separación de capas:
 * - src/tokens.raw.js → valores puros (#hex, rgba)
 * - src/tokens.semantic.js → referencias `var(--color-*)` para consumo en Tailwind
 *
 * Ejecutar con:
 * pnpm tokens:build
 */
const flattenTokens = (obj, prefix = "") => {
  const entries = [];

  for (const [key, value] of Object.entries(obj)) {
    const isDefault = key === "DEFAULT";
    const fullKey = isDefault ? prefix : prefix ? `${prefix}-${key}` : key;

    if (typeof value === "object") {
      entries.push(...flattenTokens(value, fullKey));
    } else {
      entries.push([fullKey, value]);
    }
  }

  return entries;
};

const toCSSVars = (obj) =>
  flattenTokens(obj)
    .map(([key, value]) => `  --color-${key}: ${value};`)
    .join("\n");

const content = `:root {\n${toCSSVars(tokensRaw)}\n}\n`;

const outDir = path.resolve("styles");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, "colors.css"), content);
console.log("🎨 styles/colors.css generado desde src/tokens.raw.js");
