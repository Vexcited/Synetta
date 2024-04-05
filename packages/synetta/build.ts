import * as esbuild from "esbuild";

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
  "src/bridge/utils/JSBridge.ts",
  // timers polyfill
  "src/bridge/utils/timers.polyfill.ts",
  // console polyfill
  "src/bridge/utils/console.polyfill.ts",
];

await Promise.all([
  esbuild.build({
    entryPoints,
    outdir: "dist",
    format: "esm",
    jsx: "preserve"
  }),
  // esbuild.build({
  //   entryPoints,
  //   outdir: "dist",
  //   format: "cjs",
  //   jsx: "preserve",
  //   outExtension: {
  //     ".js": ".cjs",
  //   },
  // })
])