const path = require("path");

module.exports = {
  entry: {
    app: "./src/react-demo.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "."
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      }
    ]
  }
};
