module.exports = {
  entry: "./src/js/index.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
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
