# ESBuild plugin for Synetta

Synetta integration for ESBuild, based on `babel-preset-solid`.

## Getting Started

Simply add `esbuild-plugin-synetta` to your `plugins` array in the `build` function of `esbuild`.

```typescript
import { build } from "esbuild";
import { synetta } from "esbuild-plugin-synetta";

await build({
  /**
   * Only one entry point is currently supported.
   * This is the file that'll be built.
   */
  entryPoints: ["src/index.tsx"],

  /**
   * This is the file that'll be executed by the JVM.
   */
  outfile: "dist/index.js",

  /**
   * Add the `synetta` plugin to enable JSX transformation.
   */
  plugins: [synetta()],

  // Recommended options when building for a Synetta app.
  treeShaking: true,
  target: "es2021",
  format: "esm",
  bundle: true
});
```

## Development

The build process is handled manually using a [`build.ts` file](./build.ts) and [`tsx`](https://npmjs.com/package/tsx) to run it. Types are generated using [`tsc`](https://npmjs.com/package/tsc).

```bash
# In case dependencies are not installed.
pnpm install

# Build the project and output it in `dist` folder.
pnpm build
```
