const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;
const path = require('path');
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  console.log(env)
  const envConfig = require(`./compilers/${
    env.mode === "uat" ? "production" : env.mode || "development"
  }.js`)(env);
  // entry: {
  //   main: "./src/index.ts",
  //   brain: "./src/brain.ts",
  // },
  // output: {
  //   // filename: '[name].js',
  //   // path: path.resolve(__dirname, 'dist'),
  //   publicPath: env.mode === "development" ? "http://localhost:8080/" : "https://react-host-nine.vercel.app/",
  // },

  // resolve: {
  //   extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  // },

  // devServer: {
  //   port: 8080,
  //   historyApiFallback: true,
  // },

  // module: {
  //   rules: [
  //     {
  //       test: /\.m?js/,
  //       type: "javascript/auto",
  //       resolve: {
  //         fullySpecified: false,
  //       },
  //     },
  //     {
  //       test: /\.(css|s[ac]ss)$/i,
  //       use: ["style-loader", "css-loader", "postcss-loader"],
  //     },
  //     {
  //       test: /\.(ts|tsx|js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //       },
  //     },
  //   ],
  // },

  envConfig.plugins = [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote@http://localhost:8081/_next/static/chunks/remoteEntry.js"
      },
      exposes: {
        
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "/skins/rxc-" + (env.brand || "default") + ".css",
      chunkFilename: "[id].css",
    }),

    // See the reference
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      "process.env.CURRENT_MODE": JSON.stringify(env.mode),
      "process.env.CURRENT_BRAND": JSON.stringify(env.brand),
      "process.env.DEV": env.mode === "development" ? true : false,
    }),

    new webpack.ProvidePlugin({
      React: "react",
    }),
    new Dotenv()
  ]
  if (
    env.mode == "production" ||
    env.mode == "uat" ||
    env.mode == "standalone"
  ) {
    envConfig.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    );
  }

  if (env.mode === "production" || env.mode === "uat") {
    envConfig.plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: "static",
      })
    );
  }
  return envConfig;
};
