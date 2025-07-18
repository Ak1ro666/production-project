import type { Configuration, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoader } from "../build/loaders/build-css-loader";
import { buildSvgLoader } from "../build/loaders/build-svg-loader";

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src, "node_modules");
  config.resolve!.alias = {
    ...(config.resolve?.alias || {}),
    "@": paths.src,
  };

  config.resolve?.extensions?.push(".ts", ".tsx");

  // @ts-ignore
  config?.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
  config.module?.rules.push(buildSvgLoader());
  config.module?.rules.push(buildCssLoader(true));

  return config;
};
