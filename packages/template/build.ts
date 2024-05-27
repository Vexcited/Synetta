import { build } from "esbuild";
import { synetta } from "esbuild-plugin-synetta";
import { rename } from "node:fs/promises";

// Building to "./dist/index.js".
await build({
  /**
   * Only one entry point is currently supported.
   * This is the file that'll be built.
   */
  entryPoints: ["src/index.tsx"],

  /**
   * Location of the file that will be generated.
   * You should move this file to : `./src-java/src/main/resources` when done building.
   * 
   * This is the file that'll be executed by the JVM.
   */
  outfile: "dist/index.js",

  /**
   * Include the `synetta` plugin to enable JSX transformation.
   */
  plugins: [synetta()],

  // Leave all those parameters like they are.
  treeShaking: true,
  target: "es2021",
  format: "esm",
  bundle: true
});

await rename("dist/index.js", "src-java/src/main/resources/index.bundle.mjs");