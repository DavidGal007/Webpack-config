const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


let mode = "development"
let target = "web"
if(process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist"
}

module.exports = {
    mode: "development",
    output: {
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext][query]"
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024 // 4kb
            }
          }
        },
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
              }
          },
          {
            test: /\.(s[ac]|c)ss$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: ""
                },
              },
                "css-loader",
                "postcss-loader",
                "sass-loader",
              ],
          },
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.wasm'],
    },
    devtool: "source-map",
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
      },
}