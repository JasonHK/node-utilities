"use strict";

import RollupPluginTypescript from "@rollup/plugin-typescript";
import Path from "path";
import Rollup from "rollup";

const DIRECTORY_ROOT: string = Path.resolve(__dirname, "../");

const DIRECTORY_DISTRIBUTION: string = Path.resolve(DIRECTORY_ROOT, "./dist");
const DIRECTORY_SOURCE: string = Path.resolve(DIRECTORY_ROOT, "./src");

export default {
    input: Path.resolve(DIRECTORY_SOURCE, "./index.ts"),
    output: [
        {
            file: Path.resolve(DIRECTORY_DISTRIBUTION, "./variable-name.umd.js"),
            format: "umd",
            name: "VariableName",
        },
        {
            file: Path.resolve(DIRECTORY_DISTRIBUTION, "./variable-name.esm.js"),
            format: "esm",
        }
    ],
    plugins: [
        RollupPluginTypescript(),
    ],
} as Rollup.RollupOptions;
