import { resolve } from "node:path";

import { build } from "esbuild";
import { deleteAsync } from "del";

const src = resolve("src");
await deleteAsync([resolve("dist")]);

await Promise.all([
  build({
    platform: "node",
    bundle: true,
    entryPoints: [resolve(src, "index.ts")],
    external: [
      "@babel/core",
      "babel-preset-solid",
      "@babel/preset-typescript",
    ],
    target: "es2021",
    outdir: "dist",
    outExtension: { ".js": ".cjs" },
    format: "cjs",
    sourcemap: true,
  }),
  
  build({
    platform: "node",
    bundle: true,
    entryPoints: [resolve(src, "index.ts")],
    external: [
      "@babel/core",
      "babel-preset-solid",
      "@babel/preset-typescript",
    ],
    target: "es2021",
    outdir: "dist",
    outExtension: { ".js": ".mjs" },
    format: "esm",
    sourcemap: true,
  })
])