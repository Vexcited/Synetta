import { build } from "esbuild";

const entryPoints = [
  "src/index.ts",
  "src/jsx-runtime.ts",
  "src/reactive.ts",
  
  // bindings
  "src/bindings/index.ts",
  "src/bindings/utils/getJavaObject.ts",
  "src/bindings/utils/JavaValue.ts",
  "src/bindings/utils/list-helpers.ts",
  "src/bindings/java/lang/Object.ts",
  "src/bindings/javafx/collections/ObservableList.ts",
  "src/bindings/javafx/scene/control/Control.ts",
  "src/bindings/javafx/scene/control/Button.ts",
  "src/bindings/javafx/scene/control/Label.ts",
  "src/bindings/javafx/scene/control/Labeled.ts",
  "src/bindings/javafx/scene/layout/Region.ts",
  "src/bindings/javafx/scene/layout/Pane.ts",
  "src/bindings/javafx/scene/layout/StackPane.ts",
  "src/bindings/javafx/scene/layout/VBox.ts",
  "src/bindings/javafx/scene/Scene.ts",
  "src/bindings/javafx/scene/Node.ts",
  "src/bindings/javafx/scene/Parent.ts",
  "src/bindings/javafx/stage/Stage.ts",
  "src/bindings/javafx/stage/Window.ts",

  // bridge
  "src/bridge/index.ts",
];

const contextsEntryPoints = [
  "src/bridge/contexts/CurrentStage.tsx",
];

const componentsEntryPoints = [
  "src/bridge/components/Button.tsx",
  "src/bridge/components/Label.tsx",
  "src/bridge/components/Scene.tsx",
  // "src/bridge/components/StackPane.tsx",
  "src/bridge/components/PrimaryStage.tsx",
  "src/bridge/components/VBox.tsx",
]

await Promise.all([
  build({
    entryPoints,
    outdir: "dist",
    format: "esm",
    jsx: "preserve"
  }),
  build({
    entryPoints: contextsEntryPoints,
    outdir: "dist/bridge/contexts",
    format: "esm",
    jsx: "preserve",
    outExtension: { ".js": ".jsx" }
  }),
  build({
    entryPoints: componentsEntryPoints,
    outdir: "dist/bridge/components",
    format: "esm",
    jsx: "preserve",
    outExtension: { ".js": ".jsx" }
  })
]);

