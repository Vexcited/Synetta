import { build } from "esbuild";

const entryPoints = [
  "src/index.ts",
  "src/reactive.ts",
  "src/jsx-runtime.ts",
  
  // bridge
  "src/bridge/index.ts",
  "src/bridge/scene/control/Label.ts",
  "src/bridge/scene/layout/StackPane.ts",
  "src/bridge/scene/Scene.ts",
  "src/bridge/stage/Stage.ts",
  "src/bridge/utils/JSBridge.ts"
];

await build({
  entryPoints,
  outdir: "dist",
  format: "esm",
  jsx: "preserve"
})
