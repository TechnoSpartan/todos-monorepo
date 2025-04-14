// packages/dev-tools/scripts/bin/codespartan-scripts.js

import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const commands = {
  lint: "./lint-changed.js",
  test: "./test-changed.js",
  build: "./build-changed.js",
};

const command = process.argv[2];

if (!commands[command]) {
  console.error(
    `❌ Unknown command: ${command}\nAvailable: ${Object.keys(commands).join(", ")}`,
  );
  process.exit(1);
}

const scriptPath = path.join(__dirname, commands[command]);
execSync(`node ${scriptPath}`, { stdio: "inherit" });
