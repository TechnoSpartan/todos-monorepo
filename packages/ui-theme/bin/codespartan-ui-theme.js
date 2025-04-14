#!/usr/bin/env node
import { fileURLToPath } from "url";
import path from "path";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptPath = path.join(__dirname, "../scripts/setup-theme.js");

spawn("node", [scriptPath], {
  stdio: "inherit",
  shell: true,
});
