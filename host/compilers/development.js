const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    devtool: "source-map",
    mode: "development",
    //entry: env.mode==='development'?
    //  {rxc:'./src/index.tsx',translations:'./src/configurator/translations/languages.'+(env.brand || 'default')+'.ts'}
    //  :{rxc:'./src/index.tsx'},
    output: {
      //path: path.resolve(__dirname, 'dist'),
      //filename: 'bundle.js',
      //chunkFilename: '[id].js',
      //publicPath: ''
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      //library: ['RXC'],
      libraryTarget: "umd",
      publicPath: "",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
      hot: true,
      compress: true,
      port: 8080,
      historyApiFallback: true,
      static: ["public"],
      devMiddleware: {
        writeToDisk: false,
      },
      proxy: {
        "/AjaxSimulateOrderPromotion": {
          target: "https://uat.opsm.com.au/AjaxSimulateOrderPromotion",
          secure: false,
          changeOrigin: true,
        },
      },
      /* disableHostCheck: true, */
      /* contentBase: path.join(__dirname, "dev"), */
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
          //exclude: /node_modules/,
          use: [
            //{ loader: 'style-loader' },

            {
              loader: MiniCssExtractPlugin.loader,
              options: {},
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: "global" /* {
                        localIdentName: "[local]--[hash:base64:5]"
                      } */,
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
                    /*||
                              fs.existsSync(path.resolve(path.dirname(resourcePath),`${env.brand}.sass`))*/
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
          use: ["file-loader"],
        },
        {
          test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/skins/fonts/",
            },
          },
        },
        /*{
              test: /\.html$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: 'html-loader',
                  },
              ],
          },*/
      ],
    },
  };
};
