const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  console.log("CURRENT ENVIRONMENT: " + env.mode);
  const envConfig = require(`./compilers/${
    env.mode === "uat" ? "production" : env.mode || "development"
  }.js`)(env);
  if (env.mode != "production" && env.mode != "uat") {
    envConfig.plugins.push(
      new CopyPlugin({
        patterns:
          env.mode === "development"
            ? [
                {
                  from: "src/mock/" + (env.brand || "default") + ".js",
                  to: "mock/config.js",
                },
                {
                  from: "src/mock/mocker.js",
                  to: "mock/mocker.js",
                },
              ]
            : [
                {
                  from:
                    "src/mock/mock-standalone/" +
                    (env.brand || "default") +
                    ".js",
                  to: "mock/" + (env.brand || "default") + ".js",
                },
              ],
      })
    );
  }
  // if (
  //   env.mode == "production" ||
  //   env.mode == "uat" ||
  //   env.mode == "standalone"
  // ) {
  //   envConfig.plugins.push(
  //     new webpack.optimize.LimitChunkCountPlugin({
  //       maxChunks: 1,
  //     })
  //   );
  // }
  return envConfig;
};
