// packages/ui-theme/scripts/setup-theme.js
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cwd = process.cwd();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const writeFile = (filename, content) => {
  const filePath = path.join(cwd, filename);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`📝 Creado: ${filename}`);
  } else {
    console.log(`✅ Ya existe: ${filename}`);
  }
};

const installDeps = () => {
  console.log("📦 Instalando dependencias necesarias...");
  execSync(
    "pnpm add -D tailwindcss postcss autoprefixer @tailwindcss/postcss",
    {
      stdio: "inherit",
    },
  );
};

const createTailwindConfig = () => {
  writeFile(
    "tailwind.config.js",
    `import { preset } from '@codespartan/ui-theme';

export default {
  presets: [preset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};`,
  );
};

const createPostcssConfig = () => {
  writeFile(
    "postcss.config.js",
    `export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};`,
  );
};

const createThemeCSS = (type = "full") => {
  const isSlim = type.toLowerCase().includes("slim");
  const themeFile = isSlim ? "theme-slim.css" : "theme-full.css";

  const content = `${!isSlim ? `@import '@codespartan/ui-theme/fonts.css';\n` : ""}
      @import '@codespartan/ui-theme/${themeFile}';
      
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      `;

  writeFile("src/theme.css", content);
};

const patchMainEntry = async () => {
  const entryPath = await ask("¿Ruta al entry point (ej: src/main.ts)? ");
  const fullPath = path.join(cwd, entryPath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, "utf-8");
    if (!content.includes("theme.css")) {
      const newContent = `import './theme.css';\n` + content;
      fs.writeFileSync(fullPath, newContent);
      console.log(`🎨 Importado theme en: ${entryPath}`);
    } else {
      console.log("✅ theme.css ya está importado");
    }
  } else {
    console.warn(`⚠️ No se ha encontrado el fichero: ${entryPath}`);
  }
};

const finish = () => {
  console.log("\n🚀 Theme aplicado correctamente.");
  rl.close();
};

const run = async () => {
  await installDeps();
  createTailwindConfig();
  createPostcssConfig();

  const themeType = (
    await ask(
      "¿Quieres la versión [full] o [slim] del theme? (default: full): ",
    )
  )
    .trim()
    .toLowerCase();

  createThemeCSS(themeType.toLowerCase().includes("slim") ? "slim" : "full");

  await patchMainEntry();
  finish();
};

await run();
