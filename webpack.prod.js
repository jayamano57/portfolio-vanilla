const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const clientConfig = merge(common, {
  mode: "production",
  target: "web",
  entry: { main: "./src/js/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contentHash].bundle.js"
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
});
const serverConfig = {
  mode: "production",
  target: "node",
  entry: { server: "./server.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  },
  node: {
    __dirname: false
  }
};

module.exports = [clientConfig, serverConfig];
