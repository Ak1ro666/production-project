import type { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildCssLoader } from "./loaders/build-css-loader";
import { buildSvgLoader } from "./loaders/build-svg-loader";
// import reactRefreshBabel from "react-refresh/babel";

export function buildRules(isDev: boolean): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgLoader = buildSvgLoader();

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  // const babelPlugins = [
  //   "i18next-extract",
  //   {
  //     locales: ["ru", "en"],
  //     keyAsDefaultValue: true,
  //   },
  // ];

  // if (isDev) {
  //   babelPlugins.push(reactRefreshBabel);
  // }

  // const babelLoader = {
  //   test: /\.(js|jsx|ts|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: "babel-loader",
  //     options: {
  //       presets: [
  //         "@babel/preset-env",
  //         "@babel/preset-typescript",
  //         [
  //           "@babel/preset-react",
  //           {
  //             runtime: "automatic",
  //             development: isDev,
  //           },
  //         ],
  //       ],
  //       plugins: babelPlugins.filter(Boolean),
  //     },
  //   },
  // };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}

/* typescriptLoader - после babel loader */
