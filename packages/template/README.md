# Synetta - Template

This is a template for creating a new Synetta package.

It includes a basic structure for the package, as well as a few example files to get you started.

## Structure

### [`build.ts`](./build.ts)

This file contains the build script for the TypeScript source code (see below).

It uses `esbuild` and the `esbuild-plugin-synetta` plugin to compile the TSX code into a single JavaScript file
that'll be run by Javet in the Java application.

Will also move the compiled JavaScript file to the `src-java` directory.

### [`src`](./src/)

This directory contains the TypeScript source code for the main application.

This is where you will write your main application code, using the `synetta` package.

The `index.tsx` file is the entry point for the application, and you can add whatever you need in there.

### [`src-java`](./src-java/)

This directory contains the Java source code for the main application.
Package by default is `com.synetta.template`, feel free to update it.

Dependencies are managed using Maven, and the `pom.xml` file is included in this directory.

`App.java` is the main entry point for the application, feel free to add whatever you need
in there but make sure to not remove essential content that is required for Synetta to work.

## Scripts

### `build`

Runs the build script, located at [`./build.ts`](./build.ts).
You can read more about the build script in [the section above](#buildts).

### `start`

Runs the JavaFX application using Maven.

### `all`

Runs the `build` and `start` scripts in sequence.
