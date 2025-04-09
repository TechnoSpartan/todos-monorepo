// packages/ui-theme/scripts/setup-theme.js
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const cwd = process.cwd();

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
  execSync("pnpm add -D tailwindcss postcss autoprefixer @tailwindcss/vite", {
    stdio: "inherit",
  });
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
    tailwindcss: {},
    autoprefixer: {},
  },
};`,
  );
};

const createThemeCSS = () => {
  writeFile(
    "src/theme.css",
    `@import '@codespartan/ui-theme/fonts.css';
@import '@codespartan/ui-theme/theme.css';

@tailwind base;
@tailwind components;
@tailwind utilities;`,
  );
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

await installDeps();
createTailwindConfig();
createPostcssConfig();
createThemeCSS();
await patchMainEntry();
finish();
