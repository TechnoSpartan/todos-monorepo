// scripts/move-scripts.js
import fs from "fs";
import path from "path";

export default function () {
  // Check if the dist directory exists
  const distPath = path.resolve("dist");
  const scriptsPath = path.join(distPath, "scripts");

  if (!fs.existsSync(scriptsPath)) {
    fs.mkdirSync(scriptsPath);
  }

  const EXCLUDED = ["index.js", "preset.js"];

  fs.readdirSync(distPath).forEach((file) => {
    if (
      file.endsWith(".js") &&
      !EXCLUDED.includes(file) &&
      fs.statSync(path.join(distPath, file)).isFile()
    ) {
      fs.renameSync(path.join(distPath, file), path.join(scriptsPath, file));
    }
  });
}
