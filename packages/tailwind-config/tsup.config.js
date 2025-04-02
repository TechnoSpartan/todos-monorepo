// tsup.config.js
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.js"],
  format: ["esm", "cjs"],
  outExtension({ format }) {
    return {
      js: format === "esm" ? ".js" : ".cjs",
    };
  },
  outDir: "dist",
  clean: true,
  dts: false,
  splitting: false,
  target: "node18",
});
