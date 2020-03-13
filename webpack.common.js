const Dotenv = require("dotenv-webpack");
const path = require("path");
module.exports = {
  node: {
    __dirname: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_EMAIL: JSON.stringify(process.env.NODE_EMAIL),
        NODE_PASS: JSON.stringify(process.env.NODE_PASS)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":src"]
          }
        }
      },
      {
        test: /\.(svg|png|jpg|mp4|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "media",
            esModule: false
          }
        }
      }
    ]
  }
};
