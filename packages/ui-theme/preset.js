import config from "./src/tailwind.config.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  ...config,
  content: [],
  theme: config.theme,
  plugins: config.plugins || [],
  cssPath: path.resolve(__dirname, "./theme.css"),
};
