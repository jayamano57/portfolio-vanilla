const Dotenv = require("dotenv-webpack");
module.exports = {
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env"),
      safe: false,
      silent: false
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
