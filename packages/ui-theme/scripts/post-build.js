import moveTypesToTypesFolder from "./move-types.js";
import moveScriptsToScriptsFolder from "./move-scripts.js";
import validateExportPaths from "./validate-exports.js";

function PostBuild() {
  console.log("🚔 Moving types...");
  moveTypesToTypesFolder();
  console.log("🚗 Moving scrips...");
  moveScriptsToScriptsFolder();
  console.log("✅ Validating build...");
  validateExportPaths();
}

PostBuild();
