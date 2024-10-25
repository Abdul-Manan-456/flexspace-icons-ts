// rollup.config.mjs
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.ts", // Entry point for your library
  output: [
    {
      file: "dist/index.js", // CommonJS format
      format: "cjs",
      exports: "named", // Ensure named exports for compatibility
    },
    {
      file: "dist/index.esm.js", // ES Module format
      format: "esm",
    },
  ],
  plugins: [
    svgr(), // Allows importing SVGs as React components
    typescript({
      tsconfig: "./tsconfig.json", // Path to your tsconfig.json
      declaration: true, // Generates .d.ts files
      declarationDir: "dist/types", // Output directory for declarations
    }),
    resolve(), // Helps Rollup find external modules
    commonjs(), // Converts CommonJS modules to ES6
  ],
  external: ["react", "react-dom"], // Exclude react and react-dom from the bundle
};
