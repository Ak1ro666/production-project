import webpack from "webpack";
import path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

import type {
  BuildEnv,
  BuildMode,
  BuildPaths,
} from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "app", "main.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
    isDev,
  });

  return config;
};
