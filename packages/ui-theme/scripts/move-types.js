import fs from "fs";
import path from "path";

const removeCts = (file) => {
  if (file.endsWith(".d.cts")) {
    fs.rmSync(file, {
      force: true,
    });
  }
};

export default function () {
  const distPath = path.resolve("dist");
  const typesPath = path.join(distPath, "types");
  const tokensTypes = path.join(distPath, "tokens");

  if (!fs.existsSync(typesPath)) {
    fs.mkdirSync(typesPath);
    fs.mkdirSync(tokensTypes, { recursive: true });
  }

  fs.readdirSync(distPath).forEach((file) => {
    if (file.endsWith(".d.ts")) {
      fs.renameSync(path.join(distPath, file), path.join(typesPath, file));
    }
    removeCts(path.join(distPath, file));
  });

  fs.readdirSync(tokensTypes).forEach((file) => {
    if (file.endsWith(".d.ts")) {
      fs.renameSync(path.join(tokensTypes, file), path.join(typesPath, file));
    }
    removeCts(path.join(distPath, file));
  });
}
