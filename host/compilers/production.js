const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log(env);
  return {
    devtool: env.sourceMap === "base64" ? "inline-source-map" : "source-map",
    mode: "production",
    output: {
      chunkFilename: "[id].chunk.js",
      path: path.join(__dirname, "../build"),
      filename: "rxc.js",
      libraryTarget: "umd",
      publicPath: "",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.t(s|sx)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.j(s|sx)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {},
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: "global",
              },
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "resolve-url-loader",
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                additionalData: (content, loaderContext) => {
                  // More information about available properties https://webpack.js.org/api/loaders/
                  const { resourcePath, rootContext } = loaderContext;
                  const relativePath = path.relative(rootContext, resourcePath);
                  const fileName = path.basename(resourcePath);
                  const toReplace =
                    fileName.indexOf("sun.") >= 0
                      ? fileName.split(".")[1]
                      : fileName.split(".")[0];
                  const brandStyle = resourcePath.replace(
                    toReplace,
                    `${env.brand}`
                  );
                  const sunStyle = resourcePath.replace(
                    toReplace,
                    `sun.${env.brand}`
                  );

                  let ret = content;
                  let isSameBrand = false;

                  if (
                    relativePath &&
                    env.brand !== "default" &&
                    fs.existsSync(brandStyle)
                  ) {
                    ret = ` \n @import '${path
                      .basename(brandStyle)
                      .replace(path.extname(brandStyle), "")}';`;
                    isSameBrand = true;
                  }

                  if (relativePath && fs.existsSync(sunStyle)) {
                    if (isSameBrand || env.brand === "default")
                      ret += ` \n .rxc-sunbox-wrapper{\n@import '${path
                        .basename(sunStyle)
                        .replace(path.extname(brandStyle), "")}'\n}`;
                    else
                      ret = ` \n .rxc-sunbox-wrapper{\n@import '${path
                        .basename(sunStyle)
                        .replace(path.extname(brandStyle), "")}'\n}`;
                  }
                  return ret;
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: {
            loader: "file-loader",
            options: {
              outputPath: "/skins/fonts",
              publicPath: "skins/fonts",
            },
          },
        },
        {
          test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
          use: {
            loader: "file-loader",
            options: {
              outputPath: "/skins/fonts",
              publicPath: "fonts",
            },
          },
        },
        {
          test: /\.((sa|sc|c)ss|(t|j)(s|sx))$/,
          enforce: "pre",
          use: ["source-map-loader"],
          exclude: [path.join(__dirname, "../node_modules")],
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            name: "rxc_scripts",
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  };
};
