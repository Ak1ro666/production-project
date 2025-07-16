import webpack from "webpack";

import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildRules } from "./buildRules";
import { buildDevServer } from "./buildDevServer";

import type { BuildOptions } from "./types/config";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, port, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildRules(isDev),
    },
    resolve: buildResolvers(options),
    devtool: isDev && "inline-source-map",
    devServer: isDev && buildDevServer(port),
  };
}
